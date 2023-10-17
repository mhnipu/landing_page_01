/* eslint-disable no-unused-vars */
import { Carousel } from 'flowbite-react'
import React from 'react';
import b1 from '../assets/b1.png'

const Home = () => {
    return (
        <div className='bg-Silver'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen  h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-5">
                        <div>
                            <img src={b1} alt="" />
                        </div>
                        {/* hero text ==== */}
                        <div className='md:w-1/2'>
                            <h1 className=' text-5xl font-semibold mb-4 text-naturalDGray md:w-3/4 leading-snug'>Lessons and insights <span className='text-televersantBlue leading-snug hover:text-televersantDBlue'>from 8 years</span></h1>
                            <p className='text-lightGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-5">
                        <div>
                            <img src={b1} alt="" />
                        </div>
                        {/* hero text ==== */}
                        <div className='md:w-1/2'>
                            <h1 className=' text-5xl font-semibold mb-4 text-naturalDGray md:w-3/4 leading-snug'>let`s Learn and Earn <span className='text-televersantBlue leading-snug hover:text-televersantDBlue'>in 4 Months</span></h1>
                            <p className='text-lightGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-5">
                        <div>
                            <img src={b1} alt="" />
                        </div>
                        {/* hero text ==== */}
                        <div className='md:w-1/2'>
                            <h1 className=' text-5xl font-semibold mb-4 text-naturalDGray md:w-3/4 leading-snug'>Lessons and insights <span className='text-televersantBlue leading-snug hover:text-televersantDBlue'>from 8 years</span></h1>
                            <p className='text-lightGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>

    )
}

export default Home