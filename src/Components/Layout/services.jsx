import React from 'react';
import './services.css';

import Icon1 from '../../Assets/world icon.svg';
import Icon2 from '../../Assets/phone icon.svg';
import Icon3 from '../../Assets/desk icon.svg';

const Services = () => {  
    return ( 
        <>
        <div className='serv_maindiv'>
            <div className='serv_div1'>
              <h5 className='serv_h5'>We care</h5>
             <h2 className='serv_h2'>Our dedicated team is committed to meeting your<br></br>needs</h2>
            </div>
            <div className='serv_div2'>
                <div className='serv_div3'>
                    <div className='serv_div4'>
                        <img className='serv_img' src={Icon1} alt="Egyptian Exchange" />
                        <div className='serv_div5'>
                            <h4 className='serv_h4'>Online</h4>
                             <h6 className='serv_h6'>Chat with 'Zaki' our digitalassistant to guide you through our products and services, or reach out on social media.</h6>
                        </div>
                    </div>

                      <div className='serv_div4'>
                        <img className='serv_img' src={Icon2} alt="Egyptian Exchange" />
                        <div className='serv_div5'>
                            <h4 className='serv_h4'>On the phone</h4>
                             <h6 className='serv_h6'>For support, including emergencies such as cards closure or immediate critical feedback.</h6>
                        </div>
                    </div>

                      <div className='serv_div4'>
                        <img className='serv_img' src={Icon3} alt="Egyptian Exchange" />
                        <div className='serv_div5'>
                            <h4 className='serv_h4'>In branch</h4>
                             <h6 className='serv_h6'>Our trained team of tellers and relationship managers are here to help you get the service you need. </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Services;