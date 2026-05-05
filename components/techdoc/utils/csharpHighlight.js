/* ============================================================
   csharpHighlight.js — C# 신택스 하이라이팅 (정규식 기반)
   Phase D에서 CodeBlock.jsx의 useLayoutEffect로 교체 예정.

   window.TechDocUtils.escapeHtml(str)       → HTML 이스케이프
   window.TechDocUtils.highlightCSharp(code) → HTML 토큰 문자열 반환
   ============================================================ */
(function () {
    window.TechDocUtils = window.TechDocUtils || {};

    window.TechDocUtils.escapeHtml = function (value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };

    window.TechDocUtils.highlightCSharp = function (code) {
        const escape = window.TechDocUtils.escapeHtml;

        const keywordPattern = /\b(public|private|interface|class|switch|case|for|if|continue|break|new|return|get|set)\b/g;
        const typePattern    = /\b(int|string|float|void|bool|List|Equipment|WeaponContainer|Random)\b/g;
        const numberPattern  = /\b\d+(?:\.\d+)?\b/g;
        const methodPattern  = /\b([A-Z_a-z][\w]*)\b(?=\s*\()/g;

        return code.split('\n').map(function (line) {
            const parts      = line.split('//');
            let codePart     = escape(parts.shift() || '');
            const commentPart = parts.length
                ? '<span class="tk-c">//' + escape(parts.join('//')) + '</span>'
                : '';

            codePart = codePart
                .replace(keywordPattern, '<span class="tk-k">$1</span>')
                .replace(typePattern,    '<span class="tk-t">$1</span>')
                .replace(numberPattern,  '<span class="tk-n">$&</span>')
                .replace(methodPattern,  '<span class="tk-f">$1</span>');

            return codePart + commentPart;
        }).join('\n');
    };
})();
