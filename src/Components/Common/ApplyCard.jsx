import React from 'react';
import './ApplyCard.css'

const ApplyCard = (props) => {
    return ( 
        <div className='ApplyCard'>
            <img src={props.AIcon} alt="" />
            <p className='ACardText'>
                {props.ACardText}
            </p>
        </div>
     );
}
 
export default ApplyCard;