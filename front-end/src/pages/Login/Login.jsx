import { Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const loginHandler = ({ values }) => {
    console.log(values);
  };
  return (
    <div className="">
      <div>
        <div className="bg-gradient-to-r h-screen overflow-hidden flex items-center justify-center">
          <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl">
            <div className="bg-blue-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </svg>
            </div>
            <Form
              className="p-8 md:p-24 border border-blue-500 rounded-lg shadow-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-500 via-orange-200 to-yellow-600"
              // onSubmit={loginHandler}
              onFinish={loginHandler}
            >
              <div className=" mt-5 md:mt-2 items-center text-lg mb-6 md:mb-8">
                <Form.Item name="email">
                  <Input
                    type="email"
                    placeholder="username"
                    required
                    className="bg-white first-line:  py-2 md:py-4 focus:outline-none w-full"
                  />
                </Form.Item>

                <Form.Item name="password">
                  <Input.Password
                    required
                    placeholder="Password"
                    className="bg-white first-line: py-2 md:py-4 focus:outline-none w-full"
                  />
                </Form.Item>
              </div>
              <button className="bg-gradient-to-b from-blue-500 to-gray-500 font-medium rounded-md p-2 md:p-4 text-white uppercase w-full">
                Login
              </button>
              <div>
                <h2 className="text-xl capitalize text-center mt-2">
                  Don't have account ?{" "}
                  <Link to={"/register"} className="text-blue-500">
                    Register
                  </Link>{" "}
                </h2>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
