import React from 'react';
import { Link } from 'react-router-dom'; 
import { Form, Input, Button, Divider } from 'antd';


const rules =[
  {
    required: true,
    message : "required",
  },
];
function Login() {

  const onFinish = (values) => {
    console.log("Success", values);
  };
  return (
    <div className='h-screen bg-primary flex justify-center items-center'>
      <div className='bg-white p-3 rounded w-[450px]'>
        <h1 className="text-primary text-2xl">
          MaxBen Goods - <span className="text-gray-400">Login</span>
         </h1> 
         <Divider />
        <Form layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item label='Name' name='name'
            rules={rules}
          >

            <Input placeholder='Email' />
          </Form.Item>
        <Form.Item label="Password" name="password"
           rules={rules}
        >
          <Input type="password" placeholder="Password"/>
        </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
             Login
            </Button>

            <div className="mt-5 text-center">
            <span className="text-gray-500">
              Don't have an account? <Link to="/register"
              className="text-primary"
              >Register</Link>
            </span>
          </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
