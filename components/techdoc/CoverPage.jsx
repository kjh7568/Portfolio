// CoverPage.jsx — PAGE 01 Cover (Phase D)
function CoverPage({ page, total }) {
    const titleLines = page.title.split('\n');

    function renderMetaV(item) {
        if (item.v2) {
            return (
                <div className="v">
                    <span className="mono">{item.v}</span>
                    <br />
                    <span className="mono" style={{ color: 'var(--fg-3)' }}>{item.v2}</span>
                </div>
            );
        }
        if (item.mono) {
            return <div className="v"><span className="mono">{item.v}</span></div>;
        }
        return <div className="v">{item.v}</div>;
    }

    return (
        <section className="page cover" data-screen-label={page.screenLabel}>
            <main className="page-main">
                <div className="left">
                    <div>
                        <TDEyebrow>{page.eyebrow}</TDEyebrow>
                        <h1 className="cover-title">
                            {titleLines[0]}<br />{titleLines[1]}
                        </h1>
                        <p className="cover-sub" style={{ maxWidth: '410px' }}
                           dangerouslySetInnerHTML={{ __html: page.subtitle_html }} />

                        <div className="cover-meta">
                            {page.meta.map(function (item) {
                                return (
                                    <div className="row" key={item.l}>
                                        <div className="l">{item.l}</div>
                                        {renderMetaV(item)}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="author">
                        <div className="who">
                            {page.author.name} <span className="accent">/ {page.author.nameEn}</span>
                            <span className="meta">{page.author.role}</span>
                        </div>
                        <div className="stamp" style={{ padding: '0 0 0 25px', lineHeight: 1.25 }}>
                            <div><b style={{ color: 'var(--accent)', fontWeight: 700 }}>EMAIL:</b> {page.author.email}</div>
                            <div><b style={{ color: 'var(--accent)', fontWeight: 700 }}>PHONE:</b> {page.author.phone}</div>
                        </div>
                    </div>
                </div>

                <aside className="right">
                    <div className="placeholder-hero">
                        <div className="ttl">{page.heroPlaceholder.ttl}</div>
                        <div className="sub">{page.heroPlaceholder.sub}</div>
                    </div>

                    <div className="toc-preview">
                        <div className="lbl">Document Map</div>
                        {page.toc.map(function (item) {
                            return (
                                <div className="row" key={item.n}>
                                    <span className="n">{item.n}</span>
                                    <span>{item.label}</span>
                                    <span className="p">{item.p}</span>
                                </div>
                            );
                        })}
                    </div>
                </aside>
            </main>

            <TDFooter num={page.pageNum} total={total} />
        </section>
    );
}
