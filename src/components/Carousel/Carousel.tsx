import React, { FC } from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import { CardTypes } from "../../common/types";

type MovieSliderProps = {
  data: CardTypes[];
};
const MovieSlider: FC<MovieSliderProps> = ({ data }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Card
              id={item.id}
              key={item.id}
              poster={item.poster}
              name={item.name}
              rating={item.rating}
              isSlider
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default MovieSlider;
