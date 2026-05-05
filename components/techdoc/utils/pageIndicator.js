/* ============================================================
   pageIndicator.js — 스크롤 기반 페이지 카운터 + 진행 바
   window.TechDocUtils.initPageIndicator() 호출로 초기화
   ============================================================ */
(function () {
    window.TechDocUtils = window.TechDocUtils || {};

    window.TechDocUtils.initPageIndicator = function () {
        const pages = Array.from(document.querySelectorAll('.page'));
        const total = pages.length;
        const ind   = document.getElementById('page-indicator');
        const fill  = document.getElementById('progress-fill');

        function update() {
            const y = window.scrollY + window.innerHeight * 0.4;
            let cur = 1;
            for (let i = 0; i < pages.length; i++) {
                const r   = pages[i].getBoundingClientRect();
                const top = r.top + window.scrollY;
                if (y >= top) cur = i + 1;
            }
            ind.textContent = String(cur).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
            const pct = ((cur - 1) / (total - 1)) * 100;
            fill.style.width = pct + '%';
        }

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    };
})();
