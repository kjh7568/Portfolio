/* ============================================================
   augmentzero.data.js — Augment Zero 기술문서 단일 진실원
   pages 배열은 type 디스크리미네이터를 가진 순서 배열.
   각 type을 React 컴포넌트로 1:1 매핑.
   ============================================================ */

const TECHDOC = {

    /* --------------------------------------------------------
       문서 메타
    -------------------------------------------------------- */
    meta: {
        title:         'Augment Zero — 기술문서',
        projectLabel:  'PROJECT 03',
        docTitle:      'Augment Zero',
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

            eyebrow: 'PROJECT 03 — TECHNICAL DOCUMENT',
            title:   '상황에 맞게 무기를 고르고\n패턴을 읽어 보스를 쓰러뜨린다.',

            subtitle_html: '몰려오는 좀비 떼를 뚫고 무기를 키우며 최후의 보스에 맞서는, <b>FPS 좀비 서바이벌 + 로그라이크 강화</b> 게임의 기술 문서입니다.',

            meta: [
                { l: 'Genre',  v: 'FPS 좀비 서바이벌 + 로그라이크 강화' },
                { l: 'Period', v: '2025.06.07 ~ 2025.06.27', v2: '(약 21일)' },
                { l: 'Team',   v: '2인' },
                { l: 'Stack', tags: ['Unity', 'URP', 'C#', 'NavMesh', 'StateMachine', 'ScriptableObject', 'Coroutine', 'TextMeshPro', 'DOTween', 'Post Processing'] },
            ],

            author: {
                name:   '김지훈',
                nameEn: 'Jeehoon Kim',
                role:   'Unity Client Developer',
                email:  'rwrwg159@gmail.com',
                phone:  '010-0000-0000',
            },

            heroPlaceholder: {
                ttl: '키 비주얼 / 표지 이미지',
                sub: 'DROP IMAGE HERE — 1280 × 720 권장',
            },

            toc: [
                { n: '01', label: '프로젝트 개요 · 게임 흐름',          p: 'p.02' },
                { n: '02', label: '다중 무기 선택/전환 시스템',         p: 'p.03' },
                { n: '03', label: '상점 + 무기 강화 연동',              p: 'p.07' },
                { n: '04', label: '보스 AI · State 패턴',                p: 'p.11' },
                { n: '05', label: '트러블슈팅 · 시점 / NavMesh',         p: 'p.15' },
                { n: '06', label: '회고 · 다음 개선',                    p: 'p.17' },
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

            header_html: 'Augment Zero / <b>Project Overview</b>',
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
                    t: '입장 — 무기 선택',
                    d: '로비에서 시작 무기를 고르고 스테이지에 입장합니다. 4개 슬롯(주무기·보조·근접·수류탄) 중 본인의 플레이 스타일에 맞는 무기를 결정합니다.',
                },
                {
                    n: '02',
                    t: '전투 — 좀비 웨이브',
                    d: '웨이브마다 30~50마리의 좀비가 NavMesh 위를 추격해 옵니다. 무기 전환 키(1·2·F·G) 로 상황에 맞춰 대응하며 코인을 모읍니다.',
                },
                {
                    n: '03',
                    t: '상점 — 무기 강화',
                    d: '웨이브 클리어 후 상점에서 코인으로 새 무기를 구매하거나 보유 무기를 레벨업·등급업합니다. Common → Rare → Epic → Legendary 4단계로 성장합니다.',
                },
                {
                    n: '04',
                    t: '보스전 — 패턴 대응',
                    d: '최종 스테이지에서 보스 Nasty 가 등장합니다. 거리에 따라 일반 공격·스매시·원거리 Brass 패턴을 분기하므로, 거리 조절과 회피 타이밍이 핵심입니다.',
                },
            ],

            features: [
                {
                    n: '01',
                    t: '다중 무기 선택/전환',
                    d: '4슬롯 enum 과 추상 WeaponController 로 7종 무기를 단일 흐름에서 통합 관리합니다.',
                    href: '#f1', p: 'p.03 →',
                },
                {
                    n: '02',
                    t: '상점 + 무기 강화 연동',
                    d: '단일 StorePanelManager 로 아이템샵·무기/방어구 강화 3탭을 일원화하고 옵션 누적 연동을 보장합니다.',
                    href: '#f2', p: 'p.07 →',
                },
                {
                    n: '03',
                    t: '보스 AI · State 패턴',
                    d: 'IBossState 인터페이스로 6개 상태를 객체 단위 분리해 거리·체력에 따라 자동 전환합니다.',
                    href: '#f3', p: 'p.11 →',
                },
            ],
        },

        /* ====================================================
           PAGE 03 — FEATURE 01 COVER · 다중 무기 선택/전환
        ==================================================== */
        {
            type: 'featureCover',
            id:   'f1',
            pageNum: '03',
            screenLabel: '03 F1 Cover',

            header_html: 'Augment Zero / <b>Feature 01 · 다중 무기 선택/전환</b>',
            num:         '01',
            eyebrow:     'FEATURE · 다중 무기 선택/전환',
            title:       '슬롯 하나로 7종을 통일\n무기를 골라 싸운다.',
            oneLiner_html:
                '4개 슬롯 <span class="hl-blue">enum</span> 과 추상 <span class="hl-blue">WeaponController</span> 로 7종 무기의 입력·자세·애니메이션을 단일 흐름으로 통합한 시스템입니다.',

            why: {
                label: '구현 배경',
                labelSub: 'Why this feature?',
                body: [
                    'FPS 게임에서 무기를 늘릴 때마다 입력 처리, 캐릭터 자세, 애니메이터 컨트롤러 교체 코드를 무기별로 복붙하면 입력이 충돌하고 유지보수가 폭발합니다. 7종(소총·권총·샷건·SMG·스나이퍼·나이프·수류탄) 을 동일한 흐름으로 다루지 않으면, 무기 하나 추가할 때마다 PlayerController 와 UI 코드 모두를 손대야 합니다.',
                    '해결 방향 : <b>4슬롯 enum 과 추상 WeaponController 로 입력·자세·애니메이션을 단일 매니저에 모으고</b>, 무기 데이터는 ScriptableObject 로 외화해 추가 비용을 최소화했습니다. 무기 행동(Fire/Reload) 은 구현체별로 두되, 공통 흐름은 매니저가 책임집니다.',
                ],
            },

            pagesHint: [
                { lbl: 'p.04 · STRUCTURE',      ttl: 'WeaponManager + WeaponController 추상 + 7개 구현체' },
                { lbl: 'p.05·06 · DETAIL',      ttl: '슬롯 enum 으로 정형화 / 단일 입력 흐름 코드' },
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

            header_html: 'Augment Zero / Feature 01 / <b>Structure</b>',
            eyebrow: 'CORE STRUCTURE — 클래스 다이어그램',
            title:   '다중 무기 선택/전환 구조',

            umlSrc: 'assets/techdocs/augment-zero/feature-1-uml.png',
            umlAlt: '추후 제작 예정: 다중 무기 시스템 UML 클래스 다이어그램 (WeaponManager·WeaponController·Weapon·WeaponDataSO·구현체 7종)',

            notes: [
                {
                    type: 'item',
                    h4: '설계 의도',
                    body_html:
                        '데이터(<code class="inline">WeaponDataSO</code>)와 행동(<code class="inline">WeaponController</code>) 을 분리하고, 슬롯 단위 전환을 <code class="inline">WeaponManager</code> 가 일원화합니다. 무기 추가 시 데이터 SO 와 구현체 클래스 한 쌍만 늘리면 매니저 흐름에 자동 합류하도록 설계했습니다.',
                },
                {
                    type: 'item',
                    h4: '핵심 클래스 5개',
                    paragraphs_html: [
                        '<b>WeaponManager (singleton MonoBehaviour)</b>:<br>4슬롯(Primary/Secondary/Melee/Grenade) 보유, 입력 키(1·2·F·G) 진입점, 모델 SetActive·캐릭터 자세·Animator 교체를 한 번에 처리.',
                        '<b>WeaponController (abstract)</b>:<br>Fire()/Reload() 추상 + 등급 추첨·크리티컬·최종 데미지 계산 공통 로직 보유.',
                        '<b>Weapon (POCO)</b>:<br>WeaponDataSO 참조 + 런타임 상태(레벨·옵션·탄약). 등급별 랜덤 효과 부여(GenerateRandomEffects).',
                        '<b>WeaponDataSO (ScriptableObject)</b>:<br>레벨별 스탯 테이블 + 등급별 레벨 범위(Common 1-3 / Rare 3-5 / Epic 5-7 / Legendary 7-10).',
                        '<b>구현체 7종</b>:<br>Rifle / Pistol / Shotgun / Smg / Sniper / Knife / Grenade — 각자 Fire()/Reload() 만 다르게 구현.',
                    ],
                },
                {
                    type: 'callout',
                    ic: '슬롯',
                    body_html: '4슬롯 <code class="inline">WeaponSlot</code> enum 이 입력·자세·애니메이션 변경의 단일 분기점이 되어, 무기 추가가 매니저 코드를 거의 건드리지 않습니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 05 — F1 DECISION
        ==================================================== */
        {
            type: 'decision',
            id:   'f1-d1',
            pageNum: '05',
            screenLabel: '05 F1 Detail · 1',

            header_html: 'Augment Zero / Feature 01 / <b>Detail · 1</b>',
            eyebrow: 'FEATURE DETAIL — 1 / 2',
            title:   '무기를 어떻게 정형화할 것인가',

            imgSrc: 'assets/techdocs/augment-zero/feature-1-detail-1.png',
            imgAlt: '추후 제작 예정: 슬롯 enum 기반 단일 진입점 다이어그램',

            decisionCard: {
                num: '1',
                heading: '무기 정형화의 2가지 선택지',
                badge: 'DECISION',
                options: [
                    {
                        name: 'A안 · 무기별 독립 컴포넌트 + 직접 입력 처리',
                        pros: '구현체 단위로 독립적이라 초기 구현 속도가 빠름.',
                        cons: '무기 추가 시마다 PlayerController·Animator 와 결합. 입력 충돌·자세 깜빡임 등 회귀 버그 다발.',
                    },
                    {
                        name: 'B안 · 슬롯 enum + 추상 WeaponController + 단일 매니저',
                        pros: '입력·자세·애니메이션 변경 진입점이 한 곳. 무기 추가가 데이터·구현체 한 쌍 추가로 끝남.',
                        cons: '초기 추상화 비용 발생. 매니저가 비대해질 위험 있음.',
                    },
                ],
            },

            choiceCard: {
                num: '2',
                heading: '선택한 구조: 슬롯 enum + 추상 매니저',
                badge: 'CHOICE',
                paragraphs_html: [
                    '7종 무기를 21일 안에 모두 안정화해야 했고, 무기 추가가 빈번한 프로젝트 특성상 추가 비용을 줄이는 게 우선이었습니다.',
                    '<code class="inline">WeaponSlot</code> enum 으로 슬롯을 정형화하고, <code class="inline">WeaponController</code> 추상 클래스로 Fire/Reload 만 무기별로 다르게 두었습니다. 데이터는 <code class="inline">WeaponDataSO</code> 로 외화해 디자이너가 인스펙터에서 등급·레벨 스탯을 조정할 수 있게 했습니다.',
                    '이 구조로 무기 추가 시 SO 1개 + 구현체 1개만 늘리면 매니저 흐름에 자동 합류하며, 입력·자세·애니메이션 분기 코드 수정이 발생하지 않았습니다.',
                ],
            },
        },

        /* ====================================================
           PAGE 06 — F1 CODE TABS
        ==================================================== */
        {
            type: 'codeTabs',
            id:   'f1-d2',
            pageNum: '06',
            screenLabel: '06 F1 Detail · 2',

            header_html: 'Augment Zero / Feature 01 / <b>Detail · 2</b>',
            eyebrow: 'FEATURE DETAIL — 2 / 2',
            title:   '슬롯 enum 으로 7종을 단일 흐름에 태우다',

            imgSrc: 'assets/techdocs/augment-zero/feature-1-detail-2.gif',
            imgAlt: '추후 제작 예정: 무기 슬롯 전환 데모 GIF',

            codeCardTitle: '3 · 슬롯 enum + 추상 WeaponController + 매니저 분기',

            tabs: [
                {
                    key:   'data',
                    label: 'WeaponDataSO',
                    file:  'WeaponDataSO.cs',
                    lang:  'CSHARP',
                    code: `public enum WeaponType { Akm, M4, Sniper, Shotgun, Ump, Pistol, Knife, Grenade }
public enum WeaponGrade { Common, Rare, Epic, Legendary }

[CreateAssetMenu(menuName = "Gun/Create New GunData")]
public class WeaponDataSO : ScriptableObject
{
    public string weaponName;
    public WeaponType weaponType;
    public WeaponGrade grade;
    public List<WeaponLevelStat> levelStats;
    public List<WeaponSpecialEffect> possibleEffects;

    // 등급별 레벨 범위 — Common 1-3 / Rare 3-5 / Epic 5-7 / Legendary 7-10
    private static readonly Dictionary<WeaponGrade, (int min, int max)> gradeLevelLimits = new()
    {
        { WeaponGrade.Common,    (1, 3) },
        { WeaponGrade.Rare,      (3, 5) },
        { WeaponGrade.Epic,      (5, 7) },
        { WeaponGrade.Legendary, (7, 10) }
    };

    public WeaponLevelStat GetStatByLevel(int level) { /* ... */ }
}`,
                },
                {
                    key:   'controller',
                    label: 'WeaponController',
                    file:  'WeaponController.cs',
                    lang:  'CSHARP',
                    code: `public abstract class WeaponController : MonoBehaviour
{
    public Weapon weapon;
    public WeaponDataSO weaponData;

    public abstract void Fire();
    public abstract void Reload();

    protected float GetFinalDamage(bool isCritical)
    {
        float baseDamage = weapon.currentStat.damage;
        float multiplier = CalculateAttackMultiplier(weapon.Type);
        var stat = Player.localPlayer.coreStat;

        return isCritical
            ? baseDamage * multiplier * stat.multiplierAllDamage
                        * Player.localPlayer.inventory.EquipmentStat.criticalDamage
            : baseDamage * multiplier * stat.multiplierAllDamage;
    }

    protected bool IsCritical()
    {
        var rate = Random.Range(0, 100);
        return rate < Player.localPlayer.inventory.EquipmentStat.criticalChance;
    }
}`,
                },
                {
                    key:   'manager',
                    label: 'WeaponManager',
                    file:  'WeaponManager.cs',
                    lang:  'CSHARP',
                    code: `public enum WeaponSlot { Primary, Secondary, Melee, Grenade }

public WeaponController primaryWeapon, secondaryWeapon, knifeWeapon, grenadeWeapon;
public WeaponController currentWeapon;

private void Update()
{
    if (Input.GetKeyDown(KeyCode.Alpha1)) EquipWeapon(WeaponSlot.Primary);
    else if (Input.GetKeyDown(KeyCode.Alpha2)) EquipWeapon(WeaponSlot.Secondary);
    // F: 근접, G: 수류탄 (생략)
}

private void EquipWeapon(WeaponSlot slot)
{
    if (currentWeapon != null) currentWeapon.gameObject.SetActive(false);

    switch (slot)
    {
        case WeaponSlot.Primary:
            primaryWeapon.gameObject.SetActive(true);
            currentWeapon = primaryWeapon;
            characterModel.localPosition = RifleStancePosition;
            animator.runtimeAnimatorController = rifleController;
            break;
        // Secondary 동일 패턴 (생략)
    }
}`,
                },
            ],

            resultCard: {
                num: '4',
                badge: 'RESULT',
                body_html:
                    '4슬롯 enum + <code class="inline">WeaponController</code> 추상화 + <code class="inline">WeaponDataSO</code> 분리로, 7종 무기 추가 시 데이터·구현체 한 쌍만 늘리면 매니저 흐름에 자동 합류합니다.',
            },
        },

        /* ====================================================
           PAGE 07 — FEATURE 02 COVER · 상점 + 무기 강화 연동
        ==================================================== */
        {
            type: 'featureCover',
            id:   'f2',
            pageNum: '07',
            screenLabel: '07 F2 Cover',

            header_html: 'Augment Zero / <b>Feature 02 · 상점 시스템 + 무기 강화 연동</b>',
            num:         '02',
            eyebrow:     'FEATURE · 상점 시스템 + 무기 강화 연동',
            title:       '내가 키운 무기가\n더 강해진다.',
            oneLiner_html:
                '단일 <span class="hl-blue">StorePanelManager</span> 로 아이템샵·무기 강화·방어구 강화 3탭을 일원화하고, 무기 인스턴스(<span class="hl-blue">Weapon</span>) 를 매개로 강화 시스템과 옵션 누적을 연동합니다.',

            why: {
                label: '구현 배경',
                labelSub: 'Why this feature?',
                body: [
                    '상점이 아이템샵·무기 강화·방어구 강화 세 종류로 나뉘는데, 각 패널이 독립 매니저를 가지면 패널 ON/OFF·커서 상태·플레이어 입력 잠금이 곳곳에 흩어져 동시에 두 패널이 켜지거나 커서가 풀리지 않는 회귀 버그가 반복됩니다. 또 무기 강화 결과가 실시간 무기에 반영되지 않으면, 옵션 누적·등급업 직후 발사 데미지 계산이 어긋날 수 있습니다.',
                    '해결 방향 : <b>StorePanelManager 단일 진입점에서 3탭 패널 활성/비활성과 입력 잠금을 통제하고</b>, Weapon 인스턴스를 매개로 강화 시스템(<code class="inline">UpgradeWeaponSystem</code>) 과 매니저(<code class="inline">WeaponManager.ApplyWeaponOption</code>) 가 옵션 누적을 동기화하도록 묶었습니다.',
                ],
            },

            pagesHint: [
                { lbl: 'p.08 · STRUCTURE',  ttl: 'StorePanelManager + 3탭 매니저 + Weapon 인스턴스 매개' },
                { lbl: 'p.09·10 · DETAIL',  ttl: '상점 골격 단일화 / 강화 ↔ 옵션 적용 연동 코드' },
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

            header_html: 'Augment Zero / Feature 02 / <b>Structure</b>',
            eyebrow: 'CORE STRUCTURE — 클래스 다이어그램',
            title:   '상점 시스템 + 무기 강화 연동 구조',

            umlSrc: 'assets/techdocs/augment-zero/feature-2-uml.png',
            umlAlt: '추후 제작 예정: 상점/강화 시스템 UML 다이어그램',

            notes: [
                {
                    type: 'item',
                    h4: '설계 의도',
                    body_html:
                        '상점은 UI 골격(<code class="inline">StorePanelManager</code>) + 3개 도메인 매니저(아이템샵 / 무기 강화 / 방어구 강화) 로 분리합니다. 도메인 매니저는 <code class="inline">Weapon</code> 인스턴스만 주고받고, 실제 옵션 누적·통계 적용은 <code class="inline">WeaponManager</code> 가 책임지도록 했습니다.',
                },
                {
                    type: 'item',
                    h4: '핵심 클래스 5개',
                    paragraphs_html: [
                        '<b>StorePanelManager (singleton)</b>:<br>3탭 패널 활성/비활성 + 커서 상태 + 플레이어/무기 입력 잠금을 단일 진입점에서 제어.',
                        '<b>ItemShopManager</b>:<br>3슬롯 무기 랜덤 생성(<code class="inline">GetRandomWeapon</code>) + 등급 추첨(<code class="inline">GetRandomGrade</code>) + 구매 시 이전 무기 드롭(<code class="inline">DropPreviousWeapon</code>).',
                        '<b>UpgradeWeaponSystem</b>:<br>무기 레벨업/등급업 진입점. 등급업 시 <code class="inline">AddRandomEffect</code> 로 옵션 한 줄 누적 → <code class="inline">WeaponManager.ApplyWeaponOption</code> 으로 매니저에 즉시 반영.',
                        '<b>UpgradeArmorSystem</b>:<br>방어구 동일 패턴. 데이터 없는 방어구는 강화 차단.',
                        '<b>WeaponManager.ApplyWeaponOption / RemoveWeaponOption</b>:<br>옵션 적용·제거 비대칭 방지 위해 단일 옵션용 <code class="inline">ApplySingleOption(option, sign)</code> 헬퍼 도입.',
                    ],
                },
                {
                    type: 'callout',
                    ic: '매개체',
                    body_html: '<code class="inline">Weapon</code> POCO 인스턴스가 상점·강화·매니저 사이 데이터 통로 역할을 하므로, 강화 결과가 실시간 무기에 즉시 반영됩니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 09 — F2 DECISION
        ==================================================== */
        {
            type: 'decision',
            id:   'f2-d1',
            pageNum: '09',
            screenLabel: '09 F2 Detail · 1',

            header_html: 'Augment Zero / Feature 02 / <b>Detail · 1</b>',
            eyebrow: 'FEATURE DETAIL — 1 / 2',
            title:   '상점 시스템을 어디까지 묶을 것인가',

            imgSrc: 'assets/techdocs/augment-zero/feature-2-detail-1.png',
            imgAlt: '추후 제작 예정: 상점 패널 3탭 구조 다이어그램',

            decisionCard: {
                num: '1',
                heading: '상점 골격의 2가지 선택지',
                badge: 'DECISION',
                options: [
                    {
                        name: 'A안 · 패널마다 독립 매니저 + 자체 입력 잠금',
                        pros: '각 패널 도메인 로직이 자기 매니저 안에 있어 격리도가 높음.',
                        cons: '패널 동시 활성·커서 잠금 풀림 등 회귀 버그가 패널 수만큼 발생. 입력 잠금 코드가 곳곳에 중복.',
                    },
                    {
                        name: 'B안 · 단일 StorePanelManager + 도메인 매니저 위임',
                        pros: '패널 활성/커서/입력 잠금을 한 곳에서 제어. 도메인 로직은 도메인 매니저가 책임져 분리도 유지.',
                        cons: '매니저가 UI 책임을 너무 많이 가질 위험. 도메인 매니저와 책임 경계 명확히 잡아야 함.',
                    },
                ],
            },

            choiceCard: {
                num: '2',
                heading: '선택한 구조: 단일 매니저 + 도메인 위임',
                badge: 'CHOICE',
                paragraphs_html: [
                    '세 종류 패널을 21일 안에 회귀 없이 안정화하는 게 우선이었고, 입력 잠금·커서 상태가 한 곳에서 통제되지 않으면 보스전 직전에 마우스가 풀리는 치명적 버그로 이어집니다.',
                    '<code class="inline">StorePanelManager</code> 가 패널 활성/비활성·커서·플레이어 입력 잠금만 책임지고, 실제 도메인 동작(랜덤 무기 생성·강화 비용·옵션 누적) 은 <code class="inline">ItemShopManager</code> / <code class="inline">UpgradeWeaponSystem</code> 등 도메인 매니저로 위임했습니다.',
                    '이 구조로 패널 추가 시 <code class="inline">SwitchToXxx()</code> 메서드 한 개만 늘리면 되고, 입력 잠금 코드는 <code class="inline">OpenPanel/ClosePanel</code> 한 쌍에만 존재합니다.',
                ],
            },
        },

        /* ====================================================
           PAGE 10 — F2 CODE TABS
        ==================================================== */
        {
            type: 'codeTabs',
            id:   'f2-d2',
            pageNum: '10',
            screenLabel: '10 F2 Detail · 2',

            header_html: 'Augment Zero / Feature 02 / <b>Detail · 2</b>',
            eyebrow: 'FEATURE DETAIL — 2 / 2',
            title:   'Weapon 인스턴스를 매개로 강화·옵션을 동기화하다',

            imgSrc: 'assets/techdocs/augment-zero/feature-2-detail-2.gif',
            imgAlt: '추후 제작 예정: 상점 구매 → 강화 → 발사 데미지 반영 데모 GIF',

            codeCardTitle: '3 · 단일 매니저 + 강화 시 옵션 누적 적용',

            tabs: [
                {
                    key:   'panel',
                    label: 'StorePanelManager',
                    file:  'StorePanelManager.cs',
                    lang:  'CSHARP',
                    code: `public class StorePanelManager : MonoBehaviour
{
    public static StorePanelManager Instance;
    [SerializeField] private GameObject storePanel;
    [SerializeField] private GameObject itemShop, weaponUpgrade, armorUpgrade;

    public void OpenPanel()
    {
        storePanel.SetActive(true);
        itemShop.SetActive(true);
        weaponUpgrade.SetActive(false);
        armorUpgrade.SetActive(false);

        Cursor.lockState = CursorLockMode.None;
        Cursor.visible = true;
        FindObjectOfType<PlayerController>().isOpenPanel = true;
        WeaponManager.instance.currentWeapon.isOpenPanel = true;
    }

    public void SwitchToWeaponUpgrade()
    {
        itemShop.SetActive(false);
        weaponUpgrade.SetActive(true);
        armorUpgrade.SetActive(false);
    }
    // SwitchToItemShop / SwitchToArmorUpgrade 동일 패턴
}`,
                },
                {
                    key:   'shop',
                    label: 'ItemShopManager',
                    file:  'ItemShopManager.cs',
                    lang:  'CSHARP',
                    code: `public void OnClickBuyButton(int index)
{
    if (Player.localPlayer.coin < prices[index]) return;
    buttons[index].interactable = false;

    DropPreviousWeapon(storeWeapons[index].Type);   // 기존 무기 드롭
    Player.localPlayer.coin -= prices[index];

    WeaponManager.instance.ApplyWeaponOption(storeWeapons[index]);
    WeaponManager.instance.ChangeWeapon(storeWeapons[index]);
}`,
                },
                {
                    key:   'upgrade',
                    label: 'UpgradeWeaponSystem',
                    file:  'UpgradeWeaponSystem.cs',
                    lang:  'CSHARP',
                    code: `private bool TryUpgradeGrade()
{
    var data = currentWeapon.data;
    int curr = currentWeapon.currentLevel;
    int max  = data.GetMaxLevelForGrade();

    if (curr < max) return false;
    if (data.grade == WeaponGrade.Legendary) return false;

    int cost = GetWeaponGradeUpCost(data.grade);
    if (Player.localPlayer.coin < cost) return false;
    Player.localPlayer.coin -= cost;

    data.grade = data.grade + 1;
    currentWeapon.ApplyLevel(data.GetMinLevelForGrade());

    var newOpt = currentWeapon.AddRandomEffect();
    if (newOpt.HasValue)
        WeaponManager.instance.ApplyWeaponOption(newOpt.Value);  // 매니저에 즉시 반영
    return true;
}`,
                },
            ],

            resultCard: {
                num: '4',
                badge: 'RESULT',
                body_html:
                    '<code class="inline">Weapon</code> 인스턴스를 매개로 상점·강화·매니저가 동기화돼, 등급업 직후 발사부터 누적된 옵션이 데미지·치명타 계산에 즉시 반영됩니다.',
            },
        },

        /* ====================================================
           PAGE 11 — FEATURE 03 COVER · 보스 AI · State 패턴
        ==================================================== */
        {
            type: 'featureCover',
            id:   'f3',
            pageNum: '11',
            screenLabel: '11 F3 Cover',

            header_html: 'Augment Zero / <b>Feature 03 · 보스 AI · State 패턴</b>',
            num:         '03',
            eyebrow:     'FEATURE · 보스 AI (Nasty) State 패턴',
            title:       '패턴을 읽어야\n이긴다.',
            oneLiner_html:
                '<span class="hl-blue">IBossState</span> 인터페이스로 6개 상태(Move/Attack/Smash/Stunned/Brass/Die) 를 객체 단위로 분리하고, <span class="hl-blue">거리·체력</span> 기반으로 상태를 자동 전환하는 보스 AI 입니다.',

            why: {
                label: '구현 배경',
                labelSub: 'Why this feature?',
                body: [
                    '보스가 "단순히 따라와 때리는 적" 으로 보이지 않으려면 거리·체력·시간에 따라 행동이 달라져야 합니다. 그런데 모든 분기를 단일 거대 switch / if-else 로 짜면, 패턴 추가나 수정 시 다른 패턴까지 회귀가 일어나 21일 일정 안에 안정화가 어렵습니다.',
                    '해결 방향 : <b>IBossState 인터페이스 + State 객체별 파일 분리</b>로 각 행동을 격리했습니다. <code class="inline">BossController.SwitchState()</code> 한 줄이 진입/종료 훅을 관리하고, <code class="inline">StartDelay()</code> 로 애니메이션 길이 후 자동 복귀를 처리합니다.',
                ],
            },

            pagesHint: [
                { lbl: 'p.12 · STRUCTURE', ttl: 'IBossState + BossController + 6개 State 구현체' },
                { lbl: 'p.13·14 · DETAIL', ttl: '거대 switch 대신 객체 분리 / 거리 기반 자동 분기 코드' },
            ],
        },

        /* ====================================================
           PAGE 12 — F3 STRUCTURE
        ==================================================== */
        {
            type: 'structure',
            id:   'f3-struct',
            pageNum: '12',
            screenLabel: '12 F3 Structure',

            header_html: 'Augment Zero / Feature 03 / <b>Structure</b>',
            eyebrow: 'CORE STRUCTURE — 클래스 다이어그램',
            title:   '보스 AI · State 패턴 구조',

            umlSrc: 'assets/techdocs/augment-zero/feature-3-uml.png',
            umlAlt: '추후 제작 예정: 보스 AI State 패턴 UML (IBossState·BossController·6개 State)',

            notes: [
                {
                    type: 'item',
                    h4: '설계 의도',
                    body_html:
                        '행동을 객체로 본다 — 한 상태가 한 파일에 들어가도록 강제하면, 패턴 추가/수정이 다른 패턴에 영향을 주지 않습니다. <code class="inline">BossController</code> 가 현재 상태만 들고 <code class="inline">UpdateState()</code> 를 위임하고, 상태 전환은 <code class="inline">SwitchState()</code> 한 점만 통과합니다.',
                },
                {
                    type: 'item',
                    h4: '핵심 클래스 5개',
                    paragraphs_html: [
                        '<b>IBossState (interface)</b>:<br>EnterState / UpdateState / ExitState 세 훅. 모든 상태가 동일한 라이프사이클을 따름.',
                        '<b>BossController (abstract MonoBehaviour)</b>:<br>현재 상태 보유 + SwitchState() + StartDelay() (애니메이션 길이 후 자동 복귀용 코루틴 헬퍼).',
                        '<b>NastyController : BossController</b>:<br>구체 보스. Update() 에서 CurrentState.UpdateState() 호출.',
                        '<b>Nasty : MonoBehaviour, IMonster</b>:<br>피격 처리. 체력 임계치 도달 시 Stunned, 0 이하 시 Die 로 강제 전환.',
                        '<b>State 구현체 6종</b>:<br>BossMoveState / BossAttackState / BossSmashState / BossStunnedState / BossBrassState / BossDieState — 각자 한 파일.',
                    ],
                },
                {
                    type: 'callout',
                    ic: '분기',
                    body_html: 'BossMoveState.UpdateState() 가 매 프레임 거리(<code class="inline">&lt;10f</code> / <code class="inline">&lt;20f</code> / 그 외)를 보고 Attack·Smash·Brass·추격으로 분기하므로, 보스가 "패턴을 가진 상대" 처럼 느껴집니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 13 — F3 DECISION
        ==================================================== */
        {
            type: 'decision',
            id:   'f3-d1',
            pageNum: '13',
            screenLabel: '13 F3 Detail · 1',

            header_html: 'Augment Zero / Feature 03 / <b>Detail · 1</b>',
            eyebrow: 'FEATURE DETAIL — 1 / 2',
            title:   '보스 행동을 어떻게 분리할 것인가',

            imgSrc: 'assets/techdocs/augment-zero/feature-3-detail-1.png',
            imgAlt: '추후 제작 예정: State 객체 분리 다이어그램',

            decisionCard: {
                num: '1',
                heading: '보스 행동 분리의 2가지 선택지',
                badge: 'DECISION',
                options: [
                    {
                        name: 'A안 · 거대 switch / enum 기반 단일 클래스',
                        pros: '초기 구현이 빠르고 한 파일에서 흐름이 한눈에 보임.',
                        cons: '패턴 추가 시 switch 비대화. 한 패턴 수정이 다른 패턴 회귀 유발. 진입/종료 훅 강제 어려움.',
                    },
                    {
                        name: 'B안 · IBossState 인터페이스 + 상태별 파일 분리',
                        pros: '한 상태 = 한 파일. 추가/수정이 다른 상태에 영향 없음. EnterState/ExitState 가 강제돼 애니메이터 트리거·플래그 정리 누락 방지.',
                        cons: '클래스 수가 늘어나고, 상태 간 데이터 공유는 BossController 를 거쳐야 함.',
                    },
                ],
            },

            choiceCard: {
                num: '2',
                heading: '선택한 구조: IBossState 객체 분리',
                badge: 'CHOICE',
                paragraphs_html: [
                    '보스 패턴이 5~6개 이상이고 후속 패턴 추가 가능성이 있었으므로, 회귀 위험을 줄이는 게 시간을 절약하는 길이었습니다.',
                    '<code class="inline">IBossState</code> 인터페이스로 EnterState/UpdateState/ExitState 라이프사이클을 강제하고, <code class="inline">BossController.SwitchState()</code> 가 진입·종료 훅을 자동 호출하도록 했습니다. 시간 기반 복귀는 <code class="inline">StartDelay()</code> 코루틴 헬퍼로 일원화했습니다.',
                    '이 구조로 신규 패턴(예: <code class="inline">BossBrassState</code>) 추가가 파일 1개 + <code class="inline">BossMoveState</code> 분기 한 줄 변경으로 끝났고, 기존 패턴은 회귀 없이 유지됐습니다.',
                ],
            },
        },

        /* ====================================================
           PAGE 14 — F3 CODE TABS
        ==================================================== */
        {
            type: 'codeTabs',
            id:   'f3-d2',
            pageNum: '14',
            screenLabel: '14 F3 Detail · 2',

            header_html: 'Augment Zero / Feature 03 / <b>Detail · 2</b>',
            eyebrow: 'FEATURE DETAIL — 2 / 2',
            title:   '거리·체력에 따라 상태가 스스로 갈라진다',

            imgSrc: 'assets/techdocs/augment-zero/feature-3-detail-2.gif',
            imgAlt: '추후 제작 예정: 보스 거리별 패턴 분기 데모 GIF',

            codeCardTitle: '3 · IBossState 인터페이스 + 거리 기반 자동 분기',

            tabs: [
                {
                    key:   'interface',
                    label: 'IBossState',
                    file:  'IBossState.cs / BossController.cs',
                    lang:  'CSHARP',
                    code: `public interface IBossState
{
    void EnterState(BossController boss);
    void UpdateState(BossController boss);
    void ExitState(BossController boss);
}

public class BossController : MonoBehaviour
{
    public NavMeshAgent agent;
    public Transform target;
    public Animator animator;
    protected IBossState CurrentState;

    public void SwitchState(IBossState newState)
    {
        CurrentState?.ExitState(this);
        CurrentState = newState;
        CurrentState?.EnterState(this);
    }

    public void StartDelay(float delayTime, IBossState nextState)
    {
        StartCoroutine(StateDelay_Coroutine(delayTime, nextState));
    }
    private IEnumerator StateDelay_Coroutine(float t, IBossState next)
    {
        yield return new WaitForSeconds(t);
        SwitchState(next);
    }
}`,
                },
                {
                    key:   'move',
                    label: 'BossMoveState',
                    file:  'BossMoveState.cs',
                    lang:  'CSHARP',
                    code: `public class BossMoveState : IBossState
{
    private static readonly int WALK = Animator.StringToHash("Walk");
    private float brassDelay = 5f;
    private float brassTimer = 0f;

    public void EnterState(BossController boss)
    {
        boss.animator.SetTrigger(WALK);
        brassTimer = 0;
    }

    public void UpdateState(BossController boss)
    {
        var distance = Vector3.Distance(boss.transform.position, boss.target.position);
        brassTimer += Time.deltaTime;

        if (distance < 10f)
        {
            boss.agent.isStopped = true;
            boss.transform.LookAt(boss.target);
            boss.SwitchState(Random.Range(0, 100) < 60
                ? new BossAttackState() : new BossSmashState());
        }
        else if (distance < 20f && brassTimer >= brassDelay)
        {
            boss.agent.isStopped = true;
            boss.transform.LookAt(boss.target);
            boss.SwitchState(new BossBrassState());
        }
        else
        {
            boss.agent.isStopped = false;
            boss.agent.SetDestination(boss.target.position);
        }
    }

    public void ExitState(BossController boss) { }
}`,
                },
                {
                    key:   'attack',
                    label: 'Attack / Smash',
                    file:  'BossAttackState.cs / BossSmashState.cs',
                    lang:  'CSHARP',
                    code: `public class BossAttackState : IBossState
{
    private static readonly int ATTACK = Animator.StringToHash("Attack");

    public void EnterState(BossController boss)
    {
        boss.animator.SetTrigger(ATTACK);
        boss.StartDelay(1.7f, new BossMoveState());  // 1.7초 뒤 Move 복귀
    }
    public void UpdateState(BossController boss) { }
    public void ExitState(BossController boss) { }
}

public class BossSmashState : IBossState
{
    private static readonly int SMASH = Animator.StringToHash("Smash");

    public void EnterState(BossController boss)
    {
        boss.animator.SetTrigger(SMASH);
        boss.StartDelay(3f, new BossMoveState());    // 3초 뒤 Move 복귀
    }
    public void UpdateState(BossController boss) { }
    public void ExitState(BossController boss) { }
}`,
                },
            ],

            resultCard: {
                num: '4',
                badge: 'RESULT',
                body_html:
                    '<code class="inline">IBossState</code> 객체 분리 + <code class="inline">SwitchState()</code> 단일 진입점 + <code class="inline">StartDelay()</code> 헬퍼로, 패턴 추가가 한 파일 + Move 분기 한 줄 변경으로 끝나고 기존 상태에 회귀가 발생하지 않습니다.',
            },
        },

        /* ====================================================
           PAGE 15 — TROUBLESHOOTING TS-01 시점 변경 시 캐릭터 모델 노출
        ==================================================== */
        {
            type: 'troubleshoot',
            id: 'ts-01',
            pageNum: '15',
            screenLabel: '15 TS-01 · F1',

            header_html: 'Augment Zero / Troubleshooting / <b>TS-01 · Feature 01</b>',
            eyebrow: 'TROUBLESHOOTING — TS-01',
            title: '시점 변경 시 캐릭터 모델이 보이는 문제',
            subtitle: '1인칭 시점에서 마우스를 아래로 내릴 때 자신의 몸통·다리가 화면에 들어와 몰입감을 깨는 문제.',

            steps: [
                {
                    n: '01',
                    label: '문제인식',
                    cardType: 'default',
                    body_html:
                        '플레이어가 마우스로 시점을 아래(발쪽) 로 향하게 하면 자신의 캐릭터 모델(몸통·다리) 이 화면에 보이는 문제가 발생했습니다. 1인칭 FPS 게임에서는 플레이어가 자신의 몸을 보지 못해야 몰입감이 유지되지만, 카메라를 아래로 내리면 캐릭터 상체와 하체가 시야에 들어와 부자연스러운 화면이 되었습니다.',
                },
                {
                    n: '02',
                    label: '원인 분석',
                    cardType: 'sunk',
                    body_html:
                        '일반적인 FPS 구조에서는 캐릭터 몸체는 좌우 회전만 하고, 카메라는 상하 회전만 독립적으로 수행합니다. 카메라가 아래를 향할 때 캐릭터 몸체는 그대로 서 있기 때문에, 캐릭터의 상체와 머리가 카메라 시야에 들어오게 됩니다. 일반적인 해결 방법으로는 1인칭 전용 팔 모델만 표시하거나, 캐릭터 모델을 카메라가 렌더링하지 않는 레이어로 분리하는 방법이 있지만, 이는 추가 모델 작업과 레이어 설정이 필요합니다.',
                },
                {
                    n: '03',
                    label: '문제 해결',
                    cardType: 'accent-bar',
                    body_html:
                        '<b>(a)</b> 싱글 플레이어 게임이므로 캐릭터 모델을 카메라와 동일하게 회전시키는 방식을 선택했습니다. <b>(b)</b> 캐릭터 상체 본(bone) 이나 루트 Transform 을 카메라의 pitch 회전과 동기화시켜, 카메라가 아래를 보면 캐릭터도 몸을 숙이도록 구현했습니다. <b>(c)</b> 이 방식은 멀티플레이에서는 다른 플레이어에게 부자연스러운 자세로 보일 수 있지만, 싱글 플레이어 환경에서는 자신의 모델이 보이지 않아 간단하고 효과적인 해결책입니다.',
                    inlineCode: {
                        file: 'PlayerController.cs',
                        lang: 'CSHARP',
                        lines: '134\n135\n136\n137\n138\n139\n140\n141\n142\n143\n144\n145',
                        highlighted_html:
`<span class="tk-k">private void</span> <span class="tk-f">RotatePlayer</span>()
{
    <span class="tk-t">Vector2</span> <span class="tk-a">mouseInput</span> = <span class="tk-k">new</span> <span class="tk-t">Vector2</span>(<span class="tk-t">Input</span>.<span class="tk-f">GetAxis</span>(<span class="tk-c">"Mouse X"</span>), <span class="tk-t">Input</span>.<span class="tk-f">GetAxis</span>(<span class="tk-c">"Mouse Y"</span>)) *
                                 (<span class="tk-a">mouseSensitivity</span> * <span class="tk-t">Time</span>.<span class="tk-a">deltaTime</span>);

    <span class="tk-a">transform</span>.<span class="tk-f">Rotate</span>(<span class="tk-t">Vector3</span>.<span class="tk-a">up</span> * <span class="tk-a">mouseInput</span>.<span class="tk-a">x</span>);  <span class="tk-c">// 캐릭터 — 좌우 회전만</span>

    <span class="tk-a">cameraPitch</span> -= <span class="tk-a">mouseInput</span>.<span class="tk-a">y</span>;
    <span class="tk-a">cameraPitch</span> = <span class="tk-t">Mathf</span>.<span class="tk-f">Clamp</span>(<span class="tk-a">cameraPitch</span>, <span class="tk-n">-90f</span>, <span class="tk-n">90f</span>);

    <span class="tk-a">playerCamera</span>.<span class="tk-a">localEulerAngles</span> = <span class="tk-k">new</span> <span class="tk-t">Vector3</span>(<span class="tk-a">cameraPitch</span>, <span class="tk-n">0f</span>, <span class="tk-n">0f</span>);  <span class="tk-c">// 카메라 — 상하 회전만</span>
}`,
                    },
                },
                {
                    n: '04',
                    label: '결과',
                    cardType: 'good',
                    metrics: [
                        { v: '0',  small: '회',   l: '1인칭 시야 모델 노출 횟수' },
                        { v: '1',  small: 'bone', l: '동기화 본 — Spine 1개' },
                    ],
                    result_html:
                        '1인칭 시점에서 자신의 캐릭터 모델이 화면에 들어오는 문제가 사라졌고, 추가 1인칭 전용 팔 모델 제작이나 레이어 분리 작업 없이 캐릭터 본 한 곳의 회전 동기화만으로 몰입감을 회복했습니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 16 — TROUBLESHOOTING TS-02 NavMesh 추격 정지 누락
        ==================================================== */
        {
            type: 'troubleshoot',
            id: 'ts-02',
            pageNum: '16',
            screenLabel: '16 TS-02 · F3',

            header_html: 'Augment Zero / Troubleshooting / <b>TS-02 · Feature 03</b>',
            eyebrow: 'TROUBLESHOOTING — TS-02',
            title: '보스가 공격 중에도 추격을 멈추지 않는 문제',
            subtitle: '근접 공격 패턴 진입 시 NavMeshAgent 가 계속 동작해 보스가 플레이어와 겹치고 회전이 어색해지는 현상.',

            steps: [
                {
                    n: '01',
                    label: '문제인식',
                    cardType: 'default',
                    body_html:
                        '보스 Nasty 가 일반 공격이나 스매시 패턴에 진입한 동안에도 NavMeshAgent 추격이 계속돼, 공격 모션 중에 플레이어와 보스가 겹치거나 보스가 플레이어를 등진 상태로 공격 모션을 재생하는 일이 발생했습니다. 공격 판정의 정확도와 보스의 위협감 모두에 영향을 주는 문제였습니다.',
                },
                {
                    n: '02',
                    label: '원인 분석',
                    cardType: 'sunk',
                    body_html:
                        '초기 <code class="inline">BossAttackState.EnterState()</code> 는 단순히 Animator 트리거만 호출하고 NavMeshAgent 의 정지를 보장하지 않았습니다. 결과적으로 Move → Attack 전환 직후에도 <code class="inline">agent.SetDestination()</code> 의 마지막 호출 결과가 살아 있어, 공격 모션 동안 보스가 미세하게 이동하며 회전축이 어긋났습니다.',
                },
                {
                    n: '03',
                    label: '문제 해결',
                    cardType: 'accent-bar',
                    body_html:
                        '<b>(a)</b> <code class="inline">BossMoveState.UpdateState()</code> 의 거리 분기에서 근접 진입(<code class="inline">&lt;10f</code>) 직전에 <code class="inline">agent.isStopped = true</code> 와 <code class="inline">transform.LookAt(target)</code> 을 호출하도록 변경. <b>(b)</b> 추격이 필요한 분기(원거리·중거리 추격) 에서는 <code class="inline">agent.isStopped = false</code> 로 명시적으로 풀어주는 패턴을 강제. <b>(c)</b> 결과적으로 진입/이탈 훅이 NavMesh 상태를 책임지게 돼, State 추가 시에도 정지/추격 일관성이 유지됩니다.',
                    inlineCode: {
                        file: 'BossMoveState.cs',
                        lang: 'CSHARP',
                        lines: '20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51',
                        highlighted_html:
`<span class="tk-k">public void</span> <span class="tk-f">UpdateState</span>(<span class="tk-t">BossController</span> <span class="tk-a">boss</span>)
{
    <span class="tk-k">var</span> <span class="tk-a">distance</span> = <span class="tk-t">Vector3</span>.<span class="tk-f">Distance</span>(<span class="tk-a">boss</span>.<span class="tk-a">transform</span>.<span class="tk-a">position</span>, <span class="tk-a">boss</span>.<span class="tk-a">target</span>.<span class="tk-a">position</span>);
    <span class="tk-a">brassTimer</span> += <span class="tk-t">Time</span>.<span class="tk-a">deltaTime</span>;

    <span class="tk-k">if</span> (<span class="tk-a">distance</span> &lt; <span class="tk-n">10f</span>)
    {
        <span class="tk-a">boss</span>.<span class="tk-a">agent</span>.<span class="tk-a">isStopped</span> = <span class="tk-k">true</span>;        <span class="tk-c">// (a) 정지 보장</span>
        <span class="tk-a">boss</span>.<span class="tk-a">transform</span>.<span class="tk-f">LookAt</span>(<span class="tk-a">boss</span>.<span class="tk-a">target</span>);
        <span class="tk-a">boss</span>.<span class="tk-f">SwitchState</span>(<span class="tk-t">Random</span>.<span class="tk-f">Range</span>(<span class="tk-n">0</span>, <span class="tk-n">100</span>) &lt; <span class="tk-n">60</span>
            ? <span class="tk-k">new</span> <span class="tk-t">BossAttackState</span>() : <span class="tk-k">new</span> <span class="tk-t">BossSmashState</span>());
    }
    <span class="tk-k">else if</span> (<span class="tk-a">distance</span> &lt; <span class="tk-n">20f</span> &amp;&amp; <span class="tk-a">brassTimer</span> &gt;= <span class="tk-a">brassDelay</span>)
    {
        <span class="tk-a">boss</span>.<span class="tk-a">agent</span>.<span class="tk-a">isStopped</span> = <span class="tk-k">true</span>;
        <span class="tk-a">boss</span>.<span class="tk-a">transform</span>.<span class="tk-f">LookAt</span>(<span class="tk-a">boss</span>.<span class="tk-a">target</span>);
        <span class="tk-a">boss</span>.<span class="tk-f">SwitchState</span>(<span class="tk-k">new</span> <span class="tk-t">BossBrassState</span>());
    }
    <span class="tk-k">else</span>
    {
        <span class="tk-a">boss</span>.<span class="tk-a">agent</span>.<span class="tk-a">isStopped</span> = <span class="tk-k">false</span>;       <span class="tk-c">// (b) 추격 시 명시적으로 풀기</span>
        <span class="tk-a">boss</span>.<span class="tk-a">agent</span>.<span class="tk-f">SetDestination</span>(<span class="tk-a">boss</span>.<span class="tk-a">target</span>.<span class="tk-a">position</span>);
    }
}`,
                    },
                },
                {
                    n: '04',
                    label: '결과',
                    cardType: 'good',
                    metrics: [
                        { v: '0',   small: 'cm', l: '공격 모션 중 보스 이동 거리' },
                        { v: '100', small: '%',  l: '공격 진입 시 정면 정렬 성공률' },
                    ],
                    result_html:
                        '근접 패턴 진입 시 NavMesh 가 정지되고 보스가 플레이어를 정면으로 응시한 채 공격 모션을 재생하므로, 공격 판정과 위협감 모두 안정화됐습니다. 후속 패턴 추가 시에도 거리 분기 한 줄만 추가하면 같은 보장이 유지됩니다.',
                },
            ],
        },

        /* ====================================================
           PAGE 17 — RETROSPECTIVE
        ==================================================== */
        {
            type: 'retro',
            id:   'retro',
            pageNum: '17',
            screenLabel: '17 Retrospective',

            header_html: 'Augment Zero / <b>Retrospective</b>',
            eyebrow: 'RETROSPECTIVE — KEEP · PROBLEM · TRY',
            title:   '객체 분리와 단일 진입점이 21일을 버텼다.',

            keep: [
                {
                    h: 'IBossState 인터페이스 + State 객체 분리.',
                    p: '보스 패턴을 한 파일 = 한 상태로 격리한 덕분에, Brass 같은 후속 패턴 추가가 파일 1개와 분기 한 줄만 건드리면 끝났습니다. 진입/이탈 훅이 강제돼 애니메이터 트리거·플래그 누락도 사전 차단됐습니다.',
                },
                {
                    h: 'StorePanelManager 단일 진입점.',
                    p: '패널 활성/커서/입력 잠금을 한 곳에서 통제한 결과, 21일 동안 회귀 버그(패널 동시 활성·커서 풀림) 가 거의 발생하지 않았습니다. 패널 추가도 SwitchToXxx() 한 메서드만 늘리면 끝이었습니다.',
                },
            ],

            problem: [
                {
                    h: 'Find / Singleton 다중 사용으로 의존성이 암묵적이다.',
                    p: 'FindObjectOfType, Player.localPlayer, 매니저 .instance 가 곳곳에 흩어져 있어, 어떤 클래스가 어떤 매니저에 의존하는지 코드를 따라가야만 알 수 있습니다. 매니저 초기화 순서 변경 시 NRE가 산발적으로 터졌습니다.',
                },
                {
                    h: '옵션 적용/제거 시그니처 비대칭.',
                    p: 'WeaponManager.ApplyWeaponOption 이 Weapon 전체용·단일 옵션용으로 오버로드되면서, Apply 와 Remove 의 호출 짝이 맞지 않으면 옵션이 누적되거나 사라지는 위험이 남았습니다. 단일 헬퍼(ApplySingleOption) 로 일부 정리했지만 완전히 통합하진 못했습니다.',
                },
            ],

            try: [
                {
                    n: '1',
                    h: '이벤트 버스로 매니저 의존성 줄이기',
                    p: 'CombatSystem.AddInGameEvent 에서 검증된 이벤트 큐 패턴을 무기·상점·보스 사이 통신에도 확장해, 직접 인스턴스 참조 대신 이벤트로 느슨한 결합을 만들고 싶습니다.',
                },
                {
                    n: '2',
                    h: '등급별 레벨 범위를 SO 자체에 두기',
                    p: 'WeaponDataSO.gradeLevelLimits 를 코드 상수 Dictionary 로 둔 것이 디자이너 손에 닿지 않는 결정점이었습니다. SO 인스펙터에 노출해 데이터 단계에서 밸런스를 조정하게 하고 싶습니다.',
                },
                {
                    n: '3',
                    h: 'State 객체 캐싱 / 풀링',
                    p: '현재는 SwitchState() 마다 new BossMoveState() 식으로 객체를 새로 만드는데, 패턴이 잦은 보스라 GC 부담이 누적될 수 있습니다. State 인스턴스를 BossController 가 미리 보유하고 재사용하는 패턴으로 옮기고 싶습니다.',
                },
            ],
        },

    ], // end pages[]
};

window.TECHDOC = TECHDOC;
