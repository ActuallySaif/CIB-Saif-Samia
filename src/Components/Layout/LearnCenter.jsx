import React from 'react';
import SecTitle from '../Common/SecTitle';
import SecSub from '../Common/SecSub';
import './LearnCenter.css'
import LearnCard from '../Common/LearnCard';
import Button from '../Common/Button';
import LCImg1 from '../../Assets/LearnCard.png'
import LCImg2 from '../../Assets/LearnCard2.jpg'
import LCImg3 from '../../Assets/LearnCard3.png'

const LearnCenter = () => {
    return ( 
        <section className='LearnCenter'>
            <div className='LCHeader'>
                <SecSub SSubText="Learning Center"/>
                <SecTitle TitleStyle="SecTitle2" STitleText="Learn more about banking and your finances"/>
            </div>

            <div className='LearnCards'>
                <LearnCard LCImg={LCImg1} LCTitle="Buying and making a home" LCSub="Buying a home can be an emotional process, but it's important to approach it logically"/>
                <LearnCard LCImg={LCImg2} LCTitle="Traveling on a budget" LCSub="So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks:"/>
                <LearnCard LCImg={LCImg3} LCTitle="University life tips" LCSub="The impact of a good education can be transformative."/>
            </div>

            <Button MBtnText="View More"/>
        </section>
     );
}
 
export default LearnCenter;