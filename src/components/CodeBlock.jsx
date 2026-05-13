// =========================================================
// CodeBlock — code surface with line numbers, syntax-highlight
// tokens, scrollable body, and Chrome-style tabs.
//
// Two modes:
//   1. Real-code mode: caller passes `body` (multi-line string)
//      → lines are tokenized and rendered as actual text.
//   2. Placeholder mode: caller omits `body`
//      → fake colored token bars generated from a seed.
// =========================================================

// ----- Placeholder generator (legacy fake-token mode) -----
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xFFFFFFFF;
  };
}

const TOK_KINDS = ["kw", "fn", "type", "str", "num", "var", "dim", "dim", "dim"];

function makeLines(seed, count) {
  const r = rng(seed);
  const lines = [];
  for (let i = 0; i < count; i++) {
    const blank = r() < 0.08;
    if (blank) { lines.push({ indent: 0, tokens: [] }); continue; }
    const isComment = r() < 0.1;
    if (isComment) {
      lines.push({
        indent: Math.floor(r() * 3) * 16,
        tokens: [{ kind: "cmt", w: 80 + Math.floor(r() * 180) }],
      });
      continue;
    }
    const indent = Math.floor(r() * 4) * 16;
    const tokenCount = 2 + Math.floor(r() * 5);
    const tokens = [];
    for (let j = 0; j < tokenCount; j++) {
      const kind = TOK_KINDS[Math.floor(r() * TOK_KINDS.length)];
      const w = 20 + Math.floor(r() * 90);
      tokens.push({ kind, w });
    }
    lines.push({ indent, tokens });
  }
  return lines;
}

// Strip directory portion from a file path: "Assets/.../Foo.cs" → "Foo.cs"
function basename(p) {
  if (!p) return "";
  const s = String(p);
  const i = Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\"));
  return i >= 0 ? s.slice(i + 1) : s;
}

// ----- Real-text tokenizer (very small C#-ish lexer) -----
const CSHARP_KEYWORDS = new Set([
  "private", "public", "protected", "internal", "static", "readonly",
  "void", "int", "float", "double", "bool", "string", "char", "var", "object",
  "if", "else", "for", "foreach", "while", "do", "switch", "case", "default",
  "break", "continue", "return", "in", "out", "ref", "new", "this", "base",
  "null", "true", "false", "class", "struct", "interface", "namespace", "using",
  "get", "set", "is", "as", "throw", "try", "catch", "finally", "override", "virtual",
  "abstract", "sealed",
]);

function tokenizeLine(line) {
  if (line === "") return [];
  // The regex captures, in order:
  //   1 = inline/doc comment (//... or ///...)
  //   2 = string literal "..."
  //   3 = numeric literal (with optional .f suffix)
  //   4 = identifier-like word (\b[A-Za-z_]\w*\b)
  const re = /(\/\/[^\n]*)|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?[fFdDmM]?\b)|([A-Za-z_]\w*)/g;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) {
      out.push({ kind: "txt", text: line.slice(last, m.index) });
    }
    const text = m[0];
    let kind = "txt";
    if (m[1]) kind = "cmt";
    else if (m[2]) kind = "str";
    else if (m[3]) kind = "num";
    else if (m[4]) {
      if (CSHARP_KEYWORDS.has(text)) kind = "kw";
      else if (/^[A-Z]/.test(text)) kind = "type";
      else if (/^_/.test(text)) kind = "var";
      else kind = "txt";
    }
    out.push({ kind, text });
    last = re.lastIndex;
  }
  if (last < line.length) {
    out.push({ kind: "txt", text: line.slice(last) });
  }
  return out;
}

function CodeBlock({
  name = "snippet.cs",
  lang = "C#",
  lines = 28,
  height = 420,
  seed = 1,
  files,
  body,
  filename,
  language,
  highlightLines,
  caption,    // accepted for API symmetry; parent renders caption row
}) {
  // Single-file shortcut → normalize to a one-entry list
  const list = Array.isArray(files) && files.length > 0
    ? files
    : [{
        name: filename || name,
        lang: language || lang,
        lines,
        seed,
        body,
        highlightLines,
      }];

  const [active, setActive] = React.useState(0);
  const safeIndex = Math.min(active, list.length - 1);
  const current = list[safeIndex] || list[0];

  const isText = typeof current.body === "string" && current.body.length > 0;

  // Pre-compute either fake-token data or real-text lines.
  const fakeData = React.useMemo(
    () => (isText ? null : makeLines(current.seed || 1, current.lines || lines)),
    [isText, current.seed, current.lines, lines]
  );

  const textLines = React.useMemo(() => {
    if (!isText) return null;
    // Split body preserving empty lines; tokenize each.
    return current.body.split("\n").map(tokenizeLine);
  }, [isText, current.body]);

  const hlSet = React.useMemo(() => {
    const arr = current.highlightLines || [];
    return new Set(arr);
  }, [current.highlightLines]);

  const lineCount = isText ? textLines.length : fakeData.length;
  // Always show the Chrome-style tab strip, even with a single file.
  // The window-header (dots + lang) sits on top; class name lives in the tab.
  const showHeaderName = false;
  const showTabs = list.length >= 1;
  const displayLang = (current.lang || lang || "").replace(/^csharp$/i, "C#");

  return (
    <div
      className={"code-block" + (isText ? " is-text" : "")}
      style={{ "--code-height": height + "px" }}
    >
      <div className="code-block-head">
        <div className="row gap-3" style={{ alignItems: "center", minWidth: 0 }}>
          <div className="code-block-dots">
            <span className="code-block-dot" />
            <span className="code-block-dot" />
            <span className="code-block-dot" />
          </div>
          {showHeaderName && (
            <span className="code-block-name" title={current.name}>{current.name}</span>
          )}
        </div>
        <span className="code-block-lang">{displayLang}</span>
      </div>

      {showTabs && (
        <div className="code-block-tabs" role="tablist">
          {list.map((f, i) => {
            const isActive = i === safeIndex;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={isActive}
                title={f.name}
                className={"code-block-tab" + (isActive ? " is-active" : "")}
                onClick={() => setActive(i)}
              >
                {basename(f.name)}
              </button>
            );
          })}
        </div>
      )}

      <div className="code-block-body">
        <div className="code-gutter">
          {Array.from({ length: lineCount }).map((_, i) => (
            <span key={i} className="code-line-num">{i + 1}</span>
          ))}
        </div>
        <div className="code-lines">
          {isText
            ? textLines.map((toks, i) => (
                <div
                  key={i}
                  className={"code-line" + (hlSet.has(i + 1) ? " is-hl" : "")}
                >
                  {toks.length === 0
                    ? <span className="code-tok txt"> </span>
                    : toks.map((t, j) => (
                        <span key={j} className={"code-tok " + t.kind}>{t.text}</span>
                      ))}
                </div>
              ))
            : fakeData.map((line, i) => (
                <div key={i} className="code-line" style={{ "--indent": line.indent + "px" }}>
                  {line.tokens.map((t, j) => (
                    <span key={j} className={"code-tok " + t.kind} style={{ width: t.w }} />
                  ))}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

window.CodeBlock = CodeBlock;
