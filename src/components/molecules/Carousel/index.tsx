"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1, 
        },
      },
    ]
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
