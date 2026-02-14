import React from 'react';
import './awards.css';
import Icon1 from '../../Assets/award icon.svg';
import Icon2 from '../../Assets/money icon.svg';
import Icon3 from '../../Assets/recycle icon.svg';
import Button from '../Common/Button';

const Awards = () => {
    return ( 
        <>
                <div className='awards_maindiv'>
            <div className='awr_div1'>
             <h5 className='awr_h5'>Awards</h5>
             <h2 className='awr_h2'> CIB's integrity and quality are recognized<br></br>internationally </h2>
            </div>
            <div className='awr_div2'>
                <div className='awr_div3'>
                    <div className='awr_div4'>
                        <img className='awr_img' src={Icon2} alt="Egyptian Exchange" />
                        <h4 className='awr_h4'>Best Private Bank in Egypt</h4>
                        <h6 className='awr_h6'>Global Finance - 2023</h6>
                    </div>
                    <div className='awr_div4'>
                        <img className='awr_img' src={Icon1} alt="Bloomberg" />
                        <h4 className='awr_h4'>Best Mergers & Acquisitions <br></br>Deal in MENA</h4>
                        <h6 className='awr_h6'>EMEA Finance - 2023</h6>
                    </div>
                        <div className='awr_div4'>
                        <img className='awr_img' src={Icon3} alt="FTSE" />
                        <h4 className='awr_h4'>Best Bank in Egypt</h4>
                        <h6 className='awr_h6'>Euromoney - 2023</h6>
                    </div>
                </div>
                <Button />
            </div>
        </div>
        </>
     );
}
 
export default Awards;