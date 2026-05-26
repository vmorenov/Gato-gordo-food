function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <header className={`section-title section-title--${align}`}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-title__description">{description}</p> : null}
    </header>
  );
}

export default SectionTitle;
