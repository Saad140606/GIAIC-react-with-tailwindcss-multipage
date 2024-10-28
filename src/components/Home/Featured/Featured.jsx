import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureCard from "./FeatureCard";

const Featured = () => {
  const carsData = [
    {
      id: 0,
      img: "./src/assets/img/cara.png",
      name: "Cadillac Escalade",
      price: "22,440",
    },
    {
      id: 1,
      img: "./src/assets/img/carb.png",
      name: "BMW 3 Series",
      price: "54,890",
    },
    {
      id: 2,
      img: "./src/assets/img/carc.png",
      name: "Mercedes",
      price: "75,890",
    },
    {
      id: 3,
      img: "./src/assets/img/card.png",
      name: "BMW 7 Series",
      price: "55,789",
    },
    {
      id: 4,
      img: "./src/assets/img/care.png",
      name: "Mercedes-Benz",
      price: "95,776",
    },
    {
      id: 5,
      img: "./src/assets/img/carf.png",
      name: "Range Rover",
      price: "88,450",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className=" container mt-14 t">
      <h1 className=" font-bold text-4xl text-center text-4xl lg:text-6xl font-bold leading-tight">
        Featured <span className=" text-primary text-uppercase">Cars</span>
      </h1><br />

      <p className=" text-center text-sm lg:text-base "> Explore our selection of <span className=" text-primary text-uppercase">featured cars</span>, showcasing the best in quality, performance, and style. 
      Each vehicle is handpicked for its exceptional features, reliability, and value, ensuring you find the perfect 
      match for your driving needs. Whether you seek luxury, efficiency, or adventure, our featured cars are ready to 
      elevate your journey and make every drive memorable!
  
      </p>

      <div className=" mt-8">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeatureCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
