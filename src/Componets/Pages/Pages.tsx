import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Common/Header';

export const Pages: React.FC = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' />
        </Routes>
    </BrowserRouter>
  );
}