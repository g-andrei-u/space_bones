import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Common/Header';
import { Home } from '../Home/Home';
import { Footer } from '../Common/Footer';
import { Menu } from '../Menu/Menu';
import { Order } from '../Order/Order';

export const Pages: React.FC = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/order' element={<Order />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}