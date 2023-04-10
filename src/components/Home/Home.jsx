import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;