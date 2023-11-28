
import React, { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef() ;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o5h682a', 'template_y9byt1q', form.current, '5VLrurHOUpdITKMNn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div id='main'>
          <h1 className='heading'> Contact Me </h1>
          <span className='titleDis'> Get In Touch or touch some grass</span>
          <form className='ctfourm' ref={form} onSubmit={sendEmail}> 
              <input className='name' type='text' placeholder='Name' name='from_name' /> 
              <input className='email' type='text' placeholder='Email' name='email_id'/> 
              <textarea className='msg' placeholder='Message' rows={5} name='message' /> 
              <button className='subBtn' type='submit' value='Send'> Submit
              </button>
          </form>
    </div>
  )
}

export default Contact