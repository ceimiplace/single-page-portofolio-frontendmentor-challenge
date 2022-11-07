import { useState } from "react";
import "./Carousel.css";
import leftarrow from "../images/icon-arrow-left.svg";
import rightarrow from "../images/icon-arrow-right.svg";

const images = [
  { image: "carouselImages/image-slide-1.jpg", id: 0 },
  { image: "carouselImages/image-slide-2.jpg", id: 1 },
  { image: "carouselImages/image-slide-3.jpg", id: 2 },
  { image: "carouselImages/image-slide-4.jpg", id: 3 },
  { image: "carouselImages/image-slide-5.jpg", id: 4 },
];
export default function Carousel() {
  const [location, setLocation] = useState(1);
  const length = images.length;
  function checkClass(number) {
    if (location === number) {
      return "current";
    } else if (location - number === 1) {
      return "previous";
    } else if (location - number === -1) {
      return "next";
    } else {
      return "hidden";
    }
  }
  return (
    <section className="container-carousel">
      <h2 className="headerL">My work</h2>
      <div className="carousel">
        {images.map((elem) => (
          <img
            src={elem.image}
            className={`image ${checkClass(elem.id)}`}
            key={elem.id}
          />
        ))}
      </div>
      <div className="arrow-container">
        <button
          className={"black-button arrow-button"}
          onClick={() =>
            setLocation(location === 0 ? length - 1 : location - 1)
          }
        >
          <img src={leftarrow} className="arrow" alt="previous photo" />
        </button>
        <button
          className={"black-button arrow-button"}
          onClick={() =>
            setLocation(location === length - 1 ? 0 : location + 1)
          }
        >
          <img src={rightarrow} className="arrow" alt="next photo" />
        </button>
      </div>
    </section>
  );
}
