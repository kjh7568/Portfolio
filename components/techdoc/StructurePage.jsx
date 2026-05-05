// StructurePage.jsx — PAGE 04 F1 Structure (Phase D)
function StructurePage({ page, total }) {
    function renderNote(note, i) {
        if (note.type === 'callout') {
            return (
                <div className="callout" key={i}>
                    <span className="ic">{note.ic}</span>
                    <p dangerouslySetInnerHTML={{ __html: note.body_html }} />
                </div>
            );
        }
        // type === 'item'
        return (
            <div className="item" key={i}>
                <h4>{note.h4}</h4>
                {note.body_html && (
                    <p dangerouslySetInnerHTML={{ __html: note.body_html }} />
                )}
                {note.paragraphs_html && note.paragraphs_html.map(function (para, j) {
                    return (
                        <p key={j}
                           style={j > 0 ? { marginTop: '6px' } : {}}
                           dangerouslySetInnerHTML={{ __html: para }} />
                    );
                })}
            </div>
        );
    }

    return (
        <section className="page structure-page" data-screen-label={page.screenLabel}>
            <TDHeader html={page.header_html} />

            <main className="page-main">
                <TDEyebrow>{page.eyebrow}</TDEyebrow>
                <h2 className="section-title" style={{ fontSize: '24px', marginBottom: '14px' }}>{page.title}</h2>

                <div className="layout" style={{ height: '590px' }}>
                    <div className="diagram-wrap">
                        <img src={page.umlSrc} alt={page.umlAlt}
                             style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'var(--r-2)', border: '1px solid var(--line)' }} />
                    </div>

                    <div className="notes">
                        {page.notes.map(renderNote)}
                    </div>
                </div>
            </main>

            <TDFooter num={page.pageNum} total={total} />
        </section>
    );
}
