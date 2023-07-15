import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header>
        <div></div>
        <nav>
            <Link to='/'>HOME</Link>
            <Link to='/'>MENU</Link>
            <Link to='/'>REWARDS</Link>
            <Link to='/'>ORDER NOW</Link>
        </nav>
    </header>
  );
}