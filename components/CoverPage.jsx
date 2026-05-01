// Page 1 — Cover
// 거대 타이포 + 표어가 메인. "이 사람이 누구이고 무엇을 만드는가" 15초 후킹.

function CoverPage() {
  return (
    <section className="page cover-page">
      <div className="cover-inner">
        {/* Top eyebrow */}
        <div className="cover-top">
          <div className="cover-eyebrow">
            UNITY CLIENT DEVELOPER · PORTFOLIO 2026
          </div>
        </div>

        {/* Slogan as hero */}
        <div className="cover-hero" style={{ padding: "0px" }}>
          <div className="cover-slogan">
            <div className="line" style={{ fontSize: "60px", padding: "5px" }}>문제의 원인을 <span className="muted">추적하고,</span></div>
            <div className="line" style={{ fontSize: "60px", padding: "5px" }}>구조로 <span className="hl-blue">해결</span>하고,</div>
            <div className="line" style={{ fontSize: "60px", padding: "5px" }}>수치로 <span className="muted">증명합니다.</span></div>
          </div>
        </div>

        {/* Bottom — name + meta */}
        <div className="cover-bottom" style={{ padding: "18px 0px 0px" }}>
          <div className="cover-name-block">
            <div className="cover-label">PORTFOLIO BY</div>
            <h1 className="cover-name">김지훈</h1>
            <div className="cover-name-en">Jeehoon Kim</div>
          </div>
          <div className="cover-meta">
            <div className="meta-row">
              <span className="lbl">ENGINE</span>
              <span className="val">Unity 2022 LTS ·  Unity 6 · C#</span>
            </div>
            <div className="meta-row">
              <span className="lbl">FOCUS</span>
              <span className="val">Game Client · Architecture</span>
            </div>
            <div className="meta-row">
              <span className="lbl">DOCUMENT</span>
              <span className="val">2026.04 · v1.0</span>
            </div>
          </div>
        </div>

        {/* Decorative bottom bar */}
        <div className="cover-bar" aria-hidden="true">
          <div className="cover-bar-fill"></div>
        </div>
      </div>
    </section>);

}

window.CoverPage = CoverPage;