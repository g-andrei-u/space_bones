import React from 'react';
import '../Menu.css';
import sun from '../../../Img/sun.png';


interface Props {
    name: string
}

export const Items: React.FC<Props> = (props: Props) => {
  return (
    <>
    <section className='reward-first'>
        <h4>{props.name.toUpperCase()} MENU</h4>
    </section>
    <div className='first-menu' id='here'>
        <h1>{props.name.toUpperCase()}</h1>
        <p>Available Monday - Friday between 11am-3pm. Dine-in only at participating locations.</p>
        <button className='button'>FIND LOCATION</button>
        <img src={sun} />
    </div>
    <section className='items'>
        <div className='item'>
            <h3>CHIPOTLE CHICKEN BOWL</h3>
            <p>750 cal.</p>
            <p>Our house smoked and pulled chicken on mixed greens with roasted corn, tomatoes, cheddar-jack cheese, pickled jalapenos, and crushed tortilla chips served with chipotle-ranch dressing</p>
        </div>
        <div className='item'>
            <h3>BONES SALAD</h3>
            <p>Mixed green, red onions, tomatoes, cheddar-jack cheese and cornbread croutons.</p>
        </div>
        <div className='item'>
            <h3>FIRE GRILLED SALMON</h3>
            <p>590 cal.</p>
            <p>7 oz Fire Grilled Salmon filet seasoned to perfection with a citrus butter sauce. Served with your choice of 2 regular sides and garlic bread.</p>
        </div>
        <div className='item'>
            <h3>1/2 BBQ CHICKEN</h3>
            <p>650 cal.</p>
            <p>Marinated and basted in a sweet BBQ glaze then slow-roasted. Served with 2 sides and garlic bread.</p>
        </div>
    </section>
    </>
  );
}