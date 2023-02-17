import { Card } from "react-bootstrap";
import styled from "styled-components";

export const ResourceList = styled.div`
  display: flex;
  flex-direction: row;
  height: 200rem;
  min-width: 100%;
  flex: 1;
`;

export const ResourceImage = styled(Card)`
  display: flex;
  max-width: 100%;
  max-height: 100%;
`;
