import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='mb1-l mb4 ml5-l ml6 mt0'>
            <Tilt className="Tilt ml4 br2 shadow-2 w4-l w3" options={{ max: 50 }}>
                <div className="Tilt-inner">
                    <img src= {logo} alt= 'logo'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;