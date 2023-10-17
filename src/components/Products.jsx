/* eslint-disable no-unused-vars */
import React from 'react'
import pana from '../assets/pana.png'
function Products() {
    return (
        <div>
            {/* about text */}
            <div className=' px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={pana} alt="" className='w-25 h-15 ' />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-DarkGray font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                        <p className='text-lightGray md:w-3/4 text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            {/* Products states */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-Silver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'></div>


                    {/* states */}
                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-lightGray mb-8 leading-7'>
                                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                            </p>
                            <h5 className='text-televersantBlue text-xl font-semibold mb-2'>Syed Hasan</h5>
                            <p className='text-sm text-lightGray'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center gap-8 flex-wrap'>
                                    <img src="/src/assets/company_logos/1.png" alt="" className='cursor-pointer' />
                                    <img src="/src/
                                    assets/company_logos/2.png" alt="" className='cursor-pointer' />
                                    <img src="/src/
                                    assets/company_logos/3.png" alt="" className='cursor-pointer' />
                                    <img src="/src/
                                    assets/company_logos/4.png" alt="" className='cursor-pointer' />
                                    <img src="/src/
                                    assets/company_logos/5.png" alt="" className='cursor-pointer' />
                                    <img src="/src/
                                    assets/company_logos/6.png" alt="" className='cursor-pointer' />
                                    <div className='flex items-center gap-8'>
                                        <a href="/" className='font-bold text-televersantBlue hover:text-televersantDBlue'>Meet all Clients {""}<svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none" className='inline-block ml-2 '>
                                            <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#1a9ab8ff" />
                                        </svg></a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products