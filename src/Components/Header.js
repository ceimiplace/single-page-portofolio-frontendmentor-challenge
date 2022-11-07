import Button from "./Button";
import GridContainer from "./GridContainer";
import "./Header.css";

import LogoButtonSection from "./LogoButtonSection";
export default function Header() {
  return (
    <header className="header">
      <article className="presentation-container">
        <h2 className="presentation-header-text">Design solutions made easy</h2>
        <p className="bodyM" style={{ paddingInline: "29px" }}>
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </article>
      <GridContainer />
    </header>
  );
}
