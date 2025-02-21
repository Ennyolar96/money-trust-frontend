import { InputForm } from "@/utils/Forms";
import { Form, Formik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { verifySchema } from "./validate";
import { apiClient } from "@/components/context";
import axios from "axios";

export default function OTPVerificationIndividual() {
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.values || {};
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const handleSubmit = async (values: { code: string }) => {
    try {
      setLoading(true);
      const request = await apiClient.patch("auth/verify", {
        email: data?.email,
        code: values.code,
      });

      const response = await request.data;
      if (!response.success) {
        setError({ error: true, message: response.error });
        return;
      }

      const user = response.data;

      navigate("/register/individual/registration-successful", {
        state: { firstName: user.firstName },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const responseError = error.response?.data || error.message;
        if ("errors" in responseError) {
          const messages = responseError.errors.flatMap((err: any) => {
            const { message } = err;
            return Object.values(message);
          });
          setError({ error: true, message: messages.join(" | ") });
          return;
        }
        if ("error" in responseError) {
          setError({ error: true, message: responseError.error });
          return;
        }
        setError({ error: true, message: responseError });
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOTPResend = async () => {
    try {
      setIsLoading(true);
      const request = await apiClient.patch("auth/resend-otp", {
        email: data?.email,
      });

      const response = await request.data;
      if (!response.success) {
        setError({ error: true, message: response.error });
        return;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const responseError = error.response?.data || error.message;
        if ("errors" in responseError) {
          const messages = responseError.errors.flatMap((err: any) => {
            const { message } = err;
            return Object.values(message);
          });
          setError({ error: true, message: messages.join(" | ") });
          return;
        }
        setError({ error: true, message: responseError });
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

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
              <Formik
                initialValues={{ code: "" }}
                validationSchema={verifySchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                <Form className="space-y-4">
                  <div>
                    <InputForm
                      label={`Enter the 4 digit code that was sent to ${data?.phoneNumber} and ${data.email} `}
                      name="code"
                      type="text"
                      maxLength={4}
                      placeholder="Enter Code"
                      autoComplete="off"
                    />
                    <button
                      type="button"
                      disabled={isLoading}
                      className="w-full text-xs text-[#98A9BCCC]"
                      onClick={handleOTPResend}
                    >
                      {isLoading ? "Processing..." : "Resend Code"}
                    </button>
                  </div>

                  <div className={error.error ? "visible" : "invisible"}>
                    <div className="flex text-[#EF4444] bg-[#FEF2F2] items-center justify-between border border-[#EF4444] p-1.5 mx-8 rounded-lg my-12">
                      <p className="text-xs font-medium">{error?.message}</p>
                      <button
                        onClick={() => setError({ error: false, message: "" })}
                        className="bg-transparent border-0 text-2xl"
                      >
                        &times;
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <Link
                        to="/register/individual/login-details"
                        className="text-sm text-[#252631] font-semibold"
                      >
                        Back
                      </Link>
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="text-sm text-[#D71E0E] bg-transparent border-none font-semibold"
                      >
                        {loading ? "Processing..." : "Finish"}
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-center mb-3 text-[#252631]">
            3<span className="text-gray-400">/4</span>
          </p>
          <div className="flex flex-nowrap items-center w-full justify-center">
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 rounded-full" />
            <div className="bg-[#D71E0E] w-36 h-2 -ms-2" />
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 -ms-2 rounded-full" />
            <div className="bg-[#D71E0E] w-36 h-2 -ms-2" />
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 -ms-2 rounded-full" />
            <div className="bg-[#D71E0E] w-36 h-2 -ms-2" />
            <div className="bg-[#E8ECEF] min-w-4 w-4 h-4 -ms-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
