import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { data } from "./Dummydata";

const Chatbox = ({ first, setNewchat, setChat, chat, time }) => {
  console.log(chat);
  const handleButtonYes = () => {
    setChat([
      ...chat,
      {
        id: 2,
        msg: `thankyou  ${chat[2].msg}: ,i got your  number:${chat[4].msg} & email id: ${chat[6].msg} ,we will connect with you shortly`,
        time: time,
      },
    ]);
  };
  return (
    <div className="border-y-black h-full">
      <div className="border-black items-center  w-full h-full p-4">
        {chat.map((item, index) => {
          return (
            <>
              {item.id == "2" ? (
                <div className="flex  m-2 rounded-lg max-w-fit items-center bg-yellow-200 p-1">
                  <span className="">
                    {item.icon}

                    {/* <AccountCircleIcon /> */}
                  </span>
                  <p className="mx-2 p-1" key={index}>
                    <span className="font-bold">{item.name}</span>
                    {/* {item.greet} */}
                    <span className="text-xs"> {item.msg} </span>
                    {item.button && (
                      <div className="p-2 m-2">
                        <button
                          className="  hover:bg-blue-300 max-w-fit  px-4 m-2 text-white py-2 rounded-sm  bg-[#17a2b8]"
                          onClick={() => handleButtonYes()}
                        >
                          Yes
                        </button>
                        <button className=" hover:bg-blue-300  px-4 text-white py-2 rounded-sm   bg-[#17a2b8]">
                          No
                        </button>
                      </div>
                    )}

                    {/* {first} */}
                    <span className="font-extralight text-xs mx-auto p-2">
                      {item.time} {index + 1}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="flex break-all flex-row-reverse">
                  <span className="flex items-center">
                    <AccountCircleIcon />
                  </span>
                  <div className="max-w-fit text-[8px] items-center text-white  bg-[#17a2b8] rounded-xl   p-1 ">
                    <p className="mx-2">
                      <span className="font-bold"></span>
                      <p>{item.msg}</p>
                      <span className="font-extralight text-xs mx-10 p-2">
                        {time}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Chatbox;
