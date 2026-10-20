import SectionTitle from '../ui/SectionTitle.jsx'

function StudiesSection({ studies }) {
  return (
    <section className="section-panel education-section" data-reveal>
      <SectionTitle
        id="formacion"
        label="formación"
        title="Ruta académica"
      />
      <div className="timeline mt-4">
        {studies.map((study, index) => (
          <article key={`${study.program}-${index}`} className="timeline-item">
            <div className="timeline-point" aria-hidden="true"></div>
            <div className="timeline-card content-card">
              {study.period ? (
                <p className="small text-uppercase text-info fw-semibold mb-2">{study.period}</p>
              ) : null}
              <h3 className="h5 fw-bold text-light mb-2">{study.program}</h3>
              <p className="mb-1"><span className="text-info">Estado:</span> {study.status}</p>
              <p className="small-muted mb-0">{study.extra}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StudiesSection
