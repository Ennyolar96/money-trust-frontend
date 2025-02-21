import { useState } from "react";
import { header_1, header_2 } from "./dummy";

const Header = () => {
  const [header1, setHeader1] = useState(header_1[0]);
  const [header2, setHeader2] = useState(header_2[0]);
  return (
    <div className="bg-white">
      <div className="p-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <h4 className="p-2 font-bold whitespace-nowrap">Brand</h4>
          <div className="flex gap-3">
            {header_1.map((item, id) => (
              <button
                onClick={() => setHeader1(item)}
                key={id}
                className={`shrink-0 text-sm rounded-full px-4 py-2 font-semibold ${
                  header1 === item
                    ? "bg-[#D71E0E] text-white"
                    : "text-[#1E1E1E] bg-[#F8FAFB]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <h4 className="p-2 font-bold whitespace-nowrap">Product</h4>
          <div className="flex gap-3">
            {header_2.map((item, id) => (
              <button
                onClick={() => setHeader2(item)}
                key={id}
                className={`shrink-0 text-sm rounded-full px-4 py-2 font-semibold ${
                  header2 === item
                    ? "bg-[#D71E0E] text-white"
                    : "text-[#1E1E1E] bg-[#F8FAFB]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
