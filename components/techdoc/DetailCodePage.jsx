// DetailCodePage.jsx — PAGE 06 F1 Detail 2 (Phase D)
function DetailCodePage({ page, total }) {
    const { resultCard } = page;

    return (
        <section className="page detail-page" data-screen-label={page.screenLabel}>
            <TDHeader html={page.header_html} />

            <main className="page-main">
                <TDEyebrow>{page.eyebrow}</TDEyebrow>
                <h2 className="section-title" style={{ fontSize: '22px', marginBottom: '10px' }}>{page.title}</h2>

                <div className="grid" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gridTemplateRows: '1fr 116px', height: '615px' }}>
                    <div style={{ height: '100%', minHeight: 0 }}>
                        <img src={page.imgSrc} alt={page.imgAlt}
                             style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'var(--r-2)', border: '1px solid var(--line)' }} />
                    </div>

                    <div className="card detail-code-card">
                        <div className="card-head">
                            <h4 className="ttl">{page.codeCardTitle}</h4>
                            <span className="badge">CODE</span>
                        </div>
                        <TDCodeTabs tabs={page.tabs} />
                    </div>

                    <div className="card span2">
                        <div className="card-head">
                            <h4 className="ttl">{resultCard.num} · 결과</h4>
                            <span className="badge b-good">{resultCard.badge}</span>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: resultCard.body_html }} />
                    </div>
                </div>
            </main>

            <TDFooter num={page.pageNum} total={total} />
        </section>
    );
}
