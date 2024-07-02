import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Products/Products';
import Admin from './Admin/Admin';
import Categories from './Categories/Categories';
import Sub from './Sub/Sub';
import Home from './Home/Home'
import AddProd from './Products/AddProd'
import AddCat from './Categories/AddCat'
import AddAdmin from './Admin/AddAdmin'
import EditAdmin from './Admin/EditAdmin'
import EditProduct from './Products/EditProduct'
import EditCat from './Categories/EditCat'
import AddSub from'./Sub/AddSub'
import EditSub from './Sub/EditSub'
import Reports from './pages/Reports';
import Users from './pages/Users';


const Dashboard = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Products' element={<Products />} />
          <Route path='Reports' element={<Reports />} />
          <Route path='Users' element={<Users />} />
          <Route path='Admin' element={<Admin />} />
          <Route path='EditAdmin' element={<EditAdmin/>}/>
          <Route path='Categories' element={<Categories />} />
          <Route path='Sub' element={<Sub />} />
          <Route path='AddProduct' element={<AddProd/>} />
          <Route path='AddCategory' element={<AddCat/>} />
          <Route path='AddAdmin' element={<AddAdmin/>} />
          <Route path='EditProduct' element={<EditProduct/>} />
          <Route path='EditCategory' element={<EditCat />} />
          <Route path='AddSub' element={<AddSub />} />
          <Route path='EditSub' element={<EditSub />} />
        </Routes>
    </>
  )
}

export default Dashboard