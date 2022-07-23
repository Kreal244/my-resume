import React from 'react';
import '../Component-style/Home.scss'
import slide from '../ImageSource/slide-plate.gif'
const Home = () => {
    return (
        <div id='Home' className='partition' >
            <img id='slide-plate' src={slide} alt="slide" />
        </div>
    );
}

export default Home;
