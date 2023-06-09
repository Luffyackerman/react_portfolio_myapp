import React from 'react';
import '../css/App.css';

const Buttons = ({ label, onClick }) => {
    return (
      <>
      <button onClick={onClick} className='p-3 bg-blue-500 rounded-2xl mt-5 
      hover:bg-opacity-80 text-white tracking-wider transition'>
        {label}
      </button>
      </>
    );
  };
export default Buttons;