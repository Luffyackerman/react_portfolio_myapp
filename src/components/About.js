import React from 'react';
import '../css/App.css';
import {Front,Framef, Back, Frameb, Basic} from './ProgLang';
const About = () => {

    return (
        <>
           <section id='about-section'>
                <div className="flex justify-center pt-10">
                    <h2 className="text-white font-semibold tracking-wider text-sm pt-5">ABOUT</h2>
                </div>
                <div className="flex justify-center mb-5">
                    <h2 className="text-white pro-text font-bold tracking-wider sm:text-lg md:text-2xl lg:text-4xl">It's me.</h2>
                </div>
                <div className="flex justify-center pt-5 text-center">
                    <div className="px-5 md:px-20 lg:px-40 xl:px-48 2xl:px-60 py-5">
                        <p className="tracking-wide text-white"><strong>Welcome!</strong>
                        I'm <i className="font-medium">John Michael D. Echemani</i>, 
                            an aspiring Front-End Developer who 
                            is passionate about developing visually appealing websites
                            that engage and capture users' attention.I create user interfaces that not only look 
                            beautiful but are also intuitive and easy to use. 
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mb-10">
                    <h2 className="text-white pl-5 pro-text pro-text-label font-medium tracking-wider sm:text-base md:text-xl lg:text-2xl">Programming Languages</h2>
                </div>
                <div className='block md:flex gap-5 justify-center md:mt-10 sm:ml-2 sm:mr-2'>
                        <div className='row about-row bg-blue-300 p-5 bg-opacity-30 rounded-md shadow-xl mb-3 hover:bg-opacity-50'>
                            <div className='col'>
                            <Front />
                            </div>
                        </div>
                        <div className='row about-row bg-blue-300 p-5 bg-opacity-30 rounded-md shadow-xl mb-3 hover:bg-opacity-50 '>
                            <div className='col'>
                            <Framef />
                            </div>
                        </div>
                        <div className='row about-row bg-indigo-300 p-5 bg-opacity-30 rounded-md shadow-xl mb-3 hover:bg-opacity-50'>
                            <div className='col'>
                            <Back />
                            </div>
                    </div>
                    <div className='row about-row bg-indigo-300 p-5 bg-opacity-30 rounded-md shadow-xl mb-3 hover:bg-opacity-50'>
                            <div className='col'>
                            <Frameb />
                            </div>
                    </div>
                    <div className='row about-row bg-gray-500 p-5 bg-opacity-30 rounded-md shadow-xl mb-3 hover:bg-opacity-50'>
                            <div className='col'>
                            <Basic />
                            </div>
                    </div>
                </div>
                    <h2 className=" flex justify-center pt-5 pb-5 pro-text pro-text-label font-medium tracking-wider sm:text-base md:text-xl lg:text-2xl">My Education</h2>
                    <div className="flex justify-center relative text-white">
                        <div className="row row-edu relative sm:pl-5">
                            <span className="span2"></span>
                            <span className="span"></span>
                                <p className="text-xs font-thin">2021-2025</p>
                                <div className="col">
                                    <p className=" text-xs md:text-base font-medium">COMPUTER ARTS AND TECHNOLOGICAL COLLEGE INC.</p>
                                    <p className="text-sm">Bachelor of Science in Information Technology</p>
                                </div>

                                <div className="pt-20">
                                    <p className="text-xs font-thin">2015-2018</p>
                                        <div className="col">
                                            <p className=" text-xs md:text-base font-medium">BOGTONG NATIONAL HIGH SCHOOL</p>
                                        </div>
                                    <span className="span4"></span>
                                </div>
                        </div>
                            <div className="row row-edu2 pt-20 relative" >
                                <p className="text-xs font-thin">2019-2021</p>
                                    <div className="col">
                                        <p className="text-xs md:text-base font-medium">COMPUTER ARTS AND TECHNOLOGICAL COLLEGE INC.</p>
                                        <p className="text-sm">General Academic Strand</p>
                                    </div>
                                    <span className="span3"></span>
                            </div>
                    </div>
           </section>
        </>
    );
}
export default About;