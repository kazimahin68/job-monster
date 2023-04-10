import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';

const Banner = ({home}) => {
    return (
        <div>
            {home === true ? <HomeBanner></HomeBanner> : ''}
        </div>
    );
};

export default Banner;