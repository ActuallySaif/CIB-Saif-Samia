import React from 'react';
import Navbar from '../Components/Layout/Navbar';
import Hero from '../Components/Layout/Hero';
import BottomNav from '../Components/Layout/BottomNav';
import './home.css'

const Home = () => {
    return ( 
        <div className='MainContent'>
            <Navbar />
            <Hero />
            <BottomNav />
        </div>
     );
}
 
export default Home;