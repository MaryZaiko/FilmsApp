import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";


const MovieSlider = () => {
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

  const MockData = [
    {
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },{
      id: 2,
      name: "Wonder Woman: 1984",
   
      rating: 8.1,
      poster:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/de30cec1-c90e-4d7a-b7e7-4b5db3bdf02c/300x450",
    },
  ];

  return (
    <div className="sliderContainer">
  
      <Slider {...settings}>
        {MockData.map((item) => {
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