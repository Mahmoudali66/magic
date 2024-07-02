import React from 'react'
import logo from '../Login/assets/logo.png';
import './style/logo.css'

const Logo = () => {
  return (
    <div className='flex items-center justify-center w-60 h-60 border-solid border border-black'>
        <img alt='logo' src={logo} />
    </div>
  )
}

export default Logo