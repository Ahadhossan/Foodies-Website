import React from 'react'
import BannerPng from '../../assets/food/banner.png'

const Testimonial = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="space-y-5 lg:max-w-[400px]">
            <p className="text-xl font-serif relative z-10">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti blanditiis ipsam, optio molestias sit itaque a. Sint,ptio
              molestias sit itaque a. Sint, vero obcaecati. Ipsam.
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-sm">Designation</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={BannerPng}
              alt=""
              className="relative z-10 w-full lg:max-w-[280px] img-shadow"
            />
            <div
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px]  bg-lightYellow rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial
