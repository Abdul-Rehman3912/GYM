import React from "react";
import { TestimonialsData } from "../../mockupData/data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div className="text-left mb-10 max-w-[500px] space-y-2 mr-auto">
          <h1 className="text-4xl font-bold">
            What Are The Customers Saying About Us
          </h1>
        </div>

        <div>
          {TestimonialsData && TestimonialsData.length > 0 ? (
            <Slider {...setting}>
              {TestimonialsData.map((data) => (
                <div key={data.id} className="px-2">
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-2 rounded-xl bg-primary/10">
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="rounded-full w-16 h-16 object-cover"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {data.name}
                        </p>
                        <p className="text-sm text-gray-500">Customer</p>
                      </div>
                    </div>
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{data.text}</p>
                      <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center text-gray-500">Loading testimonials...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;