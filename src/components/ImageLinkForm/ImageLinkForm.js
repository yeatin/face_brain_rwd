import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div style={{ position: 'relative', zIndex: 1}}>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 br1 b--white pa2 w-70 center'
                        type='text'
                        onChange={onInputChange} />
                    <button className=
                        'f4  w-30 grow link br2 ph3 pv2 white bg-light-red ba b--white'
                        onClick={onButtonSubmit}>
                        {'Detect'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;