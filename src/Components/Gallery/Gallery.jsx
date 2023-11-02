import React from 'react'

const Gallery = () => {

  return (
    <div className=" w-full h-screen bg-[#041551] ">
      <div className="">
        <div className="flex justify-center items-center">
          <div className="text-white">
            <h1 className="text-5xl text-center mt-20">Gallery</h1>
            <p className="text-xl text-center m-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum <br /> has been the industry's standard
              dummy text ever since the 1500s, when
            </p>
          </div>
        </div>
      </div>
      <div className="gallery-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
  )
}

export default Gallery