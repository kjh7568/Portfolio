// Page 3 — Tech Stack
// 카테고리별 (Core / Graphics / Network / Tools) + 각 기술의 사용처(어느 프로젝트, 어느 기능)

const TECH_STACK = [
{
  cat: "Core",
  num: "01",
  featured: true,
  items: [
  { name: "Unity 2022 LTS · Unity 6", usage: <>• 전 프로젝트 메인 엔진</> },
  { name: "C# / .NET", usage: "전 프로젝트 게임플레이 코드" },
  { name: <>디자인 패턴<br/>(FSM · Abstract Factory · Factory)</>, usage: <>• Augment Zero : 보스 AI<br/>• 유니모 : 몬스터 생성<br/>• TavernTales : 스킬</> },
  { name: "인터페이스 기반 설계", usage: <>• Hive Survivor : 패시브 9종<br/>• 유니모 : IDamageable<br/>• TavernTales : ISkillExecutor</> }]

},
{
  cat: "Graphics",
  num: "02",
  items: [
  { name: "URP / URP 2D", usage: <>• Legend of Gem : PC 3D 렌더링<br/>• Augment Zero : PC 3D 렌더링<br/>• Hive Survivor · Clone Puzzle : 2D 최적화</> },
  { name: "Shader Graph / HLSL", usage: <>• Augment Zero : 글리치 셰이더</> },
  { name: "DOTween", usage: <>• BANG! Online : UI 트랜지션<br/>• Augment Zero : 무기 UI 팝업</> },
  { name: "Particle / VFX", usage: <>• Legend of Gem : 피격 시 피 튀김 연출</> }]

},
{
  cat: "Network & Data",
  num: "03",
  items: [
  { name: "Photon Fusion", usage: <>• BANG! Online : 룸 매칭,<br/>&nbsp;&nbsp;&nbsp;[Networked] 기반 상태 동기화</> },
  { name: "Firebase Auth · Firestore", usage: <>• BANG! Online : 유저관리 - 로그인<br/>• 유니모 : 유저관리 - 로그인</> },
  { name: "RPC / NetworkedVar", usage: <>• BANG! Online : 이벤트 통신, 역할별 권한 검증</> },
  { name: "JSON / CSV 데이터 드리븐", usage: <>• Hive Survivor : 장비 테이블<br/>• Legend of Gem : 아이템 옵션<br/>• TavernTales: 용병, 몬스터 데이터</> }]

},
{
  cat: "Tools & Pipeline",
  num: "04",
  items: [
  { name: "ScriptableObject", usage: <>• Augment Zero : 증강 모듈<br/>• ClonePuzzle : 스테이지, 오디오 데이터</> },
  { name: "Git / GitHub Flow", usage: <>• BANG! Online : Git Flow 활용<br/>• TavernTales : 46개 피처 브랜치</> },
  { name: "Android · iOS 빌드", usage: <>• TavernTales : Android APK 47.6MB<br/>• ClonePuzzle : Android APK 59.8MB<br/>• 유니모 : 멀티플랫폼 빌드</> }]

}];


function TechStackPage({ pageIdx, total }) {
  return (
    <section className="page tech-page">
      <div className="page-pad">
        <h2 className="tech-title">기술 스택</h2>
        <p className="tech-sub">각 기술을 어느 프로젝트의 어느 기능에 사용했는지 함께 명시했습니다.</p>

        <div className="tech-grid">
          {TECH_STACK.map((cat) =>
          <div key={cat.cat} className={"tech-col" + (cat.featured ? " featured" : "")}>
              <div className="tc-head">
                <div className="tc-num">{cat.num}</div>
                <div className="tc-cat">{cat.cat}</div>
              </div>
              <ul className="tc-list">
                {cat.items.map((it, i) =>
              <li key={i} className="tc-item">
                    <div className="tc-name">{it.name}</div>
                    <div className="tc-usage">{it.usage}</div>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <PageFooter idx={pageIdx} total={total} />
      </div>
    </section>);

}

window.TechStackPage = TechStackPage;