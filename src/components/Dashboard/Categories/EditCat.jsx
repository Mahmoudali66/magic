import React from 'react';
import '../style/active.css';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../Logo';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



const Add = () => {
    const config = {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWhtZWRLaGFsZWQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhaG1lZC5raGFsZWQwMTMyQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOTRmYWZmMmYtYjVjOS00OWI0LWI0ZWYtZmVmNmRjNGE5YWI4IiwianRpIjoiZTBkODE0OGMtOTc1Zi00ZWU1LWFlNjEtN2IzYjU4NDc0ZmQzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlVzZXIiLCJBZG1pbiJdLCJleHAiOjE3MjIyNjY3NTAsImlzcyI6IlNlY3VyZUFwaSIsImF1ZCI6IlNlY3VyZUFwaVVzZXIifQ.5sjHwMLwnBNqpo51-31lAwHlsC2wmTtDOfy_uk48HUs', 
          'Content-Type': 'multipart/form-data'
        }
      };

    const [id, setID] = useState(0);
    const [product, setProduct] = useState({
        categoryName: "",
        image: 'Null'
    })

    

    function addProduct(event) {
        const URL = `http://ts3ra.runasp.net/api/Category/UpdateCategory/${id}`;
        event.preventDefault();
        console.log(URL);
        axios.put(URL, product, config)
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
                    <button className='b w-36 touch active'><Link to='/Categories'>Categories</Link></button>
                    <button className='b w-36 touch'><Link to='/Sub'>Sub-Categories</Link></button>
                    <button className='b w-36 touch' onClick={logout}>Logout</button>
                    <Outlet />
                </div>
            </div>
            <div className='flex flex-col items-center gap-16 w-full p-16 '>
                <h1 className='text-4xl'>Category</h1>
                <div className='w-1/2 justify-center'>
                    <form className='flex flex-col border-solid border border-black p-16 rounded-xl gap-4'>
                        <input className='text-gray-500  h-12 pl-2 borderb ' placeholder='Category ID' value={id} onChange={(e) => setID(e.target.value)} />
                        <input className='text-gray-500  h-12 pl-2 borderb ' placeholder='Category Name' value={product.categoryName} onChange={(e) => setProduct({ ...product, categoryName: e.target.value })} />
                        
                        <button className='bg-orange-600 text-white rounded-md h-12' onClick={addProduct}>Edit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Add