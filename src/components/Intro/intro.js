import React from 'react'
import './intro.css'
import abtme from './stry.png'
import pp from './Subject.png'
import { Link } from 'react-scroll'
// import './anime.scss'

// onload = () => {
//   const c = setTimeout(() => {
//     document.body.classList.remove("not-loaded");
//     clearTimeout(c);
//   }, 1000);
// };

const Intro = () => {
  
  return (
      <section id='introMain'>
          <div className='content'>
              <span className='intro'>Hello,</span>
              <span className='introText'>I'm 
                  <span className='Name'> Aarambh</span>
                  <br /> Computer Science Student
              </span>
              <p className='para'>Looking gg</p>
              <Link> < button className='btn'><img src={abtme} alt='My Story'className='btImg'/> My Story</button></Link>
      </div>
      <img src={pp} alt='Handsome mf' className='bg'/>
    </section>
  )
}

export default Intro;