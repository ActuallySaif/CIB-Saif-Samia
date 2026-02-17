import React from 'react';
import AIcon1 from '../../Assets/AIcon1.svg'
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