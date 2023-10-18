/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import ItemsContainer from './ItemsContainer';
import SocialIcons from './SocialIcons';
import { Icons } from './Menus';
const MyFooter = () => {
    return (
        <footer className="bg-gray-900 text-white" id='contact'>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-televersantBlue'>Free</span> Until you're  ready to launch
                </h1>
                <div>
                    <input type="text" placeholder='Enter Your Ph.no' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline' />
                    <button className='bg-televersantBlue hover:bg-teal-400 hover:scale-95 transition-all duration-300 px-5 py-2.5 font-[Onest] rounded-md md:w-auto w-full'>Request Code</button>
                </div>
            </div>
            <ItemsContainer />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
                <span>© 2023 <span className='text-teal-400'>Televersant</span> All rights reserved.</span>
                <span>
                    Terms · Privacy Policy
                </span>
                <SocialIcons Icons={Icons} />
            </div>
        </footer>
    )
}

export default MyFooter;