// OverviewPage.jsx — PAGE 02 Overview (Phase D)
function OverviewPage({ page, total }) {
    return (
        <section className="page" data-screen-label={page.screenLabel}>
            <TDHeader html={page.header_html} />

            <main className="page-main" style={{ overflow: 'auto' }}>
                <TDEyebrow>{page.eyebrow}</TDEyebrow>
                <h2 className="section-title" style={{ fontSize: '24px', marginBottom: '14px' }}>{page.title}</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '22px', alignItems: 'start', marginBottom: '18px' }}>
                    <TDPh
                        ic={page.gameplayPlaceholder.ic}
                        ttl={page.gameplayPlaceholder.ttl}
                        sub={page.gameplayPlaceholder.sub}
                        style={{ height: '360px', padding: '24px' }}
                    />

                    <div>
                        <h3 style={{ font: '700 15px/1.3 var(--font-sans)', margin: '0 0 10px' }}>게임 흐름</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {page.steps.map(function (step) {
                                return (
                                    <TDCard cls="sunk" style={{ padding: '12px 14px' }} key={step.n}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '12px', alignItems: 'baseline' }}>
                                            <span style={{ font: '600 12px/1 var(--font-mono)', color: 'var(--accent)' }}>{step.n}</span>
                                            <div>
                                                <p style={{ font: '600 13px/1.3 var(--font-sans)', margin: 0 }}>{step.t}</p>
                                                <p style={{ font: '400 12.5px/1.55 var(--font-sans)', color: 'var(--fg-2)', margin: '4px 0 0' }}>{step.d}</p>
                                            </div>
                                        </div>
                                    </TDCard>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <h3 style={{ font: '700 16px/1.3 var(--font-sans)', margin: '0 0 10px' }}>핵심 기능 — 카드를 클릭해 해당 페이지로 이동</h3>
                <div className="feature-index" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    {page.features.map(function (f) {
                        return (
                            <a className="fi" href={f.href} key={f.n}>
                                <div className="n">{f.n}</div>
                                <div>
                                    <p className="t">{f.t}</p>
                                    <p className="d">{f.d}</p>
                                </div>
                                <div className="p">{f.p}</div>
                            </a>
                        );
                    })}
                </div>
            </main>

            <TDFooter num={page.pageNum} total={total} />
        </section>
    );
}
