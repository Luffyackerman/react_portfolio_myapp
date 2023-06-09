import React from 'react';
import '../css/App.css';
import me2 from '../assets/me2.jpg';
//import Buttons from './buttons';

const Home = () => {
    //----------button------------
    //---------------------------
    return (
        <section id="home-section">
            <div className="flex justify-center 2xl:ml-10 2xl:mr-10">
                <h1 className=" text-center pb-5 pt-20
                 tracking-wider text-lg font-extralight
                  sm:text-2xl md:text-3xl lg:text-4xl 
                  xl:text-6xl 2xl:text-8xl sm:pt-12">TRANSFORMING IDEAS FROM <strong className='font-extrabold'>REALITY.</strong></h1>
            </div>
        <div className=" md:flex justify-center gap-20 items-center md:mt-10 pt-1 md:px-10">
            <div className="row block">
                <div className="col">
                    <div className="flex  justify-center">
                        <h2 className="text-white text-center pt-2 tracking-wider font-bold sm:font-semibold md:font-bold sm:text-xl md:text-2xl lg:text-3xl">JOHN MICHAEL</h2>
                    </div>
                </div>
                <div className="col pt-5 md:mt-20">
                    <div className=" flex justify-center gap-3">
                        <div className="">
                            <a href="https://www.linkedin.com/in/john-michael-echemani-909391264/" className="hover:opacity-80 text-black bg-slate-300 bg-opacity-75 px-2 py-1 rounded-sm"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row sm:mt-10 mt-10">
                <div className="col me">
                    <div className=" flex justify-center md:justify-center drop-shadow-2xl">
                      <img src={me2} alt="Logo" />
                    </div>
                </div>
            </div>
            <div className="row block">
                <div className="col">
                    <div className="flex justify-center">
                        <h2 className="text-white text-center pt-2 tracking-wider font-bold sm:font-semibold md:font-bold sm:text-xl md:text-2xl">FRONT END DEVELOPER</h2>
                    </div>
                </div>
                <div className="col pt-5 md:mt-20">
                    <div className=" flex justify-center gap-3">
                        <div className=''>
                            <a href="https://github.com/Luffyackerman" className="hover:opacity-80 text-black bg-slate-300 bg-opacity-75 px-2 py-1 rounded-sm"><i className="fa-brands fa-github fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};
export default Home;