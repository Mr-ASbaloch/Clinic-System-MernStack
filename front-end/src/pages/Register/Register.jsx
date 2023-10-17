import { Form, Input, message } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import  { Axios } from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const registerHandler =async (values) => {
    try {
      const res= await Axios.post('/api/v1/user/register', values)
      if (res.data.success) {
        message.success("register")
      }
    } catch (error) {
      message.error(error)
    }
   
  };
  return (
    <div>
      <div>
        <div className="bg-white h-screen overflow-hidden flex items-center justify-center">
          <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl">
           
            <Form
            
              className="p-8 md:p-12 md:px-28 border border-blue-500 rounded-lg shadow-lg bg-gradient-to-r from-rose-100 to-teal-100"
              // onSubmit={loginHandler}
              onFinish={registerHandler}
            >
              <h1 className='md:text-4xl  capitalize text-purple-600 text-center mb-4'>register yourself  </h1>
              <div className=" mt-5 md:mt-2 items-center text-lg mb-6 md:mb-8">
                <Form.Item name="name">
                  <Input
                    type="text"
                    placeholder="username"
                    required
                    className="bg-white first-line:  py-2 md:py-4 focus:outline-none w-full"
                  />
                </Form.Item>
                <Form.Item name="email">
                  <Input
                  type='email'
                    placeholder="email"
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
              
              <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">
                Register
              </button>
              <div>
                <h2 className='text-xl capitalize text-center mt-2'>already user ! <Link to={'/login'} className='text-blue-500'>login</Link> </h2>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register