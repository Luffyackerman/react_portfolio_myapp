import React, { useState } from 'react';
import '../css/App.css';
import logo from '../assets/logo.png';

const Header = () => {
    // menu btn
    const [menuHidden, setMenuHidden] = useState(true);
    const handleButtonClick = () => {
    setMenuHidden(!menuHidden);
    console.log('RENDER')
    };
    // links
    const [activeLinks, setActiveLinks] = useState(null);
    const handleLinkClick = (index) => {
        setActiveLinks(index);
    };

  return (
    <nav className='text-gray-100 shadow-lg backdrop-blur-2xl'>
        <div className='max-w-10xl mx-auto'>
            <div className='flex justify-between'>
                <div className='container mx-auto flex flex-wrap items-center justify-between'>
                    <a href='/' className='flex px-4 py-2 a-img'>
                        <img src={logo} alt="Logo" />
                    </a>
                        <div className="hidden md:flex justify-center items-center space-x-1 menu">
                            <a href="#home-section" 
                             className={`py-4 px-2 active transition duration-300 hover:text-blue-500
                             ${activeLinks === 0 ? "border-blue-500 text-blue-500 border-b-2 font-semibold" : "text-gray-500 "}`} 
                             onClick={() => handleLinkClick(0)}>Home</a>

                            <a href="#projects-section"
                            className={`py-4 px-2 active transition duration-300 hover:text-blue-500
                             ${activeLinks === 1 ? "border-blue-500 text-blue-500 border-b-2 font-semibold" : "text-gray-500 "}`} 
                             onClick={() => handleLinkClick(1)}
                            >Projects</a>
                            <a href="#about-section"  className={`py-4 px-2 active transition duration-300 hover:text-blue-500
                             ${activeLinks === 2 ? "border-blue-500 text-blue-500 border-b-2 font-semibold" : "text-gray-500 "}`} 
                             onClick={() => handleLinkClick(2)}>About</a>

                            <a href="#skill-section" 
                            className={`py-4 px-2 active transition duration-300 hover:text-blue-500
                             ${activeLinks === 3 ? "border-blue-500 text-blue-500 border-b-2 font-semibold" : "text-gray-500 "}`} 
                             onClick={() => handleLinkClick(3)}
                            >Skills</a>
                        </div>
                </div>
                <div className="md:hidden flex items-center px-4">
                        <button className={`mobile-menu-button ${menuHidden ? "visible" : "hidden"}`} onClick={handleButtonClick}>
                            <svg className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                            x-show="!showMenu"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                                 <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
            </div>
        </div>
                <div className={`mobile-menu bg-gray-700 ${menuHidden ? "hidden" : ""} `}>
                    <button className="menu-btn" onClick={handleButtonClick}>
                        <i className="fa-solid fa-xmark hover:text-red-400 text-gray-400"></i>
                    </button>
                        <p className=" pl-5 pt-5 pb-5 menu text-base ">Menu</p>
                        <hr className=" border-dotted opacity-50"></hr>
                            <ul className="mt-5">
                                <li><a href="#home-section" 
                                className={`block text-sm px-5 py-4 hover:text-gray-200 hover:bg-blue-400 transition duration-300 
                                ${activeLinks === 0 ? "bg-blue-500 text-white block text-sm px-5 py-4" : "text-gray-400 "}`} 
                                onClick={() => handleLinkClick(0)} >Home</a></li>

                                <li><a href="#projects-section" 
                                className={`block text-sm px-5 py-4 hover:text-gray-200 hover:bg-blue-400 transition duration-300 
                                ${activeLinks === 1 ? "bg-blue-500 text-white block text-sm px-5 py-4" : "text-gray-400 "}`}  
                                onClick={() => handleLinkClick(1)}>Projects</a></li>

                                <li><a href="#about-section" 
                                className={`block text-sm px-5 py-4 hover:text-gray-200 hover:bg-blue-400 transition duration-300 
                                ${activeLinks === 2 ? "bg-blue-500 text-white block text-sm px-5 py-4" : "text-gray-400 "}`}  
                                onClick={() => handleLinkClick(2)}>About</a></li>

                                <li><a href="#skill-section" 
                                className={`block text-sm px-5 py-4 hover:text-gray-200 hover:bg-blue-400 transition duration-300 
                                ${activeLinks === 3 ? "bg-blue-500 text-white block text-sm px-5 py-4" : "text-gray-400 "}`}  
                                onClick={() => handleLinkClick(3)}>Skills</a></li>
                            </ul>
                </div>
    </nav>
  );
};

export default Header;
