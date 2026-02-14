import React from 'react';
import './News.css'
import SecSub from '../Common/SecSub';
import NewsCard from '../Common/NewsCard';

const News = () => {
    return ( 
        <section className='NewsSec'>
            <div className='NewsHeader'>
                <SecSub />
            </div>

            <div className='NewsCards'>
                <NewsCard />
            </div>
        </section>
     );
}
 
export default News;