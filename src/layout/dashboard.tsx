import Header from "@/components/header";
import SideBar from "@/components/sidebar";
import Marquee from "react-fast-marquee";
import { Outlet } from "react-router-dom";
import { slider } from "./data";

export default function DashboardLayout() {
  return (
    <div>
      <div className="bg-white border-b border-gray-400 fixed left-0 z-1  w-full top-0 h-auto">
        <Header />
      </div>

      <div>
        <SideBar />
      </div>

      <div className="lg:ms-32 mt-20">
        <Outlet />
      </div>

      <div className="flex flex-nowrap overflow-hidden me-2">
        <div className="bg-black">
          <h3 className="text-xl text-white text-nowrap p-4">Live Market</h3>
        </div>
        <div className="bg-white me-2">
          <Marquee>
            <div className="flex gap-10 items-center">
              {slider.map(({ name, price }, idx) => (
                <h3 key={idx} className="font-semibold text-sm p-4">
                  {name} <br />
                  <span className="font-medium">&#8358;{price}</span>
                </h3>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
