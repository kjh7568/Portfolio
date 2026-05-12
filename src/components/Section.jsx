// =========================================================
// Section wrapper — provides consistent vertical rhythm,
// optional alt background, head row with eyebrow + meta.
// =========================================================

function Section({ id, eyebrow, title, meta, children, alt = false, narrow = false, label }) {
  return (
    <section
      id={id}
      className={"section" + (alt ? " alt" : "")}
      data-screen-label={label || id}
    >
      <div className={narrow ? "section-content" : "section-inner"}>
        {(eyebrow || title || meta) && (
          <header className="section-head">
            <div className="section-head-row">
              {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : <span />}
              {meta ? <span className="section-meta">{meta}</span> : null}
            </div>
            {title ? <h2 className="section-title">{title}</h2> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

// Sub-section divider used inside a project's 6-part flow
function SubSection({ tag, title, meta, children }) {
  return (
    <div className="subsection">
      <div className="subsection-head">
        {tag ? <div className="subsection-tag">{tag}</div> : null}
        <h3 className="subsection-title">{title}</h3>
        {meta ? <div className="subsection-meta">{meta}</div> : null}
      </div>
      <div className="subsection-body">{children}</div>
    </div>
  );
}

Object.assign(window, { Section, SubSection });
