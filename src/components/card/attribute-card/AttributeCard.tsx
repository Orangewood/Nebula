import { Card } from "react-bootstrap";
import {
  AttributeCardBody,
  AttributeCardTitle,
  StyledAttributeCard,
} from "./styles";

interface AttributeCardProps {
  attributeKey: string;
  imgPath: string;
}

export default function AttributeCard(props: AttributeCardProps) {
  const { attributeKey, imgPath } = props;
  return (
    <>
      <StyledAttributeCard>
        <Card.Img variant="top" src={imgPath} />
        <AttributeCardBody>
          <AttributeCardTitle>{`+1 ${attributeKey}`}</AttributeCardTitle>
        </AttributeCardBody>
      </StyledAttributeCard>
    </>
  );
}
