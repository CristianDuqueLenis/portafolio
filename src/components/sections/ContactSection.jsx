import SectionTitle from '../ui/SectionTitle.jsx'

function ContactSection({ contactLinks }) {
  return (
    <section id="contacto" className="section-panel contact-section" data-reveal>
      <SectionTitle
        label="contacto"
        title="Conversemos"
      />

      <div className="row g-3 mt-2">
        <div className="col-12">
          <div className="p-3 rounded-3 border border-secondary-subtle h-100 content-card">
            <div className="d-flex flex-column gap-2">
              {contactLinks.map((link) => (
                <div key={link.label} className="d-flex flex-column flex-sm-row gap-1 gap-sm-3">
                  <strong className="text-info">{link.label}:</strong>
                  {link.href ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className="link-light">
                      {link.value}
                    </a>
                  ) : (
                    <span className="small-muted">{link.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
