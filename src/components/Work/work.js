import React from 'react'
import './work.css'
import apple from './apple.png'
import res from './res.png'
import git from './git.png'
import link from './link.png'
const Work = () => {
  return (
      <section id="workmain">
          <span className='title'> Work </span>
          <span className='titleDis'> My Projects </span>
          <div className='projects'>
            <button className='projectBtn'> <img src={apple} alt='apple' className='appWork' /></button>
            <a href="https://github.com/Armdoor/Resume/blob/main/Final_res.pdf">
                  <button className='projectBtn'> <img src={res} alt='resume' className='resWork' /></button>
            </a>
            <a href="https://github.com/Armdoor">
                  <button className='projectBtn'><img src={git} alt='git' className='gWork' /></button>
            </a>
            <a href="https://www.linkedin.com/in/akshit-sanoria/">
                <button className='projectBtn'> <img src={link} alt='linkedin' className='lWork' /></button>
            </a>
          </div>
      </section>
  )
}

export default Work