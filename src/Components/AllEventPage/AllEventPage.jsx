import React, { useRef, useState } from "react";
import "../../assest/css/AllEvent.css";

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
        
        </div>
      </div>
    </div>
  );
}
