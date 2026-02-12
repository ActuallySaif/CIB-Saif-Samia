import React from 'react';
import Logo from '../../Assets/logo.png'
// import Selector from '../../Assets/Selector.svg'
// import Arrows from '../../Assets/Arrows.svg'
// import Lock from '../../Assets/Lock.svg'
// import SearchIcon from '../../Assets/Search.svg'
import NavBtn from '../Common/NavBtn';
import './Navbar.css'


const Navbar = () => {
    return ( 
        <header>
            <div className='Navbar'>
                <img className='LogoNav' src={Logo} alt="" />
                <NavBtn />
                <NavBtn />
                <NavBtn />
                <NavBtn />
                <NavBtn />
                <NavBtn />
                <NavBtn />
            </div>
        </header>
     );
}
 
export default Navbar;