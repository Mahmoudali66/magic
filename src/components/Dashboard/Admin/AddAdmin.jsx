import React from 'react';
import '../style/active.css';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../Logo';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Add = () => {
    const [admin, setAdmin] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        national_Id: "",
        password: "",
        confirmPassword: "",
        phoneNumber: ""
    })

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = '/';
    }

    const URL = 'http://ts3ra.runasp.net/api/Account/AddAdmin';

    function addAdmin(event) {
        event.preventDefault();
        axios.post(URL, admin, {
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    return (
        <div className='flex'>
            <div className='flex flex-col items-center justify-center w-60 h-full full'>
                <Logo />
                <div className='flex flex-col items-center justify-center w-48 pt-4 pb-4'>
                    <button className='b w-36 touch'><Link to='/'>Dashboard</Link></button>
                    <button className='b w-36 touch'><Link to='/Products'>Products</Link></button>
                    <button className='b w-36 touch active'><Link to='/Admin'>Admin Roles</Link></button>
                    <button className='b w-36 touch'><Link to='/Categories'>Categories</Link></button>
                    <button className='b w-36 touch'><Link to='/Sub'>Sub-Categories</Link></button>
                    <button className='b w-36 touch' onClick={logout}>Logout</button>
                    <Outlet />
                </div>
            </div>
            <div className='flex flex-col items-center gap-16 w-full p-16 '>
                <h1 className='text-4xl'>Add Admins</h1>
                <div className=' justify-center'>
                    <form className='flex flex-col border-solid border border-black p-16 rounded-xl gap-4'>
                        <div>
                            <input className=' text-gray-500  h-12 pl-2 borderb mr-2' placeholder='First Name' value={admin.firstName} onChange={(e) => setAdmin({ ...admin, firstName: e.target.value })} />
                            <input className=' text-gray-500  h-12 pl-2 borderb mr-2' placeholder='Last Name' value={admin.lastName} onChange={(e) => setAdmin({ ...admin, lastName: e.target.value })} />
                            <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='User Name' value={admin.userName} onChange={(e) => setAdmin({ ...admin, userName: e.target.value })} />
                        </div>
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='email' type='email' value={admin.email} onChange={(e) => setAdmin({ ...admin, email: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='password' type='password' value={admin.password} onChange={(e) => setAdmin({ ...admin, password: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='confirmPassword' type='password' value={admin.confirmPassword} onChange={(e) => setAdmin({ ...admin, confirmPassword: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='phoneNumber' value={admin.phoneNumber} onChange={(e) => setAdmin({ ...admin, phoneNumber: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='national_Id' value={admin.national_Id} onChange={(e) => setAdmin({ ...admin, national_Id: e.target.value })} />
                        <button className='bg-orange-600 text-white rounded-md h-12' onClick={addAdmin}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Add