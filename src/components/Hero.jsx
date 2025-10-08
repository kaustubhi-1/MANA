import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { SiComma } from "react-icons/si";

const Hero = () => {
  return (
    // <div className='flex justify-center items-center'>
    //     <h2>Just say goodbye to  <TiStarFullOutline className='text-[#fe71cf]' /> being thirsty. </h2>
    // </div>
    <div>
      <div className="flex mt-5 justify-center items-center text-7xl font-bold text-[#311025]">
        Just say goodbye to
      </div>
      <div className="flex justify-center items-center">
        <span>
          <img src="/assets/stars.png" alt="" className="w-20 h-20" />
        </span>{" "}
        <p className="text-7xl font-bold text-[#311025]">being thirsty.</p>{" "}
        <span className="gap-2">
          <button className="bg-white mt-10 ml-3 border-2 flex justify-center items-center gap-2 px-3 py-1 rounded-full">
            Drink it up{" "}
            <a>
              <FiArrowRightCircle className="bg-[#3e0b28] rounded-full text-white" />
            </a>
          </button>
        </span>
      </div>
      <div className="text-xl flex justify-center items-center mt-9 font-bold text-[#311025]">
        Thirst &nbsp; <b>quenching</b> &nbsp; drink made just for you.
      </div>
      <div className="flex justify-between items-center pt-10 px-4">
        <div className="flex flex-col">
            <div className="flex justify-center items-center text-center">
               <span className="flex"><SiComma /><SiComma /></span>
            </div>
            <div>
                 <img src="" alt="" />
            </div>
            <div className="flex justify-center items-center py-2">The drink you need <br /> this summer</div>
            <div className="flex justify-center items-center">Product with great taste, <br /> and instant energy</div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
