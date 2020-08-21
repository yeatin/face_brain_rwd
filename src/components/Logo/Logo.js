import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='mb1 ml5'>
            <Tilt className="Tilt ml4 br2 shadow-2" options={{ max: 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img src= {logo} alt= 'logo'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;