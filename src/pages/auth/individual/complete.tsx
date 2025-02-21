import { completed } from "@/assets";
import { Link, useLocation } from "react-router-dom";

export default function IndividualComplete() {
  const location = useLocation();
  const firstName = location.state?.firstName || null;
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="bg-white space-y-8 p-10">
            <div className="text-center">
              <h5 className="text-[1.3rem] font-medium">Account details</h5>
              <p className="text-[10px] text-[#252631]">
                Sign up for an account and start trading today
              </p>
            </div>

            <div>
              <div className="text-center">
                <div className="flex w-full h-auto justify-center mb-4">
                  <img src={completed} alt="completed image" />
                </div>

                <h5 className="text-2xl">Registration Complete</h5>
                <p className="text-sm">
                  Dear {firstName}. Your registration is now complete. <br />
                  You may proceed to your dashboard and start trading
                  commodities
                </p>
              </div>

              <div className="mt-9">
                <Link
                  to="/dashboard"
                  className="text-sm text-[#D71E0E] w-full block text-center font-semibold uppercase"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-center mb-3 text-[#252631]">
            4<span className="text-gray-400">/4</span>
          </p>
          <div className="flex flex-nowrap items-center w-full justify-center">
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 rounded-full" />
            <div className="bg-[#D71E0E] w-36 h-2 -ms-2" />
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 -ms-2 rounded-full" />
            <div className="bg-[#D71E0E] w-36 h-2 -ms-2" />
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 -ms-2 rounded-full" />
            <div className="bg-[#D71E0E] w-36 h-2 -ms-2" />
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 -ms-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
