import SectionTitle from '../ui/SectionTitle.jsx'

function PersonalSection({ profile }) {
  return (
    <section id="sobre-mi" className="section-panel about-section" data-reveal>
      <SectionTitle
        label="perfil"
        title="Contexto profesional"
      />
      <div className="row g-3 mt-1">
        <div className="col-12 col-md-4">
          {profile.photoUrl ? (
            <img src={profile.photoUrl} alt={profile.photoAlt} className="profile-photo-img" loading="lazy" />
          ) : (
            <div className="photo-placeholder d-flex align-items-center justify-content-center text-center">
              <span className="small text-secondary">{profile.photoAlt}</span>
            </div>
          )}
        </div>
        <div className="col-12 col-md-8">
          <div className="p-3 rounded-3 border border-secondary-subtle h-100 content-card">
            <ul className="list-unstyled mb-3">
              <li className="mb-2"><strong className="text-info">Nombre:</strong> {profile.name}</li>
              <li className="mb-2"><strong className="text-info">Perfil:</strong> {profile.role}</li>
              <li className="mb-2"><strong className="text-info">Celular:</strong> {profile.phone}</li>
              <li className="mb-2"><strong className="text-info">Ubicación:</strong> {profile.city}</li>
            </ul>
            <p className="small-muted mb-0">{profile.summary}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalSection
