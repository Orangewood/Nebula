import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

export const StyledCarousel = styled(Carousel)`
  display: flex;
  width: 100%;
  height: 100%;
  .carousel-inner {
    display: flex;
    width: 100%;
    height: 100%;
    img {
      height: 100%;
      width: 50%;
    }
  }
  .carousel-inner > .carousel-item {
    text-align: center;
  }
`;

export const CarouselItem = styled(Carousel.Item)``;

export const CarouselCaption = styled(Carousel.Caption)`
  font-size: 4vw;
  font-family: "Cinzel Decorative", cursive;
  color: #faf0dd;
  /* color: red; */
  display: flex;
  justify-content: center;
  button {
    background-color: black;
    color: #faf0dd;
    opacity: 0.5;
    height: 10rem;
    width: 30rem;
    border-radius: 15px 15px 15px;
  }
`;
