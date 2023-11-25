import React from 'react'
import './skills.css'
import web from './web.png'
import ui from './ui.png'
import ios from './ios.png'
const Skills = () => {
  return (
      <section id='skill'>
          <span className='title'> What I do?</span>
          <span className='title'> Your Mom </span>
          <div className='bars'>
              <div className='bar'>
                  <img src={ui} alt='Ui' className='barImg' />
                  <div className='bartext'>
                    <h2>UI</h2>  
                    <p>I do this </p>
                  </div>
              </div>
              <div className='bar'>
                  <img src={web} alt='Web' className='barImg' />
                  <div className='bartext'>
                    <h2>Web Dev</h2>  
                    <p>Also THis </p>
                  </div>
              </div>
              <div className='bar'>
                  <img src={ios} alt='iOS' className='barImg' />
                  <div className='bartext'>
                    <h2>Ios </h2>  
                    <p>Yes this too</p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Skills