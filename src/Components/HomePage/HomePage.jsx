import React from "react";
import "../../../src/assest/css/HomePage.css";
import image1 from "../../assest/images/Rectangle 28.png";
import image2 from "../../assest/images/Rectangle 29.png";
import image3 from "../../assest/images/Rectangle 27.png";
import DCSCImg from '../../assest/images/Rectangle 26.png'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function HomePage() {
  return (
    <div className="bg-[#041551] dcsc-container">
      <div className="">
        <div className="flex justify-center relative pt-36 text-6xl text-white font-semibold">
          <h1>
            DHAKA COLLEGE <br />
            <span className="ml-9">SCIENCE CLUB</span>
          </h1>
        </div>
        <div className="slider">
          <div className="small-container">
            <Swiper
              slidesPerView={3}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide className="rounded-full">
                <img src={image1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-full">
                <img src={image2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-full">
                <img src={image3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-full">
                <img src={image1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-full">
                <img src={image3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-full">
                <img src={image1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-full">
                <img src={image2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-full">
                <img src={image3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:grid lg:grid-cols-2 gap-10">
          <div className="m-20 m-sm-5 max-w-sm w-full lg:max-w-full sm:flex ">
            <div className="grid-cols-6">
              <div className="">
                <div className="">
                  <h1 className="text-white lg:text-5xl font-semibold">DCSC</h1>
                  <div className="bg-white flex justify-evenly py-3 mt-8 px-3 text-black rounded-lg ">
                    <button className=" btn_info rounded-lg py-2 px-6 font-bold 
                    text-base hover:text-white ">
                      About
                    </button>
                    <button className="btn_info rounded-lg px-6 font-bold text-base py-1 hover:text-white  ">
                      Intormd
                    </button>
                    <button className="btn_info rounded-lg px-6 font-bold text-base py-1 hover:text-white ">
                      What we do
                    </button>
                  </div>
                </div>
                <div className="text-white mt-10">
                  <p>
                    Dhaka College Science Club, established in 1996, is a
                    pioneering institution dedicated to fostering scientific
                    curiosity and exploration. With over two decades of
                    nurturing young minds, our club has been a hub for students
                    to delve into various scientific disciplines. Through
                    engaging activities, lectures, and experiments, we empower
                    members to develop critical thinking skills and a profound
                    appreciation for the world of science. Our enduring legacy
                    continues to inspire the next generation of scientists and
                    innovators in Dhaka and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-20">
          <div className="grid-cols-6">
              <div className="w-full relative">
              <img src={DCSCImg} alt="" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
