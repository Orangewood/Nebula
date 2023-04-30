import { Card } from "react-bootstrap";
import {
  AttributeCardBody,
  AttributeCardImage,
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
        {/* <AttributeCardImage variant="top" src={imgPath} /> */}
        <Card.Img variant="top" src={imgPath} />
        <AttributeCardBody>
          <AttributeCardTitle>{`+${attributeValue} ${attributeKey}`}</AttributeCardTitle>
        </AttributeCardBody>
      </StyledAttributeCard>
    </>
  );
}
