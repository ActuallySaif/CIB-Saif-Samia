import React from 'react';
import SecTitle from '../Common/SecTitle';
import SecSub from '../Common/SecSub';
import './Apply.css'
import ApplyCard from '../Common/ApplyCard';
import AIcon1 from '../../Assets/AIcon1.svg'
import AIcon2 from '../../Assets/AIcon2.svg'
import AIcon3 from '../../Assets/AIcon3.svg'

const Apply = () => {
    return ( 
        <section className='ApplySec'>
            <div className='Secheader'>
                <SecTitle TitleStyle="SecTitle1" STitleText="APPLY ONLINE"/>
                <SecSub SSubText=" Apply online now for cards and loans with ease!"/>
            </div>

            <div className='ApplyCards'>
                <ApplyCard AIcon={AIcon1} ACardText="Apply for a New Account"/>
                <ApplyCard AIcon={AIcon2} ACardText="Apply for a card"/>
                <ApplyCard AIcon={AIcon3} ACardText="Apply for a loan or Overdraft"/>
            </div>
        </section>
     );
}
 
export default Apply;