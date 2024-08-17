import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EntertainmentCard = (props) => {
  return (
    <>
      <div>
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://cdn4.vectorstock.com/i/1000x1000/04/33/workshop-icon-vector-6280433.jpg",
    "https://tse2.mm.bing.net/th?id=OIP.6c0GT8ciPGro5Mwnadz93gHaH_&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.Sv5oohjOZ-DsbbpGG66oJQHaH5&pid=Api&P=0&h=180",
    "https://cdn4.vectorstock.com/i/1000x1000/65/33/comedy-show-logo-badge-emblem-design-with-old-vector-19436533.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.fW-HFQa2RsMqbwg2TBu5jwHaH_&pid=Api&P=0&h=180",
    "https://cdn1.vectorstock.com/i/1000x1000/75/60/logo-sport-shop-vector-5857560.jpgg",
    "https://tse3.mm.bing.net/th?id=OIP.T6m08SRRuFiFPCp2MrGsvwHaH6&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.bI5yXZnSmk7HMgaIdzfHEgHaH_&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.tgbCLJNiHmlzJuwcI3u1hgHaH_&pid=Api&P=0&h=180",
    "https://i.pinimg.com/originals/82/3b/86/823b86aca4b4b40bca8675750b1986be.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.4DHx1vAyobRLB_CQ-WjyeQHaH_&pid=Api&P=0&h=180",
  ];

  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
          <EntertainmentCard src={image} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
