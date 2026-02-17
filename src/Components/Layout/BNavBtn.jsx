import React from 'react';
import './BNavBtn.css'

const BNavBtn = (props) => {
    return ( 
        <p className='BNavBtn'>
            {props.BNavText}
        </p>
     );
}
 
export default BNavBtn;