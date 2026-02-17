import React from 'react';
import './LearnCard.css'
import ReadMore from './ReadMore';

const LearnCard = (props) => {
    return ( 
        <div className='LearnCard'>
            <img src={props.LCImg} alt="" />
            <div className='LCcontent'>
                <p className='LCTitle'>{props.LCTitle}</p>
                <p className='LCSub'>
                    {props.LCSub}
                </p>
                <ReadMore />
            </div>  
        </div>
     );
}
 
export default LearnCard;