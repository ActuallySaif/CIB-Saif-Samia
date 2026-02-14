import React from 'react';
import Finance from '../Components/Layout/finance'; 
import Learnmore from '../Components/Layout/learnmore';
import Navbar from '../Components/Layout/Navbar';
import Hero from '../Components/Layout/Hero';
import BottomNav from '../Components/Layout/BottomNav';
import './home.css'
import Awards from './../Components/Layout/awards';
import Services from '../Components/Layout/services';

const Home = () => {
    return ( 
        <div className='MainContent'>
            <Navbar />
            <Hero />
            <BottomNav />
            <Learnmore />
            <Finance/>
            <Awards />
            <Services/>
        </div>
     );
}
 
export default Home;