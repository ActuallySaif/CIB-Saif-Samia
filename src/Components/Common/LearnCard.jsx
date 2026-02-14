import React from 'react';
import './LearnCard.css'
import LCImg from '../../Assets/LearnCard.png'
import ReadMore from './ReadMore';

const LearnCard = () => {
    return ( 
        <div className='LearnCard'>
            <img src={LCImg} alt="" />
            <div className='LCcontent'>
                <p className='LCTitle'>Buying and making a home</p>
                <p className='LCSub'>
                    Buying a home can be an emotional process, but it's important to approach it logically
                </p>
                <ReadMore />
            </div>  
        </div>
     );
}
 
export default LearnCard;