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

          {/* slogan (display title, 3 lines) */}
          <h1 className="hero-slogan display-3">
            <span className="hero-slogan-line">일단 <span className="hl-blue">되게</span> 만들고,</span>
            <span className="hero-slogan-line">그 다음 <span className="hl-blue">좋게</span> 만들고,</span>
            <span className="hero-slogan-line">그 다음 <span className="hl-blue">빠르게</span> 만듭니다.</span>
          </h1>

          {/* short tagline */}
          <div className="hero-tagline">
            <p className="body-lg fg">완벽한 시스템이 아닌, 진화하는 시스템을 만듭니다.</p>
            <p className="body fg-3">
              기획이 바뀌고, 밸런스가 흔들리고, 요구사항이 달라져도 그 변화에 대응할 수 있는 구조를 먼저 고민하고, 플레이어가 실제로 느끼는 경험을 설계하는 Unity 클라이언트 개발자 김지훈입니다.
            </p>
          </div>

          {/* contact / github / phone */}
          <div className="hero-meta-row">
            <div className="hero-meta-item">
              <span className="section-eyebrow">EMAIL</span>
              <a className="hero-meta-value" href="mailto:rwrwg159@gmail.com">rwrwg159@gmail.com</a>
            </div>
            <div className="hero-meta-item">
              <span className="section-eyebrow">GITHUB</span>
              <a className="hero-meta-value" href="https://github.com/kjh7568" target="_blank" rel="noreferrer">github.com/kjh7568</a>
            </div>
            <div className="hero-meta-item">
              <span className="section-eyebrow">PHONE</span>
              <span className="hero-meta-value mono">010-5717-0115</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img className="hero-portrait" src="./asset/photo.jpg" alt="김지훈 프로필" />
          <div className="hero-identity">
            <div className="hero-identity-name">김지훈</div>
            <div className="hero-identity-name-en">Jeehoon Kim</div>
            <div className="hero-identity-role">Unity Client Developer</div>
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
  const groups = window.TECH_STACK || [];
  return (
    <Section
      id="stack"
      eyebrow="SECTION 01"
      title="Tech Stack"
      meta="기술 스택 / TECH STACK"
      label="01 Tech Stack"
    >
      <div className="stack-grid">
        {groups.map((g) => (
          <div key={g.eyebrow} className="stack-group">
            <div className="stack-group-head">
              <Eyebrow>{g.eyebrow}</Eyebrow>
              <span className="stack-group-desc">{g.desc}</span>
            </div>
            <div className="stack-items">
              {g.items.map((it, i) => {
                const level = it.level === "hero" ? "hero" : "sub";
                return (
                  <div key={i} className={"stack-item stack-item--" + level}>
                    <span className={"stack-item-head stack-item-head--" + level}>
                      {it.name}
                    </span>
                    <ul className="stack-usages">
                      {it.usages.map((u, j) => (
                        <li key={j} className="stack-usage">{u}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
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
  const others = window.OTHER_PROJECTS || [];
  return (
    <Section
      id="projects"
      eyebrow="SECTION 02"
      title="Project"
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
              <div className="proj-nav-eyebrow">
                <span className="proj-nav-genre">{p.genre}</span>
                <span className="proj-nav-sep">·</span>
                <span className="proj-nav-year mono-sm">{p.year}</span>
              </div>
              <h3 className="proj-nav-title">{p.name}</h3>
              <p className="proj-nav-desc">{p.desc}</p>
            </div>
            {p.tags && p.tags.length > 0 && (
              <div className="proj-nav-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="chip">{t}</span>
                ))}
              </div>
            )}
            <svg className="proj-nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        ))}
      </div>

      {others.length > 0 && (
        <div className="proj-other">
          <Eyebrow>그 외 프로젝트 · OTHER WORK</Eyebrow>
          <div className="proj-other-grid">
            {others.map((o, i) => (
              <div key={i} className="proj-other-item">
                <div className="proj-other-year mono-sm">{o.year}</div>
                <div className="proj-other-genre">{o.genre}</div>
                <div className="proj-other-name">{o.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

Object.assign(window, { Hero, TechStack, ProjectNav });
