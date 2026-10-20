import SectionTitle from '../ui/SectionTitle.jsx'

function ProjectsSection({ projects, filter, filters, onFilterChange }) {
  const columnClass =
    projects.length <= 1
      ? 'col-12'
      : projects.length === 2
        ? 'col-12 col-md-6'
        : 'col-12 col-md-6 col-xl-4'

  return (
    <section id="proyectos" className="section-panel projects-section" data-reveal>
      <SectionTitle
        label="proyectos"
        title="Casos de trabajo"
      />

      <div className="d-flex flex-wrap gap-2 mt-3">
        {filters.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onFilterChange(option.value)}
            className={`btn btn-sm ${filter === option.value ? 'btn-info' : 'btn-outline-light'}`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="row g-3 mt-2">
        {projects.map((project, index) => (
          <article key={`${project.name}-${index}`} className={columnClass}>
            <div className="p-3 rounded-3 border border-secondary-subtle h-100 content-card project-card">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                <h3 className="h5 fw-bold text-light mb-0">{project.name}</h3>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill text-bg-info project-status">Full Stack</span>
                  {project.status ? (
                    <span className="badge rounded-pill text-bg-warning text-dark project-status">{project.status}</span>
                  ) : null}
                </div>
              </div>
              <p className="small-muted mb-2">{project.description}</p>
              <p className="mb-1"><span className="text-info">Problema:</span> {project.problem}</p>
              <p className="mb-2"><span className="text-info">Contribución:</span> {project.contribution}</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span key={`${project.name}-${tech}`} className="chip">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
