import React from 'react';
import '../css/App.css';

const Skills = () => {
    return(
        <>
        <section id="skill-section">
            <div className="skill-bg text-white">
                <div className="flex justify-center pt-10">
                    <h2 className="font-semibold tracking-wider text-sm pt-5">SKILLS</h2>
                </div>
                <div className="flex justify-center mb-10 ">
                    <h2 className=" pro-text font-bold tracking-wider sm:text-lg md:text-2xl lg:text-4xl">Why me?</h2>
                </div>
                <div className="block md:flex gap-10 justify-center items-center md:mt-10">
                    <div className="row shadow-lg md:w-60 lg:w-80 mb-10 skill-row">
                        <div className="col">
                            <div className="flex justify-center">
                                <div className=" w-10 pt-5 justify-center rounded-sm pb-5">
                                    <i className="fa-solid fa-pen-nib fa-2xl"></i>
                                </div>
                            </div>
                                <div className="pt-1 flex justify-center pb-5">
                                    <h2 className="font-semibold tracking-wider skill-h2">DESIGNING</h2>
                                </div>
                                    <div className="p-5">
                                        <div className="flex pb-2">
                                            <h2 className=" text-lg text-red-500 font-medium tracking-wider">F</h2>
                                            <h2 className=" text-lg text-red-400 font-medium tracking-wider">I</h2>
                                            <h2 className=" text-lg text-violet-500 font-medium tracking-wider">G</h2>
                                            <h2 className=" text-lg text-green-400 font-medium tracking-wider">M</h2>
                                            <h2 className=" text-lg text-green-300 font-medium tracking-wider">A</h2>
                                        </div>
                                        <p>Creating a beautiful user interface prototypes.</p>
                                    </div>
                          </div>
                    </div>
                    <div className="row shadow-lg md:w-60 lg:w-80 mb-10 skill-row">
                        <div className="col">
                            <div className="flex justify-center">
                                <div className=" w-10 pt-5 justify-center rounded-sm pb-5">
                                    <i className="fa-brands fa-uikit fa-2xl"></i>
                                </div>
                            </div>
                            <div className="pt-1 flex justify-center pb-5">
                                <h2 className="font-semibold tracking-wider skill-h2">FRONT-END DEV</h2>
                            </div>
                            <div className="p-5">
                                <h2 className="pb-2 text-lg text-red-400 font-medium tracking-wider">HTML</h2>
                                <p>Having a good understanding in creating website structures.</p>
                            </div>
                            <div className="p-5">
                                <h2 className="pb-2 text-lg text-blue-400 font-medium tracking-wider">TAILWINDCSS || BOOTSTRAP</h2>
                                <p>Making a beautiful and responsive user interfaces.</p>
                            </div>
                            <div className="p-5">
                                <h2 className="pb-2 text-lg text-indigo-500 font-medium tracking-wider">REACT</h2>
                                <p>Making a dynamic, functional, reusable components.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row shadow-lg md:w-60 lg:w-80 mb-10 skill-row">
                        <div className="col">
                            <div className="flex justify-center">
                                <div className="pb-5 w-10 pt-5 justify-center rounded-sm">
                                    <i className="fa-solid fa-server fa-2xl"></i>
                                </div>
                            </div>
                            <div className="pt-1 flex justify-center pb-5">
                                <h2 className="font-semibold tracking-wider skill-h2">BACK-END DEV</h2>
                            </div>
                            <div className="p-5">
                                <h2 className="pb-2 text-lg text-violet-400 font-medium tracking-wider">PHP || MYSQL</h2>
                                <p>Creating a databases, able to read,update,delete, and display data in User Interface.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" block md:flex justify-center gap-10">
                    <div className="row block shadow-lg md:w-60 lg:w-80 mb-10 skill-row">
                        <div className="col">
                            <div className="flex justify-center">
                                <div className=" w-10 pt-5 justify-center rounded-sm pb-5">
                                    <i className="fa-sharp fa-solid fa-comments fa-2xl"></i>
                                </div>
                            </div>
                            <div className="pt-1 flex justify-center pb-2">
                                <h2 className="skill-h2 font-semibold tracking-wider">COMMUNICATION</h2>
                            </div>
                            <div>
                                <p className="text-start p-5">I'm a good communicator, i adapt and connect with diverse individual, ensure a deep understanding in achiving a exceptional outcomes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row block shadow-lg md:w-60 lg:w-80 mb-10 skill-row">
                        <div className="col">
                            <div className="flex justify-center">
                                <div className=" w-10 pt-5 justify-center rounded-sm pb-5">
                                    <i className="fa-brands fa-steam fa-2xl"></i>
                                </div>
                            </div>
                            <div className="pt-1 flex justify-center pb-2">
                                <h2 className="skill-h2 font-semibold tracking-wider">TEAM</h2>
                            </div>
                            <div>
                                <p className="text-start p-5">Passionate about collaboration and sharing of knowledge, insights for continuous growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Skills;