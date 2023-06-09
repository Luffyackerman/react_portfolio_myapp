import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';

const Foot = () => {
  const footer = ReactDOM.createRoot(document.getElementById('foot')); 
  return(
    footer.render(
        <React.StrictMode>
        <Footer />
       </React.StrictMode>
    )
  )
};
export default Foot;