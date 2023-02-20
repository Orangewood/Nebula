import { Card } from "react-bootstrap";
import {
  AttributeCardBody,
  AttributeCardTitle,
  StyledAttributeCard,
} from "./styles";

interface AttributeCardProps {
  attributeKey: string;
  imgPath: string;
  attributeValue?: number;
}

export default function AttributeCard(props: AttributeCardProps) {
  const { attributeKey, imgPath, attributeValue } = props;
  return (
    <>
      <StyledAttributeCard>
        <Card.Img variant="top" src={imgPath} />
        <AttributeCardBody>
          <AttributeCardTitle>{`+${attributeValue} ${attributeKey}`}</AttributeCardTitle>
        </AttributeCardBody>
      </StyledAttributeCard>
    </>
  );
}
