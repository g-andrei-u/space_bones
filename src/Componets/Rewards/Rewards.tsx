import React from 'react';
import './Rewards.css';
import icon3 from '../../Img/chow_down.png';
import icon2 from '../../Img/chow_down2.png';
import icon from '../../Img/chow_down3.png';
import { Link } from 'react-router-dom';


export const Rewards: React.FC = () => {
    return (
    <>
    <section className='reward-first'>
        <h4>BONES CLUB</h4>
    </section>
    <section className='reward-second'>
        <h1>EARN POINTS <strong>FOR EVERY PLATE</strong></h1>
        <p>A little meat love from The Meat Masters.</p>
        <button className='button'>JOIN NOW</button>
        <button className='button'>SIGN IN</button>
    </section>
    <section className='reward-third'>
        <h2>WHAT’S THE BONES CLUB?</h2>
        <p>The Bones Club is a rewards program for true carnivores and meat lovers. Get points on every purchase. Not to mention instant savings, birthday treats, exclusive offers, and more. Sign up and start earning points today!</p>
    </section>
    <section className='reward-fourth'>
        <div>
            <img src={icon} alt ='icon'/>
            <h2>SAVE TODAY</h2>
            <p>Earn $10 off your next $25 purchase, just by signing up.</p>
        </div>
        <div>
            <img src={icon2} alt ='icon'/>
            <h2>RACK 'EM UP</h2>
            <p>Receive points for any qualifying purchase. $1 spent = 1 point. 100 points = $10 off.</p>
        </div>
        <div>
            <img src={icon3} alt ='icon'/>
            <h2>CHOW DOWN</h2>
            <p>Redeem your points on your favorite dishes and reap the meaty rewards.</p>
        </div>
    </section>
    <section className='second'>
        <div className='text'>
            <h2><strong style={{fontWeight: '400'}}>GIFT CARDS.</strong> SHOW YOU CARE</h2>
            <p>The perfect gift: a Smokey Bones gift card.</p>
            <Link to='/rewards' className='button'>E-GIFT TODAY</Link>
        </div>
    </section>
    </>
  );
}