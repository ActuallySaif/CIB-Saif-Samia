import React from 'react';
import './SecSub.css'

const SecSub = (props) => {
    return ( 
        <h2 className='SecSub'>
             {props.SSubText}
        </h2>
     );
};
 
export default SecSub;