import React from 'react';
import Finance from '../Components/Layout/finance'; 
import Learnmore from '../Components/Layout/learnmore';
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
            <Learnmore />
            <Finance/>
        </div>
     );
}
 
export default Home;