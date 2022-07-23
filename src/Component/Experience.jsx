import React from 'react'
import '../Component-style/Experience.scss'
import { ProgressBar } from 'react-bootstrap';

const expLangs = [
  {
    name: "CREATIVE AND LOGICAL",
    percent: '85%'
  },
  {
    name: "WEB DEVELOPMENT",
    percent: '70%'
  },
  {
    name: "PROGRAMMING",
    percent: '80%'
  }
]
export default function Experience() {
  return (
    <div id='Experience' className='partition'>
      MY EXPERIENCE
      <div className="processing">
        {
          expLangs.map(expLang => (
            <div className="processingComponent" key={expLang.name}>
              <div className="processName">{expLang.name}</div>
              <div className="processName"></div>
              <div className="bar">
                <div className="processBar" style={{width:`${expLang.percent}`}}> </div>
              </div>
            </div>
          )
          )
        }

      </div>
    </div>
  )
}
