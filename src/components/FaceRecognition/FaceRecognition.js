import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className='center mt2'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='700' height='auto' />
                {
                    boxes.map( (box, index) => {
                        return <div
                            key={index}
                            className='bounding-box pb5'
                            style={{ top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol }}></div>
                    })
                }
            </div>
        </div>
    );
}

export default FaceRecognition;