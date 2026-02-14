import React from 'react';
import './finance.css';
import Img1 from '../../Assets/bloomberg.svg';
import Img2 from '../../Assets/FTSE.svg';
import Img3 from '../../Assets/the egyptian exchange.svg';

const Finance = () => {
    return ( 
        <>
<div className='finance_maindiv'>
            <div className='fin_div1'>
             <h6 className='fin_h6'>Sustainable finance</h6>
             <h2 className='fin_h2'>Sustainability is an integral part of the way we work</h2>
            </div>
            <div className='fin_div2'>
                <div className='fin_div3'>
                    <div className='fin_div4'>
                        <img className='fin_img' src={Img3} alt="Egyptian Exchange" />
                        <h4 className='fin_h4'>S&P/EGX ESG Index</h4>
                    </div>
                    <div className='fin_div4'>
                        <img className='fin_img' src={Img1} alt="Bloomberg" />
                        <h4 className='fin_h4'>Bloomberg Gender Equality<br></br> Index</h4>
                    </div>
                        <div className='fin_div4'>
                        <img className='fin_img' src={Img2} alt="FTSE" />
                        <h4 className='fin_h4'>FTSE4Good Index</h4>
                    </div>
                </div>
                 <button>Learn more</button>
            </div>
        </div>
        </>
     );
}
 
export default Finance;