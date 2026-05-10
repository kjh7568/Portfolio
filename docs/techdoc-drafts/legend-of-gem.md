# Legend of Gem — 기술문서 초안

> 본 문서는 `/techdoc-research` 산출물입니다.
> 사용자 검수 후 `/techdoc-write` 가 이 문서를 읽어 실제 파일을 생성합니다.

## 메타 (프로필 참조)

- 프로젝트 라벨: PROJECT 02
- slug: legend-of-gem
- HTML 파일: `LegendOfGem_Tech_Doc.html`
- data 파일: `legendofgem.data.js`
- 자산 폴더: `assets/techdocs/legend-of-gem/`
- Unity 프로젝트 경로: `D:/GitHub/3D_Project`

## 페이지 매핑 (총 19페이지)

- 01 cover
- 02 overview
- 03~06 F1 (젬 조합 스킬 시스템)
- 07~10 F2 (아이템 옵션 랜덤 생성)
- 11~14 F3 (몬스터 팩 스폰)
- 15 TS-01 카메라 시점과 이동 방향
- 16 TS-02 이동 애니메이션 블렌드 트리
- 17 TS-03 몬스터 플레이어 인식
- 18 TS-04 몬스터 공격 연속 히트
- 19 retro

---

## PAGE 01 — Cover

- **eyebrow**: `PROJECT 02 — TECHNICAL DOCUMENT`
- **2줄 타이틀** ★ 검수 부탁:
  ```
  메인 젬과 보조 젬으로,
  나만의 빌드를 만듭니다.
  ```
- **subtitle_html** ★ 검수 부탁:
  > 메인 젬과 보조 젬의 조합으로 <b>자신만의 스킬을 직접 설계하는</b> 3D 핵앤슬래시 액션 RPG입니다.

- **meta**:
  - Genre: `3D 핵앤슬래시 액션 RPG`
  - Period: `2025.04.14 ~ 2025.04.30`, v2: `(16일)`
  - Team: `1인`
  - Stack tags (8개): `Unity`, `C#`, `URP`, `NavMesh`, `ScriptableObject`, `CSV 데이터 드리븐`, `uGUI 드래그&드롭`, `Dependency Injection`

- **author**: 기본값 그대로
  - name: 김지훈 / nameEn: Jeehoon Kim / role: Unity Client Developer / email: rwrwg159@gmail.com / phone: 010-0000-0000

- **heroPlaceholder**:
  - ttl: 키 비주얼 / 표지 이미지
  - sub: DROP IMAGE HERE — 1280 × 720 권장

- **TOC (6항목)** ★ 검수 부탁:
  - 01 — 프로젝트 개요 · 게임 흐름 — p.02
  - 02 — 젬 조합 스킬 시스템 (DI 주입) — p.03
  - 03 — 아이템 옵션 랜덤 생성 — p.07
  - 04 — 몬스터 팩 스폰 — p.11
  - 05 — 트러블슈팅 · 좌표계와 전투 판정 — p.15
  - 06 — 회고 · 다음 개선 — p.19

---

## PAGE 02 — Overview

- **header_html**: `Legend of Gem / <b>Project Overview</b>`
- **eyebrow**: `OVERVIEW`
- **title**: `인게임 한눈에 보기 · 흐름 · 핵심 기능`

- **gameplayPlaceholder**:
  - ic: `GAMEPLAY 01`
  - ttl: 인게임 플레이 스크린샷
  - sub: 대표 전투 장면 — 1280 × 720 권장

- **steps 4개** ★ 검수 부탁:
  - 01 · `로비 정비` — 홈 씬에서 인벤토리·장비·젬을 정리하고, 메인 젬과 보조 젬을 슬롯에 끼워 출격할 빌드를 만듭니다.
  - 02 · `던전 진입` — 던전 씬으로 이동하면 스폰 포인트 절반이 무작위로 활성화되어, 매번 다른 위치에 몬스터 무리가 등장합니다.
  - 03 · `전투와 수집` — 마우스 좌클릭 평타, Q·E·R로 조립한 스킬을 사용해 몬스터를 처치하고, 드랍된 장비·골드를 픽업합니다.
  - 04 · `귀환과 정비` — Recall로 홈에 복귀해 새 장비의 옵션을 확인하고, 상점에서 추가 아이템을 구매한 뒤 다음 던전에 도전합니다.

- **features 3개**:
  - 01 · 젬 조합 스킬 시스템 — `메인 젬으로 스킬을 만들고, 보조 젬을 끼워 효과를 런타임 주입합니다.` href: `#f1` p: `p.03 →`
  - 02 · 아이템 옵션 랜덤 생성 — `부위별 가중치 확률표로 드랍 시점에 옵션과 레어도가 결정됩니다.` href: `#f2` p: `p.07 →`
  - 03 · 몬스터 팩 스폰 — `스폰 포인트의 절반을 무작위로 활성화하고 포인트당 3~5마리를 원형 배치합니다.` href: `#f3` p: `p.11 →`

---

## PAGE 03 — F1 Cover · 젬 조합 스킬 시스템

- **header_html**: `Legend of Gem / <b>Feature 01 · 젬 조합 스킬 시스템</b>`
- **num**: `01`
- **eyebrow**: `FEATURE · 젬 조합 스킬 시스템`

- **2줄 타이틀**:
  ```
  메인 + 보조 젬으로,
  나만의 스킬을 조립합니다.
  ```

- **oneLiner_html**:
  > 메인 젬으로 스킬을 만들고, 보조 젬을 끼우면 효과가 <span class="hl-blue">런타임에 주입·해제</span>되는 컴포넌트 기반 스킬 시스템입니다.

- **why.body[0]** (문제 인식):
  > 보조 젬을 추가할수록 스킬 클래스 내부에 분기가 누적되어, 신규 효과를 하나 붙일 때마다 기존 스킬 코드를 함께 수정해야 했습니다. 5종의 보조 젬이 동시에 적용되면 조합이 폭발적으로 늘어나 유지보수가 어려운 구조였습니다.

- **why.body[1]** (해결 방향):
  > 보조 젬을 <code class="inline">SkillComponent</code> 추상 클래스로 분리하고, <code class="inline">SkillAssembler.Add&lt;T&gt;()</code>가 Unity의 <b><code class="inline">gameObject.AddComponent&lt;T&gt;()</code></b>를 호출해 런타임에 효과를 주입합니다. 해제는 <code class="inline">Remove&lt;T&gt;()</code> → <code class="inline">Destroy(component)</code> 한 줄. 신규 보조 젬은 클래스 추가 + 매니저 등록 1줄로 끝납니다.

- **pagesHint**:
  - p.04 · STRUCTURE — Skill / SkillComponent / SkillAssembler 3축 구조
  - p.05·06 · DETAIL — Skill 내부 포함 vs DI 주입 의사결정 + 핵심 코드 발췌

---

## PAGE 04 — F1 Structure

- **header_html**: `Legend of Gem / Feature 01 / <b>Structure</b>`
- **eyebrow**: `CORE STRUCTURE — 클래스 다이어그램`
- **title**: `젬 조합 스킬 시스템 구조`
- **umlSrc**: `assets/techdocs/legend-of-gem/feature-1-uml.png`
- **umlAlt**: `추후 제작 예정: Skill / SkillComponent / SkillAssembler / SkillManager / GemSet / 보조 젬 5종 UML 클래스 다이어그램`

### notes

- **item · 설계 의도**
  > 스킬 본체와 효과(보조 젬)를 분리해, 효과 추가가 본체 코드를 건드리지 않도록 만듭니다. <code class="inline">SkillAssembler</code>는 Unity가 제공하는 <code class="inline">AddComponent&lt;T&gt;()</code> 위에 얇은 확장 메서드로 설계해, 의도한 라이프사이클(주입 → 효과 적용 → 분리)을 한 줄로 호출할 수 있게 합니다.

- **item · 핵심 클래스 5개**
  paragraphs_html:
  1. `<b>Skill (abstract)</b>:<br>스킬의 공통 계약. <code class="inline">SkillData</code>(데미지율·이동속도·마나비용·시전속도·플래그)와 <code class="inline">SpecialCast()</code>·<code class="inline">CalculateDamage()</code>를 정의합니다.`
  2. `<b>SkillComponent (abstract)</b>:<br>보조 젬의 공통 계약. <code class="inline">AddComponent(Skill)</code>·<code class="inline">RemoveComponent(Skill)</code> 두 메서드만 강제합니다.`
  3. `<b>SkillAssembler (static)</b>:<br>확장 메서드 <code class="inline">skill.Add&lt;T&gt;()</code> / <code class="inline">skill.Remove&lt;T&gt;()</code>를 제공합니다. 내부적으로 <code class="inline">gameObject.AddComponent&lt;T&gt;()</code> 후 <code class="inline">AddComponent(skill)</code> 콜백을 호출합니다.`
  4. `<b>SkillManager</b>:<br>스킬 풀(<code class="inline">Queue&lt;GameObject&gt;[3]</code>)과 <code class="inline">addComponentHandler[]</code> 람다 배열을 보유하고, GemSet의 요청을 풀의 모든 인스턴스에 일괄 적용합니다.`
  5. `<b>FasterCast / FasterProjectiles / IncreasedAOE / Proliferation / MultipleProjectiles</b>:<br>보조 젬 5종. 각자 <code class="inline">AddComponent</code>에서 <code class="inline">rootSkill.data</code>의 해당 필드를 변경하고, <code class="inline">RemoveComponent</code>에서 원복합니다.`

- **callout · 추상화**
  > <code class="inline">Skill</code>은 보조 젬을 알지 못하고, 보조 젬은 <code class="inline">Skill.data</code>만 압니다. 둘은 <code class="inline">SkillAssembler</code>를 매개로만 만나며, 이 분리가 신규 효과 추가 시 기존 코드 수정량을 0으로 만듭니다.

---

## PAGE 05 — F1 Decision · Skill 내부 포함 vs DI 주입

- **header_html**: `Legend of Gem / Feature 01 / <b>Detail · 1</b>`
- **eyebrow**: `FEATURE DETAIL — 1 / 2`
- **title**: `스킬 확장, 어떤 구조가 맞을까?`
- **imgSrc**: `assets/techdocs/legend-of-gem/feature-1-detail-1.png`
- **imgAlt**: `추후 제작 예정: 사용자 보유 슬라이드 4장(PROBLEM / SOLUTION / HOW IT WORKS / RESULT) 활용 가능한 의사결정 비교 이미지`

### decisionCard (1)

- **heading**: `스킬 확장, 어떤 구조가 맞을까?`
- **badge**: `DECISION`
- **options 2개**:
  - **A안 · Skill 내부 포함 (직접 처리)**
    - pros: 구현이 직관적이며 별도 설계 없이 빠르게 동작합니다.
    - cons: 젬을 추가할 때마다 스킬 클래스 전체를 함께 수정해야 하므로 확장에 취약합니다.
  - **B안 · AddComponent 종속성 주입**
    - pros: 기존 스킬 코드 수정 없이 효과 추가가 가능하며 런타임에 동적으로 조립할 수 있습니다.
    - cons: 초기 설계 비용이 있고, 보조 젬을 독립 컴포넌트로 분리하는 작업이 선행되어야 합니다.

### choiceCard (2)

- **heading**: `선택한 구조: 종속성 주입`
- **badge**: `CHOICE`
- **paragraphs_html 3개**:
  1. `<b>맥락</b> — 보조 젬이 5종까지 늘어나면서, <code class="inline">FireBall</code> 한 클래스 안에 <code class="inline">isIncreasedAOE</code>·<code class="inline">isMultipleProjectiles</code> 같은 플래그가 누적되어 <code class="inline">if/else</code> 분기가 비대해졌습니다. 신규 젬 한 종을 도입하려면 모든 스킬 클래스를 함께 수정해야 했습니다.`
  2. `<b>선택</b> — 보조 젬을 <code class="inline">SkillComponent</code> 추상 클래스로 분리하고, <code class="inline">SkillAssembler.Add&lt;T&gt;()</code>가 <code class="inline">gameObject.AddComponent&lt;T&gt;()</code>를 호출해 런타임에 주입하도록 만들었습니다. 보조 젬 본체에서 <code class="inline">rootSkill.data</code>의 해당 필드를 직접 갱신하고, 해제 시에는 <code class="inline">RemoveComponent</code>로 원복합니다.`
  3. `<b>운영</b> — 신규 젬을 추가할 때 변경되는 파일은 <b>새 <code class="inline">SkillComponent</code> 구현체 + <code class="inline">SkillManager.InitializeHandler()</code>의 람다 배열 한 줄</b>이 전부입니다. 기존 <code class="inline">FireBall</code>·<code class="inline">Explosion</code>·다른 보조 젬은 한 줄도 수정되지 않습니다.`

---

## PAGE 06 — F1 Detail · 2 · 코드

- **header_html**: `Legend of Gem / Feature 01 / <b>Detail · 2</b>`
- **eyebrow**: `FEATURE DETAIL — 2 / 2`
- **title**: `Add<T> 한 줄로 끝나는 효과 주입`
- **imgSrc**: `assets/techdocs/legend-of-gem/feature-1-detail-2.gif`
- **imgAlt**: `추후 제작 예정: 보조 젬을 끼웠다 빼면 같은 FireBall 스킬의 동작이 실시간으로 변하는 인게임 GIF`
- **codeCardTitle**: `3 · 계약 → 구현 → 와이어링 한 흐름`

### tabs (3개)

#### Tab 1 · `contract` · `Skill+Component` · `SkillComponent.cs`

```csharp
public abstract class SkillComponent : MonoBehaviour
{
    public abstract void AddComponent(Skill skill);
    public abstract void RemoveComponent(Skill skill);
}

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
}
```

#### Tab 2 · `impl` · `FasterProjectiles` · `FasterProjectiles.cs`

```csharp
public class FasterProjectiles : SkillComponent
{
    private float increaseValue;
    private Skill rootSkill;

    public override void AddComponent(Skill skill)
    {
        rootSkill = skill;
        increaseValue = rootSkill.data.moveSpeed * 0.5f;
        rootSkill.data.moveSpeed += increaseValue;
        rootSkill.data.costMana += 3;
        rootSkill.tags.Add("FasterProjectiles");
    }

    public override void RemoveComponent(Skill skill)
    {
        rootSkill = skill;
        rootSkill.data.moveSpeed -= increaseValue;
        rootSkill.data.costMana -= 3;
        rootSkill.tags.Remove("FasterProjectiles");
    }
}
```

#### Tab 3 · `wire` · `SkillManager` · `SkillManager.cs`

```csharp
public void InitializeHandler()
{
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
```

### resultCard (4)

- **badge**: `RESULT`
- **body_html**:
  > 보조 젬 추가 시 기존 스킬 클래스는 한 줄도 수정되지 않습니다. <code class="inline">SkillAssembler.Add&lt;T&gt;()</code> 호출 하나로 효과가 주입되고, <code class="inline">Remove&lt;T&gt;()</code> 호출 하나로 즉시 분리됩니다.

---

## PAGE 07 — F2 Cover · 아이템 옵션 랜덤 생성

- **header_html**: `Legend of Gem / <b>Feature 02 · 아이템 옵션 랜덤 생성</b>`
- **num**: `02`
- **eyebrow**: `FEATURE · 아이템 옵션 랜덤 생성`

- **2줄 타이틀**:
  ```
  같은 갑옷이지만,
  매번 다른 옵션이 붙습니다.
  ```

- **oneLiner_html**:
  > 부위별로 다른 가중치 확률표에 따라, 드랍 순간 <span class="hl-blue">옵션과 레어도가 즉석에서 결정</span>되는 장비 시스템입니다.

- **why.body[0]** (문제 인식):
  > 같은 갑옷이 매번 똑같이 드랍되면 더 좋은 옵션을 향한 반복 사냥의 동기가 사라집니다. 또한 부위마다 다른 정체성(투구는 방어 위주, 신발은 이속 위주)이 없으면 빌드 메이킹의 폭이 좁아집니다.

- **why.body[1]** (해결 방향):
  > 부위 클래스(<code class="inline">BodyArmour</code> / <code class="inline">Helmet</code> / <code class="inline">Gloves</code> / <code class="inline">Boots</code>)마다 <b>고유한 가중치 확률표</b>를 두고, 드랍 시점에 <code class="inline">PickRandomOption()</code>으로 옵션을 즉시 결정합니다. 옵션 적용·해제는 <code class="inline">EquipmentManager.optionTable</code>의 람다가 책임지며, 신규 옵션은 테이블에 한 줄 추가하면 바로 동작합니다.

- **pagesHint**:
  - p.08 · STRUCTURE — IEquipment / IArmour 4부위 + EquipmentManager.optionTable
  - p.09·10 · DETAIL — 단일 통합 확률표 vs 부위별 확률표 의사결정 + 핵심 코드 발췌

---

## PAGE 08 — F2 Structure

- **header_html**: `Legend of Gem / Feature 02 / <b>Structure</b>`
- **eyebrow**: `CORE STRUCTURE — 클래스 다이어그램`
- **title**: `아이템 옵션 랜덤 생성 구조`
- **umlSrc**: `assets/techdocs/legend-of-gem/feature-2-uml.png`
- **umlAlt**: `추후 제작 예정: IEquipment / IArmour ↔ BodyArmour·Helmet·Gloves·Boots ↔ EquipmentManager.optionTable UML 다이어그램`

### notes

- **item · 설계 의도**
  > 부위마다 정체성이 다른 옵션 확률표를 가지면서도, 옵션 적용 로직은 한 곳에 모아 중복을 피합니다. 인터페이스 <code class="inline">IEquipment</code>를 매개로 부위 클래스가 확률표를 책임지고, <code class="inline">EquipmentManager</code>가 결과 적용을 책임지도록 역할을 나눕니다.

- **item · 핵심 클래스 5개**
  paragraphs_html:
  1. `<b>IEquipment / IArmour (interface)</b>:<br><code class="inline">Rarity</code>·<code class="inline">OptionIdx</code>·<code class="inline">CashingValue</code>·<code class="inline">DescriptionDic</code>·<code class="inline">PickRandomOption()</code>를 강제합니다. <code class="inline">IArmour</code>는 <code class="inline">Armor</code>·<code class="inline">Evasion</code>을 추가합니다.`
  2. `<b>BodyArmour / Helmet / Gloves / Boots</b>:<br>각자 자신만의 <code class="inline">PickRandomOption()</code>으로 부위에 맞는 가중치 확률을 직접 구현합니다.`
  3. `<b>EquipmentManager</b>:<br><code class="inline">Dictionary&lt;int, OptionMeta&gt; optionTable</code>(24개)에 옵션 키 → <code class="inline">Apply</code>·<code class="inline">Remove</code> 람다를 등록해 둡니다.`
  4. `<b>EquipmentStst</b>:<br>현재 장착 효과로 인한 스탯 증감을 보관하는 데이터 객체입니다. <code class="inline">Hp</code>·<code class="inline">Armour</code>·<code class="inline">Strength</code>·<code class="inline">CriticalChance</code> 등 24개 필드.`
  5. `<b>ItemTableManager / TableSAO</b>:<br>CSV에서 읽어온 아이템 정의와 ScriptableObject의 스프라이트 메타를 결합해, 드랍 시점에 부위 클래스 인스턴스를 만들어 줍니다.`

- **callout · 역할 분리**
  > 부위 클래스는 <b>"무엇이 뽑힐지"</b>(확률), <code class="inline">EquipmentManager</code>는 <b>"뽑힌 결과를 어떻게 적용할지"</b>(스탯 변경)만 책임집니다. 신규 옵션 추가 시 <code class="inline">optionTable</code> 한 줄, 부위별 확률 조정 시 해당 클래스의 <code class="inline">PickRandomOption()</code> 한 곳만 수정합니다.

---

## PAGE 09 — F2 Decision · 단일 통합 확률표 vs 부위별 확률표

- **header_html**: `Legend of Gem / Feature 02 / <b>Detail · 1</b>`
- **eyebrow**: `FEATURE DETAIL — 1 / 2`
- **title**: `옵션 확률, 부위와 함께 갈까?`
- **imgSrc**: `assets/techdocs/legend-of-gem/feature-2-detail-1.png`
- **imgAlt**: `추후 제작 예정: 부위별 확률표 비교 이미지 (몸통/투구/장갑/신발의 옵션 분포 차이를 시각화)`

### decisionCard (1)

- **heading**: `옵션 확률, 어디에 둘 것인가?`
- **badge**: `DECISION`
- **options 2개**:
  - **A안 · 단일 통합 확률표**
    - pros: 옵션 추가가 한 곳에서 끝나며 구현이 단순합니다.
    - cons: 부위 정체성이 사라져 투구·신발·장갑이 모두 비슷한 옵션을 갖게 됩니다.
  - **B안 · 부위별 확률표 (선택)**
    - pros: 부위마다 고유한 정체성(방어 위주 / 이속 위주 등)을 부여할 수 있고 빌드 메이킹의 폭이 넓어집니다.
    - cons: 부위 수만큼 확률표를 따로 관리해야 합니다.

### choiceCard (2)

- **heading**: `선택한 구조: 부위별 확률표 + 공용 옵션 적용 테이블`
- **badge**: `CHOICE`
- **paragraphs_html 3개**:
  1. `<b>맥락</b> — 핵앤슬래시 RPG에서 부위별 정체성은 빌드 메이킹의 핵심 재미입니다. 신발은 이속, 투구는 방어, 장갑은 공속처럼 부위마다 어울리는 옵션이 더 자주 나와야 플레이어가 부위 단위로 전략을 짤 수 있습니다.`
  2. `<b>선택</b> — <code class="inline">IEquipment</code> 인터페이스를 매개로, 확률은 부위 클래스(<code class="inline">BodyArmour</code>·<code class="inline">Helmet</code>·<code class="inline">Gloves</code>·<code class="inline">Boots</code>)의 <code class="inline">PickRandomOption()</code>이 책임집니다. 옵션 결과를 스탯에 반영하는 로직은 <code class="inline">EquipmentManager.optionTable</code>이라는 공용 람다 테이블에 한 번만 정의해 부위 간 중복을 막았습니다.`
  3. `<b>운영</b> — 부위별 확률 조정은 해당 클래스 한 메서드만 수정하면 끝납니다. 신규 옵션 종류 추가 시에는 <code class="inline">optionTable[N] = new OptionMeta { Apply = ..., Remove = ... }</code> 한 항목 등록으로 모든 부위에 즉시 반영됩니다.`

---

## PAGE 10 — F2 Detail · 2 · 코드

- **header_html**: `Legend of Gem / Feature 02 / <b>Detail · 2</b>`
- **eyebrow**: `FEATURE DETAIL — 2 / 2`
- **title**: `드랍 한 번에 끝나는 옵션 결정과 적용`
- **imgSrc**: `assets/techdocs/legend-of-gem/feature-2-detail-2.gif`
- **imgAlt**: `추후 제작 예정: 같은 갑옷을 여러 번 드랍받을 때 매번 다른 옵션이 붙는 인게임 GIF`
- **codeCardTitle**: `3 · 부위별 확률표 → 공용 적용 테이블`

### tabs (2개)

#### Tab 1 · `contract` · `Armour` · `Armour.cs`

```csharp
public interface IEquipment
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
}
```

#### Tab 2 · `apply` · `EquipmentManager` · `EquipmentManager.cs`

```csharp
private Dictionary<int, OptionMeta> optionTable = new();

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

    if (equip is IArmour armor)
    {
        EquipmentStat.Armour  += armor.Armor;
        EquipmentStat.Evasion += armor.Evasion;
    }

    foreach (var kv in equip.CashingValue)
    {
        if (optionTable.TryGetValue(kv.Key, out var meta))
        {
            meta.Apply(EquipmentStat, kv.Value);
        }
    }

    playerStatPanelUI.UpdateText();
}
```

### resultCard (4)

- **badge**: `RESULT`
- **body_html**:
  > 신규 옵션 추가 시 변경되는 코드는 <code class="inline">optionTable[N]</code>에 Apply/Remove 람다 한 쌍. 부위별 확률 조정도 해당 클래스의 <code class="inline">PickRandomOption()</code> 한 곳만 수정하면 끝납니다.

---

## PAGE 11 — F3 Cover · 몬스터 팩 스폰

- **header_html**: `Legend of Gem / <b>Feature 03 · 몬스터 팩 스폰</b>`
- **num**: `03`
- **eyebrow**: `FEATURE · 몬스터 팩 스폰`

- **2줄 타이틀**:
  ```
  혼자가 아닌 무리로,
  매번 다른 배치를 만납니다.
  ```

- **oneLiner_html**:
  > 던전 입장 시 스폰 포인트의 절반을 무작위로 활성화하고, 각 포인트에 3~5마리를 <span class="hl-blue">원형 반경 2.5 안에 흩어 배치</span>하는 군집 시스템입니다.

- **why.body[0]** (문제 인식):
  > 모든 던전이 1:1 전투의 반복이라면, 광역 스킬을 강화하는 빌드의 카타르시스가 살아나지 않습니다. 또 매번 같은 위치에 같은 수의 몬스터가 나오면, 같은 던전을 다시 들어갈 이유가 사라집니다.

- **why.body[1]** (해결 방향):
  > 인스펙터에 등록된 <code class="inline">spawnPointsArray</code>의 절반을 <code class="inline">Random.Range</code>로 매번 다르게 활성화하고, 각 포인트에서 <code class="inline">Random.Range(3, 6)</code> 마리를 <code class="inline">Random.insideUnitCircle * 2.5f</code>로 원형 좌표에 분산 배치합니다. 두 단계의 무작위로 <b>던전마다 다른 전장</b>과 <b>광역 스킬 한 방의 쾌감</b>을 동시에 확보합니다.

- **pagesHint**:
  - p.12 · STRUCTURE — Start → SetSpawnPoints → SpawnMonster 흐름도
  - p.13·14 · DETAIL — 고정 스폰 vs 무작위 스폰 의사결정 + 핵심 코드 발췌

---

## PAGE 12 — F3 Structure (흐름도)

- **header_html**: `Legend of Gem / Feature 03 / <b>Structure</b>`
- **eyebrow**: `CORE FLOW — 동작 흐름도`
- **title**: `몬스터 팩 스폰 흐름`
- **umlSrc**: `assets/techdocs/legend-of-gem/feature-3-uml.png`
- **umlAlt**: `추후 제작 예정: Start → SetSpawnPoints (절반 무작위 활성화) → SpawnMonster (포인트당 3~5마리 원형 배치) 단방향 흐름도`

### notes

- **item · 설계 의도**
  > 단일 매니저 클래스가 두 단계의 무작위(포인트 선택 + 좌표 분산)를 차례로 실행해, 인스펙터 설정만 바꿔도 전혀 다른 던전 경험을 만들 수 있도록 합니다. 코드는 단일 진입점(<code class="inline">Start</code>) → 두 메서드 호출로 끝나는 단순한 구조를 의도적으로 유지했습니다.

- **item · 핵심 흐름 3단계**
  paragraphs_html:
  1. `<b>1) Start()</b>:<br>씬 진입 시 <code class="inline">SetSpawnPoints()</code> → <code class="inline">SpawnMonster()</code>를 순서대로 호출합니다.`
  2. `<b>2) SetSpawnPoints()</b>:<br><code class="inline">spawnPointsArray.Length / 2</code>만큼 <code class="inline">Random.Range</code>로 인덱스를 뽑아 활성화합니다. 이미 활성화된 포인트가 다시 뽑히면 <code class="inline">i--</code>로 재시도합니다.`
  3. `<b>3) SpawnMonster()</b>:<br>활성 포인트마다 <code class="inline">Random.Range(3, 6)</code> 마리를 <code class="inline">Random.insideUnitCircle * 2.5f</code> 좌표에 <code class="inline">Instantiate</code>합니다.`

- **callout · 단순함**
  > 매니저는 한 클래스, 메서드 두 개. 인스펙터에서 <code class="inline">spawnPointsArray</code>·<code class="inline">monsterPrefabs</code>만 갈아끼우면 새로운 던전이 됩니다.

---

## PAGE 13 — F3 Decision · 고정 스폰 vs 무작위 스폰

- **header_html**: `Legend of Gem / Feature 03 / <b>Detail · 1</b>`
- **eyebrow**: `FEATURE DETAIL — 1 / 2`
- **title**: `같은 던전, 매번 다르게 만들기`
- **imgSrc**: `assets/techdocs/legend-of-gem/feature-3-detail-1.png`
- **imgAlt**: `추후 제작 예정: 던전 맵 위에 활성/비활성 스폰 포인트와 몬스터 원형 배치를 시각화한 이미지`

### decisionCard (1)

- **heading**: `매 던전을 어떻게 다르게 만들 것인가?`
- **badge**: `DECISION`
- **options 2개**:
  - **A안 · 고정 스폰**
    - pros: 구현이 가장 단순하며 디버깅이 쉽습니다.
    - cons: 같은 던전에 다시 들어갈 동기가 사라지고 광역 스킬의 카타르시스가 약해집니다.
  - **B안 · 두 단계 무작위 (선택)**
    - pros: 매 진입마다 전장이 달라지고, 무리를 한 번에 쓸어버리는 광역 스킬의 효용이 살아납니다.
    - cons: 두 단계 무작위가 모두 같은 결과를 낼 확률은 거의 없지만, 디버깅 시 재현이 어렵습니다.

### choiceCard (2)

- **heading**: `선택한 구조: 포인트 절반 활성화 + 원형 분산 배치`
- **badge**: `CHOICE`
- **paragraphs_html 3개**:
  1. `<b>맥락</b> — 던전을 반복 플레이하는 핵앤슬래시 RPG 특성상, 매 진입이 똑같으면 플레이어가 빠르게 지루함을 느낍니다. 동시에 보조 젬으로 강화한 광역 스킬이 빛을 발하려면 1:1이 아닌 무리 전투가 자주 발생해야 합니다.`
  2. `<b>선택</b> — 첫 단계로 <code class="inline">spawnPointsArray</code>의 <b>절반만</b> 무작위로 활성화해 매 진입마다 전장의 윤곽이 달라지도록 했습니다. 두 번째 단계로 활성화된 각 포인트에 3~5마리를 <code class="inline">Random.insideUnitCircle * 2.5f</code> 좌표로 분산 배치해, 동일 포인트라도 몬스터 위치가 매번 달라집니다.`
  3. `<b>운영</b> — 두 단계의 무작위가 곱해져 같은 던전이 같은 모습으로 등장할 확률이 거의 0에 가까워집니다. 인스펙터에서 스폰 포인트만 늘리면 즉시 더 큰 전장이 되며, 절반 활성화 비율을 바꾸면 전장 밀도까지 조절 가능합니다.`

---

## PAGE 14 — F3 Detail · 2 · 코드

- **header_html**: `Legend of Gem / Feature 03 / <b>Detail · 2</b>`
- **eyebrow**: `FEATURE DETAIL — 2 / 2`
- **title**: `두 단계 무작위가 만드는 매번 다른 전장`
- **imgSrc**: `assets/techdocs/legend-of-gem/feature-3-detail-2.gif`
- **imgAlt**: `추후 제작 예정: 같은 던전을 여러 번 진입할 때마다 활성 포인트와 몬스터 위치가 달라지는 인게임 GIF`
- **codeCardTitle**: `3 · 한 클래스에 끝나는 두 단계 무작위`

### tabs (1개)

#### Tab 1 · `spawn` · `MonsterSpawnManager` · `MonsterSpawnManager.cs`

```csharp
public class MonsterSpawnManager : MonoBehaviour
{
    [SerializeField] private Transform   monsterParent;
    [SerializeField] private Transform[] spawnPointsArray;
    [SerializeField] private GameObject[] monsterPrefabs;

    private List<Transform> spawnPoints = new();

    private void Start()
    {
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
}
```

### resultCard (4)

- **badge**: `RESULT`
- **body_html**:
  > 같은 던전을 다시 들어가도, 활성 스폰 포인트의 위치와 각 포인트의 몬스터 수·좌표가 매번 달라집니다. 인스펙터에서 포인트만 늘리면 즉시 더 큰 전장이 됩니다.

---

## PAGE 15 — TS-01 · 카메라 시점과 이동 방향

- **header_html**: `Legend of Gem / Troubleshooting / <b>TS-01 · 플레이어 컨트롤</b>`
- **eyebrow**: `TROUBLESHOOTING — TS-01`
- **title**: `카메라 기준이 빠진 채 월드 좌표로만 움직이고 있었습니다.`
- **subtitle**: `WASD 입력이 화면 기준이 아닌 월드 축 기준으로 처리되어 의도와 다른 방향으로 이동했습니다.`

### steps (4단계)

#### 01 · 문제인식 · default
> 카메라 시점과 플레이어 이동 방향이 일치하지 않아, <b>W를 눌러도 화면 위가 아닌 월드 +Z 축으로 향하는 문제</b>가 발생했습니다. 카메라 회전 각도에 따라 플레이어가 의도와 전혀 다른 방향으로 움직였습니다.

#### 02 · 원인 분석 · sunk
> 카메라/월드/로컬 좌표계의 매핑이 빠진 채 입력값을 월드 축에 직접 적용했기 때문이었습니다. 캐릭터는 자신의 로컬 좌표 기준으로 움직였지만, 카메라는 월드 좌표에서 캐릭터를 따라가기만 했기 때문에 두 좌표계가 어긋났습니다.

#### 03 · 문제 해결 · accent-bar

> <b>(a)</b> 메인 카메라의 <code class="inline">forward</code>·<code class="inline">right</code> 벡터를 가져와 <code class="inline">y=0</code>으로 만들어 수평면에 투영합니다. <b>(b)</b> 두 벡터를 정규화해 방향 벡터로 만듭니다. <b>(c)</b> 입력 z축 값에는 <code class="inline">camForward</code>를, x축 값에는 <code class="inline">camRight</code>를 곱해 합산하면, 화면 기준 이동 방향이 됩니다.

**inlineCode** (옵션):
- file: `PlayerController.cs`
- lang: `CSHARP`
- 발췌 라인: 62-76
- code:
```csharp
Vector3 getAxis = new Vector3(Input.GetAxisRaw("Horizontal"), 0,
                              Input.GetAxisRaw("Vertical"));

Vector3 camForward = mainCam.transform.forward;
Vector3 camRight   = mainCam.transform.right;

camForward.y = 0;
camRight.y   = 0;

camForward.Normalize();
camRight.Normalize();

Vector3 direction = getAxis.z * camForward + getAxis.x * camRight;
direction.Normalize();
transform.Translate(direction * (RealStat.MovementSpeed * Time.deltaTime),
                    Space.World);
```

#### 04 · 결과 · good

- metrics: 없음 (정량 측정 없음 — 본문으로 결과 처리)
- result_html:
  > W → 화면 기준 위, A → 화면 기준 왼쪽으로 이동합니다. 카메라가 어떤 방향을 보고 있든 입력 의도와 화면 위 캐릭터의 이동 방향이 일치하게 되었습니다.

---

## PAGE 16 — TS-02 · 이동 애니메이션 블렌드 트리

- **header_html**: `Legend of Gem / Troubleshooting / <b>TS-02 · 플레이어 컨트롤</b>`
- **eyebrow**: `TROUBLESHOOTING — TS-02`
- **title**: `월드 좌표가 그대로 블렌드 트리에 들어가고 있었습니다.`
- **subtitle**: `TS-01의 후속 — 이동 방향을 월드 좌표로 계산한 뒤 그대로 애니메이터 파라미터에 넘기면서 블렌드 트리가 오작동했습니다.`

### steps (4단계)

#### 01 · 문제인식 · default
> 기존에 로컬 좌표 기준으로 만들어둔 8방향 블렌드 트리에 월드 좌표 벡터가 입력되어, 캐릭터가 향한 방향과 무관하게 잘못된 방향의 이동 애니메이션이 재생되었습니다.

#### 02 · 원인 분석 · sunk
> 블렌드 트리 매개변수는 <b>"플레이어 자신 기준 어느 방향으로 움직이는가"</b>를 나타내는 로컬 벡터를 기대하는데, TS-01 해결 직후에는 카메라 기준 월드 벡터가 그대로 흘러 들어갔기 때문이었습니다.

#### 03 · 문제 해결 · accent-bar

> <b>(a)</b> <code class="inline">transform.InverseTransformDirection(direction.normalized)</code>으로 월드 → 로컬 벡터로 변환합니다. <b>(b)</b> 변환된 벡터의 <code class="inline">x</code>·<code class="inline">z</code>를 애니메이터의 <code class="inline">DirX</code>·<code class="inline">DirZ</code> 파라미터에 전달합니다. <b>(c)</b> 이동량 변화가 임계치보다 크면 <code class="inline">Walk</code> 불을 토글합니다.

**inlineCode** (옵션):
- file: `PlayerController.cs`
- lang: `CSHARP`
- 발췌 라인: 80-91
- code:
```csharp
Vector3 localDir = transform.InverseTransformDirection(direction.normalized);

// 이동량으로 실제 움직였는지 판단
Vector3 displacement = transform.position - lastPosition;
displacement.y = 0;

bool isMoving = displacement.sqrMagnitude > 0.0001f;

animator.SetBool(Walk, isMoving);
animator.SetFloat(DirX, localDir.x);
animator.SetFloat(DirZ, localDir.z);

lastPosition = transform.position;
```

#### 04 · 결과 · good

- metrics: 없음 (정량 측정 없음 — 본문으로 결과 처리)
- result_html:
  > 8방향 블렌드 트리가 의도대로 동작합니다. 캐릭터가 어디를 보고 있든 A 키 입력 시 항상 "왼쪽으로 이동" 애니메이션이, W 입력 시 항상 "전진" 애니메이션이 재생됩니다.

---

## PAGE 17 — TS-03 · 몬스터 플레이어 인식

- **header_html**: `Legend of Gem / Troubleshooting / <b>TS-03 · Feature 03</b>`
- **eyebrow**: `TROUBLESHOOTING — TS-03`
- **title**: `직선거리만 보고 벽 너머의 플레이어까지 인식하고 있었습니다.`
- **subtitle**: `Distance로만 인식 범위를 판정하면, 벽을 사이에 둔 플레이어도 인식 범위 안에 들어옵니다.`

### steps (4단계)

#### 01 · 문제인식 · default
> 벽 뒤에 있는 몬스터가 플레이어를 인식한 뒤 <b>벽을 끼고 멀리 우회해 다가오는 문제</b>가 발생했습니다. 플레이어 입장에서는 보이지 않는 곳에서 갑자기 적이 나타나는 경험이었습니다.

#### 02 · 원인 분석 · sunk
> 몬스터의 인식 범위를 단순 <code class="inline">Vector3.Distance</code>로 계산해, 실제 이동 가능한 경로 길이가 아닌 직선거리로 판단했기 때문이었습니다. 직선거리 기준에서는 벽이 어떤 영향도 주지 않습니다.

#### 03 · 문제 해결 · accent-bar

> <b>(a)</b> <code class="inline">NavMeshPath</code> 객체를 새로 생성하고 <code class="inline">NavMesh.CalculatePath()</code>로 시작점→끝점까지의 경로를 계산합니다. <b>(b)</b> 반환된 <code class="inline">path.corners</code> 배열을 <code class="inline">for</code> 루프로 돌며 각 모서리 사이의 직선거리를 <code class="inline">Vector3.Distance</code>로 누적합산해 실제 경로 길이를 구합니다. <b>(c)</b> 매 프레임 호출 부담을 피하기 위해 0.5초 간격 코루틴으로 갱신합니다.

**inlineCode** (옵션):
- file: `MonsterController.cs`
- lang: `CSHARP`
- 발췌 라인: 89-114
- code:
```csharp
private float GetPathDistance(Vector3 start, Vector3 end)
{
    NavMeshPath path = new NavMeshPath();

    if (NavMesh.CalculatePath(start, end, NavMesh.AllAreas, path))
    {
        float distance = 0f;
        for (int i = 0; i < path.corners.Length - 1; i++)
        {
            distance += Vector3.Distance(path.corners[i],
                                         path.corners[i + 1]);
        }
        return distance;
    }

    return Mathf.Infinity;
}

private IEnumerator GetPathDistanceCoroutine()
{
    while (true)
    {
        navDistance = GetPathDistance(transform.position, player.position);
        yield return coroutineWaitTime; // WaitForSeconds(0.5f)
    }
}
```

#### 04 · 결과 · good

- metrics 1개:
  - { v: `0.5`, small: `s`, l: `갱신 주기 (코루틴)` }
- result_html:
  > 벽 너머의 플레이어는 실제 이동 거리가 인식 범위를 초과해 인식 대상에서 제외됩니다. 매 프레임 호출 대신 0.5초 코루틴으로 갱신해 NavMesh 경로 계산 부담도 함께 줄였습니다.

---

## PAGE 18 — TS-04 · 몬스터 공격 연속 히트

- **header_html**: `Legend of Gem / Troubleshooting / <b>TS-04 · Feature 03</b>`
- **eyebrow**: `TROUBLESHOOTING — TS-04`
- **title**: `콜라이더가 켜져 있는 동안 매 프레임 피격이 누적되고 있었습니다.`
- **subtitle**: `공격 판정을 콜라이더 충돌로 구현했지만, 콜라이더가 켜진 시간 전체에서 다중 히트가 발생했습니다.`

### steps (4단계)

#### 01 · 문제인식 · default
> 한 번의 공격 모션에서 무기 콜라이더에 닿은 대상이 <b>여러 번 피격당하는 문제</b>가 발생했습니다. 한 대 휘둘렀는데 체력이 한 번에 크게 깎이는 현상이었습니다.

#### 02 · 원인 분석 · sunk
> 기본 공격을 콜라이더 충돌로 구현했기 때문에, 콜라이더가 활성화된 시간 동안 <b>매 프레임 충돌 판정이 반복 발생</b>했습니다. 공격 모션 전체 시간 동안 콜라이더가 켜져 있어 다중 히트가 누적되었습니다.

#### 03 · 문제 해결 · accent-bar

> <b>(a)</b> <code class="inline">StateMachineBehaviour</code>를 상속한 <code class="inline">MonsterAttackLogic</code>을 만들어 애니메이션 진행도에 따라 로직을 관리할 수 있게 합니다. <b>(b)</b> <code class="inline">OnStateUpdate</code>가 매 프레임 호출되는 동안 <code class="inline">stateInfo.normalizedTime</code>으로 진행도 0~1을 체크합니다. <b>(c)</b> 인스펙터에서 지정한 <code class="inline">startNormalizedTime</code> 시점에 <code class="inline">weaponCollider.enabled = true</code>, <code class="inline">endNormalizedTime</code> 시점에 다시 <code class="inline">false</code>로 되돌려 타격 구간만 콜라이더를 켭니다.

**inlineCode** (옵션):
- file: `MonsterAttackLogic.cs`
- lang: `CSHARP`
- 발췌 라인: 14-39
- code:
```csharp
public class MonsterAttackLogic : StateMachineBehaviour
{
    [Range(0f, 1f)] public float startNormalizedTime;
    [Range(0f, 1f)] public float endNormalizedTime;

    private bool isPassStartNormalizedTime;
    private bool isPassEndNormalizedTime;
    private Collider weaponCollider;

    public override void OnStateEnter(Animator animator,
        AnimatorStateInfo stateInfo, int layerIndex)
    {
        isPassStartNormalizedTime = false;
        isPassEndNormalizedTime   = false;
        weaponCollider = animator.GetComponent<IMonster>().AttackCollider;
    }

    public override void OnStateUpdate(Animator animator,
        AnimatorStateInfo stateInfo, int layerIndex)
    {
        float time = stateInfo.normalizedTime % 1f;

        // 콜라이더 켜기 시점
        if (!isPassStartNormalizedTime && time >= startNormalizedTime)
        {
            isPassStartNormalizedTime = true;
            weaponCollider.enabled = true;
        }

        // 콜라이더 끄기 시점
        if (!isPassEndNormalizedTime && time >= endNormalizedTime)
        {
            isPassEndNormalizedTime = true;
            weaponCollider.enabled = false;
        }
    }
}
```

#### 04 · 결과 · good

- metrics 1개:
  - { v: `1`, small: `회`, l: `공격 1회당 피격 횟수` }
- result_html:
  > 한 번의 공격 모션에서 정확히 타격 구간만 콜라이더가 켜져, 다중 히트 없이 1회 피격만 발생합니다. 인스펙터에서 시작·종료 시점을 조정하면 무기마다 다른 타격 타이밍을 만들 수 있습니다.

---

## PAGE 19 — Retrospective

- **header_html**: `Legend of Gem / <b>Retrospective</b>`
- **eyebrow**: `RETROSPECTIVE — KEEP · PROBLEM · TRY`
- **title**: `조작은 한 가지로 묶고, 검증은 도구화가 숙제.`

### keep (2건)

1. **드래그 앤 드롭 중심의 인벤토리 경험.**
   > 인벤토리·장비·젬·상점·필드 드롭을 모두 같은 드래그&드롭 한 가지 방식으로 통일했습니다. 기능이 늘어도 플레이어가 익혀야 할 조작이 늘지 않아 이동·장착·구매·획득 흐름을 자연스럽게 연결할 수 있었습니다.

2. **DI로 구성한 스킬 시스템.**
   > 스킬을 매번 새로 만들기보다 필요한 효과를 컴포넌트로 주입하는 방식을 택했습니다. 덕분에 투사체 속도·범위·다중 투사체 같은 변화를 기존 코드 수정 없이 유연하게 추가할 수 있었습니다.

### problem (2건)

1. **씬 이동 시 데이터 유지 방식이 불안정함.**
   > 인벤토리·장비·젬·스킬 상태를 별도 동기화 오브젝트로 유지했지만, 저장 시점이 명확하지 않아 초기화 순서나 파괴 타이밍에 영향을 받았습니다. 데이터가 어디에서 최종 확정되는지 흐름을 더 분명히 했어야 했습니다.

2. **검증이 대부분 플레이 테스트에 의존함.**
   > 장비·젬·스킬·구매처럼 서로 연결된 기능을 대부분 직접 플레이로 확인했습니다. 한 곳을 수정했을 때 다른 흐름이 깨졌는지 자동 확인할 수단이 없어 후반으로 갈수록 수정 부담이 커졌습니다.

### try (3건)

1. **디버그 도구/검증 패널 만들기**
   > 인벤토리 슬롯·장착 장비·젬 세트·스킬 풀·최종 스탯을 한 화면에서 확인하는 개발용 패널을 만들어 문제 원인을 빠르게 찾습니다.

2. **상태 머신 도입**
   > 이동·공격·스킬 시전·귀환을 명시적 상태 머신으로 관리해 애니메이션 문자열 체크와 조건 분기를 줄이고, 전환 흐름을 안정적으로 만듭니다.

3. **씬 전환 데이터 생명주기 명확화**
   > 씬 이동 전 저장 / 씬 로드 후 복원 / 게임 종료 시 정리로 처리 시점을 분명히 나눕니다. <code class="inline">OnDestroy</code>나 초기화 순서에 의존하는 구조를 줄여 데이터 흐름을 예측 가능하게 만듭니다.

---

## 추후 제작 예정 자산

| 페이지 | 자산 경로 | 비고 |
|--------|----------|------|
| 01 Cover | (heroPlaceholder 사용) | 키 비주얼 미정 |
| 02 Overview | (gameplayPlaceholder 사용) | 인게임 대표 스크린샷 미정 |
| 04 F1 Structure | `assets/techdocs/legend-of-gem/feature-1-uml.png` | Skill / SkillComponent / SkillAssembler 등 UML |
| 05 F1 Decision | `assets/techdocs/legend-of-gem/feature-1-detail-1.png` | 사용자 보유 슬라이드 4장 활용 가능 |
| 06 F1 Code | `assets/techdocs/legend-of-gem/feature-1-detail-2.gif` | 보조 젬 끼웠다 빼는 인게임 GIF |
| 08 F2 Structure | `assets/techdocs/legend-of-gem/feature-2-uml.png` | IEquipment / 4부위 / EquipmentManager UML |
| 09 F2 Decision | `assets/techdocs/legend-of-gem/feature-2-detail-1.png` | 부위별 확률표 비교 이미지 |
| 10 F2 Code | `assets/techdocs/legend-of-gem/feature-2-detail-2.gif` | 같은 갑옷 반복 드랍 시 옵션 변화 GIF |
| 12 F3 Structure | `assets/techdocs/legend-of-gem/feature-3-uml.png` | Start → SetSpawnPoints → SpawnMonster 흐름도 |
| 13 F3 Decision | `assets/techdocs/legend-of-gem/feature-3-detail-1.png` | 활성/비활성 스폰 포인트 시각화 |
| 14 F3 Code | `assets/techdocs/legend-of-gem/feature-3-detail-2.gif` | 던전 입장 시 몬스터 무리 배치 GIF |
| 15 TS-01 | (사용자 보유 슬라이드 활용 가능) | 카메라/이동 방향 비교 이미지 |
| 16 TS-02 | (사용자 보유 슬라이드 활용 가능) | 블렌드 트리 좌표 비교 이미지 |
| 17 TS-03 | (사용자 보유 슬라이드 활용 가능) | NavMesh 경로 시각화 |
| 18 TS-04 | (사용자 보유 슬라이드 활용 가능) | 콜라이더 ON/OFF 시점 시각화 |
