import Button from "./Button";
import "./Main.css";
import hero from "../images/image-amy.webp";
import Carousel from "./Carousel";
export default function Main() {
  return (
    <main className="main-container">
      <section className="hero-container">
        <div>
          <img src={hero} className="hero" />
        </div>
        <article className="hero-container-text">
          <h2 className="hero-container-heading">
            I’m Amy, and I’d love to work on your next project
          </h2>
          <p className="bodyM">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <Button buttonstyle="text-btn orange-button">
            Free consultation
          </Button>
        </article>
      </section>
      <Carousel />
    </main>
  );
}
