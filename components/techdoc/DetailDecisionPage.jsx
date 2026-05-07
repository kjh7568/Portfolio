// DetailDecisionPage.jsx — PAGE 05 F1 Detail 1 (Phase D) v3
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
                            <h4 className="ttl">{decisionCard.num} · {decisionCard.heading}</h4>
                            <span className="badge">{decisionCard.badge}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {decisionCard.options.map(function (opt) {
                                return (
                                    <div key={opt.name}>
                                        <p style={{ fontWeight: 700 }}>{opt.name}</p>
                                        <p style={{ marginTop: '4px' }}><b>장점:</b> <span dangerouslySetInnerHTML={{ __html: opt.pros }} /></p>
                                        <p style={{ marginTop: '3px' }}><b>단점:</b> <span dangerouslySetInnerHTML={{ __html: opt.cons }} /></p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="card accent-bar">
                        <div className="card-head">
                            <h4 className="ttl">{choiceCard.num} · {choiceCard.heading}</h4>
                            <span className="badge b-blue">{choiceCard.badge}</span>
                        </div>
                        {choiceCard.paragraphs_html.map(function (para, i) {
                            return (
                                <p key={i}
                                   style={i > 0 ? { marginTop: '6px' } : {}}
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
