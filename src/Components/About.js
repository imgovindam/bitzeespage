import React, { useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  useEffect(() => {
    const animateImage = async () => {
      while (true) {
        await controls.start({ x: -40, transition: { duration: 2 } });
        await controls.start({ x: 20, transition: { duration: 2 } });
      }
    };
    animateImage();
  }, [controls]);

  const buttonVariants = {
    hover: {
      scale: 1.1, // Increase the scale on hover
      backgroundColor: "#333", // Change the background color on hover
      color: "#fff", // Change the text color on hover
    },
  };
  const transition = {
    default: {
      type: "spring",
      damping: 100,
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
  return (
    <div className="px-16 h-[100vh] bg-blue-gray-900">
      <div className="">
        <div className="flex justify-center items-center ">
          <motion.div
            initial={{ x: 30 }}
            animate={controls}
            transition={{ repeat: Infinity, repeatType: "reverse" }}
            // initial={{ x: -100 }}
            // animate={{ x: 0 }}
            // transition={transition}
          >
            <img
              className="bg-no-repeat bg-cover bg-center h-14"
              src="https://stock-logos.dhan.co/static-openweb/light2.png"
              alt="lightining"
            />
          </motion.div>

          <div className="text-[34px]  font-sans font-medium p-8 ">
            <span className="leading-3 text-white ">Building Awesome </span>

            <span className="text-blue-400">Trading & Investing Products</span>
          </div>
        </div>
      </div>
      <div className="text-white grid grid-cols-12">
        <div className="col-span-6 h-full items-start flex-col flex justify-center ">
          <h2 className="font-sans   font-semibold text-[40px]">BitzeeS</h2>
          <p className="mt-4 font-sans font-medium text-gray-400">
            This is a wonderful financial place to increase your income. We are
            professionally engaged in finance and business, <br></br>and the
            investment industry has a great experience.
          </p>

          <motion.button
            whileHover={{ scale: 1.2, originX: 0, color: "#add8e6" }}
            className="px-8 py-3 mt-4 ease-in-out delay-100 font-body hover:bg-blue-300 bg-[#6610f2] rounded-lg text-gray-300 font-medium transition-colors duration-300"
          >
            Start now
            <span className="gap-4">
              <ArrowForwardIcon />
            </span>
          </motion.button>
        </div>
        <div className="col-span-6 D ">
          <img
            className="D "
            // src="https://bitzees.com/images/about-01.png"
            // alt="bitzees"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
