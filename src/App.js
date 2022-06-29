import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './main/Main';
import ProductEdit from './admin/ProductEdit';
import ProductCreate from './admin/ProductCreate';
import Products from './admin/Products'; 

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Main />} />
     <Route path='/admin/products' element={<Products />} />
     <Route path='/admin/products/create' element={<ProductCreate />} />
     <Route path='/admin/products/:id/edit' element={<ProductEdit />} />
    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App; 
