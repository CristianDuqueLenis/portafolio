function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow mb-1">{label}</p>
      <h2 className="h3 fw-bold text-light mb-2">{title}</h2>
      {subtitle ? <p className="small-muted mb-0">{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
