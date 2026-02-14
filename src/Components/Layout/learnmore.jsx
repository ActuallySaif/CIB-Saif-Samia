import React from 'react';
import './learnmore.css';
import learnMoreImage from '../../Assets/learnmorepic.jpg';
import Button from '../Common/Button';

const Learnmore = () => {
    return ( 
        <>
        <div className='maindiv'>
            <div className='div1'>
        <img src={learnMoreImage} alt='learn more' className='img'/>
<div className='div2'>
    <h3 className='learnmoreh3'>
        CIB on an international scale
    </h3>
        <h4 className='learnmoreh4'>
       Learn more about CIB's presence outside of Egypt
    </h4>
    <Button />
</div>
            </div>
        </div>
        </>
     );
}
 
export default Learnmore;