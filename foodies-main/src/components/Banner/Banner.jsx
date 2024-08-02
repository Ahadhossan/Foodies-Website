import React from "react";
import BannerPng from '../../assets/food/banner.png'

const Banner = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="relative">
            <img
              src={BannerPng}
              alt=""
              className="relative z-10 w-full lg:max-w-[350px] img-shadow"
            />
            <div className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px] md:h-[400px] md:w-[400px]  bg-lightYellow rounded-full"></div>
          </div>
          <div className="space-y-5 lg:max-w-[400px]">
            <h1 className="text-6xl uppercase font-semibold font-league">
              The Best yummy food in the town
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
              enim porro!
            </p>
            <button
              className="btn-primary"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
