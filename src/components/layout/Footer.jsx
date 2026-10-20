const CURRENT_YEAR = new Date().getFullYear()

function Footer({ profileName }) {
  return (
    <footer className="border-top border-secondary-subtle py-4 mt-5 footer-shell">
      <div className="container text-center d-flex flex-column flex-lg-row justify-content-between gap-2 small text-secondary">
        <p className="mb-0">{profileName} - Portafolio profesional</p>
        <p className="mb-0">{CURRENT_YEAR} - Sitio Web</p>
      </div>
    </footer>
  )
}

export default Footer
