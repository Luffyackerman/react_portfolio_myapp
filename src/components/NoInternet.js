import React from "react";
import NoConnection from '../assets/NoConnection.png'
const NoInternet = () => {
    return(
        <div className="noint flex justify-center">
            <div className="block">
                <div className="flex justify-center noint-img">
                    <img src={NoConnection} alt="No Internet"/>
                </div>
                <div>
                    <h1 className="text-center font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl">CHECK YOUR INTERNET MOTHER FEATHER</h1>
                </div>
            </div>
        </div>
    );
}
export default NoInternet;