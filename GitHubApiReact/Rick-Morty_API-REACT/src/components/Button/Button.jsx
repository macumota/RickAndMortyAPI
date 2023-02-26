import React from 'react';
import './Button.scss';
// le pasamos el texto por props
const Button = ({texto}) => {
  return (
    <button className='button' >{texto}</button>
  )
}

export default Button;