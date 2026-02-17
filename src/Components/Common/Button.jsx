import React from 'react';
import "./Button.css"

const Button = (props) => {
    return ( 
        <button>
            {props.MBtnText}
        </button>
     );
}
 
export default Button;