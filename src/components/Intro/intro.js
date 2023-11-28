import React from 'react'
import './intro.css'
import hire from './hire.png'
import pp from './Subject.png'
import { Link } from 'react-scroll'



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
              <Link> < button className='btn'><img src={hire} alt='Hire me'className='btImg'/> Hire me</button></Link>
          </div>
          <img src={pp} alt='Handsome mf' className='bg'/>
    </section>
  )
}

export default Intro;