import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <nav className='px-5 pt-5 bg-[#f9f8ff]'>
            <div className='container mx-auto flex justify-between items-center'>
                <h2 className='text-3xl font-extrabold'>Job Monster</h2>
                <div className='text-lg font-semibold'>
                    <Link className='me-4' to='/home'>Home</Link>
                    <Link className='me-4' to="/statistics">Statistics</Link>
                    <Link className='me-4' to="/applied-jobs">Applied Jobs</Link>
                    <Link className='me-4' to="/blogs">Blogs</Link>
                </div>
                <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none'>Start Applying</button>
            </div>
            <Banner home = {true}></Banner>
        </nav>
    );
};

export default Header;