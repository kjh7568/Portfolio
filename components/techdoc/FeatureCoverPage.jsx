// FeatureCoverPage.jsx — PAGE 03 Feature Cover (Phase D)
function FeatureCoverPage({ page, total }) {
    const titleLines = page.title.split('\n');

    return (
        <section className="page feature-cover" id={page.id} data-screen-label={page.screenLabel}>
            <TDHeader html={page.header_html} />

            <main className="page-main">
                <div>
                    <div className="sub-eyebrow">
                        <span className="num">{page.num}</span>
                        <span className="eyebrow-doc">{page.eyebrow}</span>
                    </div>
                    <h2 className="sub-title">
                        {titleLines[0]}<br />{titleLines[1]}
                    </h2>
                    <p className="one-liner" dangerouslySetInnerHTML={{ __html: page.oneLiner_html }} />
                </div>

                <div className="why">
                    <div className="l">
                        {page.why.label}
                        <br />
                        <span style={{ color: 'var(--fg-4)', font: '500 11px/1.4 var(--font-mono)', letterSpacing: '0.06em', textTransform: 'none' }}>
                            {page.why.labelSub}
                        </span>
                    </div>
                    <div className="body">
                        {page.why.body.map(function (para, i) {
                            return <p key={i} dangerouslySetInnerHTML={{ __html: para }} />;
                        })}
                    </div>
                </div>

                <div className="pages-hint">
                    {page.pagesHint.map(function (hint) {
                        return (
                            <div className="ph-card" key={hint.lbl}>
                                <div className="lbl">{hint.lbl}</div>
                                <div className="ttl">{hint.ttl}</div>
                            </div>
                        );
                    })}
                </div>
            </main>

            <TDFooter num={page.pageNum} total={total} />
        </section>
    );
}
