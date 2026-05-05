/* ============================================================
   codeTabs.js — 코드 탭 위젯 초기화 + C# 스니펫 데이터
   의존: csharpHighlight.js (window.TechDocUtils.highlightCSharp)
   Phase C에서 스니펫 데이터 → techdoc.data.js로 이동 예정
   Phase D에서 전체 → CodeBlock.jsx의 useState로 대체 예정

   window.TechDocUtils.initCodeTabs() 호출로 초기화
   ============================================================ */
(function () {
    window.TechDocUtils = window.TechDocUtils || {};

    /* ----- 스니펫 데이터 (Phase C에서 techdoc.data.js로 이동) ----- */
    const snippets = {
        equipment: {
            file: 'Equipment.cs',
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
}`
        },
        weapon: {
            file: 'WeaponContainer.cs',
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
}`
        },
        reroll: {
            file: 'RerollUI.cs',
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
}`
        }
    };

    /* ----- 탭 위젯 초기화 ----- */
    window.TechDocUtils.initCodeTabs = function () {
        const root = document.querySelector('[data-code-tabs="equipment-detail"]');
        if (!root) return;

        const panel   = root.querySelector('[data-code-panel]');
        const lines   = root.querySelector('[data-code-lines]');
        const file    = root.querySelector('[data-code-file]');
        const buttons = Array.from(root.querySelectorAll('[data-code-key]'));
        const highlight = window.TechDocUtils.highlightCSharp;

        function setSnippet(key) {
            const snippet = snippets[key];
            if (!snippet) return;
            panel.innerHTML     = highlight(snippet.code);
            file.textContent    = snippet.file;
            lines.textContent   = snippet.code.split('\n').map(function (_, i) { return i + 1; }).join('\n');
            buttons.forEach(function (btn) {
                btn.classList.toggle('active', btn.dataset.codeKey === key);
            });
        }

        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () { setSnippet(btn.dataset.codeKey); });
        });
        setSnippet('equipment');
    };
})();
