import { useState } from "react";
import "./Carousel.css";
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
    <div>
      <section className="carousel">
        {images.map((elem) => (
          <img
            src={elem.image}
            className={`image ${checkClass(elem.id)}`}
            key={elem.id}
          />
        ))}
      </section>
      <button
        onClick={() => setLocation(location === 1 ? length : location - 1)}
      >
        Previous
      </button>
      <button
        onClick={() => setLocation(location === length - 1 ? 0 : location + 1)}
      >
        Next
      </button>
    </div>
  );
}
