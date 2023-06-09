import React from 'react';
import '../css/App.css';

const Front = () => {
    return (
        <>
        <div>
            <h3 className="text-white font-semibold text-lg">Front-end:</h3>
        </div>
            <div className="mb-3">
                <p className='text-white'>HTML</p>
                <p> 
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
            </div>
        <hr className="border-dotted"></hr>
        <div className="mb-3">
            <p className='text-white'>CSS</p>
            <p> 
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star"></i>
            </p>
        </div>
        <hr className="border-dotted"></hr>
        <div className="mb-3">
            <p className='text-white'>JAVASCRIPT</p>
                <p> 
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
        </div>
        </>
    );
};
const Framef = () => {
    return (
        <>
            <div>
                <h3 className="text-white font-semibold text-lg">Front-end: Frameworks</h3>
            </div>
            <div className=" mb-3">
                    <p className='text-white'>BOOTSTRAP</p>
                    <p>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
            </div>
            <hr className="border-dotted"></hr>
            <div className=" mb-3">
                    <p className='text-white'>TAILWIND CSS</p>
                    <p>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
            </div>
            <hr className="border-dotted"></hr> 
            <div className=" mb-3">
                    <p className='text-white'>REACT</p>
                    <p>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
            </div>
            <hr className="border-dotted"></hr>
        </>
    );
};
const Back =() =>{
    return(
        <>
        <div>
            <h3 className="text-white font-semibold text-lg">Back-end:</h3>
        </div>
          <div>
            <p className='text-white'>PHP</p>
                <p>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
          </div>
          <hr className="border-dotted"></hr>
          <div>
            <p className='text-white'>MYSQL</p>
                <p>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
          </div>
          <hr className="border-dotted"></hr>
        </>
    );
};
const Frameb =() =>{
    return(
        <>
        <div>
            <h3 className="text-white font-semibold text-lg">Back-end: Frameworks</h3>
        </div>
        <div>
            <p className='text-white'>LARAVEL</p>
                <p>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
        </div>
        </>
    );
};
const Basic =() =>{
    return(
        <>
        <div>
            <h3 className="text-white font-semibold text-lg">Basics</h3>
        </div>
        <div>
            <p className='text-white'>C++</p>
                <p>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
        </div>
        <hr className="border-dotted"></hr>
        <div>
            <p className='text-white'>PYTHON</p>
                <p>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
        </div>
        <hr className="border-dotted"></hr>
        <div>
            <p className='text-white'>JAVA</p>
                <p>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star "></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
        </div>
        <hr className="border-dotted"></hr>
        </>
    );
};
export {Front,Framef, Back, Frameb,Basic};