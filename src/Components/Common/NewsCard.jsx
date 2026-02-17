import React from 'react';
import './NewsCard.css'
import NewsImg from '../../Assets/NewsImg.png'

const NewsCard = (props) => {
    return ( 
        <div className='NewsCard'>
            <img className='NewsImg' src={NewsImg} alt="" />
            <div className='NewsContent'>
                <p className='NewsTitle1'>{props.NTitle1}</p>
                <p className='NewsTitle2'>{props.NTitle2}</p>
                <p className='NewsSub'>{props.NSubText}</p>
            </div>
        </div>
     );
}
 
export default NewsCard;