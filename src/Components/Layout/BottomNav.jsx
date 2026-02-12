import React from 'react';
import './BottomNav.css'
import BNavBtn from './BNavBtn';

const BottomNav = () => {
    return ( 
        <div className='BottomNav'>
            <BNavBtn />
            <BNavBtn />
            <BNavBtn />
            <BNavBtn />
            <BNavBtn />
        </div>
     );
}
 
export default BottomNav;