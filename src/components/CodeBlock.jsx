// =========================================================
// CodeBlock — placeholder code surface with line numbers,
// syntax-highlight-style colored token bars, scrollable body.
// Generates fake "lines" of varied token patterns.
// =========================================================

// Deterministic pseudo-random based on seed (so layout is stable across renders)
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xFFFFFFFF;
  };
}

// Token color classes from CSS
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

function CodeBlock({ name = "snippet.cs", lang = "C#", lines = 28, height = 420, seed = 1 }) {
  const data = React.useMemo(() => makeLines(seed, lines), [seed, lines]);
  return (
    <div className="code-block" style={{ "--code-height": height + "px" }}>
      <div className="code-block-head">
        <div className="row gap-3" style={{ alignItems: "center" }}>
          <div className="code-block-dots">
            <span className="code-block-dot" />
            <span className="code-block-dot" />
            <span className="code-block-dot" />
          </div>
          <span className="code-block-name">{name}</span>
        </div>
        <span className="code-block-lang">{lang}</span>
      </div>
      <div className="code-block-body">
        <div className="code-gutter">
          {data.map((_, i) => (
            <span key={i} className="code-line-num">{i + 1}</span>
          ))}
        </div>
        <div className="code-lines">
          {data.map((line, i) => (
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
