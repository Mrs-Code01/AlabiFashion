import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../Styles/Contact.css'


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true)
  }


  return (
    <>
      <section>
        <div className='contact-width'>
          <div className='contact-top'>
            <h1>Contact</h1>
            <div>
              <Link to='/'>Home</Link> <span className='gt'>&gt;</span><span>Contact</span>
            </div>
          </div>

          {submitted && (<div className='success-message'>
            <p>
              Message sent successfully!<br />We'll get back to you soon
            </p>
          </div>)}

          <form action="https://formsubmit.co/princeolawusiyinka@gmail.com" method='POST' onSubmit={handleSubmit} className='contact-form'>
            <input type="text" name='name' placeholder='Your Name' required />
            <input type="email" name='email' placeholder='Your email' required />
            <input type="tel" name='phone' placeholder='e.g 07022221111' required />
            <textarea name='message' placeholder='Your Message' required></textarea>
            <input type='hidden' name='_captcha' value='false' />
            <input type='hidden' name='_template' value='table' />
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
