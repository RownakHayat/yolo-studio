import React, { useState } from "react";
import "../../assest/css/AllEvent.css";
import evtbg from "../../assest/images/image 84.png";
import evtImg from "../../assest/images/Rectangle 8.png";

import ReactDatePicker from "react-datepicker";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

export default function AllEventPage() {
  const [startDate, setStartDate] = useState(new Date());

  const backgroundImageStyle = {
    backgroundImage: `url("${evtbg}")`,
  };

  return (
    <div
      className=" w-full h-screen bg-cover bg-no-repeat"
      style={backgroundImageStyle}
    >
      <div className="">
        <div className="flex justify-center items-center">
          <div className="text-white">
            <h1 className="text-5xl text-center mt-20">DCSC EVENT FEST-2023</h1>
            <p className="text-xl text-center m-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum <br /> has been the industry's standard
              dummy text ever since the 1500s, when
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <div className="">
            <SwiperSlide className="">
              <img src={evtImg} alt="slide_image" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl flex text-center font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex text-white text-lg font-semibold">
                    <p>First Date</p>
                    <p>last Date</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] flex mt-auto mb-0 p-2">Icons</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={evtImg} alt="slide_image" />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
