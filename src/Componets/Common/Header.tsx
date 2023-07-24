import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Img/logo.png';
import ajax from '../../Img/ajax-loader.jpg';


export const Header: React.FC = () => {
  const [showSpecials, setShowSpecials] = useState(false);
  const [zip, setZip] = useState(false);
  const loudingRef = useRef<{value: boolean}>({value: false});


  const onSearch = () => {

    loudingRef.current.value = true;
    setZip(false);

    setTimeout(() => {

      if (loudingRef.current) {
        loudingRef.current.value = false;
        setZip(true);
      }
    }, 1500);
  }

  const onEnter = () => {
    setShowSpecials(true);
  };
  const onLeave = () => {
    setShowSpecials(false);
  };


  return (
    <header onMouseLeave={onLeave} onClick={() => setZip(false)}>
        <div className='logo'>
          <h2>SPACE</h2>
          <img src={logo} alt='logo' />
        </div>

        <nav>
          <Link to='/'>HOME</Link>
          <Link to='/menu'>MENU</Link>
          <Link onMouseEnter={onEnter} to='/'>SPECIALS</Link>
          <Link to='/rewards'>REWARDS</Link>
          <Link style={{color: 'red'}} to='/order'>ORDER NOW</Link>
        </nav>

        <div className='zip-head'>
          <div>
            <p>FIND YOUR SPACE BONES</p>
            <input type='text' placeholder='Enter ZIP' />
          </div>

          <button onClick={onSearch}>SEARCH</button>
          <div style={{width: 0}}>
            <img className={loudingRef.current.value ? '' : 'none'} src={ajax} alt='louding' width={30} />
          </div>

          <div className={zip ? 'no-location2' : 'none' }>
            <p>SORRY, NO LOCATIONS WERE FOUND.</p>
          </div>
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