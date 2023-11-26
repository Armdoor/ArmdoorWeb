import React from 'react'
import './contact.css'
const Contact = () => {
  return (
      <div id='main'>
          <h1 className='heading'> Contact Me </h1>
          <span className='titleDis'> Get In Touch or touch some grass</span>
          <from className='ctfourm'> 
              <input className='name' type='text' placeholder='Name' /> 
              <input className='email' type='text' placeholder='Email' /> 
              <textarea className='msg' placeholder='Message' rows={5} /> 
              <button className='subBtn' type='submit' value='Send'> Submit </button>
          </from>
    </div>
  )
}

export default Contact