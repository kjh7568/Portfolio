// =========================================================
// Skeleton primitive components
// Tiny visual placeholders that compose into wireframe layouts.
// =========================================================

function SkelLine({ w = "100%", h = 12, style }) {
  return (
    <div
      className="skel skel--line"
      style={{ width: w, height: h, ...style }}
    />
  );
}

function SkelBlock({ w = "100%", h = 80, label, accent = false, ghost = false, style, children, className = "" }) {
  const cls = ["skel skel--block"];
  if (accent) cls.push("skel--accent");
  if (ghost) cls.push("skel skel--ghost");
  return (
    <div
      className={cls.join(" ") + " " + className}
      style={{ width: w, height: h, ...style }}
    >
      {label ? <span className="skel-label">{label}</span> : null}
      {children}
    </div>
  );
}

// A stack of fake text lines (paragraph)
function SkelParagraph({ lines = 3, widths }) {
  const defaultWidths = ["100%", "96%", "84%", "92%", "78%", "88%"];
  const w = widths || defaultWidths;
  return (
    <div className="stack gap-3">
      {Array.from({ length: lines }).map((_, i) => (
        <SkelLine key={i} w={w[i % w.length]} h={10} />
      ))}
    </div>
  );
}

function SkelTitle({ w = "60%", h = 36 }) {
  return (
    <div
      className="skel"
      style={{ width: w, height: h, borderRadius: 6, background: "var(--fg-4)" }}
    />
  );
}

// Big "display" placeholder (slogan, project title, metric)
function SkelDisplay({ w = "70%", h = 72, accent = false }) {
  return (
    <div
      className="skel"
      style={{
        width: w,
        height: h,
        borderRadius: 8,
        background: accent ? "var(--accent)" : "var(--fg-2)",
      }}
    />
  );
}

// Avatar / portrait placeholder
function SkelAvatar({ size = 96 }) {
  return (
    <div
      className="skel"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--bg-sunk)",
        border: "1px solid var(--line)",
        position: "relative",
        flex: "none",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        style={{
          position: "absolute",
          inset: 0,
          margin: "auto",
          width: "40%",
          height: "40%",
          color: "var(--fg-4)",
        }}
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    </div>
  );
}

// Media (image / video) placeholder with glyph + grid pattern
function SkelMedia({ aspect = "16x9", label = "MEDIA", video = false, height, w = "100%" }) {
  const cls = "media ar-" + aspect + (video ? " video" : "");
  const style = height ? { width: w, height, aspectRatio: "auto" } : { width: w };
  return (
    <div className={cls} style={style}>
      {label ? <span className="skel-label">{label}</span> : null}
      <div className="media-glyph">
        {video ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <circle cx="9" cy="10" r="1.5" />
            <path d="M3 17l5-5 4 4 3-3 6 6" />
          </svg>
        )}
        <span className="media-glyph-label">{video ? "Video Placeholder" : "Image Placeholder"}</span>
      </div>
    </div>
  );
}

// Tag chip placeholder
function SkelChip({ w = 64 }) {
  return <span className="chip is-empty" style={{ width: w }} />;
}

// Eyebrow label (label rendered as actual text, since the spec
// allows section IDs / structural labels for the wireframe)
function Eyebrow({ children }) {
  return <span className="section-eyebrow">{children}</span>;
}

Object.assign(window, {
  SkelLine, SkelBlock, SkelParagraph, SkelTitle, SkelDisplay,
  SkelAvatar, SkelMedia, SkelChip, Eyebrow,
});
