// RetrospectivePage.jsx — PAGE 08 Retrospective (Phase D)
function RetrospectivePage({ page, total }) {
    return (
        <section className="page retro-page" data-screen-label={page.screenLabel}>
            <TDHeader html={page.header_html} />

            <main className="page-main">
                <TDEyebrow>{page.eyebrow}</TDEyebrow>
                <h2 className="section-title" style={{ fontSize: '28px' }}>{page.title}</h2>

                <div className="grid" style={{ marginTop: '14px' }}>
                    <div className="pillar accent">
                        <h4>Keep <span className="num">잘했다고 생각하는 것</span></h4>
                        {page.keep.map(function (item, i) {
                            return (
                                <p key={i} style={i > 0 ? { marginTop: '6px' } : {}}>
                                    <b>{item.h}</b> {item.p}
                                </p>
                            );
                        })}
                    </div>

                    <div className="pillar">
                        <h4>Problem <span className="num">아쉬웠던 것</span></h4>
                        {page.problem.map(function (item, i) {
                            const html = '<b>' + item.h + '</b> ' + (item.p_html || item.p);
                            return (
                                <p key={i}
                                   style={i > 0 ? { marginTop: '6px' } : {}}
                                   dangerouslySetInnerHTML={{ __html: html }} />
                            );
                        })}
                    </div>

                    <div className="pillar" style={{ gridColumn: '1 / -1' }}>
                        <h4>Try <span className="num">다음에 시도할 것</span></h4>
                        <div className="split-3">
                            {page.try.map(function (item) {
                                return (
                                    <div key={item.n}>
                                        <p><b>{item.n} · {item.h}</b></p>
                                        <p style={{ marginTop: '4px' }}>{item.p}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>

            <TDFooter num={page.pageNum} total={total} extra="END" />
        </section>
    );
}
