import "./Footer.css";
import Button from "./Components/Button";
export default function Footer() {
  return (
    <footer className="footer">
      <article className="footer-article">
        <h2 className="footer-article-heading">Book a call with me</h2>
        <p className="bodyM" style={{ color: "white" }}>
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
      </article>
      <Button buttonstyle={"orange-button text-btn"}>Free Consultation</Button>
    </footer>
  );
}
