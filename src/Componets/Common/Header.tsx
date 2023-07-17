import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Img/logo.png';

export const Header: React.FC = () => {
  const [showSpecials, setShowSpecials] = useState(false);


  const onEnter = () => {
    setShowSpecials(true);
  };
  const onLeave = () => {
    setShowSpecials(false);
  };


  return (
    <header onMouseLeave={onLeave}>
        <div className='logo'>
          <h2>SPACE</h2>
          <img src={logo} alt='logo' />
        </div>

        <nav>
          <Link to='/'>HOME</Link>
          <Link to='/menu'>MENU</Link>
          <Link onMouseEnter={onEnter} to='/'>SPECIALS</Link>
          <Link style={{color: 'red'}} to='/order'>ORDER NOW</Link>
        </nav>

        <div className='zip-head'>
          <div>
            <p>FIND YOUR SPACE BONES</p>
            <input type='text' placeholder='Enter ZIP' />
          </div>
          <button>SEARCH</button>
        </div>

        <div className={showSpecials ? 'specials-menu' : 'none'}>
          <Link to='/'>LIMITED TIME OFFERS</Link>
          <Link to='/'>BONES AFTER MARS</Link>
          <Link to='/'>BBQ PARTY PACKS</Link>
          <Link to='/'>BUY ONE GET ONE</Link>
        </div>
    </header>
  );
}