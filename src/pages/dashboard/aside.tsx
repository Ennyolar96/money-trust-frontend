import { Fragment, useState } from "react";
import { aside_data } from "./dummy";
import { CiSearch } from "react-icons/ci";

export default function ASide() {
  const [active, setActive] = useState<string>(aside_data[1].name);
  return (
    <Fragment>
      <div className="bg-white p-5">
        <div className="relative">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="border px-5 p-2 w-full bg-[#F8FAFB] border-[#D6D6D6] ps-6 text-sm"
          />
          <CiSearch className="absolute top-2.5 left-1" />
        </div>

        {aside_data.map(({ name, icon: Icon }) => (
          <button
            onClick={() => setActive(name)}
            key={name}
            className={`${
              active == name ? "bg-[#F8FAFB]" : ""
            } p-4 w-full flex font-semibold text-sm gap-4`}
          >
            <Icon className="text-xl" />
            <span
              className={`${
                active == name ? "text-[#D71E0E]" : "text-[#1E1E1E]"
              }`}
            >
              {name}
            </span>
          </button>
        ))}
      </div>
    </Fragment>
  );
}
