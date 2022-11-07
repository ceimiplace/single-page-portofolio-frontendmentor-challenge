import Button from "./Button";
import logo from "../images/logo.svg";
import "./LogoButtonSection.css";
export default function LogoButtonSection() {
  return (
    <section className="section-container-logo">
      <img src={logo} alt="logo" className="logo" />
      <Button buttonstyle={"black-button text-btn"}>Free Consultation</Button>
    </section>
  );
}
