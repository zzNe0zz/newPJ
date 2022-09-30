import React from 'react'
import "./Login.css"
import {UserOutlined,KeyOutlined } from "@ant-design/icons"
import axios from "axios"
import {useNavigate} from "react-router-dom"
function Login() {
  let nav = useNavigate()
  async function dangNhap (){
        let email = document.querySelector("#name").value
        let password = document.querySelector("#pass").value
        
      try {
            let  res = await axios.post("https://shope-b3.thaihm.site/api/auth/sign-in",{email,password})
            console.log(res);
            nav("/App")
      } catch (error) {
        alert("Tài Khoản hoặc mật khẩu sai")
        console.log(error);
      }
  }
  return (
    <div className='body'>
            <div className='form-main'>
                    <div className=' Form-text'>
                            <h1>Đăng Nhập</h1>
                    </div>
                    <div className='form-input'>
                        <UserOutlined  className='form-input-icon'/>
                        <input type="text"  placeholder='Tên Đăng Nhập' id='name'/>
                    </div>
                    <div className='form-input'>
                        <KeyOutlined  className='form-input-icon'/>
                        <input type="password" placeholder='Nhập Mật Khẩu' id='pass' />
                    </div>
                    <div className='form-bnt'>
                        <button onClick={dangNhap}>Đăng Nhập</button>
                    </div>

            </div>


    </div>
  )
}

export default Login