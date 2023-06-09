import luffy from '../assets/luffy.png';
import expertsystem from '../assets/expertsystem.png';

const ProjectOne = () => {
    return(
        <div className='block shadow-lg p-2 rounded-md'>
        <div className="col pro-img">
             <img src={luffy} alt="Luffy" />
        </div>
        <div className='pt-2 pb-1'>
            <p className=" text-white font-medium text-base">One Piece Website</p>
        </div>
        <div className="flex gap-2 p-2">
            <p><i className="fa-brands fa-html5 fa-sm text-red-400"></i></p>
            <p><i className="fa-brands fa-css3-alt fa-sm text-blue-400"></i></p>
            <p><i className="fa-brands fa-bootstrap fa-sm text-violet-400"></i></p>
        </div>
   </div>
    );
};
const Project2nd = () => {
    return(
        <div className='block shadow-lg p-2 rounded-md'>
        <div className="col pro-img">
             <img src={expertsystem} alt="Expert System" />
        </div>
        <div className='pt-2 pb-1'>
            <p className=" text-white font-medium text-base">Online Computer Troubleshooting</p>
        </div>    
        <div className=" flex  gap-2 p-2">
            <p><i className="fa-brands fa-html5 fa-sm text-red-400"></i></p>
            <p><i className="fa-brands fa-css3-alt fa-sm text-blue-400"></i></p>
            <p><i className="fa-brands fa-js fa-sm text-yellow-400"></i></p>
            <p><i className="fa-brands fa-bootstrap fa-sm text-violet-400"></i></p>
            <p><i className="fa-brands fa-php fa-sm text-violet-400"></i></p>
        </div>
   </div>
    );
};
  
export {ProjectOne,Project2nd};

