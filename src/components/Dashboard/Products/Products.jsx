import React from 'react';
import '../style/active.css';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../Logo';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URL = 'http://ts3ra.runasp.net/api/Product/GetAllProduct';




const Products = () => {
  
  const [prod, setProd] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setProd(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  const [id, setID] = useState(0);
  const deleteData = async (ids) => {
    try{
      const response = await axios.delete(`http://ts3ra.runasp.net/api/Product/delete?id=${ids}`);
      console.log(response);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = '/';
  }

  return (
    <div className='flex'>
      <div className='flex flex-col items-center justify-center w-60 h-full full'>
        <Logo />
        <div className='flex flex-col items-center justify-center w-48 pt-4 pb-4 tall'>
          <button className='b w-36 touch '><Link to='/'>Dashboard</Link></button>
          <button className='b w-36 touch active'><Link to='/Products'>Products</Link></button>
          <button className='b w-36 touch'><Link to='/Admin'>Admin Roles</Link></button>
          <button className='b w-36 touch'><Link to='/Categories'>Categories</Link></button>
          <button className='b w-36 touch'><Link to='/Sub'>Sub-Categories</Link></button>
          <button className='b w-36 touch' onClick={logout}>Logout</button>
          <Outlet/>
        </div>
      </div>
      <div className='flex flex-col w-full mt-4 items-center gap-6'>
      <h1 className='text-4xl'>Products</h1>
      <button className='bg-orange-600 rounded-xl p-2 text-white'><Link to='/AddProduct'>Add New Product</Link></button>
        <div className='flex flex-col gap-4 border-solid border border-black p-8 rounded-xl w-11/12'>
          <div className='flex justify-around w-full'>
            <h2 className=''>Name</h2>
            <h2 className=''>Price</h2>
            <h2 className=''>Category</h2>
            <h2 className=''>Date</h2>
            <h2 className=''>Edit</h2>
            <h2 className=''>Delete</h2>
          </div>
          {
            prod.map((obj) => 
              <div className='flex justify-around w-full'>
                <h2 className='w-16'>{obj.productName}</h2>
                <h2 className='w-16'>{obj.price_To}</h2>
                <h2 className='w-16'>{obj.subCategoryName}</h2>
                <h2 className='w-16'>{obj.lastUpdate}</h2>
                <h2><button className=' bg-blue-700 rounded-xl p-2 text-white'><Link to='/EditProduct'>Edit</Link></button></h2>
                <h2><button className=' bg-red-600 rounded-xl p-2 text-white' onClick={() => deleteData(obj.id)}>Delete</button></h2>
              </div>
            )
          }
        </div>
      </div>
      
    </div>
  )
}

export default Products