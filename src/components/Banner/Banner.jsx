import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import DetailPageBanner from '../DetailPageBanner/DetailPageBanner';
import AppliedJobBanner from '../AppliedJobBanner/AppliedJobBanner';
import BlogsBanner from '../BlogsBanner/BlogsBanner';
import StatisticsBanner from '../StatisticsBanner/StatisticsBanner';

const Banner = ({home, jobDetails, appliedJob, blogBanner, statistics}) => {
    return (
        <div className='bg-[#f9f8ff] relative z-0'>
            {home === true ? <HomeBanner></HomeBanner> : ''};
            {jobDetails === true ? <DetailPageBanner></DetailPageBanner> : ' '}
            {appliedJob === true ? <AppliedJobBanner></AppliedJobBanner> : ' '}
            {blogBanner === true ? <BlogsBanner></BlogsBanner> : ' '}
            {statistics === true ? <StatisticsBanner></StatisticsBanner> : ' '}
        </div>
    );
};

export default Banner;