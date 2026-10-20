import SectionTitle from '../ui/SectionTitle.jsx'

function InterestsSection({ interests }) {
  return (
    <section id="intereses" className="section-panel interests-section" data-reveal>
      <SectionTitle
        label="intereses"
        title="Lineas de especializacion"
      />
      <div className="row g-3 mt-2">
        {interests.map((interest, index) => (
          <article key={`${interest.title}-${index}`} className="col-12 col-md-6 col-lg-4">
            <div className="p-3 rounded-3 border border-secondary-subtle h-100 content-card">
              <h3 className="h6 fw-bold text-light">{interest.title}</h3>
              <p className="small-muted mb-0">{interest.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default InterestsSection
