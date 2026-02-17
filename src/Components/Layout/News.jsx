import React from 'react';
import './News.css'
import SecSub from '../Common/SecSub';
import NewsCard from '../Common/NewsCard';
import Button from '../Common/Button';

const News = () => {
    return ( 
        <section className='NewsSec'>
            <div className='NewsHeader'>
                <SecSub SSubText="News"/>
            </div>

            <div className='NewsCards'>
                <NewsCard NTitle1="08/10/2025 - Commercial International Bank Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion " NTitle2="Commercial International Bank Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion" NSubText="CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion."/>
                <NewsCard NTitle1="08/09/2025 - Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services" NTitle2="Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services" NSubText="CIB, Egypt’s leading and largest private-sector bank, has successfully completed its seventh securitization bond issuance for GlobalCorp Financial Services, worth EGP 2.3 billion."/>
                <NewsCard NTitle1="21/08/2025 - Commercial International Finance Company (CIFC) Records EGP 4.1 billion in Its First Year of Operations" NTitle2=" Commercial International Finance Company (CIFC) Records EGP 4.1 billion in Its First Year of Operations" NSubText="CIB, Egypt’s leading and largest private-sector bank is pleased to announce that its subsidiary, CIFC, has delivered remarkable results since its inception in April 2024."/> 
            </div>

            <Button MBtnText="View All News"/>
        </section>
     );
}
 
export default News;