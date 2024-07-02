import React, { useState } from 'react';
import '../style/active.css';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../Logo'
import axios from 'axios';
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  const [prod, setProd] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [res1, setRes1] = useState('');
  const [res2, setRes2] = useState('');
  const [res3, setRes3] = useState('');
  const [res4, setRes4] = useState('');


  const URL1 = 'http://ts3ra.runasp.net/api/Account/GetCountUsers';
  const URL2 = 'http://ts3ra.runasp.net/api/Category/GetCountCategory';
  const URL3 = 'http://ts3ra.runasp.net/api/Product/GetCountProduct';
  const URL4 = 'http://ts3ra.runasp.net/api/Complaints/GetCountComplaint';
  const URL5 = 'http://ts3ra.runasp.net/api/Complaints/GetLastComplaint';

  const fetchData = async () => {
    try {
      const response1 = await axios.get(URL1);
      const response2 = await axios.get(URL2);
      const response3 = await axios.get(URL3);
      const response4 = await axios.get(URL4);
      const response5 = await axios.get(URL5);
      setRes1(response1.data);
      setRes2(response2.data);
      setRes3(response3.data);
      setRes4(response4.data);
      setProd(response5.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  })

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = '/';
  }

  const handleClick1 = () => {
    window.location.href = './Products';
  };

  const handleClick2 = () => {
    window.location.href = './Users';
  };

  const handleClick3 = () => {
    window.location.href = './Reports';
  };

  const handleClick4 = () => {
    window.location.href = './Categories';
  };
  return (
    <div className='flex'>
      <div className='flex flex-col items-center justify-center w-60 h-full border-solid border border-black full '>
        <Logo />
        <div className='flex flex-col items-center justify-center w-48 pt-4 pb-4'>
          <button className='b w-36 active touch'><Link to='/'>Dashboard</Link></button>
          <button className='b w-36 touch'><Link to='/Products'>Products</Link></button>
          <button className='b w-36 touch'><Link to='/Admin'>Admin Roles</Link></button>
          <button className='b w-36 touch'><Link to='/Categories'>Categories</Link></button>
          <button className='b w-36 touch'><Link to='/Sub'>Sub-Categories</Link></button>
          <button className='b w-36 touch' onClick={logout}>Logout</button>
          <Outlet />
        </div>
      </div>
      <div className='flex flex-col w-5/6 text-white p-4'>
        <div className='flex flex-col'>
          <h1 className='text-4xl mb-16 mt-16 text-black'>Dashboard</h1>
          <div className='flex justify-between'>
            <div className='w-1/5 card rounded-xl p-2 cursor-pointer' onClick={handleClick1}>
              <h3>Products</h3>
              <h2 className='text-center text-lg'>{res3 + ' Product'}</h2>
            </div>
            <div className='w-1/5 card rounded-xl p-2 cursor-pointer' onClick={handleClick2}>
              <h3>Users</h3>
              <h2 className='text-center text-lg'>{res1 + ' Users'}</h2>
            </div>
            <div className='w-1/5 card rounded-xl p-2 cursor-pointer' onClick={handleClick3}>
              <h3>Reports</h3>
              <h2 className='text-center text-lg'>{res4 + ' Reports'}</h2>
            </div>
            <div className='w-1/5 card rounded-xl p-2 cursor-pointer' onClick={handleClick4}>
              <h3>Categories</h3>
              <h2 className='text-center text-lg'>{res2 + ' Categories'}</h2>
            </div>
          </div>
          <div className=' text-black mt-20 text-2xl ml-5 w-5/6'>
            <h1 className='mb-8'>last Report</h1>
            <div>
              <Carousel responsive={responsive}>
                {
                  prod.map((obj) =>
                    <div className='broder-solid border-black  border flex flex-row-reverse ml-4 rounded-xl'>
                      <div className='w-1/3 flex flex-col p-4 items-center justify-center'>
                        <img src={obj.attachment} alt='attchment' />
                      </div>
                      <div className='w-1/3 flex flex-col p-4'>
                        <div className='broder-solid border-black rounded-xl border w-11/12 mt-4 p-4 overflow-hidden text-base'>{obj.userName}</div>
                        <div className='broder-solid border-black rounded-xl border w-11/12 mt-4 p-4 overflow-hidden text-base'>{obj.phoneNumber}</div>
                        <div className='broder-solid border-black rounded-xl border w-11/12 mt-4 p-4 overflow-hidden text-base'>{obj.complaintDetails}</div>
                      </div>
                      <div className='w-1/3 flex flex-col p-4'>
                        <div className='broder-solid border-black rounded-xl border w-11/12 mt-4 p-4 overflow-hidden text-base'>{obj.complaintAddress}</div>
                        <div className='broder-solid border-black rounded-xl border w-11/12 mt-4 p-4 overflow-hidden text-base'>{obj.email}</div>
                        <div className='broder-solid border-black rounded-xl border w-11/12 mt-4 p-4 overflow-hidden text-base'>{obj.national_Id}</div>
                      </div>
                    </div>
                  )
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


/*
<div className='broder-solid border-gray-500 border w-full flex flex-row-reverse'>
                  <div className='w-1/3 flex flex-col p-4 items-center justify-center'>
                    <img src='' alt='attchment'/>
                  </div>
                  <div className='w-1/3 flex flex-col p-4'>
                    <div className='broder-solid border-gray-500 border w-11/12 mt-4 p-4'></div>
                    <div className='broder-solid border-gray-500 border w-11/12 mt-4 p-4'></div>
                    <div className='broder-solid border-gray-500 border w-11/12 mt-4 p-4'></div>
                  </div>
                  <div className='w-1/3 flex flex-col p-4'>
                    <div className='broder-solid border-gray-500 border w-11/12 mt-4 p-4'></div>
                    <div className='broder-solid border-gray-500 border w-11/12 mt-4 p-4'></div>
                    <div className='broder-solid border-gray-500 border w-11/12 mt-4 p-4'></div>
                  </div>
                </div>
*/

export default Home