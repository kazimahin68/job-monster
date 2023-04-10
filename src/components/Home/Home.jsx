import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import JobCategories from '../JobCategories/JobCategories';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <JobCategories></JobCategories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;