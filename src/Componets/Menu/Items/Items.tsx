import React from 'react';
import '../Menu.css';
import sun from '../../../Img/sun.png';


interface Props {
    name: string
}

export const Items: React.FC<Props> = (props: Props) => {
  return (
    <>
    <div className='first-menu' id='here'>
        <h1>{props.name.toUpperCase()}</h1>
        <p>Available Monday - Friday between 11am-3pm. Dine-in only at participating locations.</p>
        <button>FIND LOCATION</button>
        <img src={sun} />
    </div>
    <section className='items'>
        <div className='item'>
            <h3>CHIPOTLE CHICKEN BOWL</h3>
            <p>750 cal.</p>
            <p>Our house smoked and pulled chicken on mixed greens with roasted corn, tomatoes, cheddar-jack cheese, pickled jalapenos, and crushed tortilla chips served with chipotle-ranch dressing</p>
        </div>
        <div className='item'>
            <h3>CHIPOTLE CHICKEN BOWL</h3>
            <p>750 cal.</p>
            <p>Our house smoked and pulled chicken on mixed greens with roasted corn, tomatoes, cheddar-jack cheese, pickled jalapenos, and crushed tortilla chips served with chipotle-ranch dressing</p>
        </div>
        <div className='item'>
            <h3>CHIPOTLE CHICKEN BOWL</h3>
            <p>750 cal.</p>
            <p>Our house smoked and pulled chicken on mixed greens with roasted corn, tomatoes, cheddar-jack cheese, pickled jalapenos, and crushed tortilla chips served with chipotle-ranch dressing</p>
        </div>
        <div className='item'>
            <h3>CHIPOTLE CHICKEN BOWL</h3>
            <p>750 cal.</p>
            <p>Our house smoked and pulled chicken on mixed greens with roasted corn, tomatoes, cheddar-jack cheese, pickled jalapenos, and crushed tortilla chips served with chipotle-ranch dressing</p>
        </div>
    </section>
    </>
  );
}