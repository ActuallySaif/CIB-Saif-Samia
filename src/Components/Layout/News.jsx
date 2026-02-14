import React from 'react';
import './News.css'
import SecSub from '../Common/SecSub';
import NewsCard from '../Common/NewsCard';
import Button from '../Common/Button';

const News = () => {
    return ( 
        <section className='NewsSec'>
            <div className='NewsHeader'>
                <SecSub />
            </div>

            <div className='NewsCards'>
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>

            <Button />
        </section>
     );
}
 
export default News;