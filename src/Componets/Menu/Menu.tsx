import React from 'react';
import './Menu.css';
import { menuItems } from '../Data/Data';


export const Menu: React.FC = () => {
  return (
    <>
    <section className='first-menu'>
        <h1>SPACE BONES MENU</h1>
        <button>ORDER ONLINE</button>
    </section>
    <section className='menu'>
        {menuItems.map(item => (
            <div className='item'>
                <img src={item.image} alt='food' />
                <h3>{item.name.toUpperCase()}</h3>
            </div>
        ))}
    </section>
    <section className='info'>
        <button>ALLERGEN INFORMATION</button>
        <button>GLUTEN FREE MENU</button>
    </section>
    </>
  );
}