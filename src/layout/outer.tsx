import { logo } from "@/assets";
import { Outlet } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";

export default function OuterPages() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <img src={logo} alt="" />
      </div>

      <Outlet />

      <div className="fixed bottom-10 right-3">
        <button className="w-16 h-16 rounded-full bg-[#D71E0E] flex justify-center items-center">
          <AiOutlineMessage size={35} color="#fff" />
        </button>
      </div>
    </div>
  );
}
