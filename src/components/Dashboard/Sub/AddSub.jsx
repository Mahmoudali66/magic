import React from 'react';
import '../style/active.css';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../Logo';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Add = () => {
    const [product, setProduct] = useState({
        sUbCategoryName: "",
        category_ID: "",
        image: 'Null'
      })

    const URL = 'http://ts3ra.runasp.net/api/SubCategory/CreateSubcategory';

    function addProduct(event) {
        event.preventDefault();
        axios.post(URL, product)
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
                    <button className='b w-36 touch'><Link to='/Admin'>Admin Roles</Link></button>
                    <button className='b w-36 touch'><Link to='/Categories'>Categories</Link></button>
                    <button className='b w-36 touch active'><Link to='/Sub'>Sub-Categories</Link></button>
                    <button className='b w-36 touch' onClick={logout}>Logout</button>
                    <Outlet />
                </div>
            </div>
            <div className='flex flex-col items-center gap-16 w-full p-16 '>
                <h1 className='text-4xl'>Sub-Categories</h1>
                <div className='w-1/2 justify-center'>
                    <form className='flex flex-col border-solid border border-black p-16 rounded-xl gap-4'>
                        <input className='text-gray-500  h-12 pl-2 borderb' placeholder='Name' value={product.sUbCategoryName} onChange={(e) => setProduct({ ...product, sUbCategoryName: e.target.value })} />
                        <input className='text-gray-500  h-12 pl-2 borderb' placeholder='category_ID' value={product.category_ID} onChange={(e) => setProduct({ ...product, category_ID: e.target.value })} />
                        
                        <button className='bg-orange-600 text-white rounded-md h-12' onClick={addProduct}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Add