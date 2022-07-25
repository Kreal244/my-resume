import React from 'react'
import '../Component-style/Message.scss'
import messIcon from '../ImageSource/messenger-icon.png'
import 'boxicons'

export default function Message() {
    const handleClick = () => {
        window.location.href='https://m.me/100009073739175'
    }
    return (
        <React.Fragment>
            {/* <a href="https://m.me/100009073739175" target="_blank" rel='noreferrer' title="Touch in me!">
            </a> */}
            <img id='icon-mess' src={messIcon} alt="messenger" srcset="" onClick={handleClick}/>
        </React.Fragment>
    )
}
