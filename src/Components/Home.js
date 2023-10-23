import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { motion, useAnimation } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const loaderVarients = {
  hover: {
    scale: 1.3,
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};
const transition = {
  default: {
    type: "spring",
    damping: 5,
  },
  opacity: { type: "tween" },
};
const transition1 = {
  default: {
    type: "spring",
    damping: 50,
  },
  opacity: { type: "tween" },
};
const buttonVariants = {
  hover: {
    scale: 1.1, // Increase the scale on hover
    backgroundColor: "#333", // Change the background color on hover
    color: "#fff", // Change the text color on hover
  },
};

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateImage = async () => {
      while (true) {
        await controls.start({ x: -40, transition: { duration: 2 } });
        await controls.start({ x: 0, transition: { duration: 2 } });
      }
    };
    animateImage();
  }, [controls]);
  return (
    <div className="A bg-gray-900 relative ">
      <div className="px-16 ">
        <div class="text-container bottom-1/2 ">
          <div className="flex items-center">
            <div
              className="absolute top-1/2 left-full p-12 transform  -translate-y-1/2 "
              style={{ width: "500px", height: "200px" }} // Adjust width and height as needed
            >
              <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                // transition={{ duration: 1 }}
                transition={transition1}
              >
                <img
                  className="bg-no-repeat bg-cover bg-center h-[500px] right-32 "
                  src="https://assets-cms.kraken.com/images/51n36hrp/facade/89bfa16bbcd0bf6343856c9877360ec7f14f5a1a-1040x868.png?w=1536&fit=min&fm=webp"
                  alt="Img"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ x: -40 }}
              animate={controls}
              transition={{ repeat: Infinity, repeatType: "reverse" }}
              // initial={{ x: -100 }}
              // animate={{ x: 0 }}
              // transition={transition}
              // // variants={{ loaderVarients }}
              // // whileHover="hover"
            >
              <img
                className="bg-no-repeat bg-cover hover:rotate-180 bg-center h-24"
                src="https://stock-logos.dhan.co/static-openweb/light2.png"
                alt="lightining"
              />
            </motion.div>
            <div className="text-[34px]  font-sans font-semibold">
              <span className="leading-3">Lightning Fast </span> <br></br>
              Investing & Trading in
              <motion.span
                initial={{ x: -40 }}
                animate={controls}
                transition={{ repeat: Infinity, repeatType: "reverse" }}
                className="text-blue-700"
              >
                {" "}
                Cryptos{" "}
              </motion.span>
            </div>
          </div>
        </div>
        <div className="text-white absolute bottom-72 flex justify-evenly w-1/3 left-24 ">
          <div className="px-4 py-4 border-l-2  ">
            <h4 className="text-gray-500">built For</h4>
            <h2 className="font-semibold text-[20px]">Super Traders</h2>
          </div>
          <div className="px-4 py-4 border-l-2 ">
            <h4 className="text-gray-500">built For</h4>
            <h2 className="font-semibold text-[20px]">Long Term Investors</h2>
          </div>
        </div>
        {/* <div className="relative  w-1/3">
          <div className="absolute  inset-y-0 left-0 flex items-center pl-3">
            <span>
              <SearchIcon fontSize="large" style={{ color: "white" }} />
            </span>
          </div>
          <input
            className="pl-10 w-full h-10 rounded-2xl bg-white bg-opacity-20 text-white"
            type="text"
            placeholder="Search assets here"
          />
        </div> */}

        {/* <motion.div
          whileHover={
            {
              // scale: 1.5,
            }
          }
        > */}
        <div className=" realtive absolute top-[60%] left-24 w-1/3">
          <span className="absolute  inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon fontSize="small" style={{ color: "white" }} />
          </span>
          <input
            className="pl-10 w-full h-10 rounded-2xl bg-white bg-opacity-20 text-white"
            type="text"
            placeholder="Search assets here"
          />
        </div>
        {/* </motion.div> */}
        <div className="text-gray-500 flex justify-evenly w-1/3 left-24 px-2 py-2 absolute top-[67%]">
          <motion.div
            variants={buttonVariants}
            whileHover="hover" // Trigger the hover animation
            className="px-2 py-1 border rounded-md"
          >
            <button className="text-xs font-sans">Stocks</button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover" // Trigger the hover animation
            className="px-2 py-1 border rounded-md"
          >
            <button className="text-xs font-sans">Options</button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover" // Trigger the hover animation
            className="px-2 py-1 border rounded-md"
          >
            <button className="text-xs font-sans">Futures</button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover" // Trigger the hover animation
            className="px-2 py-1 border rounded-md"
          >
            <button className="text-xs font-sans">Commodity</button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover" // Trigger the hover animation
            className="px-2 py-1 border rounded-md"
          >
            <button className="text-xs font-sans">Currency</button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover" // Trigger the hover animation
            className="px-2 py-1 border rounded-md"
          >
            <button className="text-xs font-sans">ETFs</button>
          </motion.div>
        </div>
        <div className="  w-1/3 left-24 px-2 py-2 absolute bottom-[12%]">
          <h2 className="text-gray-500 font-sans font-semibold text-sm">
            Open your <span className="text-blue-700"> Free </span>demate
            account in minutes!
          </h2>
        </div>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          className="text-white absolute -bottom-[-2%] left-24"
        >
          <button className="px-8  ease-in-out delay-100 py-3 transition-colors duration-300 hover:bg-blue-300 bg-blue-600 rounded-lg text-gray-300 font-semibold ">
            Start now
            <span className="gap-4">
              <ArrowForwardIcon />
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
