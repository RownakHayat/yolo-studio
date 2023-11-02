import React from 'react'
import gallery1 from '../../assest/images/Rectangle 31 (1).png'
import gallery2 from '../../assest/images/Rectangle 32 (2).png'
import gallery3 from '../../assest/images/Rectangle 32 (3).png'
import gallery4 from '../../assest/images/Rectangle 33 (1).png'
import gallery5 from '../../assest/images/Rectangle 33 (2).png'
import gallery6 from '../../assest/images/Rectangle 33 (3).png'
import gallery7 from '../../assest/images/Rectangle 31 (1).png'



const Gallery = () => {

  return (
    <div className=" w-full h-100% bg-[#041551] ">
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
      <div className="">
      <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">
              <img alt="" class="block h-auto w-full" src={gallery1} />
            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">
              <img alt="" class="block h-auto w-full" src={gallery2} />
            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">
              <img alt="" class="block h-auto w-full" src={gallery3} />
            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column -->s */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">
              <img alt="" class="block h-auto w-full" src={gallery4} />
            </article>
            {/* <!-- END Article --> */}
        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">
              <img alt="" class="block h-auto w-full" src={gallery5} />
            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            {/* <!-- Article --> */}
            <article class="overflow-hidden rounded-lg shadow-lg">
              <img alt="" class="block h-auto w-full" src={gallery6} />
            </article>
            {/* <!-- END Article --> */}

        </div>
        {/* <!-- END Column --> */}

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