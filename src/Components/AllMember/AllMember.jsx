import React from "react";
import memberImg from "../../assest/images/image 60.png";
import help_desk from '../../assest/images/Rectangle 17.png'
import "../../assest/css/AllMember.css";

const AllMember = () => {
  return (
    <div className="bg-gradient-to-b from-[#041551] via-[#0E5E6B] to-[#041551] pb-10">
      <div className="">
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
      <div className="flex justify-center w-full">
        <div className="">
            <img src={help_desk} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AllMember;
