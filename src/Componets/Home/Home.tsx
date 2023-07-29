import React from 'react';
import './Home.css';
import bonefire from '../../Img/bonefire.jpg';
import burger from '../../Img/burnt-ends-burger.jpg';
import ribfeast from '../../Img/hot-honey-glaze-ribfeast.jpg';
import bone from '../../Img/bone-in-ribeye-w-kurvball-glaze.jpg';
import mars from '../../Img/mars-planet.png';
import bite from '../../Img/BiteHallTout.jpg';
import afterDark from '../../Img/BonesAfterDark.jpg';
import { Link } from 'react-router-dom';


export const Home: React.FC = () => {
  return (
    <>
    <section className='first'>
        <video 
        className='background-video' 
        autoPlay loop muted 
        src='https://smokeybones.com/wp-content/uploads/2022/03/SMO-108H_MeatifestoCarousel_23Mar-1-1.mp4' 
        typeof='video/mp4'>
        </video>

        <div className='video-text'>
            <h1>OUR GRILL HOTTER THAN THE SUN</h1>
            <h3>YOU CRAVE SOMETHING OUT OF THIS WORLD</h3>
            <Link to='/order' className='button'>ORDER NOW</Link>
        </div>
    </section>

    <section className='second'>
        <div className='text'>
            <h3>IN-STORE PICKUP  |  CURBSIDE  |  DELIVERY</h3>
            <h2>START YOUR ORDER NOW</h2>
            <Link to='/order' className='button'>ORDER NOW</Link>
        </div>
    </section>

    <section className='third'>
        <div className='images'>
            <div>
                <img src={bonefire} alt='food' />
                <p>Bonefire</p>
            </div>
            <div>
                <img src={burger} alt='food' />
                <p>Burger</p>
            </div>
            <div>
                <img src={bone} alt='food' />
                <p>18oz Bone-in Ribeye</p>
            </div>
            <div className='big'>
                <img src={ribfeast} alt='food' />
                <p>Hot Honey Glaze Ribfeast</p>
            </div>
        </div>
        <div className='text'>
            <h1>WHAT'S ON THE MENU</h1>
            <p>“Meat is what we do®” and we do it like no one else. From our sweet and smokey BBQ platters to a tabletop grill with all you can meat, our meat masters carve everything you crave.</p>
            <Link to='/order' className='button'>ORDER NOW</Link>
            <img src={mars} alt='planet' />
        </div>
    </section>

    <section className='team'>
        <h1>JOIN THE SPACE BONES TEAM!</h1>
        <p>Passion is the different between a job and a career! With over 200 leadership positions across our restaurants, we provide a pathway for thousands of team members who work in our restaurants to advance from entry-level roles into management careers. Hiring cooks, servers, bartenders, greeters, takeout.</p>
        <button className='button'>JOIN OUR TEAM</button>
    </section>

    <section className='fourth'>
        <div className='one'>
            <img src={bite} alt='food' />
            <h3>WILL CATER TO YOUR EVERY CRAVING</h3>
            <h4>COOKED. CARVED. CATERED.</h4>
            <p>Contact catering@smokeybones.com with any questions.</p>
            <button className='button'>ORDER NOW</button>
        </div>
        <div className='two'>
            <img src={afterDark} alt='logo after dark' />
            <h3>WE'LL KEEP THE GRILLS GOING</h3>
            <h4>JOIN US FOR OUR LATE-NIGHT HAPPY HOUR.</h4>
            <p>Enjoy your favorite sips and bites for $4-$6 during Bones After Dark.</p>
            <button className='button'>LEARN MORE</button>
        </div>
    </section>
    </>
  );
}