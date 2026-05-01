// Pages 5..18 — Project Pages (each project = 2 pages, A4 landscape)
// Page A: 개요 — 2-column layout (Left: title/intent, Right: meta+links)
// Page B: 기능 소개 — 3 features side-by-side, each with image on top

function ProjectOverviewPage({ pageIdx, total, project }) {
  const p = project;
  return (
    <section className="page proj-page proj-overview">
      <div className="page-pad">
        {/* LEFT — title, tagline, photo, links */}
        <div className="po-left">
          <div className="po-top">
            <div className="po-id">PROJECT {p.id} / {p.period}</div>
            <div className="po-role">{p.role.toUpperCase()}</div>
          </div>

          <h2 className="po-name">{p.name}</h2>
          <p className="po-tagline">{p.tagline}</p>

          <div className="po-photo">
            {p.titleImg
              ? <img src={p.titleImg} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
              : <ImagePlaceholder
                  width="1280×720"
                  label="PROJECT PHOTO"
                  style={{ width: "100%", height: "100%" }}
                />
            }
          </div>

          <div className="po-links">
            <a className="po-link" href={p.links.git} target="_blank">
              <span className="po-link-ic"><Icon name="github" size={16}/></span>
              <span className="po-link-body">
                <span className="po-link-lbl">REPOSITORY</span>
                <span className="po-link-val">소스 코드 보기</span>
              </span>
              <span className="po-link-arr"><Icon name="arrow" size={14}/></span>
            </a>
            <a className="po-link" href={p.links.video} target="_blank">
              <span className="po-link-ic"><Icon name="play" size={16}/></span>
              <span className="po-link-body">
                <span className="po-link-lbl">GAMEPLAY</span>
                <span className="po-link-val">플레이 영상</span>
              </span>
              <span className="po-link-arr"><Icon name="arrow" size={14}/></span>
            </a>
            <a className="po-link" href={p.links.doc} target="_blank">
              <span className="po-link-ic"><Icon name="doc" size={16}/></span>
              <span className="po-link-body">
                <span className="po-link-lbl">TECH DOC</span>
                <span className="po-link-val">상세 기술 문서</span>
              </span>
              <span className="po-link-arr"><Icon name="arrow" size={14}/></span>
            </a>
          </div>
        </div>

        {/* RIGHT — meta grid, intent, tags */}
        <div className="po-right">
          <div className="po-meta-grid">
            <div className="po-meta-cell">
              <div className="lbl">Genre · 장르</div>
              <div className="val">{p.genre}</div>
            </div>
            <div className="po-meta-cell">
              <div className="lbl">Duration · 기간</div>
              <div className="val">{p.duration}</div>
            </div>
            <div className="po-meta-cell">
              <div className="lbl">Team · 인원</div>
              <div className="val">{p.team}</div>
            </div>
            <div className="po-meta-cell">
              <div className="lbl">Environment · 개발 환경</div>
              <div className="val po-env-list">
                {p.engine.split(' · ').map((item, i) => (
                  <span key={i} className="po-env-item">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="po-intent">
            <div className="po-intent-head">개발 의도 · Intent</div>
            <p className="po-intent-body">{p.intent}</p>
          </div>

          <div className="po-tags">
            {p.tags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
          </div>
        </div>

        <PageFooter idx={pageIdx} total={total} />
      </div>
    </section>
  );
}

function ProjectFeaturesPage({ pageIdx, total, project }) {
  const p = project;
  return (
    <section className="page proj-page proj-features">
      <div className="page-pad">
        <div className="pf-top">
          <div className="pf-eyebrow">PROJECT {p.id} · {p.name} — 기능 소개</div>
          <div className="pf-tagline-mini">{p.tagline}</div>
        </div>

        <div className="pf-list">
          {p.features.map((f, i) => (
            <div key={i} className="pf-row">
              <div className="pf-img">
                {f.img
                  ? <img src={f.img} alt={f.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : <ImagePlaceholder
                      width="1280×720"
                      label={`FEATURE ${String(i+1).padStart(2,"0")}`}
                      style={{ width: "100%", height: "100%" }}
                    />
                }
              </div>
              <div className="pf-body">
                <div className="pf-num">FEATURE 0{i+1}</div>
                <h3 className="pf-h">{f.title}</h3>
                <p className="pf-p">{f.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pf-note">
          ※ 기술적인 구현 상세는 <b>상세 기술 문서</b>에서 다룹니다. 이 페이지는 유저가 게임을 만났을 때의 경험을 기준으로 정리되어 있습니다.
        </div>

        <PageFooter idx={pageIdx} total={total} />
      </div>
    </section>
  );
}

Object.assign(window, { ProjectOverviewPage, ProjectFeaturesPage });
