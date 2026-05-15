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
        { label: "목표",       value: "혼자서도 **협력 퍼즐의 쾌감**을 느낄 수 있는 경험을 만드는 것입니다." },
        { label: "핵심 구조",  value: "플레이어의 행동을 **프레임 단위로 녹화**해, 클론으로 재생되는 **시간차 협력**을 구현했습니다." },
        { label: "디자인",     value: "기믹 조합으로 매 스테이지마다 **어떻게 써야 하지?**라는 발견을 반복하게 했습니다." },
        { label: "의도된 감정", value: "정답을 스스로 설계하는 과정에서 **창작의 성취감**이 남도록 의도했습니다." },
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
        media: {
          before: {
            src: "./asset/clone-puzzle/feature-2.gif",
            alt: "무게가 누락되는 저울 기믹 문제 상황",
            label: "해결 전",
            note: "위쪽 무게 누락",
            caption: "위쪽 물체의 무게가 누락되어 저울 반응이 의도와 다르게 보이던 상태",
          },
          after: {
            src: "./asset/clone-puzzle/feature-2.gif",
            alt: "스택 무게가 합산되는 저울 기믹 개선 후",
            label: "해결 후",
            note: "스택 무게 합산",
            caption: "스택된 물체의 무게를 합산해 기믹 결과가 예측 가능하게 바뀐 상태",
          },
        },
        problem:
          "**맨 아래 무게만 인식**하고, 플레이어나 다른 물체가 박스 위에 오르는 경우에도 **위쪽 무게가 누락**됐습니다.",
        cause:
          "**1-Step 검사 구조**로, 각 무게 소스가 바로 아래 ScalePlatform에만 등록되어 **상단 무게가 누락**됐습니다.",
        alternatives: [
          {
            label: "대안 1",
            title: "접촉 이벤트 그래프",
            body: "박스 접촉 이벤트로 '얹힘/떨어짐' 그래프를 유지하고, 루트가 따라가며 무게를 합산.",
          },
          {
            label: "대안 2",
            title: "위쪽 OverlapBox 후 합산",
            body: "저울에 닿은 박스만 위쪽 OverlapBox로 무게를 더해 Register 호출. FixedUpdate마다 폴링.",
            chosen: true,
          },
        ],
        why: [
          "이벤트 손실이 구조적으로 없는 **폴링 구조**이기 때문입니다.",
          "**기존 Platform 코드 변경 없이** 스택·소스 종류를 확장할 수 있기 때문입니다.",
        ],
        tradeoff: [
          "**비용**: FixedUpdate마다 OverlapBoxAll 2회 호출.",
          "**제약**: 2단 스택까지만 정확 — 2단 이상 적재할 상황이 없다는 전제로 감수했습니다.",
        ],
        results: [
          { metric: "1단 → 2단",     label: "스택 무게 인식" },
          { metric: "0 줄",          label: "Platform 코드 변경" },
          { metric: "+1 Component",  label: "새 무게 소스 추가 비용" },
        ],
        code: {
          filename: "Assets/3.Script/Interaction/ScaleWeightSource.cs",
          language: "csharp",
          caption: "저울 위 박스가 자기 위쪽 한 단계를 OverlapBox로 합산해 플랫폼에 등록",
          highlightLines: [27],
          body:
`// 저울 위에 올라간 물체의 무게를 계산해서 플랫폼에 전달하는 클래스입니다.
public class ScaleWeightSource : MonoBehaviour
{
    // 내 무게와 위에 얹힌 무게를 함께 계산합니다.
    // 매 프레임 확인해서 충돌 이벤트 누락을 피했습니다.
    private void FixedUpdate()
    {
        // 들려 있는 동안은 저울에서 제외합니다.
        if (_carryable != null && _carryable.IsCarried)
        {
            Unregister();
            return;
        }

        // 아래에 다른 박스가 없을 때만 저울에 등록합니다.
        ScalePlatform found = FindScalePlatformBelow();

        if (found != null)
        {
            // 다른 저울로 이동했다면 이전 등록을 먼저 해제합니다.
            if (found != _currentPlatform)
            {
                Unregister();
                _currentPlatform = found;
            }
            // 스택 전체 무게를 한 번에 넘겨줍니다.
            found.Register(this, GetWeight() + GetWeightOnTop());
        }
        else
        {
            Unregister();
        }
    }

    // 바로 위 한 단계만 확인해 얹힌 무게를 더합니다.
    // 이 프로젝트에서는 2단 스택까지만 필요했습니다.
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
            // 들려 있는 박스는 계산에서 제외합니다.
            ICarryable carryable = hit.GetComponent<ICarryable>();
            if (carryable != null && carryable.IsCarried) continue;
            ScaleWeightSource ws = hit.GetComponent<ScaleWeightSource>();
            if (ws != null) total += ws.GetWeight();
        }
        return total;
    }
}`,
        },
      },
      {
        // SECTION D — Technical Challenge 02
        title: "입력 녹화/재생 결정론",
        subtitle: "실행 순서 의존을 제거해 클론 입력을 100% 일치시키도록 개선",
        media: {
          before: {
            src: "./asset/clone-puzzle/feature-1.gif",
            alt: "클론 입력 재생이 어긋나는 문제 상황",
            label: "해결 전",
            note: "입력 소비 순서에 따라 위치 불일치",
            caption: "입력 소비 순서에 따라 클론이 같은 행동을 다르게 재생하던 상태",
          },
          after: {
            src: "./asset/clone-puzzle/feature-1.gif",
            alt: "클론 입력 재생이 일치하는 개선 후",
            label: "해결 후",
            note: "녹화/소비 분리로 동일 위치 재생",
            caption: "녹화용 입력과 소비용 입력을 분리해 클론 행동이 일관되게 재생되는 상태",
          },
        },
        problem:
          "점프·인터랙트처럼 **누른 순간 한 번**만 인식하는 입력에서 클론이 같은 입력을 **다르게 재생**하는 현상이 있었습니다.",
        cause:
          "녹화용·소비용 플래그를 **하나의 변수**로 공유해, Actor가 먼저 소비하면 같은 프레임의 녹화 단계가 false를 기록하는 **실행 순서 의존**이 원인이었습니다.",
        alternatives: [
          {
            label: "대안 1",
            title: "단일 플래그 + 실행 순서 고정",
            body: "단일 플래그를 유지하고 [녹화 → 소비] 실행 순서를 Unity 프로젝트 설정으로 고정.",
          },
          {
            label: "대안 2",
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
          { metric: "0 줄",              label: "외부 코드 변경" },
          { metric: "있음 → 없음",       label: "실행 순서 의존" },
        ],
        code: {
          caption: "같은 입력 1회당 소비용/녹화용 두 필드를 동시에 set — 호출 순서와 무관하게 동일 결과",
          files: [
            {
              name: "Assets/3.Script/Input/InputRecorder.cs",
              lang: "C#",
              highlightLines: [40],
              body:
`// 플레이어 입력을 녹화하면서 Actor에게도 같은 입력을 제공하는 클래스입니다.
public class InputRecorder : MonoBehaviour, IInputProvider, IRecordable
{
    // 입력을 소비할 값과 녹화에 남길 값을 따로 둡니다.
    // ConsumeXxx()가 읽으면 바로 false로 바뀝니다.
    private bool _jumpPressed;
    private bool _interactPressed;
    private bool _carryPressed;
    // 녹화용 값은 기록이 끝난 뒤에만 비웁니다.
    private bool _jumpRecord;
    private bool _interactRecord;
    private bool _carryRecord;

    private Vector2 _moveDirection;
    private List<FrameInput> _recordedFrames = new();
    private float _recordStartTime;
    private bool _isRecording;

    // Actor가 읽는 입력 인터페이스입니다.
    public Vector2 MoveDirection => _moveDirection;

    public bool ConsumeJump()
    {
        bool v = _jumpPressed; _jumpPressed = false; return v;
    }
    // 나머지 입력도 같은 방식으로 소비합니다.

    // 같은 입력 한 번을 두 용도에 함께 저장합니다.
    public void SetInput(Vector2 move, bool jump, bool interact, bool carry)
    {
        _moveDirection = move;
        if (jump)     { _jumpPressed    = true; _jumpRecord    = true; }
        if (interact) { _interactPressed = true; _interactRecord = true; }
        if (carry)    { _carryPressed   = true; _carryRecord   = true; }
    }

    // 입력을 한 프레임 단위로 기록합니다.
    private void FixedUpdate()
    {
        if (!_isRecording) return;

        _recordedFrames.Add(new FrameInput
        {
            timestamp       = Time.time - _recordStartTime,
            moveDirection   = _moveDirection,
            jumpPressed     = _jumpRecord,       // Consume 순서와 상관없이 남아 있습니다.
            interactPressed = _interactRecord,
            carryPressed    = _carryRecord,
        });

        // 기록이 끝난 뒤 녹화용 값만 비웁니다.
        _jumpRecord = _interactRecord = _carryRecord = false;
    }
}`,
            },
            {
              name: "Assets/3.Script/Input/IInputProvider.cs",
              lang: "C#",
              body:
`// 플레이어와 클론이 같은 방식으로 입력을 넘기기 위한 인터페이스입니다.
// 플레이어는 버튼 입력을, 클론은 녹화 데이터를 이 형태로 제공합니다.
public interface IInputProvider
{
    // 이동 방향을 넘깁니다. (-1 ~ 1)
    Vector2 MoveDirection { get; }

    // 점프 입력은 한 번 읽으면 소비됩니다.
    bool ConsumeJump();

    // 인터랙트 입력도 한 번 읽으면 소비됩니다.
    bool ConsumeInteract();

    // 집기와 내려놓기 입력도 같은 규칙을 따릅니다.
    bool ConsumeCarry();
}`,
            },
          ],
        },
      },
    ],
    retrospective: {
      keep: [
        {
          title: "IInputProvider 인터페이스 분리.",
          body: [
            "플레이어와 클론을 같은 인터페이스로 연결해 **이중 플래그 도입** 비용을 줄였습니다.",
            "Actor·ClonePlayback 변경 0줄로 설계 비용 절감을 증명했습니다.",
          ],
        },
        {
          title: "플레이어 경험 기준의 문제 정의.",
          body: [
            "TROUBLESHOOTING 02는 '**퍼즐 메커닉 자체가 무너진다**'는 경험 문제였습니다.",
            "플레이어가 실제로 겪는 결과를 기준으로 심각도를 판단했습니다.",
          ],
        },
      ],
      problem: [
        {
          title: "저울 기믹에서 2단 고정 스택 한계.",
          body: [
            "OverlapBox가 바로 위 한 단계만 검사해 **3단 이상 적재 시 상단 무게가 누락**됩니다.",
            "'2단까지만 사용'을 전제로 스택 깊이를 가정에 묻어둔 설계입니다.",
          ],
        },
        {
          title: "스테이지 이터레이션 구조의 부재.",
          body: [
            "스테이지 데이터는 분리했지만, 기믹 배치는 씬 편집에 의존했습니다.",
            "**기획 변경(스테이지 추가 등)마다 씬 작업이 필요한** 구조라 이터레이션이 느려졌습니다.",
          ],
        },
      ],
      try: [
        {
          num: 1,
          title: "여러 층으로 쌓인 무게까지 계산",
          body: "바로 위 한 칸만 보던 방식을 바꿔, 쌓인 물체를 끝까지 따라갑니다. 층수가 늘어나도 무게가 빠지지 않게 합니다.",
        },
        {
          num: 2,
          title: "입력 종류를 한 곳에서 관리",
          body: "점프, 상호작용, 집기 입력을 한 목록에서 관리합니다. 새 입력도 녹화와 재생에 함께 반영되게 합니다.",
        },
        {
          num: 3,
          title: "클론 재생 방식 다양화",
          body: "클론을 한 번만 움직일지, 반복할지, 횟수를 정할지 선택합니다. 스테이지마다 필요한 방식으로 조정합니다.",
        },
      ],
    },
  },
  {
    id: "p2",
    seed: 23,
    name: "Tavern Tales",
    genre: "길드 운영 시뮬레이션 / 오토배틀러",
    year: "2026",
    desc: "선술집에서 용병을 고용하고 의뢰를 수행하는 자동 전투 길드 시뮬레이션",
    tags: ["Auto-Battle", "Grid-based Combat", "BFS 경로 탐색", "Factory Pattern"],
    overview: {
      subtitle: "선술집에서 용병을 고용하고 의뢰를 수행하는 자동 전투 길드 시뮬레이션",
      keyVisual: "./asset/tavern-tales/title.png",
      links: {
        repository: "",
        gameplay: "",
      },
      meta: {
        genre: "길드 운영 시뮬레이션 / 오토배틀러",
        duration: "2026.01.14 ~ 2026.03.27 (73일)",
        team: "1인 (단독 개발)",
        environment: ["Unity 6.0.3f1", "JetBrains Rider", "Fork"],
      },
      intent: [
        { label: "목표",       value: "플레이어가 용병을 단순한 전투 자원이 아닌 **관리해야 할 동료**로 느끼게 하는 것이었습니다." },
        { label: "핵심 구조",  value: "**역할군 기반 자동 전투**를 구현해, 배치 편성이 그대로 전투 결과로 이어지게 했습니다." },
        { label: "지속성 설계", value: "전투 후 부상이 유지되고, 사망한 용병은 **부활 없이는 복귀할 수 없도록** 설계했습니다." },
        { label: "의도된 감정", value: "**팀 상태를 살피며 의뢰를 고르는** 길드 운영의 책임감을 플레이의 중심에 두었습니다." },
      ],
      techChips: [
        "Unity 6",
        "C#",
        "URP",
        "Android",
        "Auto-Battle",
        "Grid-based Combat",
        "Factory Pattern",
        "BFS 경로 탐색",
        "Drag & Drop UI (uGUI)",
      ],
    },
    features: [
      {
        num: 1,
        title: "탱커가 앞에서 맞아준다",
        desc: "배치한 위치가 전투에서 그대로 살아납니다. 탱커가 앞에서 버티고 딜러가 뒤에서 치는, 편성 자체가 전략인 전투입니다.",
        image: "./asset/tavern-tales/feature-1.png",
      },
      {
        num: 2,
        title: "마나를 채워 사용하는 스킬",
        desc: "전투를 거칠수록 마나가 차오르고, 가득 찼을 때 고유 스킬이 터집니다. '지 용병 마나 다 찼다'는 그 순간을 기대하며 전투를 지켜보게 됩니다.",
        image: "./asset/tavern-tales/feature-2.gif",
      },
      {
        num: 3,
        title: "용병은 관리해야 할 동료다",
        desc: "전투가 끝나도 부상과 사망은 그대로 남습니다. 팀 상태를 살피며 의뢰를 고르는 것이 길드 운영의 핵심입니다.",
        image: "./asset/tavern-tales/feature-3.gif",
      },
    ],
    featuresVideo: "",
    challenges: [
      {
        // SECTION C — Technical Challenge 01
        title: "회전 대기 구간 유닛 칸 이중 점유",
        subtitle: "이동 의도 선언 시점에 칸을 선점하는 이중 점유 구조로 시점 공백 해소",
        media: {
          before: {
            src: "./asset/tavern-tales/challenge-c-before.gif",
            alt: "회전 대기 중 두 유닛이 같은 칸으로 이동하는 문제 상황",
            label: "해결 전",
            note: "회전 중 칸 비어 있음",
            caption: "회전 애니메이션 재생 중 목표 칸이 빈 것으로 판단되어 두 유닛이 동시에 이동하는 상태",
          },
          after: {
            src: "./asset/tavern-tales/challenge-c-after.gif",
            alt: "선점 예약으로 칸 겹침이 해소된 개선 후",
            label: "해결 후",
            note: "예약으로 칸 선점",
            caption: "이동 결정 시점에 칸을 미리 예약해 회전 중에도 겹침이 발생하지 않는 상태",
          },
        },
        problem:
          "회전 애니메이션(0.5초) 재생 중 **목표 칸이 빈 상태**로 유지되어, 인접 유닛이 같은 칸으로 이동 — **한 칸에 두 유닛이 동시 점유**하는 겹침이 발생했습니다.",
        cause:
          "**칸 점유 처리가 실제 이동 시작 시점에만 존재**해, 회전 구간에서 목표 칸이 빈 상태로 남아 **다른 유닛의 경로 탐색에 유효한 이동지로 포함**됐습니다.",
        alternatives: [
          {
            label: "대안 1",
            title: "회전 시간 0초 단축",
            body: "이동 결정과 실행 사이 시간 자체를 제거. 애니메이션 없이 즉시 다음 칸으로 이동.",
          },
          {
            label: "대안 2",
            title: "이동 결정 시점에 목표 칸 선점 예약",
            body: "이동 결정 즉시 목표 칸을 예약 점유로 선점, 이동 완료 시 정식 점유로 전환합니다.",
            chosen: true,
          },
        ],
        why: [
          "**UX 보존**: 회전 애니메이션은 방향 변화를 인지시키는 피드백 — 제거 시 가독성 손실.",
          "**부가 활용**: 예약 상태를 적 이동 선감지에 재사용할 수 있기 때문입니다.",
        ],
        tradeoff: [
          "**상태 증가**: 칸당 관리 상태 1개(점유) → 2개(점유 + 예약)로 늘어남.",
          "**수동 해제 책임**: 예약 해제 누락 시 칸이 영구 예약 상태로 남는 버그 가능.",
        ],
        results: [
          { metric: "있음 → 없음",  label: "동일 칸 겹침" },
          { metric: "+45줄",         label: "그리드 예약 레이어" },
          { metric: "+1 기능",       label: "적 이동 예약 감지 파생" },
        ],
        code: {
          caption: "이동 결정 시점에 칸을 선점하고 이동 완료 후 해제하는 이중 점유 흐름",
          files: [
            {
              name: "Assets/3.Script/Grid/GridSystem.cs",
              lang: "C#",
              highlightLines: [6, 9, 16],
              body:
`// 그리드의 칸 점유 상태를 관리합니다.
public class GridSystem
{
    private readonly GameObject[,] occupancy;
    // 이동 결정 시 선점 — 도착 전 다른 유닛의 진입을 막습니다.
    private readonly GameObject[,] pendingOccupancy;

    // 이동 결정 시점에 목표 칸을 선점합니다.
    public void PendingOccupy(Vector2Int pos, GameObject obj)
    {
        if (!IsValidPosition(pos)) return;
        pendingOccupancy[pos.y, pos.x] = obj;
    }

    // 이동 완료 후 예약을 해제합니다.
    public void ReleasePending(Vector2Int pos)
    {
        if (!IsValidPosition(pos)) return;
        pendingOccupancy[pos.y, pos.x] = null;
    }

    public GameObject GetPending(Vector2Int pos)
    {
        if (!IsValidPosition(pos)) return null;
        return pendingOccupancy[pos.y, pos.x];
    }

    public bool IsPending(Vector2Int pos)
    {
        if (!IsValidPosition(pos)) return false;
        return pendingOccupancy[pos.y, pos.x] != null;
    }
}`,
            },
            {
              name: "Assets/3.Script/Unit/UnitController.cs",
              lang: "C#",
              highlightLines: [21, 22, 28],
              body:
`// 자동 전투 루프 — 매 틱마다 이동 또는 공격을 결정합니다.
private IEnumerator AutoCombatLoop()
{
    while (true)
    {
        yield return null;
        if (isMoving || isActing) continue;
        DecideDestination();
        if (currentGridPos == destinationGridPos)
        {
            // 공격 처리
            // ...
        }
        else
        {
            Vector2Int nextStep = GetNextStep();
            if (nextStep == currentGridPos) continue;
            // 적이 내 사거리로 이동 중이면 대기 — 도착 시 공격으로 전환됩니다.
            if (IsEnemyMovingIntoMyRange()) continue;
            // 이동 결정 즉시 선점 — 회전(0.5초) 동안 다른 유닛 진입을 차단합니다.
            grid.Occupy(nextStep, gameObject);
            grid.PendingOccupy(nextStep, gameObject);
            lastMoveDir = nextStep - currentGridPos;
            yield return StartCoroutine(RotateTo(lastMoveDir, 0.5f));
            MoveTo(nextStep);
            yield return new WaitUntil(() => !isMoving);
            // 이동 완료 후 예약 해제 — 실점유는 MoveTo에서 처리됩니다.
            grid.ReleasePending(nextStep);
        }
    }
}`,
            },
          ],
        },
      },
      {
        // SECTION D — Technical Challenge 02
        title: "스킬 추가마다 강제되는 컨트롤러 수정",
        subtitle: "스킬 실행을 전담 클래스로 위임해 컨트롤러 수정 없이 스킬 확장 가능한 구조로 전환",
        media: {
          before: {
            src: "./asset/tavern-tales/challenge-d-before.gif",
            alt: "스킬 추가마다 MercenaryController를 직접 수정하는 문제 상황",
            label: "해결 전",
            note: "스킬마다 컨트롤러 직접 수정",
            caption: "스킬마다 분기가 누적되어 MercenaryController가 모든 스킬 로직의 보관소가 된 상태",
          },
          after: {
            src: "./asset/tavern-tales/challenge-d-after.gif",
            alt: "ISkillExecutor 위임으로 컨트롤러 수정 없이 스킬 확장 가능한 개선 후",
            label: "해결 후",
            note: "Executor 추가 + Factory 1줄",
            caption: "새 스킬을 Executor 클래스 추가와 Factory 등록만으로 완성하는 상태",
          },
        },
        problem:
          "용병 스킬을 추가할 때마다 **스킬 실행 담당 함수**를 직접 수정해야 했습니다. 스킬마다 조건 처리가 누적되며 컨트롤러가 **모든 스킬 로직의 보관소**가 됐습니다.",
        cause:
          "스킬 실행 코드가 컨트롤러 안에 **직접 작성**되어 스킬과 컨트롤러가 **강하게 묶인** 구조였습니다. 새 스킬 추가가 항상 **컨트롤러 수정을 강제**하는 구조였습니다.",
        alternatives: [
          {
            label: "대안 1",
            title: "스킬 처리를 내부 함수로 분리",
            body: "스킬별 조건 처리를 내부 함수로 분리. 스킬 로직이 컨트롤러 안에 남는 구조는 유지됨.",
          },
          {
            label: "대안 2",
            title: "스킬별 전담 클래스 분리 구조 도입",
            body: "스킬마다 전담 실행 클래스를 두고 종류별로 자동 실행. 새 스킬은 전담 클래스 + 목록 1줄로 완성.",
            chosen: true,
          },
        ],
        why: [
          "**확장 비용 압축**: 전담 클래스 1개 + 목록 1줄 등록만으로 완결됩니다.",
          "**기존 스킬 안전**: 독립 파일로 분리되어 수정이 다른 스킬에 영향을 주지 않습니다.",
        ],
        tradeoff: [
          "**파일 수 증가**: 스킬당 전담 파일 1개 — 현재 10개 파일로 분산됩니다.",
          "**경유 호출**: 발동 빈도상 체감 성능 차이는 없다는 전제로 감수했습니다.",
        ],
        results: [
          { metric: "조건 분기 → 위임", label: "컨트롤러 스킬 처리 방식" },
          { metric: "0 줄",             label: "신규 스킬 시 컨트롤러 변경" },
          { metric: "+10 전담 클래스",  label: "스킬 독립 분리" },
        ],
        code: {
          caption: "스킬 이름만 알면 실행기를 자동으로 찾는 구조 — 신규 스킬은 Factory에 1줄만 추가",
          files: [
            {
              name: "SkillExecutorFactory.cs",
              lang: "C#",
              highlightLines: [13, 14, 15, 16, 17],
              body:
`// 스킬 이름으로 해당 Executor를 찾아주는 레지스트리.
// 새 스킬 추가 시 여기에 Register 한 줄만 추가하면 됨.
// 컨트롤러는 건드리지 않아도 됨.
public static class SkillExecutorFactory
{
    private static readonly Dictionary<string, ISkillExecutor> registry
        = new Dictionary<string, ISkillExecutor>();
    // 등록되지 않은 스킬이 들어왔을 때 사용할 기본 실행기.
    private static readonly ISkillExecutor defaultExecutor = new DamageSkillExecutor();
    static SkillExecutorFactory()
    {
        // 용병 스킬 등록
        Register("잔혹한 대가",     new BalgasSkillExecutor());
        Register("성벽의 일격",     new BastianSkillExecutor());
        Register("마력의 소용돌이", new NieSkillExecutor());
        Register("궤적의 화살",     new BeccaSkillExecutor());
        Register("락온",            new YeonhwaSkillExecutor());
        // 몬스터 스킬 등록
        Register("방패 강타",   new GoblinShieldBearerSkillExecutor());
        Register("돌격",        new GoblinChargerSkillExecutor());
        Register("불화살",      new GoblinArcherSkillExecutor());
        Register("분쇄",        new OrcWarriorSkillExecutor());
        Register("저주의 안개", new OrcShamanSkillExecutor());
    }
    public static void Register(string skillName, ISkillExecutor executor)
    {
        registry[skillName] = executor;
    }
    // 스킬 이름으로 Executor를 찾아 반환.
    // 등록되지 않은 이름이라면 기본 실행기(단순 데미지)를 반환.
    public static ISkillExecutor Get(string skillName)
    {
        if (skillName != null && registry.TryGetValue(skillName, out var executor))
            return executor;
        return defaultExecutor;
    }
}`,
            },
            {
              name: "MercenaryController.cs",
              lang: "C#",
              highlightLines: [14, 15],
              body:
`// 공격 실행. 마나가 꽉 찼으면 스킬, 아니면 일반 공격.
protected override void ExecuteAttack()
{
    var stat = mercenary.Stat;
    if (mercenary.IsManaFull && stat.Skill != null)
    {
        OnSkill?.Invoke();
        // 스킬 실행에 필요한 정보를 컨텍스트에 담음.
        var context = new SkillContext(
            mercenary, targetObject, currentGridPos,
            grid, stat.Skill, RaiseCombatEvent);
        // 스킬 이름으로 Executor를 찾아 실행을 넘김.
        // 스킬 로직과 무관하게 컨트롤러는 이 두 줄만 알면 됨.
        var executor = SkillExecutorFactory.Get(stat.Skill.Name);
        executor.Execute(context);
        mercenary.ConsumeMana();
    }
    else
    {
        // 마나가 없으면 일반 공격.
        OnAttack?.Invoke();
        var combatEvent = DamageCalculator.CreateNormalAttackEvent(
            mercenary, targetObject, mercenary.AttackPower,
            stat.CriticalChance, stat.CriticalDamage);
        RaiseCombatEvent(combatEvent);
    }
}`,
            },
          ],
        },
      },
    ],
    retrospective: {
      keep: [
        {
          title: "체력을 숫자가 아닌 상태로 다룬 설계.",
          body: [
            "세 단계(경상·중상·사망)로 '용병을 보낼 수 없다' 판단을 직관적으로 만들었습니다.",
            "**플레이어가 읽을 언어**로 바꿔야 한다는 생각이 먼저였습니다.",
          ],
        },
        {
          title: "장비 화면의 책임을 둘로 쪼갠 분리.",
          body: [
            "목록·정보창·인벤토리 구독을 역할별로 두 패널로 나눴습니다.",
            "무거워진 시점에 다음 변경이 **더 어려워질 것 같다**는 생각이 들었습니다.",
          ],
        },
      ],
      problem: [
        {
          title: "특정 용병만 쓸 수 있는 스킬 구조.",
          body: [
            "스킬 안에 용병 종류 분기가 들어가 다른 용병은 같은 스킬을 쓸 수 없습니다.",
            "추상화를 만들어 두고도 그 안에서 **스스로 구멍을 낸 게** 나중에야 보였습니다.",
          ],
        },
        {
          title: "스킬 대상을 정하는 규칙이 여러 곳에 흩어진 구조.",
          body: [
            "대상 선택 담당자가 있는데도 각 스킬이 자기 안에서 다시 걸러냅니다.",
            "인터페이스가 있어도 **우회할 수 있다면 약속이 아니라는 생각**이 들었습니다.",
          ],
        },
      ],
      try: [
        {
          num: 1,
          title: "디버프를 한 줄로 쌓아 관리",
          body: "곱하기 누적 대신 효과 목록으로 관리합니다. 해제 순서에 상관없이 남은 효과만 반영합니다.",
        },
        {
          num: 2,
          title: "유닛의 상태를 한 곳에서 통제",
          body: "멈춤·이동·공격을 상태로 명시해 흐름을 가둡니다. 스턴이 걸리면 진행 중인 동작도 그 자리에서 멈춥니다.",
        },
        {
          num: 3,
          title: "스킬 대상을 한 곳에서 결정",
          body: "대상 선택을 한 진입점으로 모아 미리 전달합니다. 각 스킬은 어떤 효과를 줄지에만 집중합니다.",
        },
      ],
    },
  },
  {
    id: "p3",
    seed: 41,
    name: "Legend of Gem",
    genre: "3D 핵앤슬래시 액션 RPG",
    year: "2025",
    desc: "메인 젬과 보조 젬의 조합으로 자신만의 스킬을 만들어가는 3D 핵앤슬래시 액션 RPG",
    tags: ["NavMesh", "CSV 데이터 드리븐", "Dependency Injection", "ScriptableObject"],
    overview: {
      subtitle: "메인 젬과 보조 젬의 조합으로 자신만의 스킬을 만들어가는 3D 핵앤슬래시 액션 RPG",
      keyVisual: "./asset/legend-of-gem/title.png",
      links: {
        repository: "",
        gameplay: "",
      },
      meta: {
        genre: "3D 핵앤슬래시 액션 RPG",
        duration: "2025.04.14 ~ 2025.04.30 (16일)",
        team: "1인 (단독 개발)",
        environment: ["Unity 2022.3.16f1 LTS", "JetBrains Rider", "GitHub Desktop"],
      },
      intent: [
        { label: "목표",       value: "스킬을 **'주어진 것'이 아닌 '직접 설계하는 것'**으로 느끼게 하는 것이었습니다." },
        { label: "핵심 구조",  value: "메인 젬에 **보조 젬을 조합**해 동작 방식을 **실시간으로 변경**하는 구조로 구현했습니다." },
        { label: "반복 동기",  value: "드랍마다 옵션이 새로 결정되는 **장비 시스템**으로 **반복 사냥 동기**를 자연스럽게 만들었습니다." },
        { label: "의도된 감정", value: "**'내가 만든 빌드로 던전을 돌파'**하는 성취감이 플레이의 중심에 남도록 의도했습니다." },
      ],
      techChips: [
        "Unity 2022 LTS",
        "C#",
        "URP",
        "NavMesh",
        "ScriptableObject",
        "CSV 데이터 드리븐",
        "uGUI 드래그&드롭",
        "Dependency Injection",
      ],
    },
    features: [
      {
        num: 1,
        title: "내가 쓸 스킬을 직접 만든다",
        desc: "메인 젬을 슬롯에 끼우는 순간 스킬이 생성됩니다. 보조 젬 조합에 따라 같은 화염구도 전혀 다른 스킬이 됩니다.",
        image: "./asset/legend-of-gem/feature-1.png",
      },
      {
        num: 2,
        title: "똑같은 갑옷은 없다",
        desc: "드랍되는 장비는 집어들 때마다 옵션이 새로 결정됩니다. 같은 갑옷이라도 매번 다른 빌드 가능성이 열립니다.",
        image: "./asset/legend-of-gem/feature-2.png",
      },
      {
        num: 3,
        title: "무리를 쓸어버리는 카타르시스",
        desc: "몬스터는 3~5마리 무리로 등장합니다. 광역 스킬 한 번에 무리를 쓸어버리는 순간, 압박이 카타르시스로 바뀝니다.",
        image: "./asset/legend-of-gem/feature-3.png",
      },
    ],
    featuresVideo: "https://www.youtube.com/watch?v=SoBuGS457F0",
    challenges: [
      {
        // SECTION C — Technical Challenge 01
        title: "NavMesh 경로 거리 기반 몬스터 감지",
        subtitle: "직선 거리를 실제 NavMesh 경로 거리로 전환해 벽 관통 감지 문제 해결",
        media: {
          before: {
            src: "./asset/legend-of-gem/challenge-c-before.gif",
            alt: "벽 너머 몬스터가 플레이어를 감지하는 문제 상황",
            label: "해결 전",
            note: "벽 너머 일제 반응",
            caption: "직선 거리 기준으로 감지해 벽으로 분리된 공간에서도 몬스터 전체가 반응하던 상태",
          },
          after: {
            src: "./asset/legend-of-gem/challenge-c-after.gif",
            alt: "NavMesh 경로 거리로 벽 관통 감지가 제거된 개선 후",
            label: "해결 후",
            note: "벽 차단으로 감지 안 됨",
            caption: "NavMesh 경로 거리를 기준으로 감지해 벽으로 막힌 몬스터는 반응하지 않는 상태",
          },
        },
        problem:
          "벽 너머 몬스터들이 플레이어를 인식하고 **일제히 달려오는** 현상이 발생했습니다. 감지 거리 안에 들어오는 순간 **지형 구조와 무관하게** 몬스터 전체가 반응했습니다.",
        cause:
          "감지 로직이 **직선 거리 계산** 기준으로 동작했습니다. NavMesh 지형을 무시하는 계산 방식이라 벽으로 분리된 공간도 **거리 조건만 충족하면** 즉시 반응했습니다.",
        alternatives: [
          {
            label: "대안 1",
            title: "NavMesh 내장 이동 거리 값 활용",
            body: "NavMeshAgent의 '남은 이동 거리' 값을 읽으려 했으나, 경로 미계산 상태에서는 반환되지 않았습니다.",
          },
          {
            label: "대안 2",
            title: "경로 꺾임 지점 거리 직접 합산",
            body: "경로를 직접 계산한 뒤, 각 꺾임 지점 사이 거리를 순서대로 더해 실제 이동 거리를 구합니다.",
            chosen: true,
          },
        ],
        why: [
          "**경로 기반 거리**: 실제 이동 경로 기준으로 감지해 지형 구조가 그대로 반영됩니다.",
          "**자연스러운 차단**: 벽으로 막히면 경로가 없으므로 도달 불가로 자동 처리됩니다.",
        ],
        tradeoff: [
          "**계산 비용**: 부담을 줄이기 위해 0.5초 간격 반복 검사로 처리했습니다.",
          "**감지 딜레이**: 최대 0.5초의 감지 지연이 발생합니다.",
        ],
        results: [
          { metric: "벽 관통 → 없음",    label: "비정상 감지" },
          { metric: "매 프레임 → 0.5초", label: "경로 계산 주기" },
          { metric: "직선 거리 → 경로 거리", label: "거리 계산 방식" },
        ],
        code: {
          filename: "Assets/3.Script/Enemy/EnemyDetector.cs",
          language: "csharp",
          caption: "NavMesh.CalculatePath로 경로를 구한 뒤 꺾임 지점 사이 거리 합산으로 실제 이동 거리를 판단",
          highlightLines: [36, 42, 43],
          body:
`// 경로 거리로 플레이어를 감지하는 클래스입니다.
public class EnemyDetector : MonoBehaviour
{
    [SerializeField] private float detectRange = 10f;
    // 매 프레임 경로 계산 부담을 줄이기 위해 0.5초 간격으로 폴링합니다.
    [SerializeField] private float detectInterval = 0.5f;

    private NavMeshAgent _agent;
    private Transform _player;

    private void Start()
    {
        _agent = GetComponent<NavMeshAgent>();
        _player = GameObject.FindGameObjectWithTag("Player").transform;
        StartCoroutine(DetectRoutine());
    }

    // 0.5초마다 경로 거리를 계산해 감지 여부를 갱신합니다.
    private IEnumerator DetectRoutine()
    {
        var wait = new WaitForSeconds(detectInterval);
        while (true)
        {
            float dist = GetPathDistance(transform.position, _player.position);
            if (dist <= detectRange)
                _agent.SetDestination(_player.position);
            yield return wait;
        }
    }

    // 경로를 계산하고 corners 구간 합산으로 실제 이동 거리를 반환합니다.
    // 경로가 없거나 불완전하면 Infinity를 반환해 감지 불가로 처리합니다.
    private float GetPathDistance(Vector3 from, Vector3 to)
    {
        var path = new NavMeshPath();
        if (!NavMesh.CalculatePath(from, to, NavMesh.AllAreas, path))
            return Mathf.Infinity;
        if (path.status != NavMeshPathStatus.PathComplete)
            return Mathf.Infinity;

        float total = 0f;
        for (int i = 1; i < path.corners.Length; i++)
            total += Vector3.Distance(path.corners[i - 1], path.corners[i]);
        return total;
    }
}`,
        },
      },
      {
        // SECTION D — 보조젬 추가 시 컨트롤러 수정 강제 구조 개선
        title: "보조젬 추가 시 컨트롤러 수정 강제 구조 개선",
        subtitle: "스킬별 전담 클래스 분리로 새 보조젬 추가 시 기존 코드 수정 없이 완성",
        media: {
          before: {
            src: "./asset/legend-of-gem/challenge-d-before.gif",
            alt: "보조젬 추가마다 SkillController를 직접 수정하는 문제 상황",
            label: "해결 전",
            note: "보조젬마다 컨트롤러 직접 수정",
            caption: "보조젬이 추가될수록 조건 분기가 누적되어 SkillController가 모든 젬 로직의 보관소가 된 상태",
          },
          after: {
            src: "./asset/legend-of-gem/challenge-d-after.gif",
            alt: "ISocketGemEffect 위임으로 컨트롤러 수정 없이 보조젬 확장 가능한 개선 후",
            label: "해결 후",
            note: "전담 클래스 추가 + 레지스트리 1줄",
            caption: "새 보조젬을 전담 클래스 추가와 레지스트리 등록만으로 완성하는 상태",
          },
        },
        problem:
          "보조젬을 추가할 때마다 **스킬 실행 담당 함수**를 직접 수정해야 했습니다. 스킬마다 조건 처리가 누적되며 컨트롤러가 **모든 스킬 로직의 보관소**가 됐습니다.",
        cause:
          "스킬 실행 코드가 컨트롤러 안에 **직접 작성**되어 스킬과 컨트롤러가 **강하게 묶인** 구조였습니다. 새 스킬 추가가 항상 **컨트롤러 수정을 강제**하는 구조였습니다.",
        alternatives: [
          {
            label: "대안 1",
            title: "스킬 처리를 내부 함수로 분리",
            body: "스킬별 조건 처리를 내부 함수로 분리합니다. 스킬 로직이 컨트롤러 안에 남는 구조는 유지됩니다.",
          },
          {
            label: "대안 2",
            title: "스킬별 전담 클래스 분리 구조 도입",
            body: "스킬마다 전담 실행 클래스를 두고 종류별로 자동 실행합니다. 새 스킬은 전담 클래스 + 목록 1줄로 완성됩니다.",
            chosen: true,
          },
        ],
        why: [
          "**확장 비용 축소**: 전담 클래스 1개 + 레지스트리 1줄 등록만으로 완결됩니다.",
          "**기존 스킬 안전**: 독립 파일로 분리되어 수정이 다른 스킬에 영향을 주지 않습니다.",
        ],
        tradeoff: [
          "**파일 수 증가**: 보조젬당 전담 파일 1개 — 현재 10개 파일로 분산됩니다.",
          "**경유 호출**: 발동 빈도상 체감 성능 차이는 없다는 전제로 감수했습니다.",
        ],
        results: [
          { metric: "조건 분기 → 위임", label: "컨트롤러 스킬 처리 방식" },
          { metric: "0 줄",             label: "신규 스킬 시 컨트롤러 변경" },
          { metric: "+10 전담 클래스",  label: "스킬 독립 분리" },
        ],
        code: {
          caption: "SkillComponent 탈부착 구조 — 매니저 핸들러에 1줄만 추가하면 새 보조젬 완성",
          files: [
            {
              name: "SkillComponent.cs",
              lang: "C#",
              highlightLines: [4, 5, 12, 13, 17, 18],
              body:
`// 스킬에 붙는 보조 효과의 추상 기반 클래스입니다.
public abstract class SkillComponent : MonoBehaviour
{
    public abstract void AddComponent(Skill skill);
    public abstract void RemoveComponent(Skill skill);
}
// 스킬에 SkillComponent를 탈부착하는 제네릭 확장 메서드 모음입니다.
public static class SkillAssembler
{
    public static void Add<T>(this Skill skill) where T : SkillComponent
    {
        var addingComponent = skill.gameObject.AddComponent<T>();
        addingComponent.AddComponent(skill);
    }
    public static void Remove<T>(this Skill skill) where T : SkillComponent
    {
        var existingComponent = skill.gameObject.GetComponent<T>();
        existingComponent.RemoveComponent(skill);
        Object.Destroy(existingComponent);
    }
}`,
            },
            {
              name: "FasterProjectiles.cs",
              lang: "C#",
              highlightLines: [7, 8, 9, 13, 14],
              body:
`// 투사체 이동 속도를 50% 올리는 보조젬 컴포넌트입니다.
public class FasterProjectiles : SkillComponent
{
    private float increaseValue;
    public override void AddComponent(Skill skill)
    {
        increaseValue = skill.data.moveSpeed * 0.5f;
        skill.data.moveSpeed += increaseValue;
        skill.data.costMana += 3;
    }
    public override void RemoveComponent(Skill skill)
    {
        skill.data.moveSpeed -= increaseValue;
        skill.data.costMana -= 3;
    }
}`,
            },
            {
              name: "SkillManager.cs",
              lang: "C#",
              highlightLines: [9, 10, 11, 12, 27],
              body:
`// 보조젬 키 → SkillComponent 주입을 핸들러 테이블로 위임하는 매니저입니다.
public class SkillManager : MonoBehaviour
{
    private Action<Skill>[] addComponentHandler = new Action<Skill>[100];
    private Action<Skill>[] removeComponentHandler = new Action<Skill>[100];
    // 보조젬 종류가 늘어도 이 목록에 1줄만 추가하면 됩니다.
    public void InitializeHandler()
    {
        addComponentHandler[0] = (skill) => { skill.Add<FasterProjectiles>(); };
        removeComponentHandler[0] = (skill) => { skill.Remove<FasterProjectiles>(); };
        addComponentHandler[1] = (skill) => { skill.Add<Proliferation>(); };
        removeComponentHandler[1] = (skill) => { skill.Remove<Proliferation>(); };
        addComponentHandler[2] = (skill) => { skill.Add<FasterCast>(); };
        removeComponentHandler[2] = (skill) => { skill.Remove<FasterCast>(); };
        addComponentHandler[3] = (skill) => { skill.Add<IncreasedAOE>(); };
        removeComponentHandler[3] = (skill) => { skill.Remove<IncreasedAOE>(); };
        addComponentHandler[4] = (skill) => { skill.Add<MultipleProjectiles>(); };
        removeComponentHandler[4] = (skill) => { skill.Remove<MultipleProjectiles>(); };
    }
    public void AddSkillComponent(int parentsIdx, int prefabsIdx, int componentKey)
    {
        Queue<GameObject> temp = new Queue<GameObject>();
        for (int i = 0; i < MAX_PREFAB_COUNT; i++)
        {
            var pool = skillPool[parentsIdx].Dequeue();
            var tempComponent = pool.GetComponent<Skill>();
            addComponentHandler[componentKey - 300]?.Invoke(tempComponent);
            pool.SetActive(false);
            temp.Enqueue(pool);
        }
        RemovePool(parentsIdx);
        skillPool[parentsIdx] = temp;
    }
}`,
            },
          ],
        },
      },
    ],
    retrospective: {
      keep: [
        {
          title: "서포트 젬 효과를 독립 단위로 분리한 설계.",
          body: [
            "AddComponent · RemoveComponent로 젬마다 효과를 독립 처리했습니다.",
            "IncreasedAOE 추가 시 **SkillManager · FireBall 변경 0줄**로 실제 확인했습니다.",
          ],
        },
        {
          title: "모든 아이템 이동을 드래그 하나로 통일한 조작 방식.",
          body: [
            "인벤토리·장비·젬·상점 탭을 드래그 하나로 처리되도록 만들었습니다.",
            "**반복 조작 속도**를 먼저 생각해 버튼 없이 끊기지 않도록 통일했습니다.",
          ],
        },
      ],
      problem: [
        {
          title: "저장·불러오기 책임이 각 시스템에 분산된 실행 순서 의존 문제.",
          body: [
            "Awake·Start 이중 초기화, OnDestroy 저장이 씬 전환 결과를 바꿨습니다.",
            "기능은 돌아갔는데, 버그가 생기고 나서야 **저장 책임이 곳곳에 흩어진 게** 보였습니다.",
          ],
        },
        {
          title: "시스템 연결이 깊어 기능을 따로 확인할 수 없는 구조 문제.",
          body: [
            "FindObjectOfType 등 연쇄 참조로 게임 전체 실행이 필요했습니다.",
            "느려진다고 느끼면서도, **원인이 구조에 있다는 건** 한참 뒤에야 보였습니다.",
          ],
        },
      ],
      try: [
        {
          num: 1,
          title: "상태 확인 및 즉시 세팅 패널 만들기",
          body: "인벤토리·젬·스탯을 한 화면에서 즉시 세팅합니다. 흐름만 재현해 재확인 시간을 줄입니다.",
        },
        {
          num: 2,
          title: "SkillComponent로 젬 효과 일원화",
          body: "isIncreasedAOE 대신 젬 장착 여부로만 판단합니다. Skill.cs를 건드리지 않고 파일 하나로 완결됩니다.",
        },
        {
          num: 3,
          title: "씬 전환 시 데이터 저장·복원 시점 명확화",
          body: "저장·복원·정리로 시점을 분리하고 단일 진입점을 둡니다. 순서가 바뀌어도 데이터 흐름이 달라지지 않게 합니다.",
        },
      ],
    },
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
