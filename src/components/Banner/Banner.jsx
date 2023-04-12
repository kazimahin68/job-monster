import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import DetailPageBanner from '../DetailPageBanner/DetailPageBanner';
import AppliedJobBanner from '../AppliedJobBanner/AppliedJobBanner';
import BlogsBanner from '../BlogsBanner/BlogsBanner';

const Banner = ({home, jobDetails, appliedJob, blogBanner}) => {
    return (
        <div className='bg-[#f9f8ff] relative'>
            {home === true ? <HomeBanner></HomeBanner> : ''};
            {jobDetails === true ? <DetailPageBanner></DetailPageBanner> : ' '}
            {appliedJob === true ? <AppliedJobBanner></AppliedJobBanner> : ' '}
            {blogBanner === true ? <BlogsBanner></BlogsBanner> : ' '}
        </div>
    );
};

export default Banner;