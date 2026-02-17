import React from 'react';
import './Hero.css'
import Button from '../Common/Button';

const Hero = () => {
    return ( 
        <section className='Hero'>
            <div className='HeroContent'>
                <p className='HeroTitle'>CIB</p>
                <p className='HeroP'>
                    Delivering value to our clients, our community and our shareholders
                </p>
                <Button MBtnText="Discover more"/>
            </div>
        </section>
     );
}
 
export default Hero;