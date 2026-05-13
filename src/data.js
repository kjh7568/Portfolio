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
    overview: {
      subtitle: "혼자서 둘이 되는 시간차 협력 퍼즐 플랫포머",
      keyVisual: "./asset/clone-puzzle/title.png",
      links: {
        repository: "",   // 소스 코드 URL
        gameplay: "",     // 플레이 영상 URL
      },
      meta: {
        genre: "퍼즐 플랫포머",
        duration: "2026.04.15 ~ 2026.04.27 (13일)",
        team: "1인 (단독 개발)",
        environment: ["Unity 6 (6000.3.6f1)", "JetBrains Rider", "Fork"],
      },
      intent: [
        { label: "목표",       value: "혼자서도 협력 퍼즐의 쾌감을 느낄 수 있는 경험을 만드는 것입니다." },
        { label: "핵심 구조",  value: "플레이어의 행동을 프레임 단위로 녹화해, 클론으로 재생되는 시간차 협력을 구현했습니다." },
        { label: "디자인",     value: "기믹 조합으로 매 스테이지마다 \"어떻게 써야 하지?\"라는 발견을 반복하게 했습니다." },
        { label: "의도된 감정", value: "정답을 스스로 설계하는 과정에서 창작의 성취감이 남도록 의도했습니다." },
      ],
      techChips: [
        "Unity 6",
        "URP 2D",
        "Physics2D",
        "DOTween",
        "ScriptableObject",
        "Interface-driven Architecture",
        "Unity Input System",
      ],
    },
    features: [
      {
        num: 1,
        title: "내 행동이 클론이 됩니다",
        desc: "한 번의 플레이가 녹화되어 클론으로 재생됩니다. 과거의 내가 지금의 나를 돕는 시간차 협력 구조입니다.",
        image: "./asset/clone-puzzle/feature-1.gif",
      },
      {
        num: 2,
        title: "매 스테이지, 새로운 발견",
        desc: "저울 · 버튼 · 물체 등 기믹마다 규칙이 다릅니다. 매 스테이지마다 새로운 조합을 발견하는 즐거움이 있습니다.",
        image: "./asset/clone-puzzle/feature-2.gif",
      },
      {
        num: 3,
        title: "내가 직접 짜는 팀 전략",
        desc: "클론과 나의 행동 순서를 직접 설계합니다. 정답이 주어지지 않는, 풀이 설계의 성취감을 의도했습니다.",
        image: "./asset/clone-puzzle/feature-3.gif",
      },
    ],
    featuresVideo: "https://youtu.be/FbooNqqnYjU?si=GmteqdsE2sP1CjBy",
    // Section C / D — Technical Challenges.
    // Each entry follows the new SOLUTION block model:
    //   alternatives: [{ label, title, body }, { label, title, body, chosen: true }]
    //   why:      한 줄 (자연 줄바꿈으로 2줄까지)
    //   tradeoff: 한 줄, 영문 placeholder
    challenges: [
      {
        // SECTION C — Technical Challenge 01
        title: "저울/도르레 스택 무게 합산",
        subtitle: "스택 구조에서도 모든 무게를 누락 없이 합산하도록 개선",
        problem:
          "**맨 아래 무게만 인식**하고, 플레이어나 다른 물체가 박스 위에 오르는 경우에도 **위쪽 무게가 누락**됐습니다.",
        cause:
          "**1-Step 검사 구조**로, 각 무게 소스가 바로 아래 ScalePlatform에만 등록되어 **상단 무게가 누락**됐습니다.",
        alternatives: [
          {
            label: "ALT 01",
            title: "접촉 이벤트 그래프",
            body: "박스 접촉 이벤트로 '얹힘/떨어짐' 그래프를 유지하고, 루트가 따라가며 무게를 합산.",
          },
          {
            label: "ALT 02",
            title: "위쪽 OverlapBox 후 합산",
            body: "저울에 닿은 박스만 위쪽 OverlapBox로 무게를 더해 Register 호출. FixedUpdate마다 폴링.",
            chosen: true,
          },
        ],
        why: [
          "이벤트 손실이 구조적으로 없는 폴링 구조이기 때문입니다.",
          "코드 변경 없이 스택·소스 종류를 자유롭게 확장할 수 있기 때문입니다.",
        ],
        tradeoff: [
          "**비용**: FixedUpdate마다 OverlapBoxAll 2회 호출.",
          "**제약**: 2단 스택까지만 정확 — 2단 이상 적재할 상황이 없다는 전제로 감수했습니다.",
        ],
        results: [
          { metric: "1단 → 2단",     label: "스택 무게 인식" },
          { metric: "0 줄",          label: "기존 Platform 코드 변경" },
          { metric: "+1 Component",  label: "새 무게 소스 추가 비용" },
        ],
        code: {
          filename: "Assets/3.Script/Interaction/ScaleWeightSource.cs",
          language: "csharp",
          caption: "저울 위 박스가 자기 위쪽 한 단계를 OverlapBox로 합산해 플랫폼에 등록",
          highlightLines: [26],
          body:
`/// <summary>
/// 내 무게 + 위에 얹힌 무게를 합쳐 플랫폼에 등록합니다.
/// 매 FixedUpdate 폴링이라 충돌 이벤트 누락에 영향받지 않습니다.
/// </summary>
private void FixedUpdate()
{
    // 들려 있는 동안은 저울에서 제외
    if (_carryable != null && _carryable.IsCarried)
    {
        Unregister();
        return;
    }

    // 바닥 박스만 진입 — 아래에 다른 박스가 있으면 null
    ScalePlatform found = FindScalePlatformBelow();

    if (found != null)
    {
        // 좌·우 플랫폼 이동 시 이전 플랫폼에서 해제
        if (found != _currentPlatform)
        {
            Unregister();
            _currentPlatform = found;
        }
        // 핵심: 스택 전체 무게 = 내 무게 + 위에 얹힌 무게
        found.Register(this, GetWeight() + GetWeightOnTop());
    }
    else
    {
        Unregister();
    }
}

/// <summary>
/// 자기 바로 위쪽 한 단계만 검사해 얹힌 무게의 합을 돌려줍니다.
/// 위로 1단계만 보므로 2단 스택까지 정확합니다.
/// </summary>
private int GetWeightOnTop()
{
    Bounds b = _collider.bounds;
    Vector2 center = new Vector2(b.center.x, b.max.y + 0.1f);
    Vector2 size   = new Vector2(b.size.x * 0.8f, 0.2f);

    Collider2D[] hits = Physics2D.OverlapBoxAll(center, size, 0f);
    int total = 0;
    foreach (Collider2D hit in hits)
    {
        if (hit.gameObject == gameObject) continue;
        // 들려 있는 박스는 제외
        ICarryable carryable = hit.GetComponent<ICarryable>();
        if (carryable != null && carryable.IsCarried) continue;
        ScaleWeightSource ws = hit.GetComponent<ScaleWeightSource>();
        if (ws != null) total += ws.GetWeight();
    }
    return total;
}`,
        },
      },
      {
        // SECTION D — Technical Challenge 02
        title: "입력 녹화/재생 결정론",
        subtitle: "실행 순서 의존을 제거해 클론 입력을 100% 일치시키도록 개선",
        problem:
          "점프·인터랙트처럼 **누른 순간 한 번**만 인식하는 입력에서 클론이 같은 입력을 **다르게 재생**하는 현상이 있었습니다.",
        cause:
          "녹화용·소비용 플래그를 **하나의 변수**로 공유해, Actor가 먼저 소비하면 같은 프레임의 녹화 단계가 false를 기록하는 **실행 순서 의존**이 원인이었습니다.",
        alternatives: [
          {
            label: "ALT 01",
            title: "단일 플래그 + Script Execution Order 강제",
            body: "단일 플래그를 유지하고 [녹화 → 소비] 실행 순서를 Unity 프로젝트 설정으로 고정.",
          },
          {
            label: "ALT 02",
            title: "녹화용 / 소비용 플래그 분리",
            body: "입력 1회당 _jumpPressed(소비용)와 _jumpRecord(프레임 끝 초기화)를 동시에 set — 녹화·소비 시점 독립.",
            chosen: true,
          },
        ],
        why: [
          "외부 설정이 아닌 **컴포넌트 자체로 결정론 보증**.",
          "**IInputProvider 시그니처 보존** — Actor·Playback 변경 0줄.",
        ],
        tradeoff: [
          "**비용**: 입력 액션당 bool 필드 2개 (점프 → _jumpPressed + _jumpRecord).",
          "**제약**: 새 입력마다 두 필드 set 필수 — 누락 시 입력이 조용히 사라짐.",
        ],
        results: [
          { metric: "부분 손실 → 100%", label: "클론 재생 일치율" },
          { metric: "0 줄",              label: "외부 코드 변경 (IInputProvider 보존)" },
          { metric: "있음 → 없음",       label: "Script Execution Order 의존" },
        ],
        code: {
          filename: "Assets/3.Script/Input/PlayerInputProvider.cs",
          language: "csharp",
          caption: "같은 입력 1회당 소비용/녹화용 두 필드를 동시에 set — 호출 순서와 무관하게 동일 결과",
          highlightLines: [22],
          body:
`/// <summary>
/// 녹화용·소비용 입력 플래그를 분리해 Script Execution Order 의존을
/// 제거합니다. 같은 입력 1회당 두 필드를 동시에 set 하므로
/// Actor와 Recorder의 호출 순서가 결과에 영향을 주지 않습니다.
/// </summary>
public class PlayerInputProvider : MonoBehaviour, IInputProvider
{
    // Actor가 ConsumeJump()로 소비 — 소비 시 false
    private bool _jumpPressed;
    // Recorder가 PeekJumpForRecord()로 읽기만 — 프레임 끝에 일괄 초기화
    private bool _jumpRecord;

    private bool _interactPressed;
    private bool _interactRecord;

    public Vector2 MoveAxis { get; private set; }

    /// <summary>InputAction 콜백에서 호출. 두 플래그를 동시에 set.</summary>
    public void SetJump(bool pressed)
    {
        _jumpPressed = pressed;  // 게임 로직용
        _jumpRecord  = pressed;  // 녹화용 (독립 필드)
    }

    // Actor 측: 1회성 소비
    public bool ConsumeJump()
    {
        bool v = _jumpPressed;
        _jumpPressed = false;
        return v;
    }

    // Recorder 측: 읽기 전용 (소비하지 않음)
    public bool PeekJumpForRecord() => _jumpRecord;

    /// <summary>
    /// FixedUpdate가 모두 끝난 뒤 호출되어 녹화용 플래그만 초기화.
    /// (소비용 _jumpPressed는 ConsumeJump 호출 시점에 이미 false)
    /// </summary>
    public void ClearRecordFlagsAtEndOfFrame()
    {
        _jumpRecord     = false;
        _interactRecord = false;
    }
}`,
        },
      },
    ],
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
