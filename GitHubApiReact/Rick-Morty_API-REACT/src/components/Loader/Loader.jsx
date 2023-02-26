/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Loader.scss';
import imageLoader from '../../images/imageLoader.png';

const Loader = () => {
  return (
    <div className='divWrap'>
        <div className='loader'>
        </div>
        <div>
          <img className='imageLoader' src={imageLoader} />
          <p className='cargando'>Cargando...</p>
          
        </div>
        
    </div>
  )
}

export default Loader;
