import React, { useState } from 'react';
import '../Rewards/Rewards.css';
import { speacialsItems } from './SpecialItems';


export const Specials: React.FC = () => {

    const [to, setTo] = useState(true);
    const [di, setDi] = useState(true);

    const filterSpecialItems = speacialsItems.filter(item => {
        if (to && di) {
            return item;
        }

        if (to) {
            return item.type === 'TAKE-OUT'
        }

        if (di) {
            return item.type === 'DINE-IN'
        }
    })


    return (
    <>
    <section className='reward-first'>
        <h4>SPECIALS</h4>
    </section>
    <section className='specials-first'>
        <h2>DINING IN OR <strong>BRINGING HOME THE BACON?</strong></h2>
        <input id='take' type='checkbox' onClick={() => setTo(!to)} checked={to} />
        <label style={{marginRight: 15}} htmlFor='take'>TAKE-OUT</label>
        <input id='dine' type='checkbox' onClick={() => setDi(!di)} checked={di} />
        <label htmlFor='dine'>DINE-IN</label>
    </section>
    <section className='four'>
        {filterSpecialItems.map(item => (
        <div className='one'>
            <p>{item.type}</p>
            <img src={item.image} alt='food' />
            <h3>{item.title}</h3>
            <p>{item.details}</p>
            <button className='button'>FIND LOCATION</button>
        </div>  
        ))}
    </section>
    </>
  );
}