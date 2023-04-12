import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='px-5 p-5 bg-[#f9f8ff]'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <h2 className='text-3xl font-extrabold'>Job Monster</h2>
                <div className='text-lg font-semibold flex items-center justify-between gap-10'>
                    <ActiveLink className='me-4' to='/home'>Home</ActiveLink>
                    <ActiveLink className='me-4' to="/statistics">Statistics</ActiveLink>
                    <ActiveLink className='me-4' to="/applied-jobs">Applied Jobs</ActiveLink>
                    <ActiveLink className='me-4' to="/blogs">Blogs</ActiveLink>
                </div>
                <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;