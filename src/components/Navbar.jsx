// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
// react icons ======
import { FaXmark, FaBars } from "react-icons/fa6"


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //  set toggle Menu ============

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });
    // navItems ========
    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Service', path: 'service' },
        { link: 'About', path: 'about' },
        { link: 'Testimonial', path: 'testimonial' },
        { link: 'Contact', path: 'contact' },
    ];
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? 'sticky top-0 left-0 right-0 border  bg-white duration-300' : ''}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="" className='text-2xl font-semibold flex items-center' ><img src={logo} alt="logo" className='w-25 h-20 inline-block items-center' /></a>
                    {/* navITEMS for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='font-bold block text-base text-gray900 hover:text-Primary first:font-medium '>{link}</Link>)
                        }
                    </ul>
                    {/* button for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-Primary hover:text-Secondary'>Login</a>
                        <button className='bg-Primary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-Secondary hover:-translate-y-2'>Sign up</button>
                    </div>
                    {/* menu btn for only mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu}
                            className=' text-Primary focus:outline-none focus:text-Primary'>
                            {
                                isMenuOpen ? (<FaXmark className=' h-6 w-6' />) : (<FaBars className=' h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>

                {/* nav items for mobile  devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-Silver ${isMenuOpen ? 'block fixed top-8 right-0 left-2 ' : 'hidden'}`}>
                    {
                        navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='font-bold block text-base text-gray900 hover:text-Secondary first:font-medium '>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;