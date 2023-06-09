import React, { useState, useEffect } from 'react';
import './css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Loading from './components/Loading';
import About from './components/About';
import NoInternet from './components/NoInternet';
import Foot from './components/foot';
import Skills from './components/Skills';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // Simulate a loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  // check if online
  const  isOnline = navigator.onLine;

  return (
    <>
    { isOnline ? (
      <>
      { isLoading ? (
        <Loading />
      ) : (
        <div className='fade'>
          <Header />
          <Home />
          <Projects />
          <About />
          <Skills />
          <Foot />
        </div>
      )}
      </>
    ) : (
      <NoInternet />
    )};
    </>
  );
}
export default App;