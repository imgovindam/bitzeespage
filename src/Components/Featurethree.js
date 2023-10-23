import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const Featurethree = () => {
  return (
    <div className="px-20 h-[100vh] bg-gray-100 p-4 grid grid-cols-12">
      <div className="col-span-6  w-full">
        <h2 className="font-sans text-[33px] font-[550]">
          Always Keeping You First
        </h2>
        <p className="text-gray-500">
          Our users - traders & investors - will always be our priority, even
          when we're building new features or delivering customer support
          everyday.
        </p>
        <div className=" col-span-6 flex  mt-8">
          <div className="col-span-3 ">
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-1.svg"
                alt="icon"
              />

              <span className="">
                {/* <h2 className="text-sm text-gray-500">
                  Check Greeks & Trade from
                </h2> */}
                <h3 className="font-medium text-xl">No Calls</h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-3.svg"
                alt="icon"
              />

              <span className="">
                {/* <h2 className="text-sm text-gray-500">Place</h2> */}
                <h3 className="font-medium text-xl">No SMS</h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-5.svg"
                alt="icon"
              />

              <span className="">
                {/* <h2 className="text-sm text-gray-500">Manage Risk with</h2> */}
                <h3 className="font-medium text-xl">No Spam</h3>
              </span>
            </div>
          </div>
          <div className="col-span-3 w-1/2 ">
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-2.svg"
                alt="icon"
              />

              <span className="">
                {/* <h2 className="text-sm text-gray-500">Pledge Shares for</h2> */}
                <h3 className="font-medium text-xl">
                  No Trading & Investment Advice
                </h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <img
                className="h-4 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-4.svg"
                alt="icon"
              />

              <span className="">
                {/* <h2 className="text-sm text-gray-500">Trade Directlly from</h2> */}
                <h3 className="font-medium text-xl ">
                  No Relationship Managers
                </h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2  hover-scale"
                src="https://stock-logos.dhan.co/static-openweb/homefold-6.svg"
                alt="icon"
              />

              <span className="">
                {/* <h2 className="text-sm text-gray-500">
                  Become a Better Trader with
                </h2> */}
                <h3 className="font-medium text-xl ">No Data Sharing</h3>
              </span>
            </div>
          </div>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.1, originX: 0, color: "#add8e6" }}
            className="px-8 py-3 mt-4   ease-in-out delay-100 transition-colors duration-300 hover:bg-blue-300 bg-blue-600 rounded-lg text-gray-200 font-semibold "
          >
            Read our user policy
            <span className="gap-4">
              <ArrowForwardIcon />
            </span>
          </motion.button>
        </div>
      </div>
      <div className="col-span-6 w-full">
        {/* <svg
          xmlns="https://png.pngtree.com/png-vector/20190124/ourlarge/pngtree-bitcoin-stereo-mobile-phone-technology-financial-png-image_551032.jpg"
          width="300"
          height="300"
          viewBox="0 0 300 300"
        >
      
          <path
            d="M100 10h200v280h-200z"
            fill="#f4c542"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="20"
          />
        </svg> */}
        <img
          className="bg-cover bg-no-repeat h-auto bg-center w-full p-20 flex justify-center items-center"
          src="https://png.pngtree.com/png-vector/20190124/ourlarge/pngtree-bitcoin-stereo-mobile-phone-technology-financial-png-image_551032.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Featurethree;
