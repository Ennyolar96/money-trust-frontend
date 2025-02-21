import { logo } from "@/assets";
import { GrSun } from "react-icons/gr";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

export const amount = [
  { name: "Cash Balance", amount: "8,374,768" },
  { name: "Securities Value", amount: "8,374,768" },
  { name: "Loan Balance", amount: "7,542,246" },
];
export default function Header() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex justify-between items-center border-r border-gray-300 px-6 py-2">
        <img src={logo} alt="logo" className="h-14" />
        <div>
          <div className="w-20 bg-gray-300 flex items-center justify-between rounded-full p-1">
            <span className="text-xs px-1 uppercase">light</span>
            <GrSun
              size={14}
              color="#000"
              className="bg-white rounded-full w-6 h-auto p-1"
            />
          </div>
        </div>
      </div>

      <div className="pr-6 hidden lg:flex">
        <div className="w-10 justify-center items-center flex">
          <FaAngleRight />
        </div>
        <div className="flex-1">
          <div className="flex px-4 justify-between border-r border-gray-300 py-2">
            {amount.map(({ name, amount }) => (
              <h3
                key={name}
                className=" text-black font-bold text-lg uppercase"
              >
                <span className="text-[10px] text-[#778CA2]">{name}</span>{" "}
                <br />
                <span>
                  <span className="text-xs">&#8358;</span>
                  {amount}
                </span>
              </h3>
            ))}
          </div>
        </div>

        <div className="w-32">
          <div className="flex items-center justify-end mt-6">
            <p className="bg-black text-white text-sm px-2 font-bold">DEMO</p>
            <FaAngleDown className="ms-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
