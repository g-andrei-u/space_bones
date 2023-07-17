import React from 'react';
import './Order.css';
import hero from '../../Img/order_hero.jpg';


export const Order: React.FC = () => {
  return (
    <section className='order'>
        <div style={{display:'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
            <img src={hero} alt='' />
        </div>
        <div className='zip-div'>
            <h2>IF YOU CRAVE IT, WE CARVE IT</h2>
            <p>We're Smokey Bones, and Meat Is What We Do®. Are you ready to taste the crackling, savory, sizzling, soul-satisfying, slow-burn deliciousness of meat made right? Then start your order by entering your zip or city and state below.</p>
            <div className='zip'>
                <div>
                    <p>FIND YOUR SPACE BONES</p>
                    <input type='text' placeholder='Enter ZIP' />
                </div>
                <button>Find My Space Bones</button>
            </div>
        </div>
    </section>
  );
}