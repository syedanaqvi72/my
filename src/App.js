import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/products" element={<ProductPage/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
