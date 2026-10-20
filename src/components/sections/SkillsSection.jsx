import SectionTitle from '../ui/SectionTitle.jsx'

function SkillsSection({ techGroups, techLogos }) {
  return (
    <section className="section-panel technologies-section" data-reveal>
      <SectionTitle
        id="tecnologias"
        label="stack"
        title="Mapa tecnológico"
      />

      <div className="tech-map mt-3">
        {techGroups.map((group) => (
          <div key={group.title} className="tech-group">
            <p className="tech-group-label">{group.title}</p>
            <div className="tech-items">
              {group.items.map((item) => {
                const logo = techLogos.find((tech) => tech.name === item)

                return (
                  <div key={`${group.title}-${item}`} className="tech-logo-item" title={item}>
                    {logo ? <img src={logo.icon} alt="" className="tech-logo-img" loading="lazy" /> : null}
                    <span className="small text-light">{item}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
