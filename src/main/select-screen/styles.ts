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
      border: 1px solid ${(props) => props.theme.mainColor};
      border-radius: ${15 / 16}rem ${15 / 16}rem ${15 / 16}rem;
      background-color: ${(props) => props.theme.backgroundColor};
      opacity: 0.7;
    }
  }
  .carousel-control-next {
    margin-right: 25%;
    width: 5%;
    .carousel-control-next-icon {
      height: 7rem;
      width: 60%;
      border: 1px solid ${(props) => props.theme.mainColor};
      border-radius: ${15 / 16}rem ${15 / 16}rem ${15 / 16}rem;
      background-color: ${(props) => props.theme.backgroundColor};
      opacity: 0.7;
    }
  }

  .carousel-indicators button {
    width: ${36 / 16}rem;
    height: ${10 / 16}rem;
    border: 1px solid ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.mainColor};
  }

  .carousel-indicators .active {
    width: ${36 / 16}rem;
    height: ${10 / 16}rem;
    border: 1px solid ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.mainColor} ;
    color: ${(props) => props.theme.mainColor};
  }
`;

export const CarouselItem = styled(Carousel.Item)``;

export const CarouselCaption = styled(Carousel.Caption)`
  font-size: 4vw;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainColor};
  display: flex;
  justify-content: center;
`;

export const CarouselButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  opacity: 0.6;
  height: 10rem;
  width: 30rem;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 15px;
  &:hover {
    opacity: 1;
  }
`;
