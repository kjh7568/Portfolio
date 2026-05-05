// DetailDecisionPage.jsx — PAGE 05 F1 Detail 1 (Phase D)
function DetailDecisionPage({ page, total }) {
    const { decisionCard, choiceCard } = page;

    return (
        <section className="page detail-page" data-screen-label={page.screenLabel}>
            <TDHeader html={page.header_html} />

            <main className="page-main">
                <TDEyebrow>{page.eyebrow}</TDEyebrow>
                <h2 className="section-title" style={{ fontSize: '22px', marginBottom: '10px' }}>{page.title}</h2>

                <div className="grid" style={{ gridTemplateRows: '1fr 1fr', height: '560px' }}>
                    <div style={{ gridRow: '1 / span 2', height: '100%' }}>
                        <img src={page.imgSrc} alt={page.imgAlt}
                             style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'var(--r-2)', border: '1px solid var(--line)' }} />
                    </div>

                    <div className="card">
                        <div className="card-head">
                            <h4 className="ttl" style={{ font: '700 16px/1.3 var(--font-sans)' }}>
                                {decisionCard.num} · {decisionCard.heading}
                            </h4>
                            <span className="badge">{decisionCard.badge}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {decisionCard.options.map(function (opt) {
                                return (
                                    <div key={opt.name}>
                                        <p style={{ font: '700 16px/1.35 var(--font-sans)' }}>{opt.name}</p>
                                        <p style={{ marginTop: '7px', font: '400 16px/1.55 var(--font-sans)' }}><b>장점:</b> {opt.pros}</p>
                                        <p style={{ marginTop: '5px', font: '400 16px/1.55 var(--font-sans)' }}><b>단점:</b> {opt.cons}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="card accent-bar">
                        <div className="card-head">
                            <h4 className="ttl" style={{ font: '700 16px/1.3 var(--font-sans)' }}>
                                {choiceCard.num} · {choiceCard.heading}
                            </h4>
                            <span className="badge b-blue">{choiceCard.badge}</span>
                        </div>
                        {choiceCard.paragraphs_html.map(function (para, i) {
                            return (
                                <p key={i}
                                   style={i > 0 ? { marginTop: '8px', font: '400 16px/1.55 var(--font-sans)' } : { font: '400 16px/1.55 var(--font-sans)' }}
                                   dangerouslySetInnerHTML={{ __html: para }} />
                            );
                        })}
                    </div>
                </div>
            </main>

            <TDFooter num={page.pageNum} total={total} />
        </section>
    );
}
