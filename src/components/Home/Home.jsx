import React from 'react';
import JobCategories from '../JobCategories/JobCategories';
import Jobs from '../Jobs/Jobs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner home = {true}></Banner>
            <JobCategories></JobCategories>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;