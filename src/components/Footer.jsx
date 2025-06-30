import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-width'>
          <div>
            <h3>Let's get in touch</h3>
            <p>
              Subscribe to get special offers, free giveaways and once in a lifetime deals
            </p>
            <div className='email'>
              <input type="email" placeholder='Enter your email' />
              <button type='submit'>Send</button>
            </div>
          </div>
          <div>
            <h3>Links</h3>
            <Link to=''>Privacy Policy</Link>
            <Link to=''>Refund Policy</Link>
            <Link to=''>Shipping Policy</Link>
            <Link to=''>Terms of Service</Link>
          </div>
          <div>
            <h3>Find Us @</h3>
            <p>
              Platinum Way, Lekki Jakande First Gate, near Erose Hotel, Lagos, Nigeria
            </p>
          </div>
        </div>
      </footer>
      <p className='copyright'>Copyright &copy;2025 AlabiFashion. All rights reserved</p>
    </>
  )
}

export default Footer
