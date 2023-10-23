import React from "react";

// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import WatchLaterIcon from "@mui/icons-material/WatchLater";
// import HexagonIcon from "@mui/icons-material/Hexagon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
const Feature = () => {
  return (
    <div className="px-20 h-[100vh] bg-gray-100 p-4 grid grid-cols-12">
      <div className="col-span-6  w-full">
        <h2 className="font-sans text-[33px] font-[550]">
          Built For Super Traders
        </h2>
        <p className="text-gray-500">
          We're on a mission to elevate your online trading experience by
          building features that are most useful to you!
        </p>
        <div className=" col-span-6 flex  mt-8">
          <div className="col-span-3 ">
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-13.svg"
                alt="icon"
              />

              <span className="">
                <h2 className="text-sm text-gray-500">
                  Check Greeks & Trade from
                </h2>
                <h3 className="font-medium text-xl">Advanced Option Chain</h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-15.svg"
                alt="icon"
              />

              <span className="">
                <h2 className="text-sm text-gray-500">Place</h2>
                <h3 className="font-medium text-xl">Forever Orders with OCO</h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-17.svg"
                alt="icon"
              />

              <span className="">
                <h2 className="text-sm text-gray-500">Manage Risk with</h2>
                <h3 className="font-medium text-xl">Trailing Stop Loss</h3>
              </span>
            </div>
            {/* <div className="p-2 m-2 flex">
              <MenuBookIcon
                fontSize="large"
                style={{ color: "blue", margin: "4px" }}
              />
              <span className="">
                <h2 className="text-sm">Check Greeks & Trade from</h2>
                <h3 className="font-medium text-xl">Advanced Options</h3>
              </span>
            </div> */}
            {/* <div className="p-2 m-2 flex">
              <WatchLaterIcon
                fontSize="large"
                style={{ color: "blue", margin: "4px" }}
              />
              <span className="">
                <h2 className="text-sm">Place</h2>
                <h3 className="font-medium text-xl">Forever Orders</h3>
              </span>
            </div> */}
            {/* <div className="p-2 m-2 flex">
              <HexagonIcon
                fontSize="large"
                style={{ color: "blue", margin: "4px" }}
              />
              <span className="">
                <h2 className="text-sm">Manage Risk with</h2>
                <h3 className="font-medium text-xl">Trailing Stop Loss</h3>
              </span>
            </div> */}
            {/* <div className="flex">
              <span>
                <WatchLaterIcon style={{ color: "blue" }} />
              </span>

              <h2> Place </h2>

              <h3 className="flex-col">Forever Orders with OCO</h3>
            </div> */}

            {/* <span>
              <MenuBookIcon />
            </span>
            <h6> Check Greeks & Trade from </h6>
            <h3>Advanced Option Chain</h3>
            <span>
              <MenuBookIcon />
            </span>
            <h6> Check Greeks & Trade from </h6>
            <h3>Advanced Option Chain</h3> */}
          </div>
          <div className="col-span-3 w-1/2">
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-14.svg"
                alt="icon"
              />
              {/* <MenuBookIcon
                fontSize="large"
                style={{ color: "blue", margin: "4px" }}
              /> */}
              <span className="">
                <h2 className="text-sm text-gray-500">Pledge Shares for</h2>
                <h3 className="font-medium text-xl">Advanced Options</h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <img
                className="h-4 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-16.svg"
                alt="icon"
              />
              {/* <MenuBookIcon
                fontSize="large"
                style={{ color: "blue", margin: "4px" }}
              /> */}
              <span className="">
                <h2 className="text-sm text-gray-500">Trade Directlly from</h2>
                <h3 className="font-medium text-xl">TradingView Charts</h3>
              </span>
            </div>
            <div className="p-2 m-2 flex">
              <img
                className="h-8 px-2 mx-2"
                src="https://stock-logos.dhan.co/static-openweb/homefold-18.svg"
                alt="icon"
              />
              {/* <MenuBookIcon
                fontSize="large"
                style={{ color: "blue", margin: "4px" }}
              /> */}
              <span className="">
                <h2 className="text-sm text-gray-500">
                  Become a Better Trader with
                </h2>
                <h3 className="font-medium text-xl">Trader's Diary</h3>
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
            className="px-8 py-3  ease-in-out delay-100 transition-colors duration-300 hover:bg-blue-300 mt-4 bg-blue-600 rounded-lg text-gray-200 font-semibold "
          >
            Start now
            <span className="gap-4">
              <ArrowForwardIcon />
            </span>
          </motion.button>
        </div>
      </div>
      <div className="col-span-6 w-full">
        <img
          className="bg-cover bg-no-repeat h-full w-full p-10 flex justify-center items-center"
          src="https://assets-cms.kraken.com/images/51n36hrp/facade/89bfa16bbcd0bf6343856c9877360ec7f14f5a1a-1040x868.png?w=1536&fit=min&fm=webp"
          alt="img"
        />
      </div>
      {/* <div>ffsdghvfsdvfsdhf</div> */}
    </div>
  );
};

export default Feature;
