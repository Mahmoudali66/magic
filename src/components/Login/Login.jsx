import React from 'react'
import './style/login.css';
import axios from 'axios';
import logo from './assets/logo.png'
import './style/bar.css';
import body from './assets/body.png';
import './style/form.css';
import { useState } from 'react';

const URL = 'http://ts3ra.runasp.net/api/Account/Login'

const Login = ({ token, setToken }) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  function logIn(event) {
    event.preventDefault();
    axios
    .post(URL, user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.data.token);
        setToken(response.data.token);
        localStorage.setItem("token", JSON.stringify(response.data.token));
      })
      .catch((error) => alert('يوجد خطأ في البريد الالكتروني او كلمه المرور'))
  }

  return (
    <div className='body'>
      <div className='flex justify-center orange p-2'>
        <img src={logo} alt='logo' className='w-12' />
      </div>
      <div className='flex justify-around mt-24'>
        <div className='flex flex-col items-center'>
          <h2 className='h2'>
            Login as admin for ts3era
          </h2>
          <form className='form flex flex-col gap-10 items-center mt-8'>
            <input type='email' placeholder='Email' className='input w-11/12 placeholder-white' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input type='password' placeholder='Password' className='input w-11/12 placeholder-white' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button className='button w-11/12' onClick={logIn}>Login</button>
          </form>
        </div>
        <div >
          <img src={body} alt='shit' className='small' />
        </div>
      </div>
    </div>
  )
}

export default Login