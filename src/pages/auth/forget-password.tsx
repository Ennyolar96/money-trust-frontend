import { InputForm } from "@/utils/Forms";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { forgetPasswordSchema } from "./validate";
import { useState } from "react";
import { apiClient } from "@/components/context";
import axios from "axios";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const handleSubmit = async (values: { email: string }) => {
    try {
      setLoading(true);
      const request = await apiClient.post("auth/forget-password", {
        email: values.email,
      });

      const response = await request.data;
      if (!response.success) {
        setError({ error: true, message: response.error });
        return;
      }

      navigate("/otp-verification", { state: { email: values.email } });
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
      setLoading(false);
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
                initialValues={{ email: "" }}
                validationSchema={forgetPasswordSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                <Form className="space-y-4">
                  <div>
                    <InputForm
                      label="Enter the Email Address you registered with"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      autoComplete="off"
                    />
                    <small className="text-[#98A9BCCC] block mt-2 text-xs text-center">
                      Note that you be sent an OTP to the email address provided
                    </small>
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

                  <div className="flex justify-between mt-30">
                    <div>
                      <Link
                        to="/sign-in"
                        className="text-sm text-[#252631] font-semibold"
                      >
                        Back
                      </Link>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="text-sm text-[#D71E0E] bg-transparent border-none font-semibold cursor-pointer"
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "Proceed"}
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
