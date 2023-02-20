import Offcanvas from "react-bootstrap/Offcanvas";
import Tab from "react-bootstrap/Tab";
import LifeformCardGenerator from "../../../../generators/lifeform-cards/LifeformCardGenerator";
import { Lifeform } from "../../../../models/lifeform/Lifeform";
import { DescriptionContainer, StatsTab, StyledRightCanvas } from "./styles";

interface RightCanvasProps {
  currentLifeForm: Lifeform;
}

export default function RightCanvas(props: RightCanvasProps) {
  const { currentLifeForm } = props;
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
              {<>{LifeformCardGenerator(currentLifeForm)}</>}
            </DescriptionContainer>
          </Tab>
          <Tab eventKey="profile" title="Advantage">
            Advantage Here
          </Tab>
          <Tab eventKey="contact" title="Disadvantage">
            Disadvantage Here
          </Tab>
          <Offcanvas.Body></Offcanvas.Body>
        </StatsTab>
      </StyledRightCanvas>
    </>
  );
}
