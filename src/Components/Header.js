import GridContainer from "./GridContainer";

export default function Header() {
  return (
    <div className="header">
      <div className="top-header">
        <img src="" alt="logo" />
        <button>Free Consultation</button>
      </div>
      <div
        style={{
          textAlign: "center",
          maxWidth: "750px",
          marginInline: "auto",
          padding: "30px",
        }}
      >
        <h2 className="headingL"> Design solutions made easy</h2>
        <p className="bodyM">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <GridContainer />
    </div>
  );
}
