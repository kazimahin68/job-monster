import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [open, setOpen]  = useState(false);
    const handleLocationFilter = () =>{
        setOpen(false);
    }
    return (
        <nav className='md:px-5 md:p-5 p-2 bg-[#f9f8ff]'>
            <div className='xl:w-4/5 w-11/12 mx-auto flex gap-3 justify-between items-center'>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    <span>{open === true ? <XMarkIcon className='text-black w-12 h-12'></XMarkIcon> : <Bars3Icon className='text-black w-12 h-12'></Bars3Icon>}</span>
                </div>
                <h2 className='text-3xl font-extrabold'>Job Monster</h2>
                <div onClick={handleLocationFilter} className= {`text-lg absolute md:static font-semibold flex flex-col md:flex-row gap-5 md:gap-10 z-10 ${open ? 'top-16 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-5 rounded-lg text-white' : '-top-60'}`}>
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