import React from 'react';
import { Link } from 'react-router-dom';
import './intro.css';
import abtme from './stry.png';
import pp from './Subject.png';

const Intro = () => {
  return (
      <section id='introMain'>
          <div className='content'>
            <span className='intro'>Hello,</span>
            <span className='introText'>I'm 
              <span className='Name'> Aarambh</span>
              <br /> Computer Science Student
              <p className='para'>At University of Maryland, College Park.</p>
            </span>
            <div>
            <Link to = '/story'> 
              <button className='mySBtn' >
                <img src={abtme} alt='My Story' className='btImg' /> My Story
              </button>
            </Link>
            
            </div>
          </div>
          <img src={pp} alt='Handsome mf' className='bg'/>
      </section>
  )
}

export default Intro;
