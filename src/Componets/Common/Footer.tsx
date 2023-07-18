import React from 'react';
import './Footer.css';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

export const Footer: React.FC = () => {
  return (
    <footer>
        <div>
          <div className='icons'>
            <AiFillFacebook />
            <AiFillTwitterSquare />
            <AiFillInstagram />
          </div>
            <p>ABOUT | PRESS | CONTACT | BONES CLUB | GIFT CARDS | JOBS | NUTRITIONAL INFO</p>
            <p>© 2023 Smokey Bones. All rights reserved. Legal</p>
        </div>
    </footer>
  );
}