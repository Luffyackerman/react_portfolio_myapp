import React from 'react';
import {ProjectOne,Project2nd} from './ProjectItems.js';
import '../css/App.css';
//import Buttons from './buttons';

export default function Projects() {
    return(
           <section  id="projects-section" className="pt-5">
                    <div className="flex justify-center mb-5 pt-11">
                        <h2 className=" text-white font-semibold tracking-wider text-sm">PROJECTS</h2>
                    </div>
                    <div className="flex justify-center mb-10">
                        <h2 className="text-white text-center pro-text font-bold tracking-wider sm:text-lg md:text-2xl lg:text-4xl">Things i've done in the world of programming.</h2>
                    </div>
                    <div className="flex flex-wrap gap-5 justify-center items-center md:mt-10 md:ml-20 md:mr-20 2xl:ml-20 2xl:mr-20">
                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex justify-center mb-5 ">
                            <ProjectOne />
                          </div>
                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex justify-center mb-5 ">
                            <ProjectOne />
                          </div>
                           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex justify-center mb-5 ">
                            <ProjectOne />
                          </div>
                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex justify-center mb-5 ">
                            <ProjectOne />
                          </div>
                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex justify-center mb-5 ">
                            <ProjectOne />
                          </div>
                          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex justify-center mb-5 ">
                            <Project2nd />
                          </div>
                    </div>
            </section>
    );
}
