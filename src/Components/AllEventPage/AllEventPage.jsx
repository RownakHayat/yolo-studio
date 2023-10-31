import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../assest/css/AllEvent.css";
import evtImg from "../../assest/images/Rectangle 8.png";
import BsArrowUpRight from 'react-icons/bs'

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function AllEventPage() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="text-white items-center">
            <h1 className="text-5xl">DCSC EVENT FEST-2023</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </p>
          </div>
        </div>
        <div className="">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={evtImg} />
              <div className="">
                <h4 className="text-[#FFD707] text-lg">
                  DCSC Event Photography Program
                </h4>
                <div className="">
                  <p>18-10-2023 to 20-10-2023</p>
                  <button
                    className="bg-[#216DDE]"
                  >
                   <BsArrowUpRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
