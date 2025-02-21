import Model from "@/components/model";
import ASide from "./aside";
import { firstTable, log } from "./dummy";
import Header from "./header";
import { IoMenu } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { useAuth } from "@/components/context";

export default function Dashboard() {
  const { setOpen } = useAuth();
  return (
    <div className="flex">
      <div className="hidden lg:w-[20%] lg:block">
        <ASide />
      </div>

      <div className="flex-1">
        <div className="mx-2">
          <div className="lg:hidden bg-white p-2 flex justify-between">
            <button onClick={() => setOpen(true)}>
              <IoMenu size={35} />
            </button>
            <Model
              title={<RiMenu3Line size={35} />}
              children={
                <div>
                  <Header />
                  <ASide />
                </div>
              }
            />
          </div>
          <div className="hidden lg:block">
            <Header />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="mt-2">
              <div className="relative overflow-x-auto bg-white">
                <table className="w-full text-left rtl:text-right">
                  <thead className="text-sm uppercase border-b border-gray-300 text-gray-400">
                    <tr>
                      <th className="p-2 text-nowrap">Products</th>
                      <th className="p-2 text-nowrap">Quantity</th>
                      <th className="p-2 text-nowrap">Bid Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {firstTable.map(({ product, qty, price }, idx) => (
                      <tr
                        className="text-sm font-medium bg-[#F8FAFB] text-left border-b border-gray-200"
                        key={idx}
                      >
                        <td className="px-2 py-3 text-nowrap">{product}</td>
                        <td className="px-2 py-3 text-nowrap">{qty}</td>
                        <td className="px-2 py-3 text-nowrap text-[#52965E]">
                          {price}
                        </td>
                        <td className="px-2 py-3">
                          <button className="border w-full border-[#52965E] text-[#52965E] px-3 py-1 font-medium">
                            Buy
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-2">
              <div className="relative overflow-x-auto bg-white">
                <table className="w-full text-left rtl:text-right">
                  <thead className="text-sm uppercase border-b border-gray-300 text-gray-400">
                    <tr>
                      <th className="text-nowrap p-2">Products</th>
                      <th className="text-nowrap p-2">Quantity</th>
                      <th className="text-nowrap p-2">Offer Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {firstTable.map(({ product, qty, price }, idx) => (
                      <tr
                        className="text-sm font-medium bg-[#F8FAFB] text-left border-b border-gray-200"
                        key={idx}
                      >
                        <td className="text-nowrap px-2 py-3">{product}</td>
                        <td className="text-nowrap px-2 py-3">{qty}</td>
                        <td className="text-nowrap px-2 py-3 text-[#E55541]">
                          {price}
                        </td>
                        <td className="px-2 py-3">
                          <button className="border w-full border-[#E55541] text-[#E55541] px-3 py-1 font-medium">
                            Buy
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white mt-2 mb-7">
            <h4 className="border-b border-gray-300 py-4 px-3 text-sm font-semibold text-gray-400">
              TRADE LOG
            </h4>

            <div className="relative overflow-x-auto">
              <table className="w-full text-left rtl:text-right">
                <thead className="text-sm font-medium border-b border-gray-300 text-gray-400">
                  <tr>
                    <th className="px-2 py-4">Security</th>
                    <th className="px-2 py-4">Board</th>
                    <th className="px-2 py-4">Order Type</th>
                    <th className="px-2 py-4">Matched Price</th>
                    <th className="px-2 py-4">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {log.map(
                    ({ security, orderType, board, qty, price }, idx) => (
                      <tr
                        className="text-sm font-medium bg-[#F8FAFB] text-left border-b border-gray-200"
                        key={idx}
                      >
                        <td className="px-2 py-3">{security}</td>
                        <td className="px-2 py-3">{board}</td>
                        <td className="px-2 py-3">{orderType}</td>
                        <td className="px-2 py-3">{price}</td>
                        <td className="px-2 py-3">{qty}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
