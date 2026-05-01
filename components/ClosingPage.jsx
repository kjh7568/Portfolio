// Final Page — Closing / Contact recap
// "여기까지 봐주셔서 감사합니다 + 다시 한번 연락처"

function ClosingPage({ pageIdx, total }) {
  return (
    <section className="page closing-page">
      <div className="closing-inner">
        <div className="closing-eyebrow">END · 2026</div>

        <div className="closing-hero">
          <div className="closing-line" style={{ padding: "5px" }}>함께 일할</div>
          <div className="closing-line" style={{ padding: "5px" }}>기회를 기다립니다.</div>
        </div>

        <div className="closing-rule"></div>

        <div className="closing-grid">
          <div className="cg-block">
            <div className="cg-lbl">CONTACT</div>
            <div className="cg-val">rwrwg159@gmail.com</div>
            <div className="cg-val">010-5717-0115</div>
          </div>
          <div className="cg-block">
            <div className="cg-lbl">LINKS</div>
            <div className="cg-val">github.com/kjh7568</div>
            <div className="cg-val">
</div>
          </div>
          <div className="cg-block">
            <div className="cg-lbl">DOCUMENT</div>
            <div className="cg-val">2026.04 · v1.0</div>
            <div className="cg-val">Unity Client Developer</div>
          </div>
        </div>

        <div className="closing-mark">
          <div className="cm-name">김지훈 · Jeehoon Kim</div>
        </div>
      </div>
    </section>);
}

window.ClosingPage = ClosingPage;