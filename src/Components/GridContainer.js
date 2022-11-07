import CardGrid from "./CardGrid";
import "./GridContainer.css";
import graphicdesign from "../images/pattern-graphic-design.svg";
import ui from "../images/pattern-ui-ux.svg";
import apps from "../images/pattern-apps.svg";
import illustrations from "../images/pattern-illustrations.svg";
import photography from "../images/pattern-photography.svg";
import motiongraphics from "../images/pattern-motion-graphics.svg";
export default function GridContainer() {
  return (
    <ul className="grid-container">
      <CardGrid
        text="Graphic Design"
        background="#755CDE"
        src={graphicdesign}
        classy={"graphic"}
      />
      <CardGrid text="UI/UX" src={ui} background="#F6A560" classy={"ui"} />
      <CardGrid text="Apps" src={apps} background="#F39E9E" classy={"apps"} />
      <CardGrid
        text="Illustrations"
        src={illustrations}
        background="#EB7565"
        classy={"illustrations"}
      />
      <CardGrid
        text="Photography"
        src={photography}
        background="#61C4B7"
        classy={"photography"}
      />
      <CardGrid
        text="Motion Graphics"
        src={motiongraphics}
        background="#552049"
        classy={"motion"}
      />
    </ul>
  );
}
