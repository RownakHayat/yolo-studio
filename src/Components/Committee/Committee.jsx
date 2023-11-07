import React from "react";
import memberImg from "../../assest/images/image 60.png";
import help_desk from '../../assest/images/Rectangle 17.png'
import "../../assest/css/Committee.css";

export default function  Committee() {
  return (
    <div className="bg-gradient-to-b from-[#041551] via-[#0E5E6B] to-[#041551] pb-96">
      <div className="">
      <div className="flex justify-center items-center">
          <div className="text-white">
            <h1 className="text-5xl text-center mt-20">Executive Committee 2023</h1>
            <p className="text-xl text-center m-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum <br /> has been the industry's standard
              dummy text ever since the 1500s, when
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 p-20 ">
          <div className=" bg-gradient-to-b from-[#100228] via-[#00CBD8]  to-[#1E65A7] w-96 rounded-xl ">
            <div className="bg-[#100228] opacity-75">
              <img src={memberImg} alt="" className="w-full" />
            </div>
            <div className="py-2 px-6 z-index-1">
              <h4 className="text-xl text-white font-semibold">
                Mahfuzur Rahman Ongkon
              </h4>
              <p className="flex text-[#1ED2DD] text-lg ">
                Joint Secretary of Sponsorship and Communication
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#100228] to-[#0E5E6B] w-96 rounded-xl p-8">
            <img src={memberImg} alt="" />
            <div className="">
              <h4 className="text-xl text-white font-semibold">
                Mahfuzur Rahman Ongkon
              </h4>
              <p className="flex text-[#1ED2DD] text-lg ">
                Joint Secretary of Sponsorship and Communication
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#100228] to-[#0E5E6B] w-96 rounded-xl p-8 ">
            <img src={memberImg} alt="" />
            <div className="">
              <h4 className="text-xl text-white font-semibold">
                Mahfuzur Rahman Ongkon
              </h4>
              <p className="flex text-[#1ED2DD] text-lg ">
                Joint Secretary of Sponsorship and Communication
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#100228] to-[#0E5E6B] w-96 rounded-xl p-8">
            <img src={memberImg} alt="" />
            <div className="">
              <h4 className="text-xl text-white font-semibold">
                Mahfuzur Rahman Ongkon
              </h4>
              <p className="flex text-[#1ED2DD] text-lg ">
                Joint Secretary of Sponsorship and Communication
              </p>
            </div>
          </div>
          {/* All member */}
          {/* <div className="bg-gradient-to-b from-[#100228] to-[#0E5E6B] w-96 rounded-xl p-8 ">
                <img src={memberImg} alt="" />
                <div className="">
                <h4 className='text-xl text-white font-semibold'>Mahfuzur Rahman Ongkon</h4>
                <p className='flex text-[#1ED2DD] text-lg '>Joint Secretary of Sponsorship 
                    and Communication</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#100228] to-[#0E5E6B] w-96 rounded-xl p-8 ">
                <img src={memberImg} alt="" />
                <div className="">
                <h4 className='text-xl text-white font-semibold'>Mahfuzur Rahman Ongkon</h4>
                <p className='flex text-[#1ED2DD] text-lg '>Joint Secretary of Sponsorship 
                    and Communication</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#100228] to-[#0E5E6B] w-96 rounded-xl p-8 ">
                <img src={memberImg} alt="" />
                <div className="">
                <h4 className='text-xl text-white font-semibold'>Mahfuzur Rahman Ongkon</h4>
                <p className='flex text-[#1ED2DD] text-lg '>Joint Secretary of Sponsorship 
                    and Communication</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#100228] to-[#0E5E6B] w-96 rounded-xl p-8 ">
                <img src={memberImg} alt="" />
                <div className="">
                <h4 className='text-xl text-white font-semibold'>Mahfuzur Rahman Ongkon</h4>
                <p className='flex text-[#1ED2DD] text-lg '>Joint Secretary of Sponsorship 
                    and Communication</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#100228] to-[#0E5E6B] w-96 rounded-xl p-8 ">
                <img src={memberImg} alt="" />
                <div className="">
                <h4 className='text-xl text-white font-semibold'>Mahfuzur Rahman Ongkon</h4>
                <p className='flex text-[#1ED2DD] text-lg '>Joint Secretary of Sponsorship 
                    and Communication</p>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#100228] to-[#0E5E6B] w-96 rounded-xl p-8 ">
                <img src={memberImg} alt="" />
                <div className="">
                <h4 className='text-xl text-white font-semibold'>Mahfuzur Rahman Ongkon</h4>
                <p className='flex text-[#1ED2DD] text-lg '>Joint Secretary of Sponsorship 
                    and Communication</p>
                </div>
            </div> */}
        </div>
        <div className="flex items-center justify-center ">
          <button className="bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] py-2 px-4 rounded-xl text-lg text-white">
            All Members
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full mt-20">
        <div className="w-full flex justify-center ">
           <div className="absolute form-container">
           <img src={help_desk} alt="" className="w-full" />
           </div>
           <div className="relative mt-20">
            <h1 className="text-center text-white text-7xl font-semibold">Need Any help?</h1>
           
            <div className="mt-28">
            <form className="com-form flex items-center gap-10">
             <div className="flex gap-8">
             <div className="">
              <input type="email" placeholder="Email" className="w-72" />
             </div>
              <div className="details">
                <input type="text" placeholder="Details"  />
              </div>
             </div>
             <button className="bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] py-2 px-4 rounded-xl text-lg text-white">Send</button>
            </form>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};
