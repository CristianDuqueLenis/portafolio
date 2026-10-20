function renderContactLink(link) {
  if (!link.href) {
    return <span className="small-muted">{link.value}</span>
  }

  return (
    <a href={link.href} target="_blank" rel="noreferrer" className="intro-link">
      {link.label === 'GitHub' ? 'CristianDuqueLenis' : link.value}
    </a>
  )
}

function SidebarIntro({
  profile,
  navItems,
  contactLinks,
  activeSectionId,
  mobileNavOpen,
  onToggleMobileNav,
  onCloseMobileNav
}) {
  const socialLinks = contactLinks.filter((item) =>
    ['GitHub', 'Correo'].includes(item.label)
  )

  return (
    <div className="sidebar-shell" data-reveal>
      <div className="sidebar-inner">
        <p className="intro-eyebrow mb-2">Portafolio</p>
        <h1 className="intro-name">{profile.name}</h1>
        <p className="intro-role mb-2">{profile.role}</p>
        <p className="small-muted mb-4">{profile.summary}</p>
        <p className="intro-tagline">{profile.tagline}</p>

        <div className="d-flex flex-wrap gap-2 mb-4">
          <a href="#proyectos" className="btn btn-primary btn-sm fw-semibold">Ver proyectos</a>
          <a href="#contacto" className="btn btn-outline-light btn-sm fw-semibold">Contacto</a>
        </div>

        <button
          type="button"
          className="btn btn-outline-light btn-sm d-lg-none mb-3"
          onClick={onToggleMobileNav}
          aria-expanded={mobileNavOpen}
          aria-controls="intro-nav"
        >
          Navegación
        </button>

        <nav id="intro-nav" className={`intro-nav ${mobileNavOpen ? 'is-open' : ''}`}>
          <ul className="list-unstyled d-flex d-lg-block flex-wrap gap-2 gap-lg-0 mb-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={onCloseMobileNav}
                  className={`intro-nav-link${activeSectionId === item.id ? ' is-active' : ''}`}
                  aria-current={activeSectionId === item.id ? 'location' : undefined}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="intro-meta">
          {socialLinks.map((link) => (
            <div key={link.label} className="intro-contact-row mb-1">
              <span className="text-info-emphasis fw-semibold">{link.label}:</span>
              {renderContactLink(link)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SidebarIntro
