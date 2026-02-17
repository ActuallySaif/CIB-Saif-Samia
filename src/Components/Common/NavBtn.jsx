import React from 'react';
import './NavBtn.css'

const NavBtn = (props) => {
    return ( 
        <p className='NavBtn'>
            {props.BtnText}
        </p>
        
     );
}
 
export default NavBtn;