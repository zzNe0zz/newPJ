import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import 'antd/dist/antd.css';
import "./Sigup.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
function Sigup() {
  let data = {}
  let nav = useNavigate()
  
  const onFinish = async (values) => {
    if(values.password === values.Repassword){
       data = {email:values.email,password:values.password}
    }
    if(values.password !== values.Repassword){
      alert("Nhập lại mật khẩu ")
   }
    
    try {

        let res = await axios.post("https://shope-b3.thaihm.site/api/auth/sign-up",data)
        console.log(res);
        nav("/")

    } catch (error) {
      alert("email da ton tai")
    }
  };

  
  return (
    <div className='Sigup-body'>

            <div className='Sigup-main'>
                <div className='text'><h1>Đăng Kí Tài Khoản</h1></div>
                        <Form name="basic"labelCol={{ span: 5, }} wrapperCol={{span: 16, }}initialValues={{remember: true,}}onFinish={onFinish}   autoComplete="off">
                              <Form.Item label="Email"name="email" rules={[ { required: true, message: 'Please input your email!', }, ]}>
                                <Input  placeholder='Nhập email'/>
                              </Form.Item>

                              <Form.Item label="Password" name="password" rules={[{ required: true,  message: 'Please input your password!',}, ]}>
                                <Input.Password  placeholder='Nhập password'/>
                              </Form.Item>
                              <Form.Item label="rePassword" name="Repassword"rules={[ { required: true, message: 'Please input your password!', }, ]}>
                                <Input.Password  placeholder='Nhập lại password'/>
                              </Form.Item>

                        
                              <Form.Item  wrapperCol={{offset: 10, span: 8, }} >
                                <Button type="primary" htmlType="submit">
                                  Submit
                                </Button>
                              </Form.Item>
                      </Form>
            </div>
    </div>
  )
}

export default Sigup