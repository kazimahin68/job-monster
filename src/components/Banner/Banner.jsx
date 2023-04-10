import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import DetailPageBanner from '../DetailPageBanner/DetailPageBanner';

const Banner = ({home, jobDetails}) => {
    return (
        <div className='bg-[#f9f8ff] relative'>
            {home === true ? <HomeBanner></HomeBanner> : ''};
            {jobDetails === true ? <DetailPageBanner></DetailPageBanner> : ' '}
        </div>
    );
};

export default Banner;