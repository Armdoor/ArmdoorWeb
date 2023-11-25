import React from 'react'
import './work.css'
import apple from './apple.jpg'
import res from './res.jpeg'
import git from './git.png'
import link from './link.jpeg'
const Work = () => {
  return (
      <section id="main">
          <span className='title'> Work </span>
          <span className='titleDis'> My Projects </span>
          <div className='projects'>
            <button className='projectBtn'> <img src={apple} alt='apple' className='appWork' /></button>
            <button className='projectBtn'> <img src={res} alt='resume' className='resWork' /></button>
            <button className='projectBtn'> <img src={git} alt='git' className='gWork' /></button>
            <button className='projectBtn'> <img src={link} alt='linkedin' className='lWork' /></button>
            <button className='projectBtn'> <img src='' alt='' className='' /></button>
            <button className='projectBtn'> <img src='' alt='' className=''/></button>
          </div>
      </section>
  )
}

export default Work