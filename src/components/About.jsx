/* eslint-disable no-unused-vars */
import React from 'react'
import logo_2 from '../assets/logo_2.png'

function About() {
    return (
        <div>
            {/* about text */}
            <div className=' px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={logo_2} alt="" className='w-25 h-20 hover:scale-95 transition-all duration-300' />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-DarkGray font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                        <p className='text-lightGray md:w-3/4 text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            {/* company states */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-Silver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-DarkGray font-semibold mb-4 md:w-2/3'>Helping a local <br /><span className='text-televersantBlue'> business reinvent itself</span></h2>
                        <p className='text-lightGray md:w-3/4 text-sm mb-8'>We reached here with our hard work and dedication</p>
                    </div>
                    {/* states */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/Icon.png" alt="" className='hover:scale-95 transition-all duration-300' />
                                <div>
                                    <h4 className=' text-2xl text-DarkGray font-semibold'>2,245,341
                                    </h4>
                                    <p className='text-lightGray text-sm'>
                                        Members
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/icon_5.png" alt="" className='hover:scale-95 transition-all duration-300' />
                                <div>
                                    <h4 className=' text-2xl text-DarkGray font-semibold'>2,245,341
                                    </h4>
                                    <p className='text-lightGray text-sm'>
                                        Members
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/Icon_2.png" alt="" className='hover:scale-95 transition-all duration-300' />
                                <div>
                                    <h4 className=' text-2xl text-DarkGray font-semibold'>2,245,341
                                    </h4>
                                    <p className='text-lightGray text-sm'>
                                        Members
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/Icon_3.png" alt="" className='hover:scale-95 transition-all duration-300' />
                                <div>
                                    <h4 className=' text-2xl text-DarkGray font-semibold'>2,245,341
                                    </h4>
                                    <p className='text-lightGray text-sm'>
                                        Members
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
