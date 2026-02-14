import React from 'react';
import './Footer.css';
   import Logo from '../../Assets/logo.png';
   import Facebook from '../../Assets/facebook.svg';
   import Instagram from '../../Assets/insta.svg';
   import Linkedin from '../../Assets/linkdin.svg';
   import X from '../../Assets/x.svg';
   import Youtube from '../../Assets/youtube.svg';
   import Whatsapp from '../../Assets/whatsapp.svg';
   import Appstore from '../../Assets/app store.png';
   import Googleplay from '../../Assets/google play.png';
  import Footerlink from '../Common/Footerlink';
  import Background1 from '../../Assets/Background Image.svg';
  import Background2 from '../../Assets/Background Image1.svg';
   const Footer = () => {
    return ( 
        <>
        <footer>
            <div className='footer_div1'>
                <img className='footer_bg_left' src={Background1} alt="Egyptian Exchange" />
                                <img className='footer_bg_right' src={Background2} alt="Egyptian Exchange" />
                <div className='footer_div1-1'>
                    <div className='footer_div1-2'>
                    <img className='footer_imgs' src={Logo} alt="Egyptian Exchange" />
                        <div className='footer_div1-3'>
<nav>
  <ul className='footer_ul'>
    <Footerlink />
    <Footerlink />
    <Footerlink />
    <Footerlink />
  </ul>
</nav>
</div>
<div className='footer_div1-3'>
<nav>
  <ul className='footer_ul'>
    <Footerlink />
    <Footerlink />
    <Footerlink />
    <Footerlink />
  </ul>
</nav>
</div>

<div className='footer_div1-3'>
 <nav>
  <ul className='footer_ul'>
    <Footerlink />
    <Footerlink />
    <Footerlink />
    <Footerlink />
  </ul>
</nav>
</div>
                    
                    <div className='footer_div1-4'>
                        <img className='footer_imgs' src={Appstore} alt="Egyptian Exchange" />
                        <img className='footer_imgs' src={Googleplay} alt="Egyptian Exchange" />
                    </div>
                    </div>
                    <div className='footer_div1-2'>
                        <div className='links_div'>
                            <h6 className='links'>CBE Approvals</h6>
                            <h6 className='links'>Cookie Policy</h6>
                            <h6 className='links'>Privacy Policy</h6>
                            <h6 className='links'>User Agreements</h6>
                            </div>
                            <div className='socialmedia_div'>
                            <img className='socialmedia_icons' src={Facebook} alt="Egyptian Exchange" />
                            <img className='socialmedia_icons' src={Instagram} alt="Egyptian Exchange" />
                            <img className='socialmedia_icons' src={Linkedin} alt="Egyptian Exchange" />
                            <img className='socialmedia_icons' src={X} alt="Egyptian Exchange" />
                            <img className='socialmedia_icons' src={Youtube} alt="Egyptian Exchange" />
                            <img className='socialmedia_icons' src={Whatsapp} alt="Egyptian Exchange" />
                            </div>
                        </div>
                </div>
            </div>
                 <div className='footer_div2'>
                    <h6 className='footer_h6'>Copyright © 2024 Commercial International Bank</h6>
                    </div>
        </footer>
        </>
     );
   }
    
   export default Footer;