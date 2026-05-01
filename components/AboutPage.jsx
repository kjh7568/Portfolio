// Page 2 — About Me (A4 landscape)
// Left: photo + identity + contact
// Mid:  학습 라인 (vertical)
// Right: 자기소개 카드

function AboutPage({ pageIdx, total }) {
  return (
    <section className="page about-page">
      <div className="page-pad">
        <h2 className="tech-title">Profile</h2>
        <p></p>

        <div className="about-grid">
          {/* LEFT — photo + identity + contact */}
          <div className="about-left">
            <div className="about-photo">
              <img src="assets/Profile%20photo.jpg" alt="김지훈" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div className="about-identity">
              <div className="ai-name-ko">김지훈</div>
              <div className="ai-name-en">Jeehoon Kim</div>
              <div className="ai-role">Unity Client Developer</div>
            </div>

            <div className="about-contact">
              <a className="ac-row" href="mailto:hello@example.com">
                <span className="ac-ic"><Icon name="mail" size={13} /></span>
                <span className="ac-lbl">EMAIL</span>
                <span className="ac-val">rwrwg159@gmail.com</span>
              </a>
              <a className="ac-row" href="https://github.com/example" target="_blank">
                <span className="ac-ic"><Icon name="github" size={13} /></span>
                <span className="ac-lbl">GITHUB</span>
                <span className="ac-val">github.com/kjh7568</span>
              </a>
              <div className="ac-row">
                <span className="ac-ic"><Icon name="phone" size={13} /></span>
                <span className="ac-lbl">PHONE</span>
                <span className="ac-val">010-5717-0115</span>
              </div>
            </div>
          </div>

          {/* MID — learning timeline (horizontal) */}
          <div className="about-mid">
            <div>
              <div className="ar-section-head">학습 라인 · Education</div>
              <div className="learning-line">
                <div className="ll-track" aria-hidden="true"></div>

                <div className="ll-item">
                  <div className="ll-dot"></div>
                  <div className="ll-period">2016.03 — 2019.02</div>
                  <div className="ll-name">율곡 고등학교</div>
                  <div className="ll-meta">자연계열</div>
                </div>

                <div className="ll-item">
                  <div className="ll-dot"></div>
                  <div className="ll-period">2019.03 — 2026.08</div>
                  <div className="ll-name">강원대학교</div>
                  <div className="ll-meta">컴퓨터과학전공</div>
                </div>

                <div className="ll-item ll-current">
                  <div className="ll-dot ll-dot-active"></div>
                  <div className="ll-period">2025.01 — 2025.08</div>
                  <div className="ll-name">경일게임아카데미</div>
                  <div className="ll-meta">클라이언트 개발자 과정</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — intro card */}
          <div className="about-right">
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div className="ar-section-head">소개 · Introduction</div>
              <div className="intro-card">
                <div className="intro-headline">
                  구조를 먼저 세우고,<br />
                  <em>경험</em>을 먼저 그립니다.
                </div>
                <ul className="intro-bullets">
                  <li>기능을 만들기 전에 <span className="hl-soft">데이터의 흐름과 책임 소재</span>를 먼저 그립니다.</li>
                  <li>플레이어가 어떤 경험을 느껴야 하는지를 정의한 뒤,{" "}
                  <span className="hl-soft">인터페이스와 시스템</span>으로 그 경험을 재현합니다.</li>
                  <li>7개 프로젝트에서 같은 원칙을 반복 적용했고, 그 중 5개를{" "}
                  <span className="hl-soft">혼자서 처음부터 끝까지</span> 완주했습니다.</li>
                </ul>
                <div className="intro-keys">
                  <div className="intro-key">
                    <span className="intro-key-lbl">구조 우선</span>
                    <span className="intro-key-desc">책임 소재 → 데이터 흐름 → 코드</span>
                  </div>
                  <div className="intro-key">
                    <span className="intro-key-lbl">인터페이스 기반</span>
                    <span className="intro-key-desc">1개의 추상으로 N개의 구현</span>
                  </div>
                  <div className="intro-key">
                    <span className="intro-key-lbl">데이터 기반</span>
                    <span className="intro-key-desc">ScriptableObject · JSON · CSV로 분리</span>
                  </div>
                  <div className="intro-key">
                    <span className="intro-key-lbl">경험 중심</span>
                    <span className="intro-key-desc">적이 아니라 "관문"을 만든다</span>
                  </div>
                  <div className="intro-key">
                    <span className="intro-key-lbl">처음부터 끝까지</span>
                    <span className="intro-key-desc">기획 · UI · 데이터 · 문서 · 빌드까지</span>
                  </div>
                </div>
                <div className="intro-stats">
                  7 PROJECTS · 367 SCRIPTS · 46 BRANCHES · 1 APK SHIPPED
                </div>
              </div>
            </div>
          </div>
        </div>

        <PageFooter idx={pageIdx} total={total} />
      </div>
    </section>);

}

window.AboutPage = AboutPage;
