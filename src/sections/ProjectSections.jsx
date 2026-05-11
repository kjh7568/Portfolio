// =========================================================
// Project sub-sections A–F
// Each project renders this whole sequence with its own data.
// =========================================================

// ---------- A. Overview (hero layout) ----------
function ProjectOverview({ p, index }) {
  return (
    <SubSection
      tag="SECTION A"
      title={null}
      meta="OVERVIEW"
    >
      <div className="overview-hero">
        {/* Header — eyebrow row, big title, subtitle */}
        <header className="overview-hero-head">
          <div className="overview-hero-eyebrow-row">
            <Eyebrow>PROJECT 0{index + 1} / YEAR</Eyebrow>
          </div>
          <SkelDisplay w="62%" h={64} />
          <SkelLine w="44%" h={14} />
        </header>

        {/* Two-column body */}
        <div className="overview-hero-grid">
          {/* LEFT — key visual + 2 link cards */}
          <div className="overview-left">
            <SkelMedia aspect="16x9" label="KEY VISUAL · 16:9" />
            <a className="link-card" href="#" onClick={(e) => e.preventDefault()}>
              <span className="link-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </span>
              <div className="link-card-text">
                <span className="link-card-eyebrow">REPOSITORY</span>
                <SkelLine w={140} h={12} />
              </div>
              <svg className="link-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="link-card" href="#" onClick={(e) => e.preventDefault()}>
              <span className="link-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <div className="link-card-text">
                <span className="link-card-eyebrow">GAMEPLAY</span>
                <SkelLine w={120} h={12} />
              </div>
              <svg className="link-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* RIGHT — meta grid + intent + tech */}
          <div className="overview-right">
            <div className="meta-grid">
              {[
                { label: "GENRE · 장르" },
                { label: "DURATION · 기간" },
                { label: "TEAM · 인원" },
                { label: "ENVIRONMENT · 개발 환경" },
              ].map((m, i) => (
                <div key={i} className="meta-item">
                  <span className="meta-item-label">{m.label}</span>
                  <div className="meta-item-value">
                    <SkelLine w="80%" h={14} />
                    <SkelLine w="56%" h={14} />
                  </div>
                </div>
              ))}
            </div>

            <div className="intent-box">
              <div className="intent-box-head">
                <span className="intent-box-label">개발 의도</span>
                <span className="intent-box-sub">INTENT</span>
              </div>
              <SkelParagraph
                lines={5}
                widths={["100%", "96%", "98%", "92%", "62%"]}
              />
            </div>

            <div className="tech-chips">
              {Array.from({ length: 10 }).map((_, i) => (
                <SkelChip key={i} w={48 + ((i * 17) % 48)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SubSection>
  );
}

// ---------- B. Features ----------
function ProjectFeatures({ p }) {
  return (
    <SubSection
      tag="SECTION B"
      title={<SkelTitle w={420} h={36} />}
      meta="FEATURES · 3"
    >
      <div className="features-grid">
        {/* Feature 01 — featured, larger */}
        <article className="feature-card lead">
          <SkelMedia aspect="21x9" label="FEATURE 01 · MEDIA" />
          <div className="feature-card-head">
            <span className="feature-card-num">FEATURE 01</span>
            <SkelTitle w={360} h={26} />
          </div>
          <SkelParagraph lines={3} widths={["94%", "88%", "62%"]} />
        </article>

        {/* Feature 02 + 03 */}
        {[2, 3].map((n) => (
          <article key={n} className="feature-card">
            <SkelMedia aspect="16x9" label={"FEATURE 0" + n + " · MEDIA"} />
            <div className="feature-card-head">
              <span className="feature-card-num">{"FEATURE 0" + n}</span>
              <SkelTitle w={240} h={22} />
            </div>
            <SkelParagraph lines={2} widths={["92%", "70%"]} />
          </article>
        ))}
      </div>
    </SubSection>
  );
}

// ---------- C / D. Technical Challenge ----------
function ProjectChallenge({ index, reverse, seed }) {
  const tag = index === 1 ? "SECTION C" : "SECTION D";
  const subtitle = "TECHNICAL CHALLENGE · 0" + index;
  return (
    <SubSection
      tag={tag}
      title={<SkelTitle w={520} h={36} />}
      meta={subtitle}
    >
      <div className={"challenge" + (reverse ? " reverse" : "")}>
        <div className="challenge-text">
          <div className="challenge-block">
            <span className="challenge-block-label">PROBLEM</span>
            <SkelParagraph lines={3} widths={["96%", "84%", "62%"]} />
          </div>
          <div className="challenge-block">
            <span className="challenge-block-label">CAUSE</span>
            <SkelParagraph lines={2} widths={["92%", "70%"]} />
          </div>
          <div className="challenge-block is-solution">
            <span className="challenge-block-label">SOLUTION</span>
            <SkelParagraph lines={3} widths={["94%", "88%", "76%"]} />
          </div>
          <div className="challenge-block">
            <span className="challenge-block-label">RESULT</span>
            <div className="row gap-3" style={{ flexWrap: "wrap" }}>
              <SkelBlock w={140} h={56} label="METRIC" />
              <SkelBlock w={140} h={56} label="METRIC" />
              <SkelBlock w={140} h={56} label="METRIC" />
            </div>
          </div>
        </div>
        <div className="challenge-code">
          <CodeBlock
            name={index === 1 ? "OptimizationManager.cs" : "AsyncLoader.cs"}
            lang="C#"
            lines={index === 1 ? 28 : 36}
            height={420}
            seed={seed}
          />
          <div className="row gap-3" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <span className="caption">CODE BLOCK · placeholder</span>
            <SkelLine w={120} h={10} />
          </div>
        </div>
      </div>
    </SubSection>
  );
}

// ---------- E. Result ----------
function ProjectResult({ p }) {
  return (
    <SubSection
      tag="SECTION E"
      title={<SkelTitle w={360} h={36} />}
      meta="RESULT"
    >
      {/* metric trio — first one featured */}
      <div className="result-metrics">
        {[true, false, false].map((featured, i) => (
          <div key={i} className={"metric-card" + (featured ? " featured" : "")}>
            <SkelDisplay
              w="70%"
              h={56}
              accent={false}
              style={featured ? { background: "rgba(255,255,255,0.95)" } : { background: "var(--fg)" }}
            />
            <SkelLine
              w="60%"
              h={10}
              style={featured ? { background: "rgba(255,255,255,0.4)" } : {}}
            />
            <span className="metric-card-label">METRIC 0{i + 1}</span>
          </div>
        ))}
      </div>

      {/* architecture placeholder */}
      <div className="result-arch">
        <div className="row gap-3" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Eyebrow>ARCHITECTURE</Eyebrow>
          <span className="caption">시스템 다이어그램 영역</span>
        </div>
        <SkelBlock h={320} label="ARCHITECTURE DIAGRAM" w="100%">
          <span className="skel-label center">SYSTEM DIAGRAM PLACEHOLDER</span>
        </SkelBlock>
      </div>

      {/* video media (YouTube placeholder) */}
      <div className="stack gap-3">
        <div className="row gap-3" style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Eyebrow>PLAYTHROUGH</Eyebrow>
          <span className="caption">YouTube 영상 영역 (placeholder)</span>
        </div>
        <SkelMedia aspect="16x9" label="YOUTUBE PLAYER · 16:9" video={true} />
      </div>
    </SubSection>
  );
}

// ---------- F. Retrospective (KPT) ----------
function Retrospective() {
  return (
    <SubSection
      tag="SECTION F"
      title={<SkelTitle w={400} h={36} />}
      meta="RETROSPECTIVE · KPT"
    >
      <div className="retro-kpt">
        {/* Keep */}
        <article className="kpt-card keep">
          <div className="kpt-head">
            <h4 className="kpt-title">Keep</h4>
            <span className="kpt-subtitle">잘했다고 생각하는 것</span>
          </div>
          <div className="kpt-items">
            {[0, 1].map((i) => (
              <div key={i} className="kpt-item">
                <div className="kpt-item-title">
                  <SkelTitle w={180 - i * 30} h={16} />
                </div>
                <SkelParagraph lines={2} widths={["96%", "78%"]} />
              </div>
            ))}
          </div>
        </article>

        {/* Problem */}
        <article className="kpt-card problem">
          <div className="kpt-head">
            <h4 className="kpt-title">Problem</h4>
            <span className="kpt-subtitle">아쉬웠던 것</span>
          </div>
          <div className="kpt-items">
            {[0, 1].map((i) => (
              <div key={i} className="kpt-item">
                <div className="kpt-item-title">
                  <SkelTitle w={200 - i * 20} h={16} />
                </div>
                <SkelParagraph lines={2} widths={["98%", "82%"]} />
              </div>
            ))}
          </div>
        </article>

        {/* Try — full width with 3 columns */}
        <article className="kpt-card try">
          <div className="kpt-head">
            <h4 className="kpt-title">Try</h4>
            <span className="kpt-subtitle">다음에 시도할 것</span>
          </div>
          <div className="try-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="try-item">
                <span className="try-item-num">{n} · TRY ITEM</span>
                <SkelTitle w="78%" h={16} />
                <SkelParagraph lines={2} widths={["96%", "70%"]} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </SubSection>
  );
}

// ---------- Project (composes A–F) ----------
function Project({ p, index }) {
  return (
    <section id={p.id} className="section" data-screen-label={`Project 0${index + 1}`}>
      <div className="section-inner">
        <ProjectOverview p={p} index={index} />
        <ProjectFeatures p={p} />
        <ProjectChallenge index={1} reverse={false} seed={p.seed} />
        <ProjectChallenge index={2} reverse={true}  seed={p.seed + 7} />
        <ProjectResult p={p} />
        <Retrospective />
      </div>
    </section>
  );
}

Object.assign(window, {
  ProjectOverview, ProjectFeatures, ProjectChallenge,
  ProjectResult, Retrospective, Project,
});
