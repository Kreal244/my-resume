import React from 'react';
import "boxicons"
import "../Component-style/Header.scss"

const Header = () => {
    function copyText(text,noitce) {
        navigator.clipboard.writeText(text)
        alert(noitce)
    }
    return (
        <div className='Header'>
            <div id='box-title'>Nguyen Khang (Kreal)</div>
            <div id='box-tag-icon'>
                <ul className='tag-list' >
                <li id='my-home'><a href="#Home">Home</a></li>
                    <li id='my-cv'><a href="#About">About me</a></li>
                    <li id='my-exp'><a href="#Experience">Experience</a></li>
                </ul>
                <div className='box-icon'>
                    <a href="https://bit.ly/3ckAVyz" target="_blank" rel="noopener noreferrer">
                        <box-icon name='facebook-square' type='logo' ></box-icon>
                    </a>
                    <a href="https://bit.ly/3yXASAt" target="_blank" rel="noopener noreferrer">
                        <box-icon name='linkedin-square' type='logo' ></box-icon>
                    </a>
                    <button onClick={()=>copyText("khanghn.job@gmail.com","Gmail is copied")} >
                        <box-icon name='gmail' type='logo' ></box-icon>
                    </button>
                    <button onClick={()=>copyText("+84 812444624","Phone number is copied")}>
                        <box-icon type='solid' name='phone'></box-icon>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
