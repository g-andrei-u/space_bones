import React, { useState, useRef } from 'react';
import './Order.css';
import hero from '../../Img/order_hero.jpg';
import ajax from '../../Img/ajax-loader.jpg';


export const Order: React.FC = () => {
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
                <button onClick={onSearch}>Find My Space Bones</button>
                <div style={{width: 0}}>
                <img className={loudingRef.current.value ? '' : 'none'} src={ajax} alt='louding' width={40} />
                </div>
                <div className={zip ? 'no-location' : 'none'}>
                    <p>SORRY, NO LOCATIONS WERE FOUND.</p>
                </div>
            </div>
        </div>
    </section>
  );
}