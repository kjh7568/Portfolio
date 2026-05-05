// TroubleshootPage.jsx — PAGE 07 TS-01 (Phase D)
function TroubleshootPage({ page, total }) {
    function renderStep(step) {
        const isGood = step.cardType === 'good';
        const cardCls = isGood ? 'card' : 'card' + (step.cardType !== 'default' ? ' ' + step.cardType : '');
        const cardStyle = isGood ? { background: 'var(--good-bg)', borderColor: '#BBE5C7' } : {};

        return (
            <div className="stack" key={step.n}>
                <div className="step-l"><span className="num">{step.n}</span>{step.label}</div>
                <div className={cardCls} style={cardStyle}>
                    {isGood ? (
                        <div className="metric-row" style={{ border: 0 }}>
                            {step.metrics.map(function (m) {
                                return (
                                    <div className="m" key={m.l}>
                                        <div className="v">
                                            {m.v}
                                            {m.small && <span className="small">{m.small}</span>}
                                            {m.delta && <span className="delta">{m.delta}</span>}
                                        </div>
                                        <div className="l">{m.l}</div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <>
                            {step.body_html && <p dangerouslySetInnerHTML={{ __html: step.body_html }} />}
                            {step.inlineCode && (
                                <div className="code" style={{ marginTop: '10px' }}>
                                    <div className="code-head">
                                        <span className="file">{step.inlineCode.file}</span>
                                        <span className="lang">{step.inlineCode.lang}</span>
                                    </div>
                                    <pre>
                                        <span className="ln">{step.inlineCode.lines}</span>
                                        <code dangerouslySetInnerHTML={{ __html: step.inlineCode.highlighted_html }} />
                                    </pre>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <section className="page ts-page" data-screen-label={page.screenLabel}>
            <TDHeader html={page.header_html} />

            <main className="page-main">
                <TDEyebrow>{page.eyebrow}</TDEyebrow>
                <h2 className="section-title" style={{ fontSize: '22px', marginBottom: '6px' }}>{page.title}</h2>
                <p className="section-sub">{page.subtitle}</p>

                <div className="timeline">
                    {page.steps.map(renderStep)}
                </div>
            </main>

            <TDFooter num={page.pageNum} total={total} />
        </section>
    );
}
