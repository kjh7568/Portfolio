// =========================================================
// App — top-level composition, sticky nav, scroll spy,
// Tweaks panel wiring.
// =========================================================
const { useState, useEffect, useMemo, useRef } = React;

const NAV = [
  { id: "top",      label: "INTRO" },
  { id: "stack",    label: "STACK" },
  { id: "projects", label: "PROJECTS" },
  { id: "p1",       label: "P 01" },
  { id: "p2",       label: "P 02" },
  { id: "p3",       label: "P 03" },
];

function TopNav({ activeId, onJump }) {
  return (
    <nav className="topnav">
      <div className="topnav-inner">
        <a
          href="#top"
          className="topnav-mark"
          onClick={(e) => { e.preventDefault(); onJump("top"); }}
        >
          <span className="topnav-mark-dot" />
          PORTFOLIO · v3
        </a>
        <div className="topnav-links">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={"#" + item.id}
              className={"topnav-link" + (activeId === item.id ? " is-active" : "")}
              onClick={(e) => { e.preventDefault(); onJump(item.id); }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showLabels": true,
  "density": "comfortable"
}/*EDITMODE-END*/;

function App() {
  const [activeId, setActiveId] = useState("top");
  const [tweak, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleJump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const appCls = [
    "app",
    tweak.showLabels ? "" : "is-clean",
    "density-" + tweak.density,
  ].join(" ");

  return (
    <div className={appCls}>
      <TopNav activeId={activeId} onJump={handleJump} />

      <div id="top">
        <Hero />
      </div>

      <TechStack />
      <ProjectNav projects={window.PROJECTS} onJump={handleJump} />

      {window.PROJECTS.map((p, i) => (
        <Project key={p.id} p={p} index={i} />
      ))}

      <footer className="section" style={{ padding: "80px 0", borderTop: "1px solid var(--line)" }}>
        <div className="section-inner">
          <div className="row gap-5" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
            <div className="stack gap-2">
              <Eyebrow>END OF PORTFOLIO</Eyebrow>
              <SkelLine w={240} h={14} />
            </div>
            <span className="caption">PORTFOLIO · v3 — Skeleton UI</span>
          </div>
        </div>
      </footer>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Wireframe">
          <TweakToggle
            label="Show labels"
            value={tweak.showLabels}
            onChange={(v) => setTweak("showLabels", v)}
          />
          <TweakRadio
            label="Density"
            value={tweak.density}
            options={[
              { value: "compact",     label: "Compact" },
              { value: "comfortable", label: "Standard" },
              { value: "spacious",    label: "Spacious" },
            ]}
            onChange={(v) => setTweak("density", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
