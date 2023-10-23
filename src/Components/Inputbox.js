import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Inputbox = ({
  increment,
  first,
  handleMessanger,
  newChat,
  setNewchat,
  handleBot,
  setChat,
  chat,
}) => {
  function handleMessage() {
    setChat([
      ...chat,
      {
        id: 1,

        msg: newChat,
        icon: <AccountCircleIcon />,
      },
    ]);
    setNewchat("");
  }

  const handleStartTyping = (e) => {
    setNewchat(e.target.value);
  };

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleMessage();
    }
  }

  console.log(newChat);
  return (
    //  //absolute top-3/4 w-3/4
    <div className="grid grid-cols-12 px-2  ">
      <div
        className="w-full flex col-span-12   rounded-3xl"
        onChange={(e) => handleStartTyping(e)}
      >
        <input
          className="w-full h-8 px-2 text-xs
                      rounded-3xl outline-blue-400 bg-white"
          type="text"
          placeholder="Typing..."
          value={newChat}
          onKeyDown={handleKeyDown}
        />
        <div
          className="p-1 m-1 cursor-pointer flex"
          // onClick={() => handleMessage()}
          onClick={handleMessage}

          //
        >
          <span className="flex">
            <SendIcon
              fontSize="small"
              style={{ color: "blue" }}
              onClick={() => increment()}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inputbox;

// import React, { useState } from "react";

// function Inputbox({
//   increment,
//   first,
//   handleMessanger,
//   newChat,
//   setNewchat,
//   handleBot,
//   setChat,
//   chat,
// }) {
//   function handleMessage() {
//     setChat([
//       ...chat,
//       {
//         id: 1,

//         msg: newChat,
//         icon: <AccountCircleIcon />,
//       },
//     ]);
//     setNewchat("");
//   }

//   const handleStartTyping = (e) => {
//     setNewchat(e.target.value);
//   };

//   function handleKeyDown(event) {
//     if (event.key === "Enter") {
//       handleMessage();
//     }
//   }

//   console.log(newChat);
//   return (
//     <div className="grid grid-cols-12 px-2">
//       <div
//         className="w-full flex col-span-12 rounded-3xl"
//         onChange={(e) => handleStartTyping(e)}
//       >
//         <input
//           className="w-full h-8 px-2 text-xs rounded-3xl outline-blue-400 bg-white"
//           type="text"
//           placeholder="Typing..."
//           value={newChat}
//           onKeyDown={handleKeyDown}
//         />
//         <div className="p-1 m-1 cursor-pointer flex" onClick={handleMessage}>
//           <span className="flex">
//             <SendIcon
//               fontSize="small"
//               style={{ color: "blue" }}
//               onClick={() => increment()}
//             />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Inputbox;
