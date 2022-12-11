import React from 'react'
import footerlogo from '../assets/logo.png'
import email from '../assets/email.png'
import twit from '../assets/twit.png'
import linkdin from '../assets/linkdin.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'

function Footer() {
  return (
    <div>
      <footer>
        <div>
          <img src={footerlogo} alt="logo"/>
        </div>

        <div>
          <a href="/">Home</a>
          <a href="/">Collection</a>
          <a href="/">Products</a>
        </div>

        <div>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">FAQ</a>
        </div>

        <div>
          <p>Be the first to know about our biggest and best sales. We'll never send more than one email a month.</p>
          <div>
            <input type="email" name="" id="" placeholder='ENTER YOUR EMAIL' />
            <button type="submit">
              <img src={email} alt="email"/>
            </button>          
          </div>

          <div></div>

          <div>
            <img src={twit} alt="twit"/>
            <img src={linkdin} alt="linkdin"/>
            <img src={fb} alt="fb"/>
            <img src={insta} alt="insta"/>
          </div>
        </div>
        <p>All rights are reserved</p>
      </footer>
    </div>
  )
}

export default Footer