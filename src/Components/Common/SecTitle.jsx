import React from 'react';
import './SecTitle.css'

const SecTitle = (props) => {
    return ( 
        <h3 className={props.TitleStyle}>
            {props.STitleText}
        </h3>
     );
}
 
export default SecTitle;