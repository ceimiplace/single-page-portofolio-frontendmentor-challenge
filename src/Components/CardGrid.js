import "./CardGrid.css";
export default function CardGrid({ src, background, text, classy }) {
  return (
    <a
      href="#"
      className={`card-grid ${classy}`}
      style={{ backgroundColor: background }}
    >
      <img src={src} alt="abstract image" className="card-grid-image" />
      <p className="card-grid-text">{text}</p>
    </a>
  );
}
