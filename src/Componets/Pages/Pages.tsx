import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Common/Header';
import { Home } from '../Home/Home';
import { Footer } from '../Common/Footer';

export const Pages: React.FC = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}