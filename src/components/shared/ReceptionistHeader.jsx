import React from "react";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
// import { Popover, Transition } from "@headlessui/react";
// import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import Web3 from "web3/dist/web3.min";

const ReceptionistHeader = () => {
  const [isConnected, setIsConnected] = useState(false);
  // const [error, setError] = useState("");
  const connectWalletHandler = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      //metamask installed
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        setIsConnected(true); // Set connected state to true
      } catch (err) {
        console.log(err);
      }
    } else {
      //metamask not installed
      console.log("Please install metamask");
    }
  };
  return (
    <div className="flex flex-row justify-end sticky top-0 bg-white z-[40] h-16 px-4 w-full items-center border-b border-gray-200">
      {/* <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="absolute text-gray-400 left-3 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Enter patient ID..."
          className=" bg-transparent px-2 focus:outline-none h-10 md:w-[22rem] border border-gray-300 rounded-md pl-11 pr-4 text-gray-700 placeholder:text-gray-400 ring-inset sm:text-sm sm:leading-6"
        />
      </div> */}

      <div className="flex items-center gap-2 mr-2">
        {/*<Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-md inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is messages panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
                </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
          onClick={connectWalletHandler}
          className={`${
            isConnected
              ? "bg-green-500 hover:bg-green-400 hover:shadow-green-500"
              : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600"
          } flex justify-center items-center shadow-sm rounded-md px-4 py-1.5 w-[15rem] hover:shadow-lg`}
              >
          <p className="text-sm text-black font-normal">
            {isConnected ? "CONNECTED" : "CONNECT WALLET"}
          </p>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md opacity-40 ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm text-red-500">
                      {error}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>*/}

        {/* Wallet Connection */}
        <button
          onClick={connectWalletHandler}
          className={`${
            isConnected
              ? "bg-green-500 hover:bg-green-400 hover:shadow-green-500"
              : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600"
          } flex justify-center items-center shadow-sm rounded-md px-4 py-1.5 w-[15rem] hover:shadow-lg`}
        >
          <p className="text-sm text-black font-normal">
            {isConnected ? "CONNECTED" : "CONNECT WALLET"}
          </p>
        </button>
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full rounded-md justify-center bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-70 ">
            <span className="sr-only">Open User Menu</span>
            <div
              className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/80x80?face')",
              }}
            >
              <span className="sr-only">Hugh Johnes</span>
            </div>
          </Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && "bg-blue-500"}`} href="./settings">
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && "bg-blue-500"}`} href="./profile">
                  Profile
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default ReceptionistHeader;
