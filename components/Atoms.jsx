// Shared atoms used across pages.
const { useEffect } = React;

function PageFooter({ idx, total }) {
  return (
    <div className="page-footer">
      <div className="meta">
        <span>김지훈 · Unity Client Developer</span>
      </div>
      <div>{String(idx).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
    </div>
  );
}

function ImagePlaceholder({ width = "1920×1080", label = "IMAGE", style = {} }) {
  return (
    <div className="img-ph" style={style}>
      <div className="label">{label}</div>
      <div className="dim">{width}</div>
    </div>
  );
}

function PrintFab() {
  return (
    <button className="print-fab no-print" onClick={() => window.print()}>
      <span className="arr">↓</span> PDF로 저장
    </button>
  );
}

// Lucide-style minimal inline icons (1.5px stroke)
function Icon({ name, size = 13 }) {
  const s = size;
  const common = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "github":
      return (<svg {...common}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>);
    case "play":
      return (<svg {...common}><polygon points="6 3 20 12 6 21 6 3" fill="currentColor" stroke="none"/></svg>);
    case "doc":
      return (<svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>);
    case "mail":
      return (<svg {...common}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
    case "phone":
      return (<svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
    case "arrow":
      return (<svg {...common}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
    default:
      return null;
  }
}

Object.assign(window, { PageFooter, ImagePlaceholder, PrintFab, Icon });
