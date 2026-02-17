import React from 'react';
import "./Button.css"

const Button = (props) => {

    const AlertMsg = () => {

        alert("Alert Message");

    }


    return ( 
        <button onClick={AlertMsg}>
            {props.MBtnText}
        </button>
     );
}
 
export default Button;