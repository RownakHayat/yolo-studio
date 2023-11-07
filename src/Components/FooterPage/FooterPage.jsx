import React from "react";
import DCSC from "../../assest/images/DCSC 1.png";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div className="bg-[#000D37] ">
      <div className="px-20 py-10">
        <div className="flex justify-center items-center">
          <div className="text-center mt-20 mb-20">
            <div className="">
              <div className="flex justify-center">
                <img className="rounded-full w-34 h-34 " src={DCSC} alt="" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-semibold">
                  Dhaka College Science Club
                </h3>
                <p className="flex text-center text-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> Lorem Ipsum has been the
                  industry's standard dummy text ever since the <br /> 1500s,
                  when
                </p>
              </div>
              <div className="info flex justify-center gap-6 mt-8 text-white text-2xl">
                <SiFacebook />
                <RiInstagramFill />
                <BsGoogle />
                <IoLogoWhatsapp />
                <FaEnvelope />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center items-center mt-12">
          <div className="">
            <footer>
              <div className="text-lg text-white text-center">
                <h4>
                  © Copyright 2023, All Rights Reserved by DCSC <br />
                  Built By{" "}
                  <span className="text-[#1CC4CF]">The YOLO Studio</span>
                </h4>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
