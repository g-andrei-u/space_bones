import React from 'react';
import './Menu.css';
import { menuItems } from '../Data/Data';
import { Link } from 'react-router-dom';
import mars from '../../Img/mars-new-planet.png';


export const Menu: React.FC = () => {
  return (
    <>
    <section className='first-menu' id='#here'>
        <h1>SPACE BONES MENU</h1>
        <button>ORDER ONLINE</button>
        <img src={mars} />
    </section>
    <section className='menu'>
        {menuItems.map(item => (
            <Link to={item.path} className='item'>
                <img src={item.image} alt='food' />
                <h3>{item.name.toUpperCase()}</h3>
            </Link>
        ))}
    </section>
    <section className='info'>
        <button>ALLERGEN INFORMATION</button>
        <button>GLUTEN FREE MENU</button>
    </section>
    </>
  );
}