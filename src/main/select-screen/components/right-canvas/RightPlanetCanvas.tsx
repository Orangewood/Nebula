import Offcanvas from "react-bootstrap/Offcanvas";
import Tab from "react-bootstrap/Tab";
import LifeformCardGenerator from "../../../../generators/lifeform-cards/LifeformCardGenerator";
import { Lifeform } from "../../../../models/lifeform/Lifeform";
import { DescriptionContainer, StatsTab, StyledRightCanvas } from "./styles";
import { Planet } from "../../../../models/planets/Planet";
import ResourceCardGenerator from "../../../../generators/lifeform-cards/ResourceCardGenerator";

interface RightPlanetCanvasProps {
    currentPlanet: Planet;
}

export default function RightPlanetCanvas(props: RightPlanetCanvasProps) {
  const { currentPlanet } = props;
  return (
    <>
      <StyledRightCanvas show scroll={false} backdrop={false} placement="end">
        <StatsTab
          defaultActiveKey="stats"
          id="uncontrolled-tab-example"
          justify
          style={{ height: "auto" }}
        >
          <Tab eventKey="stats" title="Stats">
            <DescriptionContainer>
            {ResourceCardGenerator(currentPlanet.resources)}
            </DescriptionContainer>
          </Tab>
          {/* <Tab eventKey="profile" title="Advantage">
            Advantage Here
          </Tab>
          <Tab eventKey="contact" title="Disadvantage">
            Disadvantage Here
          </Tab> */}
          <Offcanvas.Body></Offcanvas.Body>
        </StatsTab>
      </StyledRightCanvas>
    </>
  );
}
