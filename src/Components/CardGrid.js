export default function CardGrid({ src, background, text }) {
  return (
    <div className="card-grid" style={{ backgroundColor: { background } }}>
      <img src={src} alt="abstract image" className="card-grid-image" />
      <p className="card-grid-text">{text}</p>
    </div>
  );
}
