import { apiClient } from "@/components/context";
import { InputForm } from "@/utils/Forms";
import axios from "axios";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { verifySchema } from "./corporate/validate";

export default function OTPVerification() {
  const location = useLocation();
  const email = location.state?.email || {};
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const handleSubmit = async (values: { code: string }) => {
    console.log(values);
    try {
      setLoading(true);
      const request = await apiClient.patch("auth/verify", {
        email: email,
        code: values.code,
      });

      const response = await request.data;
      console.log(response);
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
        email,
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
          <div className="bg-white md:w-1/3 space-y-8 p-10">
            <div className="text-center">
              <h5 className="text-[1.3rem] font-medium">Password Reset</h5>
              <p className="text-[10px] text-[#252631]">
                Reset your password to continue trading on ComX
              </p>
            </div>

            <div>
              <Formik
                initialValues={{ code: "" }}
                validationSchema={verifySchema}
                onSubmit={(values) => handleSubmit(values)}
              >
                <Form className="space-y-4">
                  <div>
                    <InputForm
                      label={`Enter the 4 digit code that was sent to ${email}`}
                      name="code"
                      type="text"
                      placeholder="Enter Code"
                      autoComplete="off"
                      maxLength={4}
                    />
                    <button
                      type="button"
                      className="w-full text-xs text-[#98A9BCCC]"
                      onClick={handleOTPResend}
                      disabled={isLoading || loading}
                    >
                      {isLoading ? "Processing..." : "Resend Code"}
                    </button>
                  </div>

                  <div className={error.error ? "visible" : "invisible"}>
                    <div className="flex text-[#EF4444] bg-[#FEF2F2] items-center justify-between border border-[#EF4444] p-1.5 mx-8 rounded-lg my-12">
                      <p className="text-xs font-medium">{error.message}</p>
                      <button
                        className="bg-transparent border-0 text-2xl"
                        type="button"
                        onClick={() => setError({ error: false, message: "" })}
                      >
                        &times;
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      <Link
                        to="/forget-password"
                        className="text-sm text-[#252631] font-semibold"
                      >
                        Back
                      </Link>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="text-sm text-[#D71E0E] bg-transparent border-none font-semibold"
                        disabled={loading || isLoading}
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
      </div>
    </div>
  );
}
