import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center mt2'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500' height='auto' />
                <div className='bounding-box pb5' style={{ top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol }}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;