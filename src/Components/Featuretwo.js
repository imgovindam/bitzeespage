import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import {
  FcMindMap,
  FcGlobe,
  FcNeutralTrading,
  FcNegativeDynamic,
  FcKindle,
  FcRules,
} from "react-icons/fc";

const Featuretwo = () => {
  return (
    <div className="px-20 h-[100vh] bg-white p-4 grid grid-cols-12">
      {/* <img
        className="bg-no-repeat bg-cover bg-center flex w-full h-10"
        src="https://stock-logos.dhan.co/static-openweb/dhanBorder.png"
      /> */}
      <div className="col-span-6 w-full mobile">
        {/* <img
          className="bg-cover bg-no-repeat h-full w-full p-20 flex justify-center items-center"
          // src="https://assets.coinbase.com/assets/1d3641c165a4bde5.jpg"
          alt="img"
        /> */}
      </div>
      <div className="col-span-6  w-full">
        <h2 className="font-body text-[33px] font-medium">
          Built For Long-Term Investors
        </h2>
        <p className="text-gray-500 font-body">
          We're bringing you the best online investing experience, one feature
          at a time! Access everything you need to invest in Stocks, ETFs,
          Mutual Funds & Bonds from our platform!
        </p>
        <div className=" col-span-6 flex  mt-8">
          <div className="col-span-3 ">
            <div className="p-2 m-2 flex">
              <FcMindMap
                style={{
                  fontSize: "40px",
                  padding: "1px",
                }}
              />
              {/* <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-7.svg"
                alt="icon"
              /> */}
              <span className="">
                <h2 className="text-sm text-gray-500 px-2">
                  Check Greeks & Trade from
                </h2>
                <h3 className="font-medium text-[18px] pl-2">
                  Advanced Option Chain
                </h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <FcGlobe
                style={{
                  fontSize: "40px",
                  padding: "1px",
                }}
              />
              {/* <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-9.svg"
                alt="icon"
              /> */}

              <span className="">
                <h2 className="text-sm text-gray-500 px-2">Place</h2>
                <h3 className="font-medium text-[18px] pl-2">
                  Forever Orders with OCO
                </h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <FcNegativeDynamic
                style={{
                  fontSize: "40px",
                  padding: "1px",
                }}
              />
              {/* <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-12.svg"
                alt="icon"
              /> */}

              <span className="">
                <h2 className="text-sm text-gray-500 px-2">Manage Risk with</h2>
                <h3 className="font-medium text-[18px] pl-2">
                  Trailing Stop Loss
                </h3>
              </span>
            </div>
          </div>
          <div className="col-span-3 w-1/2 ">
            <div className="p-2 m-2 flex">
              <FcNeutralTrading
                style={{
                  fontSize: "40px",
                  padding: "1px",
                }}
              />
              {/* <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-8.svg"
                alt="icon"
              /> */}
              {/* <MenuBookIcon
                fontSize="large"
                style={{ color: "blue", margin: "4px" }}
              /> */}
              <span className="">
                <h2 className="text-sm text-gray-500 px-2">
                  Pledge Shares for
                </h2>
                <h3 className="font-medium text-[18px] pl-2">
                  Advanced Options
                </h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <FcRules
                style={{
                  fontSize: "40px",
                  padding: "1px",
                }}
              />
              {/* <img
                className="h-4 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-10.svg"
                alt="icon"
              /> */}
              {/* <MenuBookIcon
                fontSize="large"
                style={{ color: "blue", margin: "4px" }}
              /> */}
              <span className="">
                <h2 className="text-sm text-gray-500 px-2">
                  Trade Directlly from
                </h2>
                <h3 className="font-medium text-[18px] pl-2">
                  TradingView Charts
                </h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <FcKindle
                style={{
                  fontSize: "40px",
                  padding: "1px",
                }}
              />
              {/* <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-11.svg"
                alt="icon"
              /> */}
              {/* <MenuBookIcon
                fontSize="large"
                style={{ color: "blue", margin: "4px" }}
              /> */}
              <span className="">
                <h2 className="text-sm text-gray-500 px-2">
                  Become a Better Trader with
                </h2>
                <h3 className="font-medium text-[18px] pl-2">Trader's Diary</h3>
              </span>
            </div>
            {/* <span>
              <WatchLaterIcon style={{ color: "blue" }} />
            </span>
            Place
            <h3>Forever Orders with OCO</h3>
            <span>
              <WatchLaterIcon style={{ color: "blue" }} />
            </span>
            Place
            <h3>Forever Orders with OCO</h3> */}
          </div>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.2, originX: 0, color: "#add8e6" }}
            className="px-8 py-3 mt-4  ease-in-out delay-100 transition-colors duration-300 hover:bg-blue-300 bg-[#6610f2] rounded-lg text-gray-300 font-medium "
          >
            Start now
            <span className="gap-4">
              <ArrowForwardIcon />
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Featuretwo;
