import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Common/Header';
import { Home } from '../Home/Home';
import { Footer } from '../Common/Footer';
import { Menu } from '../Menu/Menu';
import { Order } from '../Order/Order';
import { menuItems } from '../Data/Data';
import { Items } from '../Menu/Items/Items';
import { Rewards } from '../Rewards/Rewards';

export const Pages: React.FC = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/rewards' element={<Rewards />} />
            <Route path='/order' element={<Order />} />
            {menuItems.map((item) => (
              <Route path={item.path} element={<Items name={item.name} />} />
            ))}
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}