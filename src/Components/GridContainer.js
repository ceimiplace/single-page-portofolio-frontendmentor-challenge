import CardGrid from "./CardGrid";
import "./GridContainer.css";
import graphicdesign from "../images/pattern-graphic-design.svg";
import ui from "../images/pattern-ui-ux.svg";
import apps from "../images/pattern-apps.svg";
export default function GridContainer() {
  return (
    <div className="grid-container">
      <CardGrid
        text="Graphic Design"
        background="#755CDE"
        src={graphicdesign}
      />
      <CardGrid text="UI/UX" src={ui} />
      <CardGrid text="Apps" src={apps} />
      <CardGrid text="Illustrations" />
      <CardGrid text="Photography" />
      <CardGrid text="Motion Graphics" />
    </div>
  );
}
