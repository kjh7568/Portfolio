// =========================================================
// Project sub-sections A–F
// Each project renders this whole sequence with its own data.
// =========================================================

// ---------- A. Overview (hero layout) ----------
function ProjectOverview({ p, index }) {
  const ov = p.overview || {};
  const meta = ov.meta || {};
  const links = ov.links || {};
  const envLines = Array.isArray(meta.environment)
    ? meta.environment
    : (meta.environment ? [meta.environment] : null);

  return (
    <SubSection
      title={null}
      meta="OVERVIEW"
    >
      <div className="overview-hero">
        {/* Header — eyebrow row, big title, subtitle */}
        <header className="overview-hero-head">
          <div className="overview-hero-eyebrow-row">
            <Eyebrow>PROJECT 0{index + 1} / {p.year || "YEAR"}</Eyebrow>
          </div>
          {p.name
            ? <h2 className="overview-hero-title">{p.name}</h2>
            : <SkelDisplay w="62%" h={64} />}
          {ov.subtitle || p.desc
            ? <p className="overview-hero-subtitle">{ov.subtitle || p.desc}</p>
            : <SkelLine w="44%" h={14} />}
        </header>

        {/* Two-column body */}
        <div className="overview-hero-grid">
          {/* LEFT — key visual + link cards */}
          <div className="overview-left">
            {ov.keyVisual
              ? <img className="overview-keyvisual" src={ov.keyVisual} alt={p.name + " key visual"} />
              : <SkelMedia aspect="16x9" label="KEY VISUAL · 16:9" />}

            {/* Repository */}
            <a
              className="link-card"
              href={links.repository || "#"}
              target={links.repository ? "_blank" : undefined}
              rel={links.repository ? "noreferrer" : undefined}
              onClick={links.repository ? undefined : (e) => e.preventDefault()}
            >
              <span className="link-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </span>
              <div className="link-card-text">
                <span className="link-card-eyebrow">REPOSITORY</span>
                <span className="link-card-value">소스 코드 보기</span>
              </div>
              <svg className="link-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            {/* Gameplay */}
            <a
              className="link-card"
              href={links.gameplay || "#"}
              target={links.gameplay ? "_blank" : undefined}
              rel={links.gameplay ? "noreferrer" : undefined}
              onClick={links.gameplay ? undefined : (e) => e.preventDefault()}
            >
              <span className="link-card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <div className="link-card-text">
                <span className="link-card-eyebrow">GAMEPLAY</span>
                <span className="link-card-value">플레이 영상</span>
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
                { label: "GENRE · 장르",              value: meta.genre },
                { label: "DURATION · 기간",           value: meta.duration },
                { label: "TEAM · 인원",               value: meta.team },
                { label: "ENVIRONMENT · 개발 환경",   value: envLines },
              ].map((m, i) => (
                <div key={i} className="meta-item">
                  <span className="meta-item-label">{m.label}</span>
                  <div className="meta-item-value">
                    {Array.isArray(m.value) ? (
                      m.value.map((line, k) => <div key={k}>{line}</div>)
                    ) : m.value ? (
                      <div>{m.value}</div>
                    ) : (
                      <>
                        <SkelLine w="80%" h={14} />
                        <SkelLine w="56%" h={14} />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="intent-box">
              <div className="intent-box-head">
                <span className="intent-box-label">개발 의도</span>
                <span className="intent-box-sub">INTENT</span>
              </div>
              {Array.isArray(ov.intent) ? (
                <dl className="intent-list">
                  {ov.intent.map((it, i) => (
                    <div key={i} className="intent-row">
                      <dt className="intent-row-label">{it.label}</dt>
                      <dd className="intent-row-value">{hl(it.value)}</dd>
                    </div>
                  ))}
                </dl>
              ) : ov.intent ? (
                <p className="intent-box-body">{hl(ov.intent)}</p>
              ) : (
                <SkelParagraph lines={5} widths={["100%", "96%", "98%", "92%", "62%"]} />
              )}
            </div>

            <div className="tech-chips">
              {ov.techChips && ov.techChips.length > 0
                ? ov.techChips.map((t, i) => <span key={i} className="chip">{t}</span>)
                : Array.from({ length: 10 }).map((_, i) => <SkelChip key={i} w={48 + ((i * 17) % 48)} />)}
            </div>
          </div>
        </div>
      </div>
    </SubSection>
  );
}

// Convert a YouTube URL or ID into an embed URL, or return null
// if the input isn't a YouTube reference.
function toYouTubeEmbed(src) {
  if (!src) return null;
  const s = String(src).trim();
  // Bare 11-char id
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) {
    return "https://www.youtube.com/embed/" + s + "?rel=0&modestbranding=1";
  }
  // youtu.be/<id>
  let m = s.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  if (m) return "https://www.youtube.com/embed/" + m[1] + "?rel=0&modestbranding=1";
  // youtube.com/watch?v=<id> or /embed/<id> or /shorts/<id>
  m = s.match(/youtube\.com\/(?:watch\?v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
  if (m) return "https://www.youtube.com/embed/" + m[1] + "?rel=0&modestbranding=1";
  return null;
}

// ---------- B. Features ----------
function ProjectFeatures({ p }) {
  const features = (p.features && p.features.length > 0)
    ? p.features
    : [1, 2, 3].map((n) => ({ num: n }));
  return (
    <SubSection
      title="기능 소개"
      meta="FEATURES · 3"
    >
      <div className="features-split">
        {/* LEFT (40%) — 3 stacked feature cards, equal size */}
        <div className="features-stack">
          {features.slice(0, 3).map((f, i) => {
            const n = f.num || i + 1;
            return (
              <article key={i} className="feature-card">
                {f.image
                  ? <img className="feature-card-media" src={f.image} alt={"feature " + n} />
                  : <SkelMedia aspect="16x9" label={"FEATURE 0" + n + " · MEDIA"} />}
                <div className="feature-card-body">
                  <div className="feature-card-head">
                    <span className="feature-card-num">{"FEATURE 0" + n}</span>
                    {f.title
                      ? <h4 className="feature-card-title">{f.title}</h4>
                      : <SkelTitle w={220} h={22} />}
                  </div>
                  {f.desc
                    ? <p className="feature-card-desc">{f.desc}</p>
                    : <SkelParagraph lines={2} widths={["94%", "70%"]} />}
                </div>
              </article>
            );
          })}
        </div>

        {/* RIGHT (60%) — single video area, sticky on scroll */}
        <aside className="features-video">
          {(() => {
            const src = p.featuresVideo;
            const yt = toYouTubeEmbed(src);
            if (yt) {
              return (
                <iframe
                  className="features-video-player"
                  src={yt}
                  title="Features video"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              );
            }
            if (src) {
              return (
                <video
                  className="features-video-player"
                  src={src}
                  controls
                  playsInline
                />
              );
            }
            return <SkelMedia aspect="16x9" label="FEATURES · VIDEO" video />;
          })()}
        </aside>
      </div>
    </SubSection>
  );
}

// Tiny inline-bold parser: turns "**word**" into <strong>word</strong>.
// Used so data.js can stay plain JS but still emphasize key terms.
function hl(text) {
  if (text == null) return null;
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i} className="hl">{p.slice(2, -2)}</strong>;
    }
    return p;
  });
}

// ---------- C / D. Technical Challenge ----------
function ProjectChallenge({ index, reverse, seed, challenge }) {
  const sectionMeta = "TROUBLESHOOTING · 0" + index;
  const [isCodeOpen, setIsCodeOpen] = React.useState(false);
  // Match the right-column (code) height to the left-column (text) height
  // so long code snippets scroll internally rather than stretching the row.
  const textRef = React.useRef(null);
  const [textHeight, setTextHeight] = React.useState(null);
  React.useEffect(() => {
    const el = textRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) setTextHeight(e.contentRect.height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <SubSection
      title={
        challenge && challenge.title
          ? challenge.title
          : <SkelTitle w={520} h={36} />
      }
      subtitle={challenge && challenge.subtitle ? challenge.subtitle : null}
      meta={sectionMeta}
    >
      <div className={"challenge" + (reverse ? " reverse" : "")}>
        <div className="challenge-text" ref={textRef}>
          <div className="challenge-block">
            <span className="challenge-block-label">문제 인식</span>
            {challenge && challenge.problem
              ? <p className="challenge-block-body">{hl(challenge.problem)}</p>
              : <SkelParagraph lines={3} widths={["96%", "84%", "62%"]} />}
          </div>
          <div className="challenge-block">
            <span className="challenge-block-label">원인 분석</span>
            {challenge && challenge.cause
              ? <p className="challenge-block-body">{hl(challenge.cause)}</p>
              : <SkelParagraph lines={2} widths={["92%", "70%"]} />}
          </div>
          <div className="challenge-block is-solution">
            <span className="challenge-block-label">해결책</span>

            {/* Two alternatives, side by side. Second is chosen by default. */}
            <div className="solution-alts">
              {[0, 1].map((i) => {
                const alt = challenge && challenge.alternatives ? challenge.alternatives[i] : null;
                const chosen = alt ? !!alt.chosen : i === 1;
                return (
                  <article
                    key={i}
                    className={"solution-alt" + (chosen ? " is-chosen" : "")}
                  >
                    <div className="solution-alt-head">
                      <span className="solution-alt-label">
                        {(alt && alt.label) || ("ALT 0" + (i + 1))}
                      </span>
                      {chosen && <span className="solution-alt-pick">선택됨</span>}
                    </div>
                    {alt && alt.title
                      ? <h5 className="solution-alt-title">{alt.title}</h5>
                      : <SkelTitle w="76%" h={18} />}
                    {alt && alt.body
                      ? <p className="solution-alt-body">{alt.body}</p>
                      : <SkelParagraph lines={2} widths={["94%", "70%"]} />}
                  </article>
                );
              })}
            </div>

            {/* Why? — label + bullet list (2 items), blue accent bar */}
            <div className="solution-why-line">
              <span className="solution-why-label">Why?</span>
              {Array.isArray(challenge && challenge.why) ? (
                <ul className="solution-why-list">
                  {challenge.why.map((w, i) => <li key={i}>{hl(w)}</li>)}
                </ul>
              ) : challenge && challenge.why ? (
                <span className="solution-why-body">{hl(challenge.why)}</span>
              ) : (
                <SkelLine w="86%" h={12} />
              )}
            </div>

            {/* Trade-off — same shape as Why, warn accent bar */}
            <div className="solution-tradeoff-line">
              <span className="solution-tradeoff-label">Trade-off:</span>
              {Array.isArray(challenge && challenge.tradeoff) ? (
                <ul className="solution-tradeoff-list">
                  {challenge.tradeoff.map((t, i) => <li key={i}>{hl(t)}</li>)}
                </ul>
              ) : challenge && challenge.tradeoff ? (
                <span className="solution-tradeoff-body">{hl(challenge.tradeoff)}</span>
              ) : (
                <SkelLine w="78%" h={12} />
              )}
            </div>
          </div>
          <div className="challenge-block">
            <span className="challenge-block-label">결과</span>
            {challenge && challenge.results && challenge.results.length > 0 ? (
              <div className="challenge-results">
                {challenge.results.map((r, i) => (
                  <div key={i} className="challenge-result">
                    <div className="challenge-result-label">{r.label}</div>
                    <div className="challenge-result-metric">{r.metric}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row gap-3" style={{ flexWrap: "wrap" }}>
                <SkelBlock w={140} h={56} label="METRIC" />
                <SkelBlock w={140} h={56} label="METRIC" />
                <SkelBlock w={140} h={56} label="METRIC" />
              </div>
            )}
          </div>
        </div>
        <div
          className="challenge-code"
          style={textHeight ? { height: textHeight } : undefined}
        >
          {challenge && challenge.media && (challenge.media.before || challenge.media.after) ? (
            <div className="challenge-media-stack">
              {[challenge.media.before, challenge.media.after].map((item, i) => item && (
                <figure key={i} className="challenge-media">
                  <div className="challenge-media-frame">
                    <img
                      className="challenge-media-img"
                      src={item.src}
                      alt={item.alt || challenge.title || "troubleshooting media"}
                    />
                    <span className="challenge-media-label">{item.label || (i === 0 ? "해결 전" : "해결 후")}</span>
                    {item.note && (
                      <span className={"challenge-media-note" + (i === 0 ? " is-before" : " is-after")}>
                        {item.note}
                      </span>
                    )}
                  </div>
                  {item.caption && (
                    <figcaption className="challenge-media-caption">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
              <button
                type="button"
                className="challenge-code-toggle"
                onClick={() => setIsCodeOpen((v) => !v)}
                aria-expanded={isCodeOpen}
              >
                {isCodeOpen ? "구현 코드 닫기" : "구현 코드 보기"}
              </button>
            </div>
          ) : (
            <div className="challenge-media-stack">
              <SkelMedia aspect="16x9" label="PROBLEM · MEDIA" />
              <SkelMedia aspect="16x9" label="RESULT · MEDIA" />
              <button
                type="button"
                className="challenge-code-toggle"
                onClick={() => setIsCodeOpen((v) => !v)}
                aria-expanded={isCodeOpen}
              >
                {isCodeOpen ? "구현 코드 닫기" : "구현 코드 보기"}
              </button>
            </div>
          )}
          <div className={"challenge-code-panel" + (isCodeOpen ? " is-open" : "")}>
            <CodeBlock
              files={challenge && challenge.code && challenge.code.files}
              body={challenge && challenge.code && challenge.code.body}
              filename={challenge && challenge.code && challenge.code.filename}
              language={challenge && challenge.code && challenge.code.language}
              highlightLines={challenge && challenge.code && challenge.code.highlightLines}
              name={index === 1 ? "OptimizationManager.cs" : "AsyncLoader.cs"}
              lang="C#"
              lines={index === 1 ? 28 : 36}
              height={420}
              seed={seed}
            />
            {challenge && challenge.code && challenge.code.caption ? (
              <div className="row gap-3" style={{ alignItems: "center" }}>
                <span className="caption">{challenge.code.caption}</span>
              </div>
            ) : (
              <div className="row gap-3" style={{ justifyContent: "space-between", alignItems: "center" }}>
                <span className="caption">CODE BLOCK · placeholder</span>
                <SkelLine w={120} h={10} />
              </div>
            )}
          </div>
        </div>
      </div>
    </SubSection>
  );
}

// ---------- F. Retrospective (KPT) ----------
function Retrospective({ retrospective }) {
  const keep = retrospective && retrospective.keep;
  const problem = retrospective && retrospective.problem;
  const tries = retrospective && retrospective.try;
  const renderKptBody = (body) => {
    if (Array.isArray(body)) {
      return (
        <ul className="kpt-item-list">
          {body.map((line, i) => <li key={i}>{hl(line)}</li>)}
        </ul>
      );
    }
    return <p className="kpt-item-body">{hl(body)}</p>;
  };

  return (
    <SubSection
      title={retrospective ? "회고" : <SkelTitle w={400} h={36} />}
      meta="RETROSPECTIVE"
    >
      <div className="retro-kpt">
        {/* Keep */}
        <article className="kpt-card keep">
          <div className="kpt-head">
            <h4 className="kpt-title">Keep</h4>
            <span className="kpt-subtitle">잘했다고 생각하는 것</span>
          </div>
          <div className="kpt-items">
            {Array.isArray(keep)
              ? keep.map((item, i) => (
                  <div key={i} className="kpt-item">
                    <h5 className="kpt-item-title-text">{item.title}</h5>
                    {renderKptBody(item.body)}
                  </div>
                ))
              : [0, 1].map((i) => (
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
            {Array.isArray(problem)
              ? problem.map((item, i) => (
                  <div key={i} className="kpt-item">
                    <h5 className="kpt-item-title-text">{item.title}</h5>
                    {renderKptBody(item.body)}
                  </div>
                ))
              : [0, 1].map((i) => (
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
            {Array.isArray(tries)
              ? tries.map((item, i) => {
                  const n = item.num || i + 1;
                  return (
                    <div key={i} className="try-item">
                      <h5 className="try-item-title">
                        <span className="try-item-num">{n} · </span>
                        {item.title}
                      </h5>
                      <p className="try-item-body">{hl(item.body)}</p>
                    </div>
                  );
                })
              : [1, 2, 3].map((n) => (
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
        <ProjectChallenge index={1} reverse={false} seed={p.seed}     challenge={p.challenges && p.challenges[0]} />
        <ProjectChallenge index={2} reverse={true}  seed={p.seed + 7} challenge={p.challenges && p.challenges[1]} />
        <Retrospective retrospective={p.retrospective} />
      </div>
    </section>
  );
}

Object.assign(window, {
  ProjectOverview, ProjectFeatures, ProjectChallenge,
  Retrospective, Project,
});
