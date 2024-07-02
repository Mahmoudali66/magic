import React from 'react';
import '../style/active.css';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../Logo';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import FileBase64 from 'react-file-base64';

const Add = () => {
    const [product, setProduct] = useState({
        productName: "",
        price_From: 0,
        price_To: "",
        last_Update: "0001-01-01T00:00:00",
        subCategory_ID: "",
        isAvailable: true,
        image: ''
    })

    const URL = 'http://ts3ra.runasp.net/api/Product/CreateProduct';

    const addProduct = (event) => {
        event.preventDefault();
        console.log(product);
        try {
            const response = axios.post(URL, product);
        } catch (error) {
            console.error(error);
        }
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
                    <button className='b w-36 touch active'><Link to='/Products'>Products</Link></button>
                    <button className='b w-36 touch'><Link to='/Admin'>Admin Roles</Link></button>
                    <button className='b w-36 touch'><Link to='/Categories'>Categories</Link></button>
                    <button className='b w-36 touch'><Link to='/Sub'>Sub-Categories</Link></button>
                    <button className='b w-36 touch' onClick={logout}>Logout</button>
                    <Outlet />
                </div>
            </div>
            <div className='flex flex-col items-center gap-16 w-full p-16 '>
                <h1 className='text-4xl'>Products</h1>
                <div className='w-1/2 justify-center'>
                    <form className='flex flex-col border-solid border border-black p-16 rounded-xl gap-4 w-full' id='add'>
                        <div>
                            <input className=' text-gray-500  h-12 pl-2 borderb mr-2' placeholder='Product Name' value={product.productName} onChange={(e) => setProduct({ ...product, productName: e.target.value })} />
                            <input className=' text-gray-500  h-12 pl-2 borderb ml-2' placeholder='Status' value={product.isAvailable} onChange={(e) => setProduct({ ...product, isAvailable: e.target.value })} />
                        </div>
                        <input className=' text-gray-500  h-12 pl-2 text-center borderb' placeholder='Price' value={product.price_To} onChange={(e) => setProduct({ ...product, price_To: e.target.value })} />
                        <input className=' text-gray-500  h-12 pl-2 text-center borderb' placeholder='Sub Category' value={product.subCategory_ID} onChange={(e) => setProduct({ ...product, subCategory_ID: e.target.value })} />
                        <input type='file' placeholder='Category' onChange={(e) => setProduct({ ...product, image: e.target.files[0] })} />
                        <button className='bg-orange-700 text-white rounded-md h-12' onClick={addProduct}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Add