import { Checkbox, InputForm } from "@/utils/Forms";
import { Form, Formik } from "formik";
import { signInSchema } from "./validate";
import { Link, useNavigate } from "react-router-dom";
import { apiClient } from "@/components/context";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  // const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<{ error: boolean; message: string }>({
    error: false,
    message: "",
  });
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);
      const request = await apiClient.post("auth/login", values);
      console.log({ request });
      const data = await request.data;
      if (!data.success) {
        setError({ error: true, message: data.error });
        return;
      }
      navigate("/dashboard");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const responseError = error.response?.data || error.message;
        setError({ error: true, message: responseError.error });
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
          <div className={error.error ? "block" : "hidden"}>
            <div className="flex text-[#EF4444] bg-[#FEF2F2] items-center justify-between border border-[#EF4444] p-1.5 mx-8 rounded-lg my-12">
              <p className="text-xs font-medium">{error.message}</p>
              <button
                className="bg-transparent border-0 text-2xl"
                onClick={() => setError({ error: false, message: "" })}
              >
                &times;
              </button>
            </div>
          </div>
          <div className="bg-white space-y-8 p-10">
            <div className="text-center">
              <h5 className="text-[1.3rem] font-medium">Sign in to ComX</h5>
              <p className="text-[10px] text-[#252631]">
                Enter your login credentials below.
              </p>
            </div>

            <div>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={signInSchema}
                onSubmit={(values) => handleSubmit(values)}
              >
                <Form className="space-y-4">
                  <div>
                    <InputForm
                      label="Your Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <InputForm
                      label="Your Password"
                      name="password"
                      type="password"
                      placeholder="********"
                      autoComplete="off"
                    />
                  </div>

                  <div className="flex justify-between">
                    <Checkbox label="Stay Signed In" name="staySign" />
                    <div>
                      <Link
                        to="/forget-password"
                        className="text-sm text-[#D71E0E] font-semibold"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-[#52965E] w-full p-2.5 text-sm text-white font-semibold"
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Sign in"}
                    </button>
                  </div>

                  <div>
                    <Link
                      to="/"
                      className="text-center font-semibold text-sm bg-gray-200 w-full block p-2.5"
                    >
                      Back
                    </Link>
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
