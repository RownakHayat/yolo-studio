import React from "react";
import '../../../src/assest/css/HomePage.css'
import image1 from "../../assest/images/Rectangle 28.png";
import image2 from "../../assest/images/Rectangle 29.png";
import image3 from "../../assest/images/Rectangle 27.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, IconButton } from "@material-tailwind/react";

function HomePage() {

 

  return (
    <div className="relative">
      <div className="flex justify-center pt-36 text-6xl text-white font-semibold">
        <h1>
          DHAKA COLLEGE <br />
          <span className="ml-9">SCIENCE CLUB</span>
        </h1>
      </div> 
      <div className="flex justify-center items-center">
      <Carousel
      className="rounded-xl h-40"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg> */}
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          > 
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
           </svg> */}
        </IconButton>
      )}
    >
      <div className="flex">
      <img
      src={image1}
      className="h-full w-full object-cover"
      />
      <img
      src={image1}
      className="h-full w-full object-cover"
      />
      <img
      src={image1}
      className="h-full w-full object-cover"
      />
      </div>
      <img
      src={image1}
      className="h-full w-full object-cover"
      />
      <img
      src={image2}
       alt="image 2"
       className="h-full w-full object-cover"
      />
      <img
      src={image3}
       alt="image 3"
       className="h-full w-full object-cover"
      />
      <img
      src={image1}
      className="h-full w-full object-cover"
      />
    </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
