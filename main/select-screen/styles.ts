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

  .carousel-control-prev {
    margin-left: 25%;
    width: 5%;
    .carousel-control-prev-icon {
      height: 7rem;
      width: 60%;
      border: 1px solid #faf0dd;
      border-radius: 15px 15px 15px;
      background-color: black;
      opacity: 0.7;
    }
  }
  .carousel-control-next {
    margin-right: 25%;
    width: 5%;
    .carousel-control-next-icon {
      height: 7rem;
      width: 60%;
      border: 1px solid #faf0dd;
      border-radius: 15px 15px 15px;
      background-color: black;
      opacity: 0.7;
    }
  }
`;

export const CarouselItem = styled(Carousel.Item)``;

export const CarouselCaption = styled(Carousel.Caption)`
  font-size: 4vw;
  font-family: "Cinzel Decorative", cursive;
  color: #faf0dd;
  display: flex;
  justify-content: center;
`;

export const CarouselButton = styled.button`
  background-color: #181a1b;
  color: #faf0dd;
  opacity: 0.6;
  height: 10rem;
  width: 30rem;
  border-radius: 15px 15px 15px;
  &:hover {
    opacity: 1;
  }
`;
