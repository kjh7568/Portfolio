// Page 4 — Project Timeline
// 7개 프로젝트가 한 페이지에 시간/임팩트로 펼쳐지는 인덱스.

function TimelinePage({ pageIdx, total, projects }) {
  return (
    <section className="page timeline-page">
      <div className="page-pad">
        <h2 className="tl-title">Project</h2>
        <p className="tl-sub">아래 순서는 개발 일자 기준입니다.</p>

        <div className="tl-list">
          {projects.map((p, i) =>
          <div key={p.id} className={"tl-row" + (i === 0 ? " tl-row-feat" : "")}>
              <div className="tl-num">{p.id}</div>
              <div className="tl-bar" aria-hidden="true"></div>
              <div className="tl-meta">
                <div className="tl-name">{p.name}</div>
                <div className="tl-tag">{p.tagline}</div>
              </div>
              <div className="tl-genre">{p.genre}</div>
              <div className="tl-period">{p.period}</div>
              <div className="tl-page">P. {String(5 + i * 2).padStart(2, "0")}</div>
            </div>
          )}
        </div>

        <div className="tl-footer-note">
          ※ 각 프로젝트는 2페이지 — <b>개요</b>(목적·환경·링크) + <b>기능 소개</b>(구현한 인게임 기능). 기술 상세는 별도 기술 문서로 분리했습니다.
        </div>
        <div className="tl-footer-note">
          📌 프로젝트 소개에 GIF를 활용하고 있어, PDF보다 <a href="https://kjh7568.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">웹사이트</a>에서 확인하시면 더욱 이해가 쉽습니다.
        </div>

        <PageFooter idx={pageIdx} total={total} />
      </div>
    </section>);

}

window.TimelinePage = TimelinePage;
