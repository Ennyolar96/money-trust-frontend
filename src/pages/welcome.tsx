import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 space-y-20">
          <div className="space-y-5">
            <div>
              <h5 className="text-2xl text-center">Sign in to ComX</h5>
              <p className="text-sm text-center">Welcome to ComX</p>
            </div>
            <Link
              to="/sign-in"
              className="block font-medium text-center bg-[#52965E] w-full p-2.5 text-sm text-white"
            >
              Sign in
            </Link>
          </div>

          <div className="space-y-5">
            <div>
              <h5 className="text-2xl text-center">Create an Account</h5>
              <p className="text-sm text-center">Join the family</p>
            </div>
            <Link
              to="/register/individual/basic-information"
              className="bg-[#140706] w-full p-2.5 text-sm text-white block text-center font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
