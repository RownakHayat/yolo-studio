import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slider_img from "../../assest/images/Rectangle 8.png";
import ReactDatePicker from "react-datepicker";

export default function AllEventPage() {
  const [startDate, setStartDate] = useState(new Date());

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
        <div className="swiper_container w-full">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className=" max-w-sm">
          <img src={slider_img} alt="slide_image" />
          <div className="">
            <p className="text-[#FFD707] text-xl font-semibold">DCSC Event PhotographyProgram</p>
            <div className="">
            <div className="">
            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_img} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
        </div>
      </div>
    </div>
  );
}
