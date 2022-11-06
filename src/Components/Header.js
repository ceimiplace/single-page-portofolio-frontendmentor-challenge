import Button from "./Button";
import GridContainer from "./GridContainer";
import "./Header.css";
import logo from "../images/logo.svg";
export default function Header() {
  return (
    <div className="header">
      <div className="top-header">
        <img src={logo} alt="logo" className="logo" />
        <Button buttonstyle={"black-button text-btn"}>Free Consultation</Button>
      </div>
      <div className="presentation-container">
        <h2 className="presentation-header-text">Design solutions made easy</h2>
        <p className="bodyM" style={{ paddingInline: "29px" }}>
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <GridContainer />
    </div>
  );
}
