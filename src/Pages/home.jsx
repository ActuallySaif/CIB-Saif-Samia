import React from 'react';
import Finance from '../Components/Layout/finance'; 
import Learnmore from '../Components/Layout/learnmore';
import Navbar from '../Components/Layout/Navbar';
import Hero from '../Components/Layout/Hero';
import BottomNav from '../Components/Layout/BottomNav';
import './home.css'
import Awards from './../Components/Layout/awards';
import Services from '../Components/Layout/services';
import Apply from '../Components/Layout/Apply';
import LearnCenter from '../Components/Layout/LearnCenter';
import News from '../Components/Layout/News';
import Footer from '../Components/Layout/Footer';

const Home = () => {
    return ( 
        <div className='MainContent'>
            <Navbar />
            <Hero />
            <BottomNav />
            <Apply />
            <LearnCenter />
            <News />
            <Learnmore />
            <Finance/>
            <Awards />
            <Services/>
            <Footer/>
        </div>
     );
}
 
export default Home;