import React from "react";
import "../../assest/css/AllEvent.css";
import evtbg from "../../assest/images/image 84.png";
import evtImg from "../../assest/images/Rectangle 8.png";
import {BsArrowUpRight} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

export default function AllEventPage() {
  const backgroundImageStyle = {
    backgroundImage: `url("${evtbg}")`,
  };

  return (
    <div
      className="w-full h-100% bg-cover bg-no-repeat"
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
      <div className="evt-container">
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
          <div className="evt_slider">
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg">
              <img src={evtImg} alt="slide_image" className="w-full" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg" >
              <img src={evtImg} alt="slide_image" className="w-full" />
              <div className="flex">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg" >
              <img src={evtImg} alt="slide_image" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg" >
              <img src={evtImg} alt="slide_image" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg" >
              <img src={evtImg} alt="slide_image" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg">
              <img src={evtImg} alt="slide_image" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>className="p-4 bg-[#041551] rounded-lg"
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg">
              <img src={evtImg} alt="slide_image" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg">
              <img src={evtImg} alt="slide_image" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg">
              <img src={evtImg} alt="slide_image" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-4 bg-[#041551] rounded-lg">
              <img src={evtImg} alt="slide_image" />
              <div className="flex ">
                <div className="">
                  <h4 className="text-[#FFD707] text-xl font-semibold">
                    DCSC Event Photography Program
                  </h4>
                  <div className="flex gap-2 text-white text-lg font-semibold">
                    <p>18-10-2023  </p>
                    <span>to</span>
                    <p>20-10-2023</p>
                  </div>
                </div>
                <button className="bg-[#216DDE] text-white flex mt-auto mb-0 p-2">
                  <BsArrowUpRight />
                </button>
              </div>
            </SwiperSlide>
            
          </div>
        </Swiper>
        <div className="slider-controler mt-8">
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
