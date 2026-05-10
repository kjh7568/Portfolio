/* ============================================================
   legendofgem.data.js — Legend of Gem 기술문서 단일 진실원
   pages 배열은 type 디스크리미네이터를 가진 순서 배열.
   각 type을 React 컴포넌트로 1:1 매핑.
   ============================================================ */

const TECHDOC = {

    /* --------------------------------------------------------
       문서 메타
    -------------------------------------------------------- */
    meta: {
        title:         'Legend of Gem — 기술문서',
        projectLabel:  'PROJECT 02',
        docTitle:      'Legend of Gem',
        backHref:      'index.html',
        backLabel:     '← 포트폴리오',
    },

    /* --------------------------------------------------------
       페이지 배열 — 순서 = 문서 내 페이지 순서
    -------------------------------------------------------- */
    pages: [

        /* ====================================================
           PAGE 01 — COVER
        ==================================================== */
        {
            type: 'cover',
            id:   'cover',
            pageNum: '01',
            screenLabel: '01 Cover',

            eyebrow: 'PROJECT 02 — TECHNICAL DOCUMENT',
            title:   'Legend of Gem.',

            subtitle_html: '메인 젬과 보조 젬의 조합으로 <b>자신만의 스킬을 직접 설계하는</b> 3D 핵앤슬래시 액션 RPG입니다.',

            meta: [
                { l: 'Genre',  v: '3D 핵앤슬래시 액션 RPG' },
                { l: 'Period', v: '2025.04.14 ~ 2025.04.30', v2: '(16일)' },
                { l: 'Team',   v: '1인' },
                { l: 'Stack', tags: ['Unity', 'C#', 'URP', 'NavMesh', 'ScriptableObject', 'CSV 데이터 드리븐', 'uGUI 드래그&드롭', 'Dependency Injection'] },
            ],

            author: {
                name:  '김지훈',
                nameEn: 'Jeehoon Kim',
                role:  'Unity Client Developer',
                email: 'rwrwg159@gmail.com',
                phone: '010-0000-0000',
            },

            heroPlaceholder: {
                ttl: '키 비주얼 / 표지 이미지',
                sub: 'DROP IMAGE HERE — 1280 × 720 권장',
            },

            toc: [
                { n: '01', label: '프로젝트 개요 · 게임 흐름',          p: 'p.02' },
                { n: '02', label: '젬 조합 스킬 시스템 (DI 주입)',      p: 'p.03' },
                { n: '03', label: '아이템 옵션 랜덤 생성',              p: 'p.07' },
                { n: '04', label: '몬스터 팩 스폰',                     p: 'p.11' },
                { n: '05', label: '트러블슈팅 · 좌표계와 전투 판정',    p: 'p.15' },
                { n: '06', label: '회고 · 다음 개선',                   p: 'p.19' },
            ],
        },

        /* ====================================================
           PAGE 02 — OVERVIEW
        ==================================================== */
        {
            type: 'overview',
            id:   'overview',
            pageNum: '02',
            screenLabel: '02 Overview',

            header_html: 'Legend of Gem / <b>Project Overview</b>',
            eyebrow:     'OVERVIEW',
            title:       '인게임 한눈에 보기 · 흐름 · 핵심 기능',

            gameplayPlaceholder: {
                ic:  'GAMEPLAY 01',
                ttl: '인게임 플레이 스크린샷',
                sub: '대표 전투 장면 — 1280 × 720 권장',
            },

            steps: [
                {
                    n: '01',
                    t: '로비 정비',
                    d: '홈 씬에서 인벤토리·장비·젬을 정리하고, 메인 젬과 보조 젬을 슬롯에 끼워 출격할 빌드를 만듭니다.',
                },
                {
                    n: '02',
                    t: '던전 진입',
                    d: '던전 씬으로 이동하면 스폰 포인트 절반이 무작위로 활성화되어, 매번 다른 위치에 몬스터 무리가 등장합니다.',
                },
                {
                    n: '03',
                    t: '전투와 수집',
                    d: '마우스 좌클릭 평타, Q·E·R로 조립한 스킬을 사용해 몬스터를 처치하고, 드랍된 장비·골드를 픽업합니다.',
                },
                {
                    n: '04',
                    t: '귀환과 정비',
                    d: 'Recall로 홈에 복귀해 새 장비의 옵션을 확인하고, 상점에서 추가 아이템을 구매한 뒤 다음 던전에 도전합니다.',
                },
            ],

            features: [
                { n: '01', t: '젬 조합 스킬 시스템',     d: '메인 젬으로 스킬을 만들고, 보조 젬을 끼워 효과를 런타임 주입합니다.',         href: '#f1', p: 'p.03 →' },
                { n: '02', t: '아이템 옵션 랜덤 생성',   d: '부위별 가중치 확률표로 드랍 시점에 옵션과 레어도가 결정됩니다.',             href: '#f2', p: 'p.07 →' },
                { n: '03', t: '몬스터 팩 스폰',          d: '스폰 포인트의 절반을 무작위로 활성화하고 포인트당 3~5마리를 원형 배치합니다.', href: '#f3', p: 'p.11 →' },
            ],
        },

        /* ====================================================
           PAGE 03 — FEATURE 01 COVER
        ==================================================== */
        {
            type: 'featureCover',
            id:   'f1',
            pageNum: '03',
            screenLabel: '03 F1 Cover',

            header_html: 'Legend of Gem / <b>Feature 01 · 젬 조합 스킬 시스템</b>',
            num:         '01',
            eyebrow:     'FEATURE · 젬 조합 스킬 시스템',
            title:       '메인 + 보조 젬으로,\n나만의 스킬을 조립합니다.',
            oneLiner_html: '메인 젬에 보조 젬을 더해, 같은 스킬도 <span class="hl-blue">다른 방식으로 확장</span>할 수 있는 스킬 조합 시스템입니다.',

            why: {
                label: '구현 배경',
                labelSub: 'Why this feature?',
                body: [
                    '보조 젬이 늘어날수록 스킬 안에 예외 처리가 쌓였습니다. 새 효과를 하나 추가할 때마다 기존 스킬까지 함께 수정해야 해서, 조합이 많아질수록 유지보수가 어려워졌습니다.',
                    '그래서 스킬 본체와 보조 젬 효과를 분리했습니다. 보조 젬은 필요할 때 스킬에 붙고, 해제되면 자신이 바꾼 값만 되돌리도록 구성했습니다.',
                ],
            },

            pagesHint: [
                { lbl: 'p.04 · STRUCTURE', ttl: 'Skill / SkillComponent / SkillAssembler 3축 구조' },
                { lbl: 'p.05·06 · DETAIL', ttl: 'Skill 내부 포함 vs DI 주입 의사결정 + 핵심 코드 발췌' },
            ],
        },

        /* ====================================================
           PAGE 04 — F1 STRUCTURE
        ==================================================== */
        {
            type: 'structure',
            id:   'f1-struct',
            pageNum: '04',
            screenLabel: '04 F1 Structure',

            header_html: 'Legend of Gem / Feature 01 / <b>Structure</b>',
            eyebrow: 'CORE STRUCTURE — 클래스 다이어그램',
            title:   '젬 조합 스킬 시스템 구조',

            umlSrc: 'assets/techdocs/legend-of-gem/feature-1-uml.png',
            umlAlt: '추후 제작 예정: Skill / SkillComponent / SkillAssembler / SkillManager / GemSet / 보조 젬 5종 UML 클래스 다이어그램',

            notes: [
                {
                    type: 'item',
                    h4: '설계 의도',
                    body_html: '스킬 본체와 효과(보조 젬)를 분리해, 효과 추가가 본체 코드를 건드리지 않도록 했습니다. <code class="inline">SkillAssembler</code>로 주입부터 해제까지 한 줄로 호출합니다.',
                },
                {
                    type: 'item',
                    h4: '핵심 클래스 5개',
                    paragraphs_html: [
                        '<b>Skill (abstract)</b>:<br>스킬의 공통 계약. <code class="inline">SkillData</code>와 <code class="inline">SpecialCast()</code>·<code class="inline">CalculateDamage()</code>를 정의합니다.',
                        '<b>SkillComponent (abstract)</b>:<br>보조 젬의 공통 계약. 적용/해제 메서드만 강제합니다.',
                        '<b>SkillAssembler (static)</b>:<br><code class="inline">skill.Add&lt;T&gt;()</code> / <code class="inline">skill.Remove&lt;T&gt;()</code> 확장 메서드로 컴포넌트를 붙이고 콜백을 호출합니다.',
                        '<b>SkillManager</b>:<br>스킬 풀과 보조 젬 적용 람다를 보유하고, GemSet 요청을 모든 인스턴스에 일괄 적용합니다.',
                        '<b>보조젬(e.g., FasterCast)</b>:<br><code class="inline">rootSkill.data</code>의 해당 필드를 바꾸고, 해제 시 원복합니다.',
                    ],
                },
                {
                    type: 'callout',
                    ic: '추상화',
                    body_html: '<code class="inline">Skill</code>은 보조 젬을 알지 못하고, 보조 젬은 <code class="inline">Skill.data</code>만 압니다. 둘은 <code class="inline">SkillAssembler</code>를 매개로만 만나며, 이 분리가 신규 효과 추가 시 기존 코드 수정량을 0으로 만듭니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 05 — F1 DETAIL 1 (의사결정 카드)
        ==================================================== */
        {
            type: 'decision',
            id:   'f1-d1',
            pageNum: '05',
            screenLabel: '05 F1 Detail · 1',

            header_html: 'Legend of Gem / Feature 01 / <b>Detail · 1</b>',
            eyebrow: 'FEATURE DETAIL — 1 / 2',
            title:   '스킬 확장, 어떤 구조가 맞을까?',

            imgSrc: 'assets/techdocs/legend-of-gem/feature-1-detail-1.png',
            imgAlt: '추후 제작 예정: 사용자 보유 슬라이드 4장(PROBLEM / SOLUTION / HOW IT WORKS / RESULT) 활용 가능한 의사결정 비교 이미지',

            decisionCard: {
                num: '1',
                heading: '스킬 확장, 어떤 구조가 맞을까?',
                badge: 'DECISION',
                options: [
                    {
                        name: 'A안 · Skill 내부 포함 (직접 처리)',
                        pros: '구현이 직관적이며 별도 설계 없이 빠르게 동작합니다.',
                        cons: '젬을 추가할 때마다 스킬 클래스 전체를 함께 수정해야 하므로 확장에 취약합니다.',
                    },
                    {
                        name: 'B안 · AddComponent 종속성 주입',
                        pros: '기존 스킬 코드 수정 없이 효과 추가가 가능하며 런타임에 동적으로 조립할 수 있습니다.',
                        cons: '초기 설계 비용이 있고, 보조 젬을 독립 컴포넌트로 분리하는 작업이 선행되어야 합니다.',
                    },
                ],
            },

            choiceCard: {
                num: '2',
                heading: '선택한 구조: 종속성 주입',
                badge: 'CHOICE',
                paragraphs_html: [
                    '보조 젬이 늘어날수록 스킬 안에 예외 처리가 쌓이고, 새 젬을 추가할 때마다 기존 스킬까지 함께 수정해야 했습니다.',
                    '그래서 스킬 본체와 보조 젬 효과를 분리했습니다. 보조 젬은 필요할 때 스킬에 붙고, 해제되면 적용했던 효과만 되돌리도록 만들었습니다.',
                    '이후 새 보조 젬을 추가할 때는 새 효과 하나만 만들면 됩니다. 기존 스킬 구조는 그대로 유지할 수 있습니다.',
                ],
            },
        },

        /* ====================================================
           PAGE 06 — F1 DETAIL 2 (코드 탭)
        ==================================================== */
        {
            type: 'codeTabs',
            id:   'f1-d2',
            pageNum: '06',
            screenLabel: '06 F1 Detail · 2',

            header_html: 'Legend of Gem / Feature 01 / <b>Detail · 2</b>',
            eyebrow: 'FEATURE DETAIL — 2 / 2',
            title:   'Add<T> 한 줄로 끝나는 효과 주입',

            imgSrc: 'assets/techdocs/legend-of-gem/feature-1-detail-2.gif',
            imgAlt: '추후 제작 예정: 보조 젬을 끼웠다 빼면 같은 FireBall 스킬의 동작이 실시간으로 변하는 인게임 GIF',

            codeCardTitle: '3 · 계약 → 구현 → 와이어링 한 흐름',

            tabs: [
                {
                    key: 'contract',
                    label: 'Skill+Component',
                    file: 'SkillComponent.cs',
                    lang: 'CSHARP',
                    code:
`public abstract class SkillComponent : MonoBehaviour
{
    // 보조 젬이 스킬에 붙을 때 실행됩니다.
    public abstract void AddComponent(Skill skill);

    // 보조 젬이 빠질 때 변경했던 값을 되돌립니다.
    public abstract void RemoveComponent(Skill skill);
}

public static class SkillAssembler
{
    public static void Add<T>(this Skill skill) where T : SkillComponent
    {
        // Unity 컴포넌트로 붙인 뒤, 보조 젬의 적용 로직을 실행합니다.
        var addingComponent = skill.gameObject.AddComponent<T>();
        addingComponent.AddComponent(skill);
    }

    public static void Remove<T>(this Skill skill) where T : SkillComponent
    {
        // 붙어 있던 보조 젬을 찾아 원복 로직을 실행한 뒤 제거합니다.
        var existingComponent = skill.gameObject.GetComponent<T>();
        existingComponent.RemoveComponent(skill);
        Object.Destroy(existingComponent);
    }
}`,
                },
                {
                    key: 'impl',
                    label: 'FasterProjectiles',
                    file: 'FasterProjectiles.cs',
                    lang: 'CSHARP',
                    code:
`public class FasterProjectiles : SkillComponent
{
    private float increaseValue;
    private Skill rootSkill;

    public override void AddComponent(Skill skill)
    {
        rootSkill = skill;

        // 현재 투사체 속도의 절반만큼 추가 속도를 계산합니다.
        increaseValue = rootSkill.data.moveSpeed * 0.5f;
        rootSkill.data.moveSpeed += increaseValue;
        rootSkill.data.costMana += 3;
        rootSkill.tags.Add("FasterProjectiles");
    }

    public override void RemoveComponent(Skill skill)
    {
        rootSkill = skill;

        // 적용했던 속도와 마나 비용을 원래 상태로 되돌립니다.
        rootSkill.data.moveSpeed -= increaseValue;
        rootSkill.data.costMana -= 3;
        rootSkill.tags.Remove("FasterProjectiles");
    }
}`,
                },
                {
                    key: 'wire',
                    label: 'SkillManager',
                    file: 'SkillManager.cs',
                    lang: 'CSHARP',
                    code:
`public void InitializeHandler()
{
    // 보조 젬 번호와 실제 적용/해제 함수를 연결합니다.
    addComponentHandler[0]    = (skill) => { skill.Add<FasterProjectiles>(); };
    removeComponentHandler[0] = (skill) => { skill.Remove<FasterProjectiles>(); };

    addComponentHandler[1]    = (skill) => { skill.Add<Proliferation>(); };
    removeComponentHandler[1] = (skill) => { skill.Remove<Proliferation>(); };

    addComponentHandler[2]    = (skill) => { skill.Add<FasterCast>(); };
    removeComponentHandler[2] = (skill) => { skill.Remove<FasterCast>(); };

    addComponentHandler[3]    = (skill) => { skill.Add<IncreasedAOE>(); };
    removeComponentHandler[3] = (skill) => { skill.Remove<IncreasedAOE>(); };

    addComponentHandler[4]    = (skill) => { skill.Add<MultipleProjectiles>(); };
    removeComponentHandler[4] = (skill) => { skill.Remove<MultipleProjectiles>(); };
}

public void AddSkillComponent(int parentsIdx, int prefabsIdx, int componentKey)
{
    Queue<GameObject> temp = new Queue<GameObject>();

    // 풀에 들어 있는 같은 스킬 인스턴스 전체에 보조 젬을 적용합니다.
    for (int i = 0; i < MAX_PREFAB_COUNT; i++)
    {
        var pool = skillPool[parentsIdx].Dequeue();
        var tempComponent = pool.GetComponent<Skill>();

        // 선택된 보조 젬 번호에 맞는 적용 함수를 호출합니다.
        addComponentHandler[componentKey - 300]?.Invoke(tempComponent);

        pool.SetActive(false);
        temp.Enqueue(pool);
    }

    RemovePool(parentsIdx);
    skillPool[parentsIdx] = temp;
}`,
                },
            ],

            resultCard: {
                num: '4',
                badge: 'RESULT',
                body_html: '보조 젬 추가 시 기존 스킬 클래스는 한 줄도 수정되지 않습니다. <code class="inline">SkillAssembler.Add&lt;T&gt;()</code> 호출 하나로 효과가 주입되고, <code class="inline">Remove&lt;T&gt;()</code> 호출 하나로 즉시 분리됩니다.',
            },
        },

        /* ====================================================
           PAGE 07 — FEATURE 02 COVER
        ==================================================== */
        {
            type: 'featureCover',
            id:   'f2',
            pageNum: '07',
            screenLabel: '07 F2 Cover',

            header_html: 'Legend of Gem / <b>Feature 02 · 아이템 옵션 랜덤 생성</b>',
            num:         '02',
            eyebrow:     'FEATURE · 아이템 옵션 랜덤 생성',
            title:       '같은 갑옷이지만,\n매번 다른 옵션이 붙습니다.',
            oneLiner_html: '장비 부위에 따라 어울리는 옵션이 다르게 붙고, 드랍 순간 <span class="hl-blue">옵션과 레어도가 결정</span>되는 장비 시스템입니다.',

            why: {
                label: '구현 배경',
                labelSub: 'Why this feature?',
                body: [
                    '같은 장비가 매번 똑같이 드랍되면 더 좋은 옵션을 찾는 동기가 약해집니다. 또 투구, 장갑, 신발이 모두 비슷한 옵션만 가진다면 부위별 선택의 의미도 줄어듭니다.',
                    '그래서 부위마다 어울리는 옵션 후보와 확률을 따로 두었습니다. 드랍되는 순간 옵션을 정하고, 실제 스탯 적용은 한 곳에서 처리해 중복을 줄였습니다.',
                ],
            },

            pagesHint: [
                { lbl: 'p.08 · STRUCTURE', ttl: 'IEquipment / IArmour 4부위 + EquipmentManager.optionTable' },
                { lbl: 'p.09·10 · DETAIL', ttl: '단일 통합 확률표 vs 부위별 확률표 의사결정 + 핵심 코드 발췌' },
            ],
        },

        /* ====================================================
           PAGE 08 — F2 STRUCTURE
        ==================================================== */
        {
            type: 'structure',
            id:   'f2-struct',
            pageNum: '08',
            screenLabel: '08 F2 Structure',

            header_html: 'Legend of Gem / Feature 02 / <b>Structure</b>',
            eyebrow: 'CORE STRUCTURE — 클래스 다이어그램',
            title:   '아이템 옵션 랜덤 생성 구조',

            umlSrc: 'assets/techdocs/legend-of-gem/feature-2-uml.png',
            umlAlt: '추후 제작 예정: IEquipment / IArmour ↔ BodyArmour·Helmet·Gloves·Boots ↔ EquipmentManager.optionTable UML 다이어그램',

            notes: [
                {
                    type: 'item',
                    h4: '설계 의도',
                    body_html: '부위마다 다른 옵션 후보를 가지되, 옵션 적용은 한 곳에서 처리하도록 나눴습니다. 장비 부위는 무엇이 나올지를 정하고, 매니저는 뽑힌 결과를 스탯에 반영합니다.',
                },
                {
                    type: 'item',
                    h4: '핵심 클래스 5개',
                    paragraphs_html: [
                        '<b>IEquipment / IArmour</b>:<br>장비가 공통으로 가져야 할 값과 옵션 선택 기능을 묶습니다. 방어구는 방어력과 회피 값을 추가로 가집니다.',
                        '<b>BodyArmour / Helmet / Gloves / Boots</b>:<br>각 부위가 자신에게 어울리는 옵션 후보와 확률을 가집니다.',
                        '<b>EquipmentManager</b>:<br>뽑힌 옵션을 실제 플레이어 스탯에 적용하고, 해제할 때 되돌립니다.',
                        '<b>EquipmentStat</b>:<br>현재 장착 효과로 변한 체력, 방어력, 힘, 치명타 확률 등을 보관합니다.',
                        '<b>ItemTableManager / TableSAO</b>:<br>아이템 데이터와 이미지를 연결해, 드랍 시점에 필요한 장비 객체를 만들어 줍니다.',
                    ],
                },
                {
                    type: 'callout',
                    ic: '역할 분리',
                    body_html: '부위는 <b>"무엇이 뽑힐지"</b>, 매니저는 <b>"뽑힌 결과를 어떻게 적용할지"</b>만 책임집니다. 그래서 옵션을 추가하거나 부위별 확률을 조정할 때 수정 범위가 작아집니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 09 — F2 DETAIL 1
        ==================================================== */
        {
            type: 'decision',
            id:   'f2-d1',
            pageNum: '09',
            screenLabel: '09 F2 Detail · 1',

            header_html: 'Legend of Gem / Feature 02 / <b>Detail · 1</b>',
            eyebrow: 'FEATURE DETAIL — 1 / 2',
            title:   '옵션 확률, 부위와 함께 갈까?',

            imgSrc: 'assets/techdocs/legend-of-gem/feature-2-detail-1.png',
            imgAlt: '추후 제작 예정: 부위별 확률표 비교 이미지 (몸통/투구/장갑/신발의 옵션 분포 차이를 시각화)',

            decisionCard: {
                num: '1',
                heading: '옵션 확률, 어디에 둘 것인가?',
                badge: 'DECISION',
                options: [
                    {
                        name: 'A안 · 단일 통합 확률표',
                        pros: '옵션 추가가 한 곳에서 끝나며 구현이 단순합니다.',
                        cons: '부위 정체성이 사라져 투구·신발·장갑이 모두 비슷한 옵션을 갖게 됩니다.',
                    },
                    {
                        name: 'B안 · 부위별 확률표',
                        pros: '부위마다 고유한 정체성(방어 위주 / 이속 위주 등)을 부여할 수 있고 빌드 메이킹의 폭이 넓어집니다.',
                        cons: '부위 수만큼 확률표를 따로 관리해야 합니다.',
                    },
                ],
            },

            choiceCard: {
                num: '2',
                heading: '선택한 구조: 부위별 확률표 + 공용 옵션 적용 테이블',
                badge: 'CHOICE',
                paragraphs_html: [
                    '핵앤슬래시 RPG에서는 장비 부위마다 다른 기대감이 있어야 합니다. 신발은 이동, 투구는 방어, 장갑은 공격처럼 부위별로 자주 나오는 옵션이 달라야 선택의 재미가 생깁니다.',
                    '그래서 옵션 후보와 확률은 각 부위가 갖고, 뽑힌 옵션을 스탯에 반영하는 일은 공통 매니저가 처리하도록 나눴습니다. 같은 적용 로직을 부위마다 반복하지 않기 위해서입니다.',
                    '이후 부위별 확률을 조정할 때는 해당 부위만 수정하면 됩니다. 새 옵션을 추가할 때도 공통 적용 목록에 한 번 등록하면 모든 장비에서 사용할 수 있습니다.',
                ],
            },
        },

        /* ====================================================
           PAGE 10 — F2 DETAIL 2 (코드 탭)
        ==================================================== */
        {
            type: 'codeTabs',
            id:   'f2-d2',
            pageNum: '10',
            screenLabel: '10 F2 Detail · 2',

            header_html: 'Legend of Gem / Feature 02 / <b>Detail · 2</b>',
            eyebrow: 'FEATURE DETAIL — 2 / 2',
            title:   '드랍 한 번에 끝나는 옵션 결정과 적용',

            imgSrc: 'assets/techdocs/legend-of-gem/feature-2-detail-2.gif',
            imgAlt: '추후 제작 예정: 같은 갑옷을 여러 번 드랍받을 때 매번 다른 옵션이 붙는 인게임 GIF',

            codeCardTitle: '3 · 부위별 확률표 → 공용 적용 테이블',

            tabs: [
                {
                    key: 'contract',
                    label: 'Armour',
                    file: 'Armour.cs',
                    lang: 'CSHARP',
                    code:
`public interface IEquipment
{
    int Rarity { get; set; }
    List<int> OptionIdx { get; set; }
    Dictionary<int, int> CashingValue { get; set; }
    Dictionary<int, string> DescriptionDic { get; set; }

    int PickRandomOption();
}

public interface IArmour : IEquipment
{
    float Armor   { get; set; }
    float Evasion { get; set; }
}

public class BodyArmour : Item, IArmour
{
    // ... 인터페이스 구현 필드 생략 ...

    public int PickRandomOption()
    {
        float random = Random.Range(0f, 100f);

        // 고정 확률 — 희귀 옵션 우선 분기
        if (random <  2.5f) return  1;   // HP 증가율
        if (random <  5.0f) return  5;   // MP 증가율
        if (random < 15.0f) return  0;   // HP
        if (random < 25.0f) return  4;   // MP
        if (random < 35.0f) return  8;   // 방어
        if (random < 45.0f) return 10;   // 회피

        // 잔여 55%를 7개 옵션에 균등 분배
        float remaining = random - 45.0f;
        float perOption = 55.0f / 7.0f;

        if (remaining < perOption * 1) return 3;
        if (remaining < perOption * 2) return 7;
        // ... 이하 생략 ...
        return 14;
    }
}`,
                },
                {
                    key: 'apply',
                    label: 'EquipmentManager',
                    file: 'EquipmentManager.cs',
                    lang: 'CSHARP',
                    code:
`private Dictionary<int, OptionMeta> optionTable = new();

private void InitOptionTable()
{
    // 옵션 키 → Apply / Remove 람다 한 쌍 등록
    optionTable[0] = new OptionMeta
    {
        Apply  = (s, v) => { s.Hp += v; },
        Remove = (s, v) => { s.Hp -= v; }
    };

    optionTable[8] = new OptionMeta
    {
        Apply  = (s, v) => { s.Armour += v; },
        Remove = (s, v) => { s.Armour -= v; }
    };

    optionTable[12] = new OptionMeta
    {
        Apply  = (s, v) => { s.Strength += (int)v; },
        Remove = (s, v) => { s.Strength -= (int)v; }
    };

    // ... 24개 옵션 등록 ...
}

public void EquipEquipment(Item item)
{
    if (item is not IEquipment equip) return;

    // 방어구라면 기본 방어/회피 스탯을 먼저 더합니다.
    if (equip is IArmour armor)
    {
        EquipmentStat.Armour  += armor.Armor;
        EquipmentStat.Evasion += armor.Evasion;
    }

    // 장비가 가진 옵션 키를 찾아 실제 스탯에 반영합니다.
    foreach (var kv in equip.CashingValue)
    {
        if (optionTable.TryGetValue(kv.Key, out var meta))
        {
            meta.Apply(EquipmentStat, kv.Value);
        }
    }

    playerStatPanelUI.UpdateText();
}`,
                },
            ],

            resultCard: {
                num: '4',
                badge: 'RESULT',
                body_html: '새 옵션은 공통 적용 목록에 한 번만 등록하면 됩니다. 부위별 확률을 바꿀 때도 해당 부위의 옵션 후보만 조정하면 됩니다.',
            },
        },

        /* ====================================================
           PAGE 11 — FEATURE 03 COVER
        ==================================================== */
        {
            type: 'featureCover',
            id:   'f3',
            pageNum: '11',
            screenLabel: '11 F3 Cover',

            header_html: 'Legend of Gem / <b>Feature 03 · 몬스터 팩 스폰</b>',
            num:         '03',
            eyebrow:     'FEATURE · 몬스터 팩 스폰',
            title:       '혼자가 아닌 무리로,\n매번 다른 배치를 만납니다.',
            oneLiner_html: '던전마다 다른 위치에 몬스터 무리가 등장하도록, 스폰 포인트와 배치 좌표를 <span class="hl-blue">매번 다르게 선택</span>합니다.',

            why: {
                label: '구현 배경',
                labelSub: 'Why this feature?',
                body: [
                    '모든 던전이 1:1 전투로만 반복되면 광역 스킬을 강화한 빌드의 재미가 약해집니다. 같은 위치에 같은 수의 몬스터만 나오면 재입장할 이유도 줄어듭니다.',
                    '그래서 매번 일부 스폰 포인트만 켜고, 각 포인트 주변에 몬스터를 흩어 배치했습니다. 같은 던전이라도 전투 위치와 무리 형태가 달라지도록 만들었습니다.',
                ],
            },

            pagesHint: [
                { lbl: 'p.12 · STRUCTURE', ttl: 'Start → SetSpawnPoints → SpawnMonster 흐름도' },
                { lbl: 'p.13·14 · DETAIL', ttl: '고정 스폰 vs 무작위 스폰 의사결정 + 핵심 코드 발췌' },
            ],
        },

        /* ====================================================
           PAGE 12 — F3 STRUCTURE (흐름도)
        ==================================================== */
        {
            type: 'structure',
            id:   'f3-struct',
            pageNum: '12',
            screenLabel: '12 F3 Structure',

            header_html: 'Legend of Gem / Feature 03 / <b>Structure</b>',
            eyebrow: 'CORE FLOW — 동작 흐름도',
            title:   '몬스터 팩 스폰 흐름',

            umlSrc: 'assets/techdocs/legend-of-gem/feature-3-uml.png',
            umlAlt: '추후 제작 예정: Start → SetSpawnPoints (절반 무작위 활성화) → SpawnMonster (포인트당 3~5마리 원형 배치) 단방향 흐름도',

            notes: [
                {
                    type: 'item',
                    h4: '설계 의도',
                    body_html: '스폰 위치 선택과 몬스터 배치를 두 단계로 나눴습니다. 인스펙터에서 포인트와 프리팹만 바꿔도 다른 던전 구성을 만들 수 있도록 단순하게 유지했습니다.',
                },
                {
                    type: 'item',
                    h4: '핵심 흐름 3단계',
                    paragraphs_html: [
                        '<b>1) 던전 진입</b>:<br>스폰 포인트를 먼저 고르고, 그다음 몬스터를 배치합니다.',
                        '<b>2) 포인트 선택</b>:<br>등록된 포인트 중 절반만 무작위로 활성화합니다. 이미 고른 포인트는 다시 뽑지 않습니다.',
                        '<b>3) 몬스터 배치</b>:<br>활성 포인트마다 3~5마리를 주변 원형 범위 안에 흩어 배치합니다.',
                    ],
                },
                {
                    type: 'callout',
                    ic: '단순함',
                    body_html: '스폰 포인트와 몬스터 프리팹만 바꿔도 새로운 던전 구성을 만들 수 있습니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 13 — F3 DETAIL 1
        ==================================================== */
        {
            type: 'decision',
            id:   'f3-d1',
            pageNum: '13',
            screenLabel: '13 F3 Detail · 1',

            header_html: 'Legend of Gem / Feature 03 / <b>Detail · 1</b>',
            eyebrow: 'FEATURE DETAIL — 1 / 2',
            title:   '같은 던전, 매번 다르게 만들기',

            imgSrc: 'assets/techdocs/legend-of-gem/feature-3-detail-1.png',
            imgAlt: '추후 제작 예정: 던전 맵 위에 활성/비활성 스폰 포인트와 몬스터 원형 배치를 시각화한 이미지',

            decisionCard: {
                num: '1',
                heading: '매 던전을 어떻게 다르게 만들 것인가?',
                badge: 'DECISION',
                options: [
                    {
                        name: 'A안 · 고정 스폰',
                        pros: '구현이 가장 단순하며 디버깅이 쉽습니다.',
                        cons: '같은 던전에 다시 들어갈 동기가 사라지고 광역 스킬의 카타르시스가 약해집니다.',
                    },
                    {
                        name: 'B안 · 두 단계 무작위',
                        pros: '매 진입마다 전장이 달라지고, 무리를 한 번에 쓸어버리는 광역 스킬의 효용이 살아납니다.',
                        cons: '두 단계 무작위가 모두 같은 결과를 낼 확률은 거의 없지만, 디버깅 시 재현이 어렵습니다.',
                    },
                ],
            },

            choiceCard: {
                num: '2',
                heading: '선택한 구조: 포인트 절반 활성화 + 원형 분산 배치',
                badge: 'CHOICE',
                paragraphs_html: [
                    '던전을 반복 플레이하는 게임에서는 매 진입이 똑같으면 금방 지루해집니다. 동시에 광역 스킬이 빛을 발하려면 1:1보다 무리 전투가 자주 나와야 했습니다.',
                    '그래서 등록된 스폰 포인트 중 일부만 매번 다르게 켰습니다. 그리고 켜진 포인트마다 몬스터를 주변에 흩어 놓아, 같은 포인트라도 배치가 달라지게 했습니다.',
                    '이 구조에서는 스폰 포인트를 추가하는 것만으로 더 큰 전장을 만들 수 있습니다. 활성화 비율을 조정하면 전투 밀도도 함께 바꿀 수 있습니다.',
                ],
            },
        },

        /* ====================================================
           PAGE 14 — F3 DETAIL 2 (코드)
        ==================================================== */
        {
            type: 'codeTabs',
            id:   'f3-d2',
            pageNum: '14',
            screenLabel: '14 F3 Detail · 2',

            header_html: 'Legend of Gem / Feature 03 / <b>Detail · 2</b>',
            eyebrow: 'FEATURE DETAIL — 2 / 2',
            title:   '두 단계 무작위가 만드는 매번 다른 전장',

            imgSrc: 'assets/techdocs/legend-of-gem/feature-3-detail-2.gif',
            imgAlt: '추후 제작 예정: 같은 던전을 여러 번 진입할 때마다 활성 포인트와 몬스터 위치가 달라지는 인게임 GIF',

            codeCardTitle: '3 · 한 클래스에 끝나는 두 단계 무작위',

            tabs: [
                {
                    key: 'spawn',
                    label: 'MonsterSpawnManager',
                    file: 'MonsterSpawnManager.cs',
                    lang: 'CSHARP',
                    code:
`public class MonsterSpawnManager : MonoBehaviour
{
    [SerializeField] private Transform   monsterParent;
    [SerializeField] private Transform[] spawnPointsArray;
    [SerializeField] private GameObject[] monsterPrefabs;

    private List<Transform> spawnPoints = new();

    private void Start()
    {
        // 포인트 선택 후 몬스터 배치를 순서대로 실행합니다.
        SetSpawnPoints();
        SpawnMonster();
    }

    private void SetSpawnPoints()
    {
        // 전체 스폰 포인트의 절반만 무작위로 활성화
        for (int i = 0; i < spawnPointsArray.Length / 2; i++)
        {
            int idx = Random.Range(0, spawnPointsArray.Length);

            if (spawnPointsArray[idx].gameObject.activeSelf)
            {
                i--;            // 이미 뽑힌 포인트면 재시도
                continue;
            }

            spawnPointsArray[idx].gameObject.SetActive(true);
            spawnPoints.Add(spawnPointsArray[idx]);
        }
    }

    private void SpawnMonster()
    {
        // 이번 던전에서 사용할 몬스터 종류를 하나 고릅니다.
        int monsterIndex = Random.Range(0, monsterPrefabs.Length);

        foreach (var center in spawnPoints)
        {
            int spawnCount = Random.Range(3, 6); // 3~5마리

            for (int i = 0; i < spawnCount; i++)
            {
                // 원형 반경 2.5 안에 무작위 좌표
                Vector2 randomCircle = Random.insideUnitCircle * 2.5f;
                Vector3 spawnPosition = center.position
                    + new Vector3(randomCircle.x, 0f, randomCircle.y);

                Instantiate(monsterPrefabs[monsterIndex],
                            spawnPosition,
                            Quaternion.identity,
                            monsterParent);
            }
        }
    }
}`,
                },
            ],

            resultCard: {
                num: '4',
                badge: 'RESULT',
                body_html: '같은 던전에 다시 들어가도 몬스터가 등장하는 위치와 무리 형태가 달라집니다. 포인트를 늘리면 더 넓은 전장으로 바로 확장할 수 있습니다.',
            },
        },

        /* ====================================================
           PAGE 15 — TROUBLESHOOTING TS-01 카메라 시점과 이동 방향
        ==================================================== */
        {
            type: 'troubleshoot',
            id: 'ts-01',
            pageNum: '15',
            screenLabel: '15 TS-01 · 이동 좌표 문제',

            header_html: 'Legend of Gem / Troubleshooting / <b>TS-01 · 이동 좌표 문제</b>',
            eyebrow: 'TROUBLESHOOTING — TS-01',
            title: '카메라 기준이 빠진 채 월드 좌표로만 움직이고 있었습니다.',
            subtitle: 'WASD 입력이 화면 기준이 아닌 월드 축 기준으로 처리되어 의도와 다른 방향으로 이동했습니다.',

            steps: [
                {
                    n: '01',
                    label: '문제인식',
                    cardType: 'default',
                    body_html:
                        '카메라 시점과 이동 방향이 어긋나, <b>W 입력이 화면 위가 아닌 월드 +Z 방향</b>으로 처리되었습니다.',
                },
                {
                    n: '02',
                    label: '원인 분석',
                    cardType: 'sunk',
                    body_html:
                        '입력값을 카메라 기준으로 변환하지 않고 월드 축에 직접 적용해, 화면 기준 이동과 실제 이동이 달라졌습니다.',
                },
                {
                    n: '03',
                    label: '문제 해결',
                    cardType: 'accent-bar',
                    body_html:
                        '<b>(a)</b> 메인 카메라의 <code class="inline">forward</code>·<code class="inline">right</code> 벡터를 가져와 <code class="inline">y=0</code>으로 만들어 수평면에 투영합니다. <b>(b)</b> 두 벡터를 정규화해 방향 벡터로 만듭니다. <b>(c)</b> 입력 z축 값에는 <code class="inline">camForward</code>를, x축 값에는 <code class="inline">camRight</code>를 곱해 합산하면, 화면 기준 이동 방향이 됩니다.',
                    inlineCode: {
                        file: 'PlayerController.cs',
                        lang: 'CSHARP',
                        lines: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15',
                        highlighted_html:
`<span class="tk-t">Vector3</span> <span class="tk-a">getAxis</span> = <span class="tk-k">new</span> <span class="tk-t">Vector3</span>(<span class="tk-t">Input</span>.<span class="tk-f">GetAxisRaw</span>(<span class="tk-c">"Horizontal"</span>), <span class="tk-n">0</span>,
                              <span class="tk-t">Input</span>.<span class="tk-f">GetAxisRaw</span>(<span class="tk-c">"Vertical"</span>));

<span class="tk-t">Vector3</span> <span class="tk-a">camForward</span> = mainCam.transform.forward;
<span class="tk-t">Vector3</span> <span class="tk-a">camRight</span>   = mainCam.transform.right;

camForward.y = <span class="tk-n">0</span>;
camRight.y   = <span class="tk-n">0</span>;

camForward.<span class="tk-f">Normalize</span>();
camRight.<span class="tk-f">Normalize</span>();

<span class="tk-t">Vector3</span> <span class="tk-a">direction</span> = getAxis.z * camForward + getAxis.x * camRight;
direction.<span class="tk-f">Normalize</span>();
transform.<span class="tk-f">Translate</span>(direction * (RealStat.MovementSpeed * <span class="tk-t">Time</span>.deltaTime),
                    <span class="tk-t">Space</span>.World);`,
                    },
                },
                {
                    n: '04',
                    label: '결과',
                    cardType: 'good',
                    metrics: [],
                    result_html:
                        'W는 화면 위, A는 화면 왼쪽으로 이동합니다. 카메라 방향과 상관없이 입력 의도대로 움직입니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 16 — TROUBLESHOOTING TS-02 이동 애니메이션
        ==================================================== */
        {
            type: 'troubleshoot',
            id: 'ts-02',
            pageNum: '16',
            screenLabel: '16 TS-02 · 블랜드 트리 문제',

            header_html: 'Legend of Gem / Troubleshooting / <b>TS-02 · 블랜드 트리 문제</b>',
            eyebrow: 'TROUBLESHOOTING — TS-02',
            title: '월드 좌표가 그대로 블렌드 트리에 들어가고 있었습니다.',
            subtitle: 'TS-01의 후속 — 이동 방향을 월드 좌표로 계산한 뒤 그대로 애니메이터 파라미터에 넘기면서 블렌드 트리가 오작동했습니다.',

            steps: [
                {
                    n: '01',
                    label: '문제인식',
                    cardType: 'default',
                    body_html:
                        '로컬 기준 8방향 블렌드 트리에 월드 좌표가 들어가, 이동 애니메이션 방향이 어긋났습니다.',
                },
                {
                    n: '02',
                    label: '원인 분석',
                    cardType: 'sunk',
                    body_html:
                        '블렌드 트리는 플레이어 기준 방향값을 기대하지만, 카메라 기준 월드 방향값을 그대로 넘기고 있었습니다.',
                },
                {
                    n: '03',
                    label: '문제 해결',
                    cardType: 'accent-bar',
                    body_html:
                        '<b>(a)</b> <code class="inline">transform.InverseTransformDirection(direction.normalized)</code>으로 월드 → 로컬 벡터로 변환합니다. <b>(b)</b> 변환된 벡터의 <code class="inline">x</code>·<code class="inline">z</code>를 애니메이터의 <code class="inline">DirX</code>·<code class="inline">DirZ</code> 파라미터에 전달합니다. <b>(c)</b> 이동량 변화가 임계치보다 크면 <code class="inline">Walk</code> 불을 토글합니다.',
                    inlineCode: {
                        file: 'PlayerController.cs',
                        lang: 'CSHARP',
                        lines: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12',
                        highlighted_html:
`<span class="tk-t">Vector3</span> <span class="tk-a">localDir</span> = transform.<span class="tk-f">InverseTransformDirection</span>(direction.normalized);

<span class="tk-c">// 이동량으로 실제 움직였는지 판단</span>
<span class="tk-t">Vector3</span> <span class="tk-a">displacement</span> = transform.position - lastPosition;
displacement.y = <span class="tk-n">0</span>;

<span class="tk-t">bool</span> <span class="tk-a">isMoving</span> = displacement.sqrMagnitude &gt; <span class="tk-n">0.0001f</span>;

animator.<span class="tk-f">SetBool</span>(Walk, isMoving);
animator.<span class="tk-f">SetFloat</span>(DirX, localDir.x);
animator.<span class="tk-f">SetFloat</span>(DirZ, localDir.z);

lastPosition = transform.position;`,
                    },
                },
                {
                    n: '04',
                    label: '결과',
                    cardType: 'good',
                    metrics: [],
                    result_html:
                        '8방향 블렌드 트리가 입력 의도대로 동작합니다. A는 왼쪽, W는 전진 애니메이션으로 재생됩니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 17 — TROUBLESHOOTING TS-03 NavMesh 인식
        ==================================================== */
        {
            type: 'troubleshoot',
            id: 'ts-03',
            pageNum: '17',
            screenLabel: '17 TS-03 · 몬스터 플레이어 인식 문제',

            header_html: 'Legend of Gem / Troubleshooting / <b>TS-03 · 몬스터 플레이어 인식 문제</b>',
            eyebrow: 'TROUBLESHOOTING — TS-03',
            title: '직선거리만 보고 벽 너머의 플레이어까지 인식하고 있었습니다.',
            subtitle: 'Distance로만 인식 범위를 판정하면, 벽을 사이에 둔 플레이어도 인식 범위 안에 들어옵니다.',

            steps: [
                {
                    n: '01',
                    label: '문제인식',
                    cardType: 'default',
                    body_html:
                        '벽 뒤 몬스터가 플레이어를 인식하고 <b>멀리 우회해 다가오는 문제</b>가 발생했습니다.',
                },
                {
                    n: '02',
                    label: '원인 분석',
                    cardType: 'sunk',
                    body_html:
                        '인식 범위를 직선거리로만 판단해, 벽으로 막힌 실제 이동 경로를 반영하지 못했습니다.',
                },
                {
                    n: '03',
                    label: '문제 해결',
                    cardType: 'accent-bar',
                    body_html:
                        '<b>(a)</b> <code class="inline">NavMeshPath</code> 객체를 새로 생성하고 <code class="inline">NavMesh.CalculatePath()</code>로 시작점→끝점까지의 경로를 계산합니다. <b>(b)</b> 반환된 <code class="inline">path.corners</code> 배열을 <code class="inline">for</code> 루프로 돌며 각 모서리 사이의 직선거리를 <code class="inline">Vector3.Distance</code>로 누적합산해 실제 경로 길이를 구합니다. <b>(c)</b> 매 프레임 호출 부담을 피하기 위해 0.5초 간격 코루틴으로 갱신합니다.',
                    inlineCode: {
                        file: 'MonsterController.cs',
                        lang: 'CSHARP',
                        lines: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25',
                        highlighted_html:
`<span class="tk-k">private</span> <span class="tk-t">float</span> <span class="tk-f">GetPathDistance</span>(<span class="tk-t">Vector3</span> <span class="tk-a">start</span>, <span class="tk-t">Vector3</span> <span class="tk-a">end</span>)
{
    <span class="tk-t">NavMeshPath</span> <span class="tk-a">path</span> = <span class="tk-k">new</span> <span class="tk-t">NavMeshPath</span>();

    <span class="tk-k">if</span> (<span class="tk-t">NavMesh</span>.<span class="tk-f">CalculatePath</span>(start, end, <span class="tk-t">NavMesh</span>.AllAreas, path))
    {
        <span class="tk-t">float</span> <span class="tk-a">distance</span> = <span class="tk-n">0f</span>;
        <span class="tk-k">for</span> (<span class="tk-t">int</span> <span class="tk-a">i</span> = <span class="tk-n">0</span>; i &lt; path.corners.Length - <span class="tk-n">1</span>; i++)
        {
            distance += <span class="tk-t">Vector3</span>.<span class="tk-f">Distance</span>(path.corners[i],
                                         path.corners[i + <span class="tk-n">1</span>]);
        }
        <span class="tk-k">return</span> distance;
    }

    <span class="tk-k">return</span> <span class="tk-t">Mathf</span>.Infinity;
}

<span class="tk-k">private</span> <span class="tk-t">IEnumerator</span> <span class="tk-f">GetPathDistanceCoroutine</span>()
{
    <span class="tk-k">while</span> (<span class="tk-k">true</span>)
    {
        navDistance = <span class="tk-f">GetPathDistance</span>(transform.position, player.position);
        <span class="tk-k">yield return</span> coroutineWaitTime; <span class="tk-c">// WaitForSeconds(0.5f)</span>
    }
}`,
                    },
                },
                {
                    n: '04',
                    label: '결과',
                    cardType: 'good',
                    metrics: [
                        { v: '0.5', small: 's', l: '갱신 주기 (코루틴)' },
                    ],
                    result_html:
                        '벽 너머 대상은 실제 이동 거리가 길면 제외됩니다. 0.5초마다 갱신해 경로 계산 부담도 줄였습니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 18 — TROUBLESHOOTING TS-04 다중 히트
        ==================================================== */
        {
            type: 'troubleshoot',
            id: 'ts-04',
            pageNum: '18',
            screenLabel: '18 TS-04 · 다중 타격 문제',

            header_html: 'Legend of Gem / Troubleshooting / <b>TS-04 · 다중 타격 문제</b>',
            eyebrow: 'TROUBLESHOOTING — TS-04',
            title: '콜라이더가 켜져 있는 동안 매 프레임 피격이 누적되고 있었습니다.',
            subtitle: '공격 판정을 콜라이더 충돌로 구현했지만, 콜라이더가 켜진 시간 전체에서 다중 히트가 발생했습니다.',

            steps: [
                {
                    n: '01',
                    label: '문제인식',
                    cardType: 'default',
                    body_html:
                        '한 번의 공격 모션에서 대상이 <b>여러 번 피격되는 문제</b>가 발생했습니다.',
                },
                {
                    n: '02',
                    label: '원인 분석',
                    cardType: 'sunk',
                    body_html:
                        '콜라이더가 켜진 동안 매 프레임 충돌 판정이 반복되어, 한 공격에 여러 히트가 누적되었습니다.',
                },
                {
                    n: '03',
                    label: '문제 해결',
                    cardType: 'accent-bar',
                    body_html:
                        '<b>(a)</b> <code class="inline">StateMachineBehaviour</code>를 상속한 <code class="inline">MonsterAttackLogic</code>을 만들어 애니메이션 진행도에 따라 로직을 관리할 수 있게 합니다. <b>(b)</b> <code class="inline">OnStateUpdate</code>가 매 프레임 호출되는 동안 <code class="inline">stateInfo.normalizedTime</code>으로 진행도 0~1을 체크합니다. <b>(c)</b> 인스펙터에서 지정한 <code class="inline">startNormalizedTime</code> 시점에 <code class="inline">weaponCollider.enabled = true</code>, <code class="inline">endNormalizedTime</code> 시점에 다시 <code class="inline">false</code>로 되돌려 타격 구간만 콜라이더를 켭니다.',
                    inlineCode: {
                        file: 'MonsterAttackLogic.cs',
                        lang: 'CSHARP',
                        lines: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35',
                        highlighted_html:
`<span class="tk-k">public class</span> <span class="tk-t">MonsterAttackLogic</span> : <span class="tk-t">StateMachineBehaviour</span>
{
    [<span class="tk-t">Range</span>(<span class="tk-n">0f</span>, <span class="tk-n">1f</span>)] <span class="tk-k">public</span> <span class="tk-t">float</span> <span class="tk-a">startNormalizedTime</span>;
    [<span class="tk-t">Range</span>(<span class="tk-n">0f</span>, <span class="tk-n">1f</span>)] <span class="tk-k">public</span> <span class="tk-t">float</span> <span class="tk-a">endNormalizedTime</span>;

    <span class="tk-k">private</span> <span class="tk-t">bool</span> <span class="tk-a">isPassStartNormalizedTime</span>;
    <span class="tk-k">private</span> <span class="tk-t">bool</span> <span class="tk-a">isPassEndNormalizedTime</span>;
    <span class="tk-k">private</span> <span class="tk-t">Collider</span> <span class="tk-a">weaponCollider</span>;

    <span class="tk-k">public override void</span> <span class="tk-f">OnStateEnter</span>(<span class="tk-t">Animator</span> <span class="tk-a">animator</span>,
        <span class="tk-t">AnimatorStateInfo</span> <span class="tk-a">stateInfo</span>, <span class="tk-t">int</span> <span class="tk-a">layerIndex</span>)
    {
        isPassStartNormalizedTime = <span class="tk-k">false</span>;
        isPassEndNormalizedTime   = <span class="tk-k">false</span>;
        weaponCollider = animator.<span class="tk-f">GetComponent</span>&lt;<span class="tk-t">IMonster</span>&gt;().AttackCollider;
    }

    <span class="tk-k">public override void</span> <span class="tk-f">OnStateUpdate</span>(<span class="tk-t">Animator</span> <span class="tk-a">animator</span>,
        <span class="tk-t">AnimatorStateInfo</span> <span class="tk-a">stateInfo</span>, <span class="tk-t">int</span> <span class="tk-a">layerIndex</span>)
    {
        <span class="tk-t">float</span> <span class="tk-a">time</span> = stateInfo.normalizedTime % <span class="tk-n">1f</span>;

        <span class="tk-c">// 콜라이더 켜기 시점</span>
        <span class="tk-k">if</span> (!isPassStartNormalizedTime &amp;&amp; time &gt;= startNormalizedTime)
        {
            isPassStartNormalizedTime = <span class="tk-k">true</span>;
            weaponCollider.enabled = <span class="tk-k">true</span>;
        }

        <span class="tk-c">// 콜라이더 끄기 시점</span>
        <span class="tk-k">if</span> (!isPassEndNormalizedTime &amp;&amp; time &gt;= endNormalizedTime)
        {
            isPassEndNormalizedTime = <span class="tk-k">true</span>;
            weaponCollider.enabled = <span class="tk-k">false</span>;
        }
    }
}`,
                    },
                },
                {
                    n: '04',
                    label: '결과',
                    cardType: 'good',
                    metrics: [
                        { v: '1', small: '회', l: '공격 1회당 피격 횟수' },
                    ],
                    result_html:
                        '타격 구간에만 콜라이더가 켜져, 공격 1회당 피격도 1회만 발생합니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 19 — RETROSPECTIVE
        ==================================================== */
        {
            type: 'retro',
            id:   'retro',
            pageNum: '19',
            screenLabel: '19 Retrospective',

            header_html: 'Legend of Gem / <b>Retrospective</b>',
            eyebrow: 'RETROSPECTIVE — KEEP · PROBLEM · TRY',
            title:   '스킬 조합은 확장했고, 다음에는 검증을 더 단단하게.',

            keep: [
                {
                    h: '드래그 앤 드롭 중심의 인벤토리 경험.',
                    p: '인벤토리·장비·젬·상점·필드 드롭을 같은 드래그 방식으로 통일했습니다. 기능이 늘어도 조작 학습 부담을 늘리지 않았습니다.',
                },
                {
                    h: '보조 젬을 분리한 스킬 구조.',
                    p: '스킬 본체와 보조 젬 효과를 분리했습니다. 새 효과를 추가해도 기존 스킬 코드를 크게 바꾸지 않아도 됐습니다.',
                },
            ],

            problem: [
                {
                    h: '씬 이동 시 데이터 유지 방식이 불안정함.',
                    p: '인벤토리·장비·젬·스킬 상태를 유지했지만 저장 시점이 명확하지 않았습니다. 초기화 순서와 파괴 타이밍에 영향을 받았습니다.',
                },
                {
                    h: '검증이 대부분 플레이 테스트에 의존함.',
                    p: '장비·젬·스킬·구매 흐름을 대부분 직접 플레이로 확인했습니다. 후반으로 갈수록 수정 후 재확인 비용이 커졌습니다.',
                },
            ],

            try: [
                {
                    n: '1',
                    h: '디버그 도구 / 검증 패널 만들기',
                    p: '인벤토리, 장비, 젬 세트, 스킬 풀, 최종 스탯을 한 화면에서 확인해 문제 원인을 빠르게 찾습니다.',
                },
                {
                    n: '2',
                    h: '상태 머신 도입',
                    p: '이동, 공격, 스킬 시전, 귀환을 상태 머신으로 관리해 조건 분기와 애니메이션 의존을 줄입니다.',
                },
                {
                    n: '3',
                    h: '씬 전환 데이터 생명주기 명확화',
                    p: '씬 이동 전 저장, 로드 후 복원, 종료 시 정리로 시점을 나눕니다. 데이터 흐름을 예측 가능하게 만듭니다.',
                },
            ],
        },

    ], // end pages[]
};

window.TECHDOC = TECHDOC;
