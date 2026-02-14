import React from 'react';
import AIcon1 from '../../Assets/AIcon1.svg'
import './ApplyCard.css'

const ApplyCard = () => {
    return ( 
        <div className='ApplyCard'>
            <img src={AIcon1} alt="" />
            <p className='ACardText'>
                Apply for a New Account
            </p>
        </div>
     );
}
 
export default ApplyCard;