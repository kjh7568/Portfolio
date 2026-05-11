// =========================================================
// Project data — IDs and seeds only. No real content.
// Adding a project = adding one entry here.
// =========================================================
window.PROJECTS = [
  {
    id: "p1",
    seed: 11,
    name: "Clone Puzzle",
    genre: "퍼즐 플랫포머",
    year: "2026",
    desc: "혼자서 둘이 되는 시간차 협력 퍼즐 플랫포머",
    tags: ["URP 2D", "Physics2D", "DOTween", "Unity Input System"],
  },
  {
    id: "p2",
    seed: 23,
    name: "Tavern Tales",
    genre: "길드 운영 시뮬레이션 / 오토배틀러",
    year: "2026",
    desc: "선술집에서 용병을 고용하고 의뢰를 수행하는 자동 전투 길드 시뮬레이션",
    tags: ["Auto-Battle", "Grid-based Combat", "BFS 경로 탐색", "Factory Pattern"],
  },
  {
    id: "p3",
    seed: 41,
    name: "Legend of Gem",
    genre: "3D 핵앤슬래시 액션 RPG",
    year: "2025",
    desc: "메인 젬과 보조 젬의 조합으로 자신만의 스킬을 만들어가는 3D 핵앤슬래시 액션 RPG",
    tags: ["NavMesh", "CSV 데이터 드리븐", "Dependency Injection", "ScriptableObject"],
  },
];

// =========================================================
// Other projects — shown as a 4-column grid below the main
// project navigation. Just year / genre / name.
// =========================================================
window.OTHER_PROJECTS = [
  { name: "Hive Survivor",  genre: "2D 탑다운 / 뱀서라이크",      year: "2025" },
  { name: "BANG! Online",   genre: "온라인 멀티플레이 보드게임",  year: "2025" },
  { name: "Augment Zero",   genre: "FPS / 로그라이크",            year: "2025" },
  { name: "유니모",         genre: "모바일 캐주얼 수집 · 육성",   year: "2025" },
];

// =========================================================
// Tech Stack — 4 groups.
// Each item has a `level` controlling its visual weight:
//   "hero" — the column's headline skill (Level 1, exactly 1 per column)
//   "sub"  — secondary skill (Level 2, sub-heading style, same across columns)
// Bullets under each item = Level 3 (supporting detail).
// =========================================================
window.TECH_STACK = [
  {
    eyebrow: "01 · CORE",
    desc: "전 프로젝트의 메인 엔진 / 언어 / 설계 패턴",
    items: [
      {
        level: "hero",
        name: "Unity 2022 LTS · Unity 6",
        usages: ["전 프로젝트 메인 엔진"],
      },
      {
        level: "sub",
        name: "C# / .NET",
        usages: ["재사용 가능한 구조 설계"],
      },
      {
        level: "sub",
        name: "디자인 패턴 (FSM · Abstract Factory · Factory · DI)",
        usages: [
          "Augment Zero : 보스 AI",
          "유니모 : 몬스터 생성",
          "TavernTales : 스킬",
          "Legend of Gem : 스킬 젬 시스템",
        ],
      },
      {
        level: "sub",
        name: "인터페이스 기반 설계",
        usages: [
          "Hive Survivor : 패시브 9종",
          "유니모 : IDamageable",
          "TavernTales : ISkillExecutor",
        ],
      },
    ],
  },
  {
    eyebrow: "02 · GRAPHICS",
    desc: "URP 파이프라인 / 트랜지션 / 이펙트",
    items: [
      {
        level: "hero",
        name: "URP / URP 2D",
        usages: [
          "Legend of Gem : PC 3D 렌더링",
          "Augment Zero : PC 3D 렌더링",
          "Hive Survivor · Clone Puzzle : 2D 최적화",
        ],
      },
      {
        level: "sub",
        name: "DOTween",
        usages: [
          "BANG! Online : UI 트랜지션",
          "Augment Zero : 무기 UI 팝업",
        ],
      },
      {
        level: "sub",
        name: "Particle / VFX",
        usages: [
          "Legend of Gem : 피격 시 피 튀김 연출",
          "Legend of Gem : 스킬 이펙트",
        ],
      },
    ],
  },
  {
    eyebrow: "03 · NETWORK & DATA",
    desc: "멀티플레이 동기화 / 인증 / 데이터 드리븐",
    items: [
      {
        level: "hero",
        name: "Photon Fusion",
        usages: ["BANG! Online : 룸 매칭, [Networked] 기반 상태 동기화"],
      },
      {
        level: "sub",
        name: "Firebase Auth · Firestore",
        usages: [
          "BANG! Online : 유저관리 · 로그인",
          "유니모 : 유저관리 · 로그인",
        ],
      },
      {
        level: "sub",
        name: "RPC / NetworkedVar",
        usages: ["BANG! Online : 이벤트 통신, 역할별 권한 검증"],
      },
      {
        level: "sub",
        name: "JSON / CSV 데이터 드리븐",
        usages: [
          "Hive Survivor : 장비 테이블",
          "Legend of Gem : 아이템 옵션",
          "TavernTales : 풍병, 몬스터 데이터",
        ],
      },
    ],
  },
  {
    eyebrow: "04 · TOOLS & PIPELINE",
    desc: "에디터 워크플로우 / 형상관리 / 빌드 배포",
    items: [
      {
        level: "hero",
        name: "Git / GitHub Flow",
        usages: [
          "BANG! Online : Git Flow 활용",
          "TavernTales : 46개 피처 브랜치",
        ],
      },
      {
        level: "sub",
        name: "ScriptableObject",
        usages: [
          "Augment Zero : 증강 모듈",
          "Clone Puzzle : 스테이지, 오디오 데이터",
        ],
      },
      {
        level: "sub",
        name: "Android · iOS 빌드",
        usages: [
          "TavernTales : Android APK 47.6MB",
          "Clone Puzzle : Android APK 59.8MB",
          "유니모 : 멀티플랫폼 빌드",
        ],
      },
    ],
  },
];
