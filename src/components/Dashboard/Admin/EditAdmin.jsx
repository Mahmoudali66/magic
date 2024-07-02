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
        usreName: "",
        email: "",
        national_Id: "",
        phoneNumber: ""
    })


    const [id, setID] = useState(0);

    function editAdmin(event) {
        const URL = `http://ts3ra.runasp.net/api/Account/EditProfiel?userid=${id}`;
        event.preventDefault();
        console.log(URL);
        console.log(admin);
        axios.put(URL, admin, {
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = '/';
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
                <h1 className='text-4xl'>Admins</h1>
                <div className='w-1/2 justify-center'>
                    <form className='flex flex-col border-solid border border-black p-16 rounded-xl gap-4'>
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='id' value={id} onChange={(e) => setID( e.target.value )} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='First Name' value={admin.firstName} onChange={(e) => setAdmin({ ...admin, firstName: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='Last Name' value={admin.lastName} onChange={(e) => setAdmin({ ...admin, lastName: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='User Name' value={admin.usreName} onChange={(e) => setAdmin({ ...admin, usreName: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='email' value={admin.email} onChange={(e) => setAdmin({ ...admin, email: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='national_Id' value={admin.national_Id} onChange={(e) => setAdmin({ ...admin, national_Id: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 borderb' placeholder='phoneNumber' value={admin.phoneNumber} onChange={(e) => setAdmin({ ...admin, phoneNumber: e.target.value })} />
                        <button className='bg-blue-600 text-white rounded-md h-12' onClick={editAdmin}>Edit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Add