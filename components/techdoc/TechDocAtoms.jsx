// TechDocAtoms.jsx — 기술문서 공통 부품 (Phase D)
// 포트폴리오의 Atoms.jsx와 분리된 기술문서 전용 atoms.
// 모든 함수는 Babel standalone 전역 스코프로 노출됨.

/* ----- Utility Bar ----- */
function TDUtilityBar({ meta }) {
    return (
        <div className="utility-bar">
            <div className="crumb">
                <a href={meta.backHref}>{meta.backLabel}</a>
                <span className="sep">/</span>
                <span>{meta.projectLabel}</span>
                <span className="sep">/</span>
                <span className="here">{meta.title}</span>
            </div>
            <div className="progress">
                <span id="page-indicator">01 / 08</span>
                <div className="track">
                    <div className="fill" id="progress-fill"></div>
                </div>
            </div>
        </div>
    );
}

/* ----- Page Header (pages 2-8) ----- */
function TDHeader({ html }) {
    return (
        <header className="page-header">
            <div className="left">
                <span className="doc-title" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </header>
    );
}

/* ----- Page Footer ----- */
function TDFooter({ num, total, extra }) {
    return (
        <footer className="page-footer">
            <span></span>
            <span className="pn">
                <b>{num}</b> / {String(total).padStart(2, '0')}
                {extra ? ' · ' + extra : ''}
            </span>
        </footer>
    );
}

/* ----- Eyebrow label ----- */
function TDEyebrow({ children }) {
    return <div className="eyebrow-doc">{children}</div>;
}

/* ----- Card ----- */
function TDCard({ cls = '', style, children }) {
    return <div className={`card${cls ? ' ' + cls : ''}`} style={style}>{children}</div>;
}

/* ----- Callout ----- */
function TDCallout({ ic, variant = '', children }) {
    return (
        <div className={`callout${variant ? ' ' + variant : ''}`}>
            <span className="ic">{ic}</span>
            <div>{children}</div>
        </div>
    );
}

/* ----- Placeholder diagram ----- */
function TDPh({ ic, ttl, sub, style, className = '' }) {
    return (
        <div className={`ph${className ? ' ' + className : ''}`} style={style}>
            {ic  && <div className="ic">{ic}</div>}
            {ttl && <div className="ttl">{ttl}</div>}
            {sub && <div className="sub">{sub}</div>}
        </div>
    );
}

/* ----- Simple code block (non-interactive, pre-highlighted HTML) ----- */
function TDCodeBlock({ file, lang, linesStr, highlightedHtml, style }) {
    return (
        <div className="code" style={style}>
            <div className="code-head">
                <span className="file">{file}</span>
                <span className="lang">{lang}</span>
            </div>
            <pre>
                <span className="ln">{linesStr}</span>
                <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
            </pre>
        </div>
    );
}

/* ----- Interactive code tabs (page 06) ----- */
function TDCodeTabs({ tabs }) {
    const [activeKey, setActiveKey] = React.useState(tabs[0] && tabs[0].key);
    const current = tabs.find(function (t) { return t.key === activeKey; }) || tabs[0];
    const highlight = window.TechDocUtils.highlightCSharp;
    const lineNums  = current.code.split('\n').map(function (_, i) { return i + 1; }).join('\n');

    return (
        <div className="code vs-code">
            <div className="code-head">
                <span className="file">{current.file}</span>
                <span className="lang">{current.lang}</span>
            </div>
            <pre>
                <span className="ln">{lineNums}</span>
                <code dangerouslySetInnerHTML={{ __html: highlight(current.code) }} />
            </pre>
            <div className="code-tabs">
                {tabs.map(function (t) {
                    return (
                        <button
                            key={t.key}
                            type="button"
                            className={t.key === activeKey ? 'active' : ''}
                            onClick={function () { setActiveKey(t.key); }}
                        >{t.label}</button>
                    );
                })}
            </div>
        </div>
    );
}
