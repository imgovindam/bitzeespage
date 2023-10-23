import { motion } from "framer-motion";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="border-t-blue-400  bg-blue-gray-500 h-16 px-20 grid grid-cols-12 justify-evenly items-center">
        <div className="col-span-3">
          <img src="https://bitzees.com/images/logo.png" alt="photo1" />
        </div>
        <div className="col-span-3">
          <img
            src="https://wazirx.com/static/media/app-store-icon.37a5b076.svg"
            alt="photo1"
          />
        </div>
        <div className="col-span-3">
          <img
            src="https://wazirx.com/static/media/google-play-icon.65950822.svg"
            alt="photo1"
          />
        </div>
        <div className="col-span-3 flex items-center font-body text-white  ">
          All rights reserved,Built with
          <AiFillHeart color="red" /> in India.
        </div>
      </div>
      <div className="px-16 h-[50vh] cursor-pointer    p-12 bg-[#6610f2] grid grid-cols-12">
        <div className="col-span-3 text-start text-white">
          {/* <motion.h3
            whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
            className="font-bold"
          > */}
          <h2 className="leading-5 font-body"> ABOUT</h2>
          {/* </motion.h3> */}
          <div className="mt-4">
            <motion.div
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#add8e6",
                margin: 1,
                padding: 1,
              }}
              // className="hover:text-white m-1 text-sm font-sans"
            >
              <h2 className="pt-1 font-sans"> Blog </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white  m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Privacy Policy </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Term & Condition </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Career </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Career </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Career </h2>
            </motion.div>
          </div>
        </div>
        <div className="col-span-3  text-start text-white ">
          {/* <motion.h3
            whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
            className="font-bold"
          > */}
          <h2 className="leading-5 font-body"> SERVICES</h2>
          {/* </motion.h3> */}
          <div className="mt-4">
            <motion.div
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#add8e6",
                margin: 1,
                padding: 1,
              }}
              // className="hover:text-white m-1 text-sm font-sans"
            >
              <h2 className="pt-1 font-sans"> Blog </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white  m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Privacy Policy </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Term of use </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Carrer </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Career </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0, color: "#add8e6" }}
              // className="hover:text-white m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Career </h2>
            </motion.div>
          </div>
        </div>
        <div className="col-span-2  text-start text-white">
          {/* <motion.div
            whileHover={{ scale: 1.3, originX: 0.2, color: "#add8e6" }}
            className="font-bold"
          > */}
          <h2 className="leading-5 font-body"> SUPPORT</h2>

          <div className="mt-4">
            <motion.div
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#add8e6",
                margin: 1,
                padding: 1,
              }}
            >
              <h2 className="pt-1 font-sans text-lg text-white ">
                Info@bitzeesX.com{" "}
              </h2>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3, originX: 0.2, color: "#add8e6" }}
              // className="hover:text-white  m-1 text-sm"
            >
              <h2 className="pt-1 font-sans"> Privacy Policy </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
