import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://i.ibb.co/K0NQ1jY/BANNER1.png" />
        </div>
        <div>
          <img loading="lazy" src="https://i.ibb.co/bFG3LvP/BANNER2.png" />
        </div>
        <div>
          <img loading="lazy" src="https://i.ibb.co/8j8VyHz/BANNER3.png" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
