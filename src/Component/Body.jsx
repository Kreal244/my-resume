import React from 'react';
import "../Component-style/Body.scss"
import About from './About';
import Experience from './Experience';
import Home from './Home';
const Body = () => {
    return (
        <div className='Body'>
            <Home/>
            <About />
            <Experience/>
        </div>
    );
}

export default Body;
