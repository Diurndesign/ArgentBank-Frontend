export default function FeatureItem({ icon, alt, title, text }) {
  return (
    <div className="feature-item">
      <img
        src={icon}
        alt={alt}
        className="feature-icon"
        width="100"
        height="100"
        loading="lazy"
        decoding="async"
      />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}
