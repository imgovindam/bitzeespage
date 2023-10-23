import React, { useState } from "react";
// import "./App.css";
// import "./App.css";
import { motion } from "framer-motion";
import { SiIota } from "react-icons/si";
import { CiBitcoin } from "react-icons/ci";
import { SiBlockchaindotcom } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { GiComputing } from "react-icons/gi";
import { VscSourceControl } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { FcCustomerSupport } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { GiWallet } from "react-icons/gi";
import {
  // Navbar,

  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const navListMenuItems = [
  {
    title: <SiIota size={"30px"} color="blue" />,
    description: "IOT",
  },
  {
    title: <SiBlockchaindotcom color="yellow" size={"30px"} />,
    description: "Blockchain",
  },
  {
    title: <TbSettingsAutomation color="red" size={"30px"} />,
    description: "Automation",
  },
  {
    title: <GiComputing color="green" size={"30px"} />,
    description: "IT & ITES",
  },
  {
    title: <VscSourceControl color="blue" size={"30px"} />,
    description: "Out sourcing",
  },
];
const supportListMenuItems = [
  {
    title: <AiOutlineMail size={"40px"} color="blue" />,
    description: "info@bitzeesX.com",
  },
  {
    title: <FcBullish color="blue" size={"40px"} />,
    description: "Trade",
  },
  {
    title: <GiWallet color="red" size={"40px"} />,
    description: "Withdrawn/ADD Money",
  },
  {
    title: <FcCustomerSupport size={"40px"} />,
    description: "Customer Support",
  },
  {
    title: <FcApproval color="blue" size={"30px"} />,
    description: "KYC",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isProductsHovered, setIsProductsHovered] = useState(false);
  // const [isInvestmentsHovered, setIsInvestmentsHovered] = useState(false);
  // const [isMarketsHovered, setIsMarketsHovered] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isInvestmentsMenuOpen, setIsInvestmentsMenuOpen] = useState(false);
  const [isMarketsMenuOpen, setIsMarketsMenuOpen] = useState(false);

  const handleProductsHover = () => {
    setIsProductsMenuOpen(true);
    setIsInvestmentsMenuOpen(false);
    setIsMarketsMenuOpen(false);
  };

  const handleInvestmentsHover = () => {
    setIsProductsMenuOpen(false);
    setIsInvestmentsMenuOpen(true);
    setIsMarketsMenuOpen(false);
  };

  const handleMarketsHover = () => {
    setIsProductsMenuOpen(false);
    setIsInvestmentsMenuOpen(false);
    setIsMarketsMenuOpen(true);
  };

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem className="grid grid-rows-6">
        <Typography color="blue-gray" className="mb-1 row-span-3">
          {title}
        </Typography>
        <Typography color="gray" className="font-normal row-span-3">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
  const renderSupportItems = supportListMenuItems.map(
    ({ title, description }) => (
      <a href="#" key={title}>
        <MenuItem>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {description}
          </Typography>
        </MenuItem>
      </a>
    )
  );
  return (
    <div className="bg-[#007bff] z-10 text-white cursor-pointer px-16 h-16 fixed top-0 w-full flex items-center justify-around">
      <div className="w-1/4">
        <img src="https://bitzees.com/images/logo.png" alt="Logo" />
      </div>
      <div className="flex justify-between items-center w-1/2 font-sans">
        <div className="nav-item ">
          {/* Products */}
          <div>
            <Menu
              // allowHover
              // open={isMenuOpen}
              // handler={setIsMenuOpen}
              // onMouseEnter={handleProductsHover}
              // onMouseLeave={() => setIsProductsHovered(false)}
              allowHover
              open={isProductsMenuOpen}
              handler={setIsProductsMenuOpen}
              onMouseEnter={handleProductsHover}
              onMouseLeave={() => setIsProductsMenuOpen(false)}
            >
              <MenuHandler>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal"
                >
                  <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
                    <span className="text-white font-sans text-[17px]">
                      {" "}
                      Products{" "}
                    </span>{" "}
                    <ChevronDownIcon
                      strokeWidth={2}
                      className={`h-3 w-3 transition-transform ${
                        isProductsMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </MenuItem>
                </Typography>
              </MenuHandler>
              <MenuList className="hidden w-[36rem] grid-cols-7 text-center p-1 overflow-visible lg:grid">
                {/* <Card
                  color="blue"
                  shadow={false}
                  variant="gradient"
                  className="col-span-3 grid bg-no-repeat bg-center bg-cover h-1/2 w-full place-items-center rounded-md"
                > */}
                {/* <CiBitcoin strokeWidth={1} className="h-28 w-28" /> */}
                {/* </Card> */}
                <ul className="col-span-4 flex flex-col w-full  gap-1">
                  {renderItems}
                </ul>
              </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
              <span className="text-white font-sans "> Products </span>
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
              {renderItems}
            </ul>
          </div>
        </div>
        <div className="nav-item">
          <div>
            <Menu
              allowHover
              open={isInvestmentsMenuOpen}
              handler={setIsInvestmentsMenuOpen}
              onMouseEnter={handleInvestmentsHover}
              onMouseLeave={() => setIsInvestmentsMenuOpen(false)}
            >
              <MenuHandler>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal"
                >
                  <MenuItem className="hidden items-center gap-2 text-blue-gray-900  lg:flex lg:rounded-full">
                    <span className="text-white font-sans text-[17px]">
                      Support
                    </span>{" "}
                    <ChevronDownIcon
                      strokeWidth={2}
                      className={`h-3 w-3 transition-transform ${
                        isInvestmentsMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </MenuItem>
                </Typography>
              </MenuHandler>
              <MenuList className="hidden w-[20rem] grid-cols-4  overflow-visible lg:grid">
                {/* <Card
                  color="blue"
                  shadow={false}
                  variant="gradient"
                  className="col-span-3 grid h-full w-full place-items-center rounded-md"
                >
                  <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
                </Card> */}
                <ul className="col-span-4 flex w-full flex-col gap-1">
                  {renderSupportItems}
                </ul>
              </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
              <span className="text-white font-sans"> Pages </span>
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
              {renderSupportItems}
            </ul>
          </div>
        </div>
        {/* <div className="nav-item">
        
          <div>
            <Menu
              allowHover
              open={isMarketsMenuOpen}
              handler={setIsMarketsMenuOpen}
              onMouseEnter={handleMarketsHover}
              onMouseLeave={() => setIsMarketsMenuOpen(false)}
            >
              <MenuHandler>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal"
                >
                  <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
                    <span className="text-white  font-sans text-[16px]">
                      {" "}
                      Markets{" "}
                    </span>{" "}
                    <ChevronDownIcon
                      strokeWidth={2}
                      className={`h-3 w-3 transition-transform ${
                        isMarketsMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </MenuItem>
                </Typography>
              </MenuHandler>
              <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                <Card
                  color="blue"
                  shadow={false}
                  variant="gradient"
                  className="col-span-3 grid h-full w-full place-items-center rounded-md"
                >
                  <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
                </Card>
                <ul className="col-span-4 flex w-full flex-col gap-1">
                  {renderItems}
                </ul>
              </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
              <span className="text-white font-sans"> Markets </span>
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
              {renderItems}
            </ul>
          </div>
        </div> */}
        <div className="text-white  font-sans items-center hover:bg-[#b6d0e9] px-2 py-2 rounded-lg">
          Pricing
        </div>
      </div>
      <div className="flex justify-evenly w-1/2 font-sans font-medium">
        <div className="">
          <button className="hover:bg-[#b6d0e9] px-2 py-2 bg-blue-300 rounded-lg transition-colors duration-300  ease-in-out delay-100">
            Login
          </button>
        </div>
        <div>
          <button className="transition-colors duration-300  ease-in-out delay-100 hover:bg-[#b6d0e9] px-2 py-2 bg-blue-300 rounded-lg">
            Open Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
