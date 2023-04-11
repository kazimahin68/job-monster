import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import DetailPageBanner from '../DetailPageBanner/DetailPageBanner';
import AppliedJobBanner from '../AppliedJobBanner/AppliedJobBanner';

const Banner = ({home, jobDetails, appliedJob}) => {
    return (
        <div className='bg-[#f9f8ff] relative'>
            {home === true ? <HomeBanner></HomeBanner> : ''};
            {jobDetails === true ? <DetailPageBanner></DetailPageBanner> : ' '}
            {appliedJob === true ? <AppliedJobBanner></AppliedJobBanner> : ' '}
        </div>
    );
};

export default Banner;