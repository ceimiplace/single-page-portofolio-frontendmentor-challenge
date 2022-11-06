import GridContainer from "./GridContainer";

export default function Header() {
  return (
    <div className="header">
      <div className="top-header">
        <img src="" alt="logo" />
        <button>Free Consultation</button>
      </div>
      <h2> Design solutions made easy</h2>
      <p>
        With over ten years of experience in various design disciplines, I’m
        your one-stop shop for your design needs.
      </p>
      <GridContainer />
    </div>
  );
}
