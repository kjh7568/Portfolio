/* ============================================================
   responsiveScale.js — 뷰포트 너비 < 1123px일 때 .page 축소 핏
   window.TechDocUtils.initResponsiveScale() 호출로 초기화
   ============================================================ */
(function () {
    window.TechDocUtils = window.TechDocUtils || {};

    window.TechDocUtils.initResponsiveScale = function () {
        const pages = Array.from(document.querySelectorAll('.page'));

        function scalePages() {
            const scale = Math.min(1, (window.innerWidth - 40) / 1123);
            const bar   = document.querySelector('.utility-bar');

            if (scale < 1) {
                const vGap = (794 * scale - 794) / 2; // 음수값 → 마진 상쇄
                pages.forEach(p => {
                    p.style.transform       = `scale(${scale})`;
                    p.style.transformOrigin = 'top left';
                    p.style.marginLeft      = '20px';
                    p.style.marginTop       = vGap + 'px';
                    p.style.marginBottom    = (vGap + 24) + 'px';
                });
                if (bar) bar.style.width = (window.innerWidth - 40) + 'px';
            } else {
                pages.forEach(p => {
                    p.style.transform = p.style.transformOrigin =
                    p.style.marginLeft = p.style.marginTop = p.style.marginBottom = '';
                });
                if (bar) bar.style.width = '';
            }
        }

        window.addEventListener('resize', scalePages, { passive: true });
        scalePages();
    };
})();
