import React from 'react';
import '../Component-style/About.scss'
import avartar from '../ImageSource/avatar.jpg'
import myCv from '../ImageSource/myCv.pdf'
const About = () => {
    return (
        <div id='About' className='partition'>
            <img id='avatar' src={avartar} alt="avatar" srcSet="" />
            <div className="describe">
                <div className="title-describ">ABOUT ME</div>
                <div className="body-describ">
                    <div className='cotent'><p>My name is Huynh Nguyen Khang, I'm a student at University Technology and Education (UTE), and I'm also a Web developer base in the Ho Chi Minh City, Vietnam. In my opinion, "Coding is not the work, that is the Game for adult."</p>
                        <div style={{ fontStyle: 'italic', color: 'blue' }}>#Work-hard &nbsp; #Funny  &nbsp;#Passion</div>
                        
                    </div>
                    <button className="download-button">
                        <div className="docs"><svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> My CV</div>
                        <a href={myCv}>
                            <div className="download" >
                                <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                            </div>
                        </a>
                        </button>
                </div>
            </div>  
        </div>
    );
}

export default About;
