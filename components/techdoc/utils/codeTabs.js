/* ============================================================
   codeTabs.js — 코드 탭 위젯 초기화
   의존: techdoc.data.js (window.TECHDOC), csharpHighlight.js
   Phase D에서 전체 → CodeBlock.jsx의 useState로 대체 예정

   window.TechDocUtils.initCodeTabs() 호출로 초기화
   ============================================================ */
(function () {
    window.TechDocUtils = window.TechDocUtils || {};

    /* ----- 스니펫 데이터 — techdoc.data.js의 pages[5].tabs에서 읽음 ----- */
    function getSnippetsMap() {
        const tabsPage = window.TECHDOC.pages.find(function (p) { return p.type === 'codeTabs'; });
        if (!tabsPage) return {};
        return tabsPage.tabs.reduce(function (acc, tab) {
            acc[tab.key] = { file: tab.file, code: tab.code };
            return acc;
        }, {});
    }

    /* ----- 탭 위젯 초기화 ----- */
    window.TechDocUtils.initCodeTabs = function () {
        const root = document.querySelector('[data-code-tabs="equipment-detail"]');
        if (!root) return;

        const snippets  = getSnippetsMap();
        const panel     = root.querySelector('[data-code-panel]');
        const lines     = root.querySelector('[data-code-lines]');
        const file      = root.querySelector('[data-code-file]');
        const buttons   = Array.from(root.querySelectorAll('[data-code-key]'));
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
