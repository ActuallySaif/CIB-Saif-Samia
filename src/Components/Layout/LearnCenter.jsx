import React from 'react';
import SecTitle from '../Common/SecTitle';
import SecSub from '../Common/SecSub';
import './LearnCenter.css'
import LearnCard from '../Common/LearnCard';
import Button from '../Common/Button';

const LearnCenter = () => {
    return ( 
        <section className='LearnCenter'>
            <div className='LCHeader'>
                <SecSub />
                <SecTitle />
            </div>

            <div className='LearnCards'>
                <LearnCard />
                <LearnCard />
                <LearnCard />
            </div>

            <Button />
        </section>
     );
}
 
export default LearnCenter;