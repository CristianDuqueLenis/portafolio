import { useMemo, useState } from 'react'
import SidebarIntro from './components/layout/SidebarIntro.jsx'
import Footer from './components/layout/Footer.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import InterestsSection from './components/sections/InterestsSection.jsx'
import PersonalSection from './components/sections/PersonalSection.jsx'
import ProjectsSection from './components/sections/ProjectsSection.jsx'
import SkillsSection from './components/sections/SkillsSection.jsx'
import StudiesSection from './components/sections/StudiesSection.jsx'
import {
  contactLinks,
  interests,
  navItems,
  profile,
  projectFilters,
  projects,
  studies,
  techGroups,
  techLogos
} from './data/portfolioData.js'
import useScrollReveal from './hooks/useScrollReveal.js'

function App() {
  const [projectFilter, setProjectFilter] = useState('all')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useScrollReveal()

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'all') return projects
    return projects.filter((project) => project.type === projectFilter)
  }, [projectFilter])

  return (
    <div className="app-bg" id="inicio">
      <div className="container app-container py-4 py-lg-5">
        <div className="row g-4 g-lg-5">
          <aside className="col-12 col-lg-4 col-xxl-5">
            <SidebarIntro
              profile={profile}
              navItems={navItems}
              contactLinks={contactLinks}
              mobileNavOpen={mobileNavOpen}
              onToggleMobileNav={() => setMobileNavOpen((open) => !open)}
              onCloseMobileNav={() => setMobileNavOpen(false)}
            />
          </aside>

          <div className="col-12 col-lg-8 col-xxl-7">
            <main className="d-flex flex-column gap-4">
              <PersonalSection profile={profile} />
              <StudiesSection studies={studies} />
              <ProjectsSection
                projects={filteredProjects}
                filter={projectFilter}
                filters={projectFilters}
                onFilterChange={setProjectFilter}
              />
              <SkillsSection techGroups={techGroups} techLogos={techLogos} />
              <InterestsSection interests={interests} />
              <ContactSection contactLinks={contactLinks} />
              <Footer profileName={profile.name} />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
