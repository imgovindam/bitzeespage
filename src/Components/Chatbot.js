import { useEffect, useState } from "react";
// import Chatbox from "./Components/Chatbox";
// import Inputbox from "./Components/Inputbox";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Chatbox from "./chatbox";
import Inputbox from "./Inputbox";
import "./Chatbot.css";

// import Todolist from "./Components/Todolist";

import { BsRobot } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";

function Chatbot() {
  const [first, setFirst] = useState(0);

  const [chat, setChat] = useState([]);
  const [newChat, setNewchat] = useState("");

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const openBot = () => {
    setIsChatbotOpen(!isChatbotOpen);
    setChat([
      // ...chat,
      {
        id: 2,
        msg: "Hellow i am BitzBee",
        // icon: <AccountCircleIcon />,
        time: getCurrentTime(),
      },
    ]);
    //(true)
  };
  const closeChatbot = () => {
    setIsChatbotOpen(false); //it can be kept blank,bcoz false is by default set here in the state
  };

  useEffect(() => {
    let xyz = chat.length;
    switch (xyz) {
      case 1:
        setChat([
          ...chat,
          {
            id: 2,
            msg: " Thanks for connecting,may i know your name please?",
            // icon: <AccountCircleIcon />,
            time: getCurrentTime(),
          },
        ]);
        // break;

        break;
      case 3:
        setChat([
          ...chat,
          {
            id: 2,
            msg: `hellow ${chat[2].msg},we are happy to help you!!please provide me your mobile number`,
            time: getCurrentTime(),
          },
        ]);

        break;

      case 5:
        console.log(chat[0]);
        // console.log(newChat);
        setChat([
          ...chat,
          {
            id: 2,
            msg: `thankyou for your mobile Number ${chat[4].msg}, give me your email please`,
            time: getCurrentTime(),
          },
        ]);

        break;
      case 7:
        setChat([
          ...chat,
          {
            id: 2,
            msg: `got your email  ${chat[6].msg}, type "YES" & will move ahead with your details `,
            time: getCurrentTime(),
          },
        ]);

        break;
      case 9:
        // console.log(chat[0]);
        // console.log(newChat);
        setChat([
          ...chat,
          {
            id: 2,
            msg: `Thankyou  ${chat[2].msg}: ,i got your mob no::${chat[4].msg} & email id: ${chat[6].msg} ,to confirm,
            please press `,
            button: true,
          },
        ]);

        break;

      default:
    }
  }, [chat]);

  const handleMessanger = () => {
    setChat([
      ...chat,
      {
        id: 1,
        msg: newChat,
        time: getCurrentTime(),
      },
    ]);
    setNewchat("");
  };

  console.log(chat);

  const increment = () => {
    setFirst(first + 1);
  };

  //for time
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    //   const seconds = now.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
    <div className="App flex flex-col chat-bot">
      <div
        className="h-14 flex items-center justify-center   px-12"
        onClick={openBot}
      >
        <BsRobot className="text-blue-900 text-center text-5xl" />
      </div>
      {isChatbotOpen ? (
        <div className="w-full rounded-lg mx-4 bg-zinc-300">
          <div className="chat-bot ">
            <div className="chat-header  flex justify-between">
              BitzBot
              <button onClick={closeChatbot}>
                <AiFillCloseSquare />
              </button>
            </div>
            <div className="chat-messages">
              <Chatbox
                first={first}
                setNewchat={setNewchat}
                setChat={setChat}
                newChat={newChat}
                chat={chat}
                time={getCurrentTime()}
              />
            </div>
            <div className="user-input">
              <Inputbox
                increment={increment}
                first={first}
                handleMessanger={handleMessanger}
                newChat={newChat}
                setNewchat={setNewchat}
                setChat={setChat}
                chat={chat}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Chatbot;
