import React from 'react';
import image from '../../assets/Icons/Group 9969.png';

const Footer = () => {
    return (
        <div className='bg-black md:px-5 md:p-5 p-2'>
            <div className='xl:w-4/5 w-11/12 mx-auto grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 md:gap-32 mt-32 gap-12'>
                <div className='text-white col-span-2'>
                    <h2 className='font-extrabold text-3xl mb-5'>Job Monster</h2>
                    <p className='mb-5 text-[#7d7d7d]'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={image} alt="" />
                </div>
                <div className=''>
                    <h2 className='text-xl font-semibold text-white mb-3'>Company</h2>
                    <ul className='list-none mb-3 text-[#7d7d7d]'>
                        <li className='mb-3'>About Us</li>
                        <li className='mb-3'>Work</li>
                        <li className='mb-3'>Latest News</li>
                        <li className='mb-3'>Careers</li>
                    </ul>
                </div>
                <div className=''>
                    <h2 className='text-xl font-semibold text-white mb-3'>Product</h2>
                    <ul className='list-none mb-3 text-[#7d7d7d]'>
                        <li className='mb-3'>Prototype</li>
                        <li className='mb-3'>Plans & Pricing</li>
                        <li className='mb-3'>Customers</li>
                        <li className='mb-3'>Integrations</li>
                    </ul>
                </div>
                <div className=''>
                    <h2 className='text-xl font-semibold text-white mb-3'>Support</h2>
                    <ul className='list-none mb-3 text-[#7d7d7d]'>
                        <li className='mb-3'>Help Desk</li>
                        <li className='mb-3'>Sales</li>
                        <li className='mb-3'>Become a Partner</li>
                        <li className='mb-3'>Developers</li>
                    </ul>
                </div>
                <div className=''>
                    <h2 className='text-xl font-semibold text-white mb-3'>Contact</h2>
                    <ul className='list-none mb-3 text-[#7d7d7d]'>
                        <li className='mb-3'>524 Broadway, NYC</li>
                        <li className='mb-3'>+1777-987-7378</li>
                    </ul>
                </div>
                
            </div>
            <hr className='text-[#7d7d7d] xl:w-4/5 w-11/12 mx-auto md:my-12 my-5' />
            <div className='flex flex-col md:flex-row justify-between text-[#7d7d7d] items-center xl:w-4/5 w-11/12 mx-auto mb-32'>
                <p>@2023 <strong>JobMonster</strong>. All Rights Reserved</p>
                <p>Powered by <strong>JobMonster</strong></p>
            </div>
        </div>
    );
};

export default Footer;