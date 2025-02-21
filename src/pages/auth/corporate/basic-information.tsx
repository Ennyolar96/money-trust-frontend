import { InputForm, Select } from "@/utils/Forms";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { basic, basicSchema, initialValue } from "./validate";

export default function CorporateBasicInformation() {
  const navigate = useNavigate();
  const handleSubmit = (values: basic) => {
    navigate("/register/corporate/login-details", {
      state: { values },
    });
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="bg-white space-y-8 p-10">
            <div className="text-center">
              <h5 className="text-[1.3rem] font-medium">
                Register new account
              </h5>
              <p className="text-[10px] text-[#252631]">
                Sign up for an account and start trading today
              </p>
            </div>

            <div>
              <p className="text-base font-medium mb-3">
                Select the category the best describes you
              </p>
              <div className="flex flex-nowrap gap-2">
                <Link
                  to="/register/individual/basic-information"
                  className="border p-3 w-full text-center border-gray-200 block"
                >
                  Individual
                </Link>
                <Link
                  to="/register/corporate/basic-information"
                  className="bg-[#262626] block p-3 text-white w-full text-center"
                >
                  Corporate
                </Link>
              </div>
            </div>

            <div>
              <Formik
                initialValues={initialValue}
                validationSchema={basicSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                <Form className="space-y-4">
                  <div>
                    <InputForm
                      label="Company Name"
                      name="companyName"
                      type="text"
                      placeholder="Enter your email"
                      autoComplete="off"
                    />
                  </div>

                  <div className="flex flex-wrap md:flex-nowrap gap-2">
                    <div className="w-full">
                      <Select label="Type of Business" name="businessType">
                        <option value="">Select Type of Business</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                      </Select>
                    </div>
                    <div className="w-full">
                      <InputForm
                        label="Date of Incorporation"
                        name="dateOfIncorporate"
                        type="date"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="mt-14">
                    <button
                      type="submit"
                      className="text-[#D71E0E] cursor-pointer w-full p-2.5 text-sm font-semibold uppercase"
                    >
                      Next Step
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-center mb-3 text-[#252631]">
            1<span className="text-gray-400">/4</span>
          </p>
          <div className="flex flex-nowrap items-center w-full justify-center">
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 rounded-full" />
            <div className="bg-[#D71E0E] w-36 h-2 -ms-2" />
            <div className="bg-[#E8ECEF] min-w-4 w-4 h-4 -ms-2 rounded-full" />
            <div className="bg-[#E8ECEF] w-36 h-2 -ms-2" />
            <div className="bg-[#E8ECEF] min-w-4 w-4 h-4 -ms-2 rounded-full" />
            <div className="bg-[#E8ECEF] w-36 h-2 -ms-2" />
            <div className="bg-[#E8ECEF] min-w-4 w-4 h-4 -ms-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
