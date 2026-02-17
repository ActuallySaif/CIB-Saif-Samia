import React from 'react';
import './BottomNav.css'
import BNavBtn from './BNavBtn';

const BottomNav = () => {
    return ( 
        <div className='BottomNav'>
            <BNavBtn BNavText="Apply Online"/>
            <BNavBtn BNavText="News"/>
            <BNavBtn BNavText="Blog Articles"/>
            <BNavBtn BNavText="CIB International"/>
            <BNavBtn BNavText="Sustainable Finance"/>
            <BNavBtn BNavText="Awards"/>
        </div>
     );
}
 
export default BottomNav;