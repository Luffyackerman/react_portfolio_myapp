import React from 'react';
import '../css/App.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div>
    <footer className=" pt-5 bg-slate-800 text-slate-400 shadow-2xl">
            <div className="flex justify-center items-center footer-logo pb-10">
                 <img src={logo} alt="Logo" />
             </div>
            <div className="block md:flex justify-evenly items-center gap-10">
                <div className="flex justify-center row items-center">
                    <div className="col pb-10">
                         <h4 className="font-semibold tracking-wider">JOHN MICHAEL D. ECHEMANI</h4>
                         <div className="flex justify-center">
                            <p className="font-light text-sm">PORTFOLIO</p>
                         </div>
                    </div>
                </div>
                <div className="flex justify-center row gap-10">
                    <div className="col pb-10">
                        <div>
                            <h4 className="font-semibold pb-5 tracking-wider">Follow me</h4>
                        </div>
                        <div className=" flex justify-center md:justify-start gap-3">
                            <div className="">
                                <a href="https://www.linkedin.com/in/john-michael-echemani-909391264/" className="hover:opacity-80"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/jmdeuda" className="hover:opacity-80"><i className="fa-brands fa-facebook fa-lg"></i></a>
                            </div>
                            <div>
                                <a href="https://github.com/Luffyackerman" className="hover:opacity-80"><i className="fa-brands fa-github fa-lg"></i></a>
                            </div>
                            <div>
                                <a href="https://twitter.com/abcdefghijey_em" className="hover:opacity-80"><i className="fa-brands fa-twitter fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col pb-10">
                        <div>
                            <h4 className="font-semibold pb-5 tracking-wider">Contact me</h4>
                        </div>
                        <div className=" block justify-start gap-3">
                            <div className="mb-1">
                                <a href="mailto:deudajm@gmail.com" className="hover:opacity-80"><i className="fa-solid fa-envelope fa-lg"></i> deudajm@gmail.com</a>
                            </div>
                            <div>
                                <a href="tel:09093046973" className="hover:opacity-80"><i className="fa-solid fa-phone fa-lg"></i> 09093046973</a>
                            </div>
                        </div>
                    </div>
             </div>
            </div>
            <div className="flex justify-center pt-5 pb-1">
                <p className="text-xs tracking-wider">JME-2023</p>
            </div>
        </footer>
    </div>
  );
};

export default Footer;
