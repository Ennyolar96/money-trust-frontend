import { Link } from "react-router-dom";
import { sidebarData } from "./data";
import { Fragment } from "react";
import { logo } from "@/assets";
import { IoClose } from "react-icons/io5";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { amount } from "../header";
import { useAuth } from "../context";

export default function SideBar() {
  const { open, setOpen } = useAuth();
  return (
    <Fragment>
      <div className="bg-white fixed left-0 -z-1 top-0 h-dvh w-28 hidden lg:block">
        <div className="mt-20">
          {sidebarData.map(({ name, icon: Icon }) => (
            <Link
              to=""
              key={name}
              className="flex flex-col w-full text-center text-[#1E1E1E] p-4 hover:bg-gray-200"
            >
              <Icon className="text-3xl mx-auto" />
              <span className="text-xs font-medium capitalize">{name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        {open && (
          <div className="fixed top-0 left-0 w-full h-dvh bg-white z-10 overflow-auto">
            <div className="container mx-auto p-4">
              <div className="flex justify-between">
                <img src={logo} alt="" className="h-14" />

                <button onClick={() => setOpen(false)}>
                  <IoClose size={30} />
                </button>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  {sidebarData.map(({ name, icon: Icon }) => (
                    <Link
                      to=""
                      key={name}
                      className="flex flex-col w-full text-left text-[#1E1E1E] p-4 hover:bg-gray-200"
                    >
                      <Icon className="text-3xl" />
                      <span className="text-xs font-medium capitalize">
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>

                <div>
                  <div>
                    <FaAngleRight />
                  </div>
                  <div className="flex flex-col justify-between border-gray-300 space-y-6">
                    {amount.map(({ name, amount }) => (
                      <h3
                        key={name}
                        className=" text-black font-bold text-lg uppercase"
                      >
                        <span className="text-[10px] text-[#778CA2]">
                          {name}
                        </span>{" "}
                        <br />
                        <span>
                          <span className="text-xs">&#8358;</span>
                          {amount}
                        </span>
                      </h3>
                    ))}
                  </div>

                  <div className="w-full">
                    <div className="flex items-center justify-start mt-6">
                      <p className="bg-black text-white text-sm px-5 py-2 font-bold">
                        DEMO
                      </p>
                      <FaAngleDown className="ms-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
