// =========================================================
// SECTION 0 — Hero / Intro
// =========================================================
function Hero() {
  return (
    <section className="hero" data-screen-label="00 Hero">
      <div className="hero-inner">
        <div className="hero-left">
          {/* eyebrow */}
          <Eyebrow>SECTION 00 — INTRO</Eyebrow>

          {/* slogan (display title, 2 lines) */}
          <div className="hero-slogan">
            <SkelDisplay w="78%" h={72} />
            <SkelDisplay w="58%" h={72} accent={false} />
          </div>

          {/* short tagline */}
          <div className="stack gap-3" style={{ maxWidth: 560 }}>
            <SkelLine w="92%" h={14} />
            <SkelLine w="64%" h={14} />
          </div>

          {/* contact / github / meta row */}
          <div className="hero-meta-row">
            <div className="hero-meta-item">
              <SkelLine w={56} h={9} />
              <SkelBlock h={36} label="EMAIL" w="100%" />
            </div>
            <div className="hero-meta-item">
              <SkelLine w={56} h={9} />
              <SkelBlock h={36} label="GITHUB" w="100%" />
            </div>
            <div className="hero-meta-item">
              <SkelLine w={56} h={9} />
              <SkelBlock h={36} label="BLOG" w="100%" />
            </div>
          </div>
        </div>

        <div className="hero-right">
          <SkelAvatar size={160} />
          <div className="stack gap-2" style={{ alignItems: "flex-end" }}>
            <SkelLine w={120} h={10} />
            <SkelLine w={80} h={10} />
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SECTION 1 — Tech Stack
// =========================================================
function TechStack() {
  const groups = ["GROUP 01", "GROUP 02", "GROUP 03", "GROUP 04"];
  return (
    <Section
      id="stack"
      eyebrow="SECTION 01"
      title={<><SkelDisplay w={420} h={40} /></>}
      meta="기술 스택 / TECH STACK"
      label="01 Tech Stack"
    >
      <div className="stack-grid">
        {groups.map((g, i) => (
          <div key={i} className="stack-group">
            <div className="stack-group-head">
              <Eyebrow>{g}</Eyebrow>
              <SkelLine w="70%" h={14} />
            </div>
            <div className="stack-chips">
              {Array.from({ length: 4 + (i % 3) }).map((_, j) => (
                <SkelChip key={j} w={48 + ((i + j) % 4) * 16} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// =========================================================
// SECTION 2 — Project Navigation
// =========================================================
function ProjectNav({ projects, onJump }) {
  return (
    <Section
      id="projects"
      eyebrow="SECTION 02"
      title={<SkelDisplay w={520} h={40} />}
      meta="대표 프로젝트 / FEATURED WORK"
      label="02 Project Navigation"
    >
      <div className="proj-nav">
        {projects.map((p, i) => (
          <a
            key={p.id}
            href={"#" + p.id}
            className="proj-nav-item"
            onClick={(e) => { e.preventDefault(); onJump(p.id); }}
          >
            <div className="proj-nav-num">0{i + 1}</div>
            <div className="proj-nav-text">
              <SkelLine w="32%" h={10} />
              <SkelTitle w="74%" h={28} />
              <SkelLine w="56%" h={10} />
            </div>
            <div className="proj-nav-tags">
              {Array.from({ length: 4 }).map((_, j) => (
                <SkelChip key={j} w={52 + (j * 6) % 24} />
              ))}
            </div>
            <svg className="proj-nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { Hero, TechStack, ProjectNav });
