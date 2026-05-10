// TroubleshootPage.jsx — PAGE 07 TS-01 (Phase D)
function TroubleshootPage({ page, total }) {
    function renderVisualSlot(item, fallback) {
        const slot = item || fallback;
        return (
            <div className="ts-visual-slot" key={slot.label}>
                <div className="ts-visual-label">{slot.label}</div>
                {slot.src ? (
                    <img src={slot.src} alt={slot.alt || slot.title || slot.label} />
                ) : (
                    <TDPh
                        ic={slot.label}
                        ttl={slot.title}
                        sub={slot.sub || '이미지 추가 예정'}
                    />
                )}
            </div>
        );
    }

    function renderStep(step) {
        const isGood = step.cardType === 'good';
        const cardCls = isGood ? 'card' : 'card' + (step.cardType !== 'default' ? ' ' + step.cardType : '');
        const cardStyle = isGood ? { background: 'var(--good-bg)', borderColor: '#BBE5C7' } : {};

        return (
            <div className={`stack step-${step.n}`} key={step.n}>
                <div className="step-l"><span className="num">{step.n}</span>{step.label}</div>
                <div className={cardCls} style={cardStyle}>
                    {isGood ? (
                        <div className={`ts-result${step.metrics.length ? ' has-metrics' : ' no-metrics'}`}>
                            {step.metrics.length > 0 && (
                                <div className="metric-row ts-result-metrics" style={{ border: 0 }}>
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
                            )}
                            {step.result_html && <p className="result-copy" dangerouslySetInnerHTML={{ __html: step.result_html }} />}
                        </div>
                    ) : (
                        <>
                            {step.body_html && <p dangerouslySetInnerHTML={{ __html: step.body_html }} />}
                            {step.inlineCode && (
                                <div className="code ts-inline-code">
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

    const visualFallbacks = [
        { label: 'BEFORE', title: '해결 전', sub: '문제가 보이는 화면' },
        { label: 'AFTER',  title: '해결 후', sub: '수정 결과 화면' },
    ];
    const visualItems = page.visuals || visualFallbacks;

    return (
        <section className="page ts-page" data-screen-label={page.screenLabel}>
            <TDHeader html={page.header_html} />

            <main className="page-main">
                <div className="ts-layout">
                    <div className="ts-main-copy">
                        <TDEyebrow>{page.eyebrow}</TDEyebrow>
                        <h2 className="section-title" style={{ fontSize: '22px', marginBottom: '6px' }}>{page.title}</h2>
                        <p className="section-sub">{page.subtitle}</p>

                        <div className="timeline">
                            {page.steps.map(renderStep)}
                        </div>
                    </div>

                    <aside className="ts-visuals" aria-label="Troubleshooting before and after images">
                        {visualItems.map(function (item, i) {
                            return renderVisualSlot(item, visualFallbacks[i] || visualFallbacks[0]);
                        })}
                    </aside>
                </div>
            </main>

            <TDFooter num={page.pageNum} total={total} />
        </section>
    );
}
