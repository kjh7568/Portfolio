/* ============================================================
   techdoc.data.js — HiveSurvivor 기술문서 단일 진실원
   data.js의 PROJECTS 배열 패턴을 그대로 따름:
     window.TECHDOC = { meta, pages[] }
   pages 배열은 type 디스크리미네이터를 가진 순서 배열.
   Phase D에서 각 type을 React 컴포넌트로 1:1 매핑.
   ============================================================ */

const TECHDOC = {

    /* --------------------------------------------------------
       문서 메타 — utility-bar, title, breadcrumb
    -------------------------------------------------------- */
    meta: {
        title:         'Hive Survivor — 기술문서',
        projectLabel:  'PROJECT 01',
        docTitle:      'Hive Survivor',
        backHref:      'Portfolio.html',
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

            eyebrow: 'PROJECT 01 — TECHNICAL DOCUMENT',
            title:   'Hive\nSurvivor.',

            // 인라인 <b> 태그 포함 — Phase D에서 dangerouslySetInnerHTML
            subtitle_html: '벌집 모양 셀 위에서 펼쳐지는 탑다운 서바이버 게임의 <b>클라이언트 구조와 핵심 기능</b>을 정리한 기술문서.',

            meta: [
                { l: 'Genre',  v: '탑다운 · 서바이버' },
                { l: 'Period', v: '2025.06 — 2025.09', v2: '3 months' },
                { l: 'Team',   v: '4명 · 클라이언트 단독' },
                { l: 'Stack',  v: 'Unity 2022.3 · C# 9 · URP · UniTask', mono: true },
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
                { n: '01', label: '표지 · 프로젝트 개요',   p: 'p.01' },
                { n: 'F1', label: '장비 리롤 + 락 시스템',  p: 'p.03' },
                { n: 'F2', label: '9종 패시브 증강 시스템',    p: 'p.07' },
                { n: 'F3', label: 'Object Pool / Damage',  p: 'p.08' },
                { n: 'F4', label: 'Skill Synergy Graph',   p: 'p.10' },
                { n: '11', label: '회고 · 다음 개선',       p: 'p.11' },
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

            header_html: 'Hive Survivor / <b>Project Overview</b>',
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
                    t: '스테이지 진입 · 초기 스폰',
                    d: 'Hex Grid 위에서 캐릭터 배치, 첫 웨이브 디렉터가 스폰 곡선을 시드합니다.',
                },
                {
                    n: '02',
                    t: '웨이브 진행 · 길찾기 + 전투',
                    d: 'A* 길찾기로 적이 진입, 풀에서 투사체·데미지 객체를 재사용해 GC alloc 0을 유지합니다.',
                },
                {
                    n: '03',
                    t: '스킬 선택 · 시너지 발현',
                    d: '레벨업 시 스킬 그래프에서 시너지 가중치를 계산해 추천 후보를 제시합니다.',
                },
                {
                    n: '04',
                    t: '클리어 · 통계 집계',
                    d: '스테이지 종료 시 프레임/드로우콜/힙 사용량을 기록해 메트릭 페이지로 전송합니다.',
                },
            ],

            features: [
                { n: '01', t: '장비 리롤 + 락 시스템', d: '한 번 뽑은 장비를 버리지 않고, 원하는 옵션은 잠금하고 나머지만 다시 굴립니다.',  href: '#f1', p: 'p.03 →' },
                { n: '02', t: '9종 패시브 증강 시스템',  d: '레벨업마다 9종 중 무작위 3종 추천, 선택으로 즉시 빌드에 반영', href: '#f2', p: 'p.07 →' },
                { n: '03', t: 'Object Pool & Damage', d: '투사체·데미지 풀링으로 GC alloc 0 유지',           href: '#f3', p: 'p.09 →' },
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

            header_html: 'Hive Survivor / <b>Feature 01 · 장비 리롤 + 락 시스템</b>',
            num:         '01',
            eyebrow:     'FEATURE · 장비 리롤 + 락 시스템',
            title:       '한 번 뽑은 장비를\n버리지 않고 다듬어 갑니다.',
            oneLiner_html: '원하는 옵션은 잠금해 보존하고, 나머지 옵션만 다시 굴리는 방식으로 <br><span class="hl-blue">버려지는 장비 없이</span> 자신만의 장비를 만들 수 있도록 구현했습니다.',

            why: {
                label: '구현 배경',
                labelSub: 'Why this feature?',
                body: [
                    '초기 증강 시스템 도입으로 다양한 스탯 강화가 가능했으나, 무작위 증강에만 의존하여 원하는 빌드 구성이 어렵다는 한계가 있었습니다.',
                    // 인라인 <b> 포함
                    '해결 방향 : 플레이어가 <b>확정적으로 스탯을 확보</b>할 수 있도록 <b>장비 시스템</b>을 도입해 운적 요소를 보완했습니다. 장비를 통한 <b>확정적 스탯 획득</b>으로 <b>빌드 계획성</b>을 높이고, <b>증강과 장비의 조합</b>으로 균형 잡힌 성장 시스템을 구축해 <b>랜덤성 의존도</b>를 낮췄습니다.',
                ],
            },

            pagesHint: [
                { lbl: 'p.04 · STRUCTURE', ttl: 'EquipmentEnchant 클래스 구조와 데이터 흐름' },
                { lbl: 'p.05·06 · DETAIL', ttl: '리롤·락 로직, 비용 테이블, 코드 스니펫' },
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

            header_html: 'Hive Survivor / Feature 01 / <b>Structure</b>',
            eyebrow: 'CORE STRUCTURE — 클래스 다이어그램',
            title:   '장비 리롤 + 락 시스템 구조',

            umlSrc: 'assets/P1_F1_UML.png',
            umlAlt: 'Equipment UML 클래스 다이어그램',

            // notes — 각 item은 h4 + 단락 배열. callout은 별도 type.
            notes: [
                {
                    type: 'item',
                    h4: '설계 의도',
                    // <code class="inline"> 포함
                    body_html: '랜덤 증강을 보완할 <b>확정적 스탯 획득 수단</b>으로 장비 시스템을 설계했습니다. <code class="inline">Equipment</code> 인터페이스로 장비 타입을 통일하고, <code class="inline">EquipmentManager</code> 싱글톤이 인벤토리·장착 상태·재화를 중앙 관리합니다.',
                },
                {
                    type: 'item',
                    h4: '핵심 클래스 5개',
                    paragraphs_html: [
                        '<b>Equipment (interface)</b>:<br>공통 스탯 계약을 정의합니다. 새 장비도 구현체 추가로 편입됩니다.',
                        '<b>WeaponContainer / ArmorContainer / BootsContainer</b><br><code class="inline">Equipment</code> 구현체입니다. 장비별 <code class="inline">optionPool</code>을 분리합니다.',
                        '<b>EquipmentManager (Singleton)</b><br>인벤토리·장착 상태·마나스톤 파편을 중앙 관리합니다.',
                        '<b>LobbyUI (UI Package)</b><br>가챠·인벤토리·인챈트·리롤 UI 흐름을 묶습니다.',
                        '<b>PlayerState</b><br>장착 장비를 읽어 플레이어 스탯에 반영합니다.',
                    ],
                },
                {
                    type: 'callout',
                    ic: '추상화',
                    body_html: '<code class="inline">Equipment</code> 인터페이스 추상화로 새 장비 슬롯 추가 시 기존 클래스 수정 없이 구현체만 확장 가능합니다.',
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

            header_html: 'Hive Survivor / Feature 01 / <b>Detail · 1</b>',
            eyebrow: 'FEATURE DETAIL — 1 / 2',
            title:   '장비 추상화와 리롤 구조',

            imgSrc: 'assets/P1_F1_Detail1.png',
            imgAlt: 'Equipment 인터페이스 기반 장비 구조',

            decisionCard: {
                num: '1',
                heading: '장비 리롤 구조의 2가지 선택지',
                badge: 'DECISION',
                options: [
                    {
                        name: 'A안 · 단일 Equipment 클래스 + equipmentType 분기',
                        pros: '초기 구현이 빠르고, 한 클래스에서 장비 데이터를 확인할 수 있습니다.',
                        cons: '장비가 늘수록 사용하지 않는 필드와 타입 분기가 함께 증가합니다.',
                    },
                    {
                        name: 'B안 · Equipment 인터페이스 + 장비별 Container 구현',
                        pros: 'UI는 공통 계약만 참조하고, 장비별 차이는 Container와 옵션 풀로 분리할 수 있습니다.',
                        cons: '공통 필드 반복 구현과 옵션 ID 관리 규칙이 필요합니다.',
                    },
                ],
            },

            choiceCard: {
                num: '2',
                heading: '선택한 구조: Equipment 계약 + 타입별 옵션 풀',
                badge: 'CHOICE',
                // <code class="inline"> 포함
                paragraphs_html: [
                    '무기, 방어구, 신발은 스탯과 옵션 후보가 다르지만, 인벤토리와 리롤 UI에서는 모두 같은 "장비"로 다뤄야 했습니다.',
                    '그래서 공통 필드는 <code class="inline">Equipment</code> 인터페이스로 묶고, 구현은 <code class="inline">WeaponContainer</code>, <code class="inline">ArmorContainer</code>, <code class="inline">BootsContainer</code>로 나눴습니다.',
                    '옵션 후보는 <code class="inline">equipmentType</code>별 <code class="inline">optionPool</code>로 분리했습니다. 리롤 시 현재 옵션을 제외한 후보에서 다시 뽑아 중복을 막습니다.',
                ],
            },
        },

        /* ====================================================
           PAGE 06 — F1 DETAIL 2 (코드 탭)
           스니펫 데이터는 codeTabs.js에서 이쪽으로 이동 (Phase C)
        ==================================================== */
        {
            type: 'codeTabs',
            id:   'f1-d2',
            pageNum: '06',
            screenLabel: '06 F1 Detail · 2',

            header_html: 'Hive Survivor / Feature 01 / <b>Detail · 2</b>',
            eyebrow: 'FEATURE DETAIL — 2 / 2',
            title:   '장비 추상화와 리롤 코드',

            imgSrc: 'assets/P1_F1_Detail2.gif',
            imgAlt: '장비 리롤과 락 시스템 코드 설명',

            codeCardTitle: '3 · 장비 계약과 리롤 옵션 재할당',

            // 코드 탭 스니펫 — codeTabs.js에서 이동
            tabs: [
                {
                    key: 'equipment',
                    label: 'Equipment',
                    file: 'Equipment.cs',
                    lang: 'CSHARP',
                    code:
`public interface Equipment
{
    // UI, 리롤, 스탯 적용이 공통으로 참조하는 장비 계약입니다.
    int equipmentType { get; set; }
    string name { get; set; }
    int rarity { get; set; }

    // optionDescription은 표시 문구, optionPool은 실제 옵션 ID를 보관합니다.
    List<string> optionDescription { get; set; }
    int[] optionPool { get; set; }

    int baseSpellPower { get; set; }
    float defenseFlat { get; set; }
    float movementSpeedFlat { get; set; }

    float criticalChance { get; set; }
    float CriticalDamage { get; set; }
    float SpellDamage { get; set; }
    float CastSpeed { get; set; }
    float Duration { get; set; }
    float AreaIncrease { get; set; }
}`,
                },
                {
                    key: 'weapon',
                    label: 'WeaponContainer',
                    file: 'WeaponContainer.cs',
                    lang: 'CSHARP',
                    code:
`public class WeaponContainer : Equipment
{
    // equipmentType 1은 무기 슬롯을 의미합니다.
    public int equipmentType { get; set; } = 1;
    public string name { get; set; }
    public int rarity { get; set; }

    public List<string> optionDescription { get; set; } = new();

    // 장비는 최대 3개의 옵션 ID를 보관하고, -1은 빈 슬롯입니다.
    public int[] optionPool { get; set; } = { -1, -1, -1 };

    public int baseSpellPower { get; set; }
    public float defenseFlat { get; set; }
    public float movementSpeedFlat { get; set; }

    public float criticalChance { get; set; }
    public float CriticalDamage { get; set; }
    public float SpellDamage { get; set; }
    public float CastSpeed { get; set; }
    public float Duration { get; set; }
    public float AreaIncrease { get; set; }
}`,
                },
                {
                    key: 'reroll',
                    label: 'OptionReassignment',
                    file: 'RerollUI.cs',
                    lang: 'CSHARP',
                    code:
`// 인벤토리에서 선택한 장비를 Equipment 인터페이스 타입으로 보관합니다.
private Equipment selectedItem;

private void OptionReassignment()
{
    // selectedItem.equipmentType으로 무기, 방어구, 신발을 구분합니다.
    // 장비 종류별로 등장 가능한 옵션 ID를 분리합니다.
    int[] weaponOptionPool = { 0, 1, 2, 3, 4, 5 };
    int[] armorOptionPool  = { 4, 5, 6, 7, 8 };
    int[] bootsOptionPool  = { 1, 3, 4, 5, 9 };

    List<int> availableOptions;

    switch (selectedItem.equipmentType)
    {
        case 1:
            for (int i = 0; i < selectedItem.optionDescription.Count; i++)
            {
                // 락된 옵션은 유지하고, 잠기지 않은 슬롯만 다시 뽑습니다.
                if (isLock[i]) continue;

                RemoveOption(i);
                availableOptions = weaponOptionPool
                    .Where(x => !selectedItem.optionPool.Contains(x))
                    .ToList();

                // 이미 가진 옵션을 제외한 후보 중 하나를 선택해 중복을 막습니다.
                allOptionPool[availableOptions[Random.Range(0, availableOptions.Count)]](i);
            }
            break;
    }
}`,
                },
            ],

            resultCard: {
                num: '4',
                badge: 'RESULT',
                // <code class="inline"> 포함
                body_html: '<code class="inline">optionPool</code>은 옵션 ID를, <code class="inline">optionDescription</code>은 UI 표시 문구를 맡도록 나눴습니다. 리롤 시 <code class="inline">equipmentType</code>에 맞는 후보에서 현재 옵션을 제외해 다시 뽑고, <code class="inline">isLock</code>된 옵션은 유지하도록 구성했습니다.',
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

            header_html: 'Hive Survivor / <b>Feature 02 · 9종 패시브 증강 시스템</b>',
            num:         '02',
            eyebrow:     'FEATURE · 9종 패시브 증강 시스템',
            title:       '레벨업마다 3개,\n내 빌드는 내가 고릅니다.',
            oneLiner_html: '9종의 패시브 중 매 레벨업마다 무작위 3개가 추천되고, 하나를 골라 <br><span class="hl-blue">즉시 빌드에 반영</span>합니다. 같은 캐릭터로 시작해도 매 판의 빌드 결이 달라집니다.',

            why: {
                label: '구현 배경',
                labelSub: 'Why this feature?',
                body: [
                    '무작위 증강에만 의존하면 빌드 방향이 플레이어 의도와 무관하게 결정되어 "내 빌드를 만드는 재미"가 반감됩니다.',
                    // 인라인 <b> 포함
                    '해결 방향 : <code class="inline">IAugmentation</code> 인터페이스로 9종을 균일하게 관리하고, 레벨업마다 랜덤 3종을 추천해 선택권을 주되 <b>최대 5회 중첩 제한</b>으로 깊이도 확보했습니다. 원하는 패시브가 없으면 마나를 일부 환원해 다음 기회를 노릴 수 있습니다.',
                ],
            },

            pagesHint: [
                { lbl: 'p.08 · STRUCTURE', ttl: 'IAugmentation 인터페이스와 9종 구현체 구조' },
                { lbl: 'p.09·10 · DETAIL', ttl: '추천 알고리즘, 중첩 관리, 코드 스니펫' },
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

            header_html: 'Hive Survivor / Feature 02 / <b>Structure</b>',
            eyebrow: 'CORE STRUCTURE — 클래스 다이어그램',
            title:   '9종 패시브 증강 시스템 구조',

            umlSrc: 'assets/P1_F2_UML.png',
            umlAlt: 'IAugmentation 클래스 다이어그램',

            // notes — 각 item은 h4 + 단락 배열. callout은 별도 type.
            notes: [
                {
                    type: 'item',
                    h4: '설계 의도',
                    // <code class="inline"> 포함
                    body_html: '<code class="inline">IAugmentation</code> 인터페이스로 9종을 통일해, <code class="inline">SetAugmentation</code>이 구체 타입을 몰라도 <code class="inline">List&lt;IAugmentation&gt;</code>으로 전체를 순회·추천·적용합니다. 신규 패시브는 구현체 추가만으로 기존 코드 수정 없이 풀에 자동 편입됩니다.',
                },
                {
                    type: 'item',
                    h4: '핵심 클래스 4개',
                    paragraphs_html: [
                        '<b>IAugmentation (interface)</b>:<br>이름·설명·중첩 횟수·최대 중첩·<code class="inline">Action()</code> 계약을 정의합니다.',
                        '<b>Health / Fortitude / Intelligence … (9개 구현체)</b>:<br>각 패시브의 스탯 로직을 캡슐화합니다. <code class="inline">IAugmentation</code>만 구현하면 추가 완료.',
                        '<b>SetAugmentation</b>:<br>레벨업 시 랜덤 3종 추출, UI 갱신, 선택 적용을 담당합니다.',
                        '<b>PlayerState</b>:<br><code class="inline">Action()</code> 결과를 받아 실제 스탯에 반영합니다.',
                    ],
                },
                {
                    type: 'callout',
                    ic: '중첩 제한',
                    body_html: '<code class="inline">augmentationMaxCount: 5</code> 한도로 단일 패시브 편중을 막습니다. 후보가 모두 한도에 도달한 경우 마나 환원 선택지로 대체합니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 09 — F2 DETAIL 1 (의사결정 카드)
        ==================================================== */
        {
            type: 'decision',
            id:   'f2-d1',
            pageNum: '09',
            screenLabel: '09 F2 Detail · 1',

            header_html: 'Hive Survivor / Feature 02 / <b>Detail · 1</b>',
            eyebrow: 'FEATURE DETAIL — 1 / 2',
            title:   '패시브 추상화와 추천 구조',

            imgSrc: 'assets/P1_F2_Detail1.png',
            imgAlt: 'IAugmentation 인터페이스 기반 패시브 구조',

            decisionCard: {
                num: '1',
                heading: '패시브 9종 관리 구조의 2가지 선택지',
                badge: 'DECISION',
                options: [
                    {
                        name: 'A안 · 단일 PassiveManager 클래스 + enum 분기',
                        pros: '초기 구현이 빠르고, 모든 패시브 로직을 한 파일에서 확인할 수 있습니다.',
                        cons: '패시브가 늘수록 <code class="inline">switch</code> 분기와 무관 필드가 함께 증가합니다.',
                    },
                    {
                        name: 'B안 · IAugmentation 인터페이스 + 9개 구현체 분리',
                        pros: '<code class="inline">SetAugmentation</code>은 <code class="inline">List&lt;IAugmentation&gt;</code>만 참조. 신규 패시브는 파일 추가만으로 끝납니다.',
                        cons: '클래스 파일이 9개 생기고, 공통 PlayerState 접근 방식 규칙이 필요합니다.',
                    },
                ],
            },

            choiceCard: {
                num: '2',
                heading: '선택한 구조: IAugmentation 계약 + 구현체 분리',
                badge: 'CHOICE',
                // <code class="inline"> 포함
                paragraphs_html: [
                    '패시브 9종은 영향 스탯이 달랐지만, 레벨업 UI는 "이름 / 설명 / 아이콘" 3가지만 필요했습니다.',
                    '그래서 공통 표현은 <code class="inline">IAugmentation</code>으로 묶고, 스탯 적용 로직은 각 구현체(Health, Intelligence …)에 캡슐화했습니다.',
                    '<code class="inline">SetAugmentation</code>은 <code class="inline">List&lt;IAugmentation&gt;</code>에서 인덱스 3개만 뽑으면 구체 타입 없이 UI를 채울 수 있습니다.',
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

            header_html: 'Hive Survivor / Feature 02 / <b>Detail · 2</b>',
            eyebrow: 'FEATURE DETAIL — 2 / 2',
            title:   '패시브 계약과 레벨업 추천 코드',

            imgSrc: 'assets/P1_F2_Detail2.gif',
            imgAlt: '레벨업 패시브 선택 UI',

            codeCardTitle: '3 · IAugmentation 계약과 레벨업 추천 알고리즘',

            // PUML + 분석 문서 기반 재구성 스니펫
            tabs: [
                {
                    key: 'iaugmentation',
                    label: 'IAugmentation',
                    file: 'IAugmentation.cs',
                    lang: 'CSHARP',
                    code:
`public interface IAugmentation
{
    // 레벨업 UI가 구체 타입 없이 이름·설명을 표시하기 위한 공통 계약입니다.
    string augmentationName    { get; set; }
    string augmentationComment { get; set; }

    // 중첩 횟수와 한도를 함께 보관해 중복 추천 방지에 사용합니다.
    int augmentationCount    { get; set; }
    int augmentationMaxCount { get; set; }

    // 패시브 선택 시 호출 — 구현체가 PlayerState 스탯을 직접 올립니다.
    void Action();
}`,
                },
                {
                    key: 'intelligence',
                    label: 'Intelligence',
                    file: 'Intelligence.cs',
                    lang: 'CSHARP',
                    code:
`public class Intelligence : IAugmentation
{
    public string augmentationName    { get; set; } = "지능";
    public string augmentationComment { get; set; } = "주문력이 상승합니다.";
    public int    augmentationCount   { get; set; } = 0;
    public int    augmentationMaxCount{ get; set; } = 5;

    private PlayerState _player;
    public Intelligence(PlayerState player) { _player = player; }

    public void Action()
    {
        // 중첩 횟수를 기록해 SetAugmentation이 한도 도달 여부를 판단합니다.
        augmentationCount++;
        _player.spellPowerFlat += 10f;
    }
}`,
                },
                {
                    key: 'setaugmentation',
                    label: 'SetAugmentation',
                    file: 'SetAugmentation.cs',
                    lang: 'CSHARP',
                    code:
`private void SelectKey()
{
    randomNumber.Clear();
    while (randomNumber.Count < 3)
    {
        int rand = Random.Range(0, augmentations.Count);
        // 이미 뽑혔거나 중첩 한도에 도달한 패시브는 제외합니다.
        if (randomNumber.Contains(rand)) continue;
        if (augmentations[rand].augmentationCount >=
            augmentations[rand].augmentationMaxCount) continue;
        randomNumber.Add(rand);
    }
    for (int i = 0; i < 3; i++) key[i] = randomNumber[i];
    SetUI();
}

public void SelectAction(int num)
{
    // 플레이어가 선택한 슬롯의 인덱스로 Action()을 호출합니다.
    augmentations[key[num]].Action();
    gameObject.SetActive(false);
}`,
                },
            ],

            resultCard: {
                num: '4',
                badge: 'RESULT',
                // <code class="inline"> 포함
                body_html: '<code class="inline">SetAugmentation</code>은 <code class="inline">IAugmentation</code> 목록만 순회하면 되며, 패시브 9종 중 어떤 것이 뽑혔는지 알 필요가 없습니다. 중첩 한도 체크(<code class="inline">augmentationCount &gt;= augmentationMaxCount</code>)도 인터페이스 필드 두 개로 처리해 타입별 조건 분기 없이 통일됩니다.',
            },
        },

        /* ====================================================
           PAGE 11 — FEATURE 02 COVER
        ==================================================== */
        {
            type: 'featureCover',
            id:   'f2-copy',
            pageNum: '11',
            screenLabel: '11 F2 Cover',

            header_html: 'Hive Survivor / <b>Feature 02 · 9종 패시브 증강 시스템</b>',
            num:         '02',
            eyebrow:     'FEATURE · 9종 패시브 증강 시스템',
            title:       '레벨업마다 3개,\n내 빌드는 내가 고릅니다.',
            oneLiner_html: '9종의 패시브 중 매 레벨업마다 무작위 3개가 추천되고, 하나를 골라 <br><span class="hl-blue">즉시 빌드에 반영</span>합니다. 같은 캐릭터로 시작해도 매 판의 빌드 결이 달라집니다.',

            why: {
                label: '구현 배경',
                labelSub: 'Why this feature?',
                body: [
                    '무작위 증강에만 의존하면 빌드 방향이 플레이어 의도와 무관하게 결정되어 "내 빌드를 만드는 재미"가 반감됩니다.',
                    // 인라인 <b> 포함
                    '해결 방향 : <code class="inline">IAugmentation</code> 인터페이스로 9종을 균일하게 관리하고, 레벨업마다 랜덤 3종을 추천해 선택권을 주되 <b>최대 5회 중첩 제한</b>으로 깊이도 확보했습니다. 원하는 패시브가 없으면 마나를 일부 환원해 다음 기회를 노릴 수 있습니다.',
                ],
            },

            pagesHint: [
                { lbl: 'p.12 · STRUCTURE', ttl: 'IAugmentation 인터페이스와 9종 구현체 구조' },
                { lbl: 'p.13·14 · DETAIL', ttl: '추천 알고리즘, 중첩 관리, 코드 스니펫' },
            ],
        },

        /* ====================================================
           PAGE 12 — F2 STRUCTURE
        ==================================================== */
        {
            type: 'structure',
            id:   'f2-copy-struct',
            pageNum: '12',
            screenLabel: '12 F2 Structure',

            header_html: 'Hive Survivor / Feature 02 / <b>Structure</b>',
            eyebrow: 'CORE STRUCTURE — 클래스 다이어그램',
            title:   '9종 패시브 증강 시스템 구조',

            umlSrc: 'assets/P1_F2_UML.png',
            umlAlt: 'IAugmentation 클래스 다이어그램',

            // notes — 각 item은 h4 + 단락 배열. callout은 별도 type.
            notes: [
                {
                    type: 'item',
                    h4: '설계 의도',
                    // <code class="inline"> 포함
                    body_html: '<code class="inline">IAugmentation</code> 인터페이스로 9종을 통일해, <code class="inline">SetAugmentation</code>이 구체 타입을 몰라도 <code class="inline">List&lt;IAugmentation&gt;</code>으로 전체를 순회·추천·적용합니다. 신규 패시브는 구현체 추가만으로 기존 코드 수정 없이 풀에 자동 편입됩니다.',
                },
                {
                    type: 'item',
                    h4: '핵심 클래스 4개',
                    paragraphs_html: [
                        '<b>IAugmentation (interface)</b>:<br>이름·설명·중첩 횟수·최대 중첩·<code class="inline">Action()</code> 계약을 정의합니다.',
                        '<b>Health / Fortitude / Intelligence … (9개 구현체)</b>:<br>각 패시브의 스탯 로직을 캡슐화합니다. <code class="inline">IAugmentation</code>만 구현하면 추가 완료.',
                        '<b>SetAugmentation</b>:<br>레벨업 시 랜덤 3종 추출, UI 갱신, 선택 적용을 담당합니다.',
                        '<b>PlayerState</b>:<br><code class="inline">Action()</code> 결과를 받아 실제 스탯에 반영합니다.',
                    ],
                },
                {
                    type: 'callout',
                    ic: '중첩 제한',
                    body_html: '<code class="inline">augmentationMaxCount: 5</code> 한도로 단일 패시브 편중을 막습니다. 후보가 모두 한도에 도달한 경우 마나 환원 선택지로 대체합니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 13 — F2 DETAIL 1 (의사결정 카드)
        ==================================================== */
        {
            type: 'decision',
            id:   'f2-copy-d1',
            pageNum: '13',
            screenLabel: '13 F2 Detail · 1',

            header_html: 'Hive Survivor / Feature 02 / <b>Detail · 1</b>',
            eyebrow: 'FEATURE DETAIL — 1 / 2',
            title:   '패시브 추상화와 추천 구조',

            imgSrc: 'assets/P1_F2_Detail1.png',
            imgAlt: 'IAugmentation 인터페이스 기반 패시브 구조',

            decisionCard: {
                num: '1',
                heading: '패시브 9종 관리 구조의 2가지 선택지',
                badge: 'DECISION',
                options: [
                    {
                        name: 'A안 · 단일 PassiveManager 클래스 + enum 분기',
                        pros: '초기 구현이 빠르고, 모든 패시브 로직을 한 파일에서 확인할 수 있습니다.',
                        cons: '패시브가 늘수록 <code class="inline">switch</code> 분기와 무관 필드가 함께 증가합니다.',
                    },
                    {
                        name: 'B안 · IAugmentation 인터페이스 + 9개 구현체 분리',
                        pros: '<code class="inline">SetAugmentation</code>은 <code class="inline">List&lt;IAugmentation&gt;</code>만 참조. 신규 패시브는 파일 추가만으로 끝납니다.',
                        cons: '클래스 파일이 9개 생기고, 공통 PlayerState 접근 방식 규칙이 필요합니다.',
                    },
                ],
            },

            choiceCard: {
                num: '2',
                heading: '선택한 구조: IAugmentation 계약 + 구현체 분리',
                badge: 'CHOICE',
                // <code class="inline"> 포함
                paragraphs_html: [
                    '패시브 9종은 영향 스탯이 달랐지만, 레벨업 UI는 "이름 / 설명 / 아이콘" 3가지만 필요했습니다.',
                    '그래서 공통 표현은 <code class="inline">IAugmentation</code>으로 묶고, 스탯 적용 로직은 각 구현체(Health, Intelligence …)에 캡슐화했습니다.',
                    '<code class="inline">SetAugmentation</code>은 <code class="inline">List&lt;IAugmentation&gt;</code>에서 인덱스 3개만 뽑으면 구체 타입 없이 UI를 채울 수 있습니다.',
                ],
            },
        },

        /* ====================================================
           PAGE 14 — F2 DETAIL 2 (코드 탭)
        ==================================================== */
        {
            type: 'codeTabs',
            id:   'f2-copy-d2',
            pageNum: '14',
            screenLabel: '14 F2 Detail · 2',

            header_html: 'Hive Survivor / Feature 02 / <b>Detail · 2</b>',
            eyebrow: 'FEATURE DETAIL — 2 / 2',
            title:   '패시브 계약과 레벨업 추천 코드',

            imgSrc: 'assets/P1_F2_Detail2.gif',
            imgAlt: '레벨업 패시브 선택 UI',

            codeCardTitle: '3 · IAugmentation 계약과 레벨업 추천 알고리즘',

            // PUML + 분석 문서 기반 재구성 스니펫
            tabs: [
                {
                    key: 'iaugmentation',
                    label: 'IAugmentation',
                    file: 'IAugmentation.cs',
                    lang: 'CSHARP',
                    code:
`public interface IAugmentation
{
    // 레벨업 UI가 구체 타입 없이 이름·설명을 표시하기 위한 공통 계약입니다.
    string augmentationName    { get; set; }
    string augmentationComment { get; set; }

    // 중첩 횟수와 한도를 함께 보관해 중복 추천 방지에 사용합니다.
    int augmentationCount    { get; set; }
    int augmentationMaxCount { get; set; }

    // 패시브 선택 시 호출 — 구현체가 PlayerState 스탯을 직접 올립니다.
    void Action();
}`,
                },
                {
                    key: 'intelligence',
                    label: 'Intelligence',
                    file: 'Intelligence.cs',
                    lang: 'CSHARP',
                    code:
`public class Intelligence : IAugmentation
{
    public string augmentationName    { get; set; } = "지능";
    public string augmentationComment { get; set; } = "주문력이 상승합니다.";
    public int    augmentationCount   { get; set; } = 0;
    public int    augmentationMaxCount{ get; set; } = 5;

    private PlayerState _player;
    public Intelligence(PlayerState player) { _player = player; }

    public void Action()
    {
        // 중첩 횟수를 기록해 SetAugmentation이 한도 도달 여부를 판단합니다.
        augmentationCount++;
        _player.spellPowerFlat += 10f;
    }
}`,
                },
                {
                    key: 'setaugmentation',
                    label: 'SetAugmentation',
                    file: 'SetAugmentation.cs',
                    lang: 'CSHARP',
                    code:
`private void SelectKey()
{
    randomNumber.Clear();
    while (randomNumber.Count < 3)
    {
        int rand = Random.Range(0, augmentations.Count);
        // 이미 뽑혔거나 중첩 한도에 도달한 패시브는 제외합니다.
        if (randomNumber.Contains(rand)) continue;
        if (augmentations[rand].augmentationCount >=
            augmentations[rand].augmentationMaxCount) continue;
        randomNumber.Add(rand);
    }
    for (int i = 0; i < 3; i++) key[i] = randomNumber[i];
    SetUI();
}

public void SelectAction(int num)
{
    // 플레이어가 선택한 슬롯의 인덱스로 Action()을 호출합니다.
    augmentations[key[num]].Action();
    gameObject.SetActive(false);
}`,
                },
            ],

            resultCard: {
                num: '4',
                badge: 'RESULT',
                // <code class="inline"> 포함
                body_html: '<code class="inline">SetAugmentation</code>은 <code class="inline">IAugmentation</code> 목록만 순회하면 되며, 패시브 9종 중 어떤 것이 뽑혔는지 알 필요가 없습니다. 중첩 한도 체크(<code class="inline">augmentationCount &gt;= augmentationMaxCount</code>)도 인터페이스 필드 두 개로 처리해 타입별 조건 분기 없이 통일됩니다.',
            },
        },

        /* ====================================================
           PAGE 15 — TROUBLESHOOTING TS-01
        ==================================================== */
        {
            type: 'troubleshoot',
            id:   'ts-01',
            pageNum: '15',
            screenLabel: '15 TS-01 · F1',

            header_html: 'Hive Survivor / Troubleshooting / <b>TS-01 · Feature 01</b>',
            eyebrow: 'TROUBLESHOOTING — TS-01',
            title:   'Wave 4 진입 시 16ms 스파이크',
            subtitle: '90마리 적이 동시에 같은 플레이어를 향해 경로 재계산을 요청하면서 메인 스레드 1프레임을 통째로 점유.',

            steps: [
                {
                    n: '01',
                    label: 'SYMPTOM',
                    cardType: 'default',
                    body_html: 'Wave 4 진입 직후 <b>0.5초간 16~22ms 스파이크</b>가 매 프레임 발생. Profiler 상 <code class="inline">HexAStar.FindPath</code>가 한 프레임 내에 90회 호출됨.',
                },
                {
                    n: '02',
                    label: 'ROOT CAUSE',
                    cardType: 'sunk',
                    body_html: '적 AI가 <code class="inline">FixedUpdate</code>마다 길찾기를 호출하도록 작성되어 있었고, 적 풀이 한꺼번에 활성화되면서 같은 프레임에 모두 1차 경로를 요구. 캐시는 비어 있는 상태였음.',
                },
                {
                    n: '03',
                    label: 'FIX',
                    cardType: 'accent-bar',
                    body_html: '<b>(a)</b> 경로 요청을 큐로 받고, 한 프레임 당 <b>최대 16개</b>만 처리하도록 throttle. <b>(b)</b> 적 활성화 시점을 8프레임에 걸쳐 분산. <b>(c)</b> 적 spawn 시 부모(보스)의 경로를 미리 계산해 캐시 워밍.',
                    // 이 단계에는 인라인 코드 블록이 있음 — 이미 손-하이라이팅 처리됨
                    inlineCode: {
                        file: 'PathRequestQueue.cs',
                        lang: 'CSHARP',
                        // <span class="tk-*"> 수동 마크업이 포함된 HTML
                        // Phase D에서 csharpHighlight.js로 대체하거나 그대로 사용
                        lines: '1\n2\n3\n4\n5\n6\n7\n8\n9',
                        highlighted_html:
`<span class="tk-k">private</span> <span class="tk-k">const</span> <span class="tk-t">int</span> <span class="tk-a">MaxPerFrame</span> = <span class="tk-n">16</span>;

<span class="tk-k">public</span> <span class="tk-k">void</span> <span class="tk-f">Tick</span>()
{
    <span class="tk-k">var</span> budget = <span class="tk-a">MaxPerFrame</span>;
    <span class="tk-k">while</span> (budget-- &gt; <span class="tk-n">0</span> &amp;&amp; _q.<span class="tk-f">TryDequeue</span>(<span class="tk-k">out</span> <span class="tk-k">var</span> req))
        req.<span class="tk-f">Resolve</span>(_pathfinder.<span class="tk-f">FindPath</span>(req.From, req.Goal));
    <span class="tk-c">// remaining requests roll over to next frame</span>
}`,
                    },
                },
                {
                    n: '04',
                    label: 'RESULT',
                    cardType: 'good',
                    metrics: [
                        { v: '22', small: 'ms', delta: '→ 4.3ms', l: 'Worst-case main thread' },
                        { v: '90', small: '→ 16',                 l: 'A* calls / frame' },
                        { v: '0',  delta: 'held',                 l: 'Visible AI delay' },
                        { v: '60', small: 'FPS',                  l: 'Wave 4 hold' },
                    ],
                },
            ],
        },

        /* ====================================================
           PAGE 16 — RETROSPECTIVE
        ==================================================== */
        {
            type: 'retro',
            id:   'retro',
            pageNum: '16',
            screenLabel: '16 Retrospective',

            header_html: 'Hive Survivor / <b>Retrospective</b>',
            eyebrow: 'RETROSPECTIVE — KEEP · PROBLEM · TRY',
            title:   '3개월의 끝에서, 다음에는 더 잘하고 싶은 것.',

            keep: [
                {
                    h: '측정 후 결정.',
                    p: '모든 최적화는 Profiler 캡쳐 → 가설 → 코드 변경 → 재측정 순서를 지켰습니다. 추측으로 손대지 않은 덕분에 실패 횟수가 0이었습니다.',
                },
                {
                    h: '인터페이스 분리.',
                    p: '길찾기·풀·디렉터 모두 인터페이스로 추상화한 덕에, 이후 다른 프로젝트에서 거의 그대로 이식할 수 있었습니다.',
                },
            ],

            problem: [
                {
                    h: '테스트가 늦었다.',
                    // <code class="inline"> 포함
                    p_html: '풀 누수 트러블슈팅은 unit test가 있었다면 더 빨리 잡혔을 사례입니다. 다음 프로젝트는 <code class="inline">Pool</code> 같은 기반 시스템부터 테스트를 깔고 시작합니다.',
                },
                {
                    h: '아트 파이프라인 미숙.',
                    p: 'Addressables 그룹 설계를 늦게 시작해 빌드 사이즈를 한 번 더 줄일 기회를 놓쳤습니다.',
                },
            ],

            try: [
                {
                    n: '1',
                    h: 'ECS / Burst 도입',
                    p: '투사체 1500개 시뮬레이션은 ECS의 좋은 후보. Hex 좌표 산술도 Burst 친화적입니다.',
                },
                {
                    n: '2',
                    h: 'Editor 도구의 정착',
                    p: 'PoolInspector를 시작점으로, 게임 도메인 전용 검사 도구를 의식적으로 더 만들어 봅니다.',
                },
                {
                    n: '3',
                    h: 'Telemetry',
                    p: '출시 후 디바이스별 FPS·세션 길이 데이터를 수집하는 파이프라인을 처음부터 설계합니다.',
                },
            ],
        },

    ], // end pages[]
};

window.TECHDOC = TECHDOC;
