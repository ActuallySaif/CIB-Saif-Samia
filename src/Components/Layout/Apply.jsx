import React from 'react';
import SecTitle from '../Common/SecTitle';
import SecSub from '../Common/SecSub';
import './Apply.css'
import ApplyCard from '../Common/ApplyCard';

const Apply = () => {
    return ( 
        <section className='ApplySec'>
            <div className='Secheader'>
                <SecTitle />
                <SecSub />
            </div>

            <div className='ApplyCards'>
                <ApplyCard />
                <ApplyCard />
                <ApplyCard />
            </div>
        </section>
     );
}
 
export default Apply;