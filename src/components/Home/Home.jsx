import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import JobCategories from '../JobCategories/JobCategories';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <JobCategories></JobCategories>
            <Jobs></Jobs>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;