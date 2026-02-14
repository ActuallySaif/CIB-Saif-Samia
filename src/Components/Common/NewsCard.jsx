import React from 'react';
import './NewsCard.css'
import NewsImg from '../../Assets/NewsImg.png'

const NewsCard = () => {
    return ( 
        <div className='NewsCard'>
            <img className='NewsImg' src={NewsImg} alt="" />
            <div className='NewsContent'>
                <p className='NewsTitle1'>08/10/2025 - Commercial International Bank Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion </p>
                <p className='NewsTitle2'>Commercial International Bank Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion </p>
                <p className='NewsSub'>CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.</p>
            </div>
        </div>
     );
}
 
export default NewsCard;