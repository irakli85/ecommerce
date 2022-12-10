import React from 'react'
import searchIcon from '../assets/search.png'
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import bell from '../assets/bell.png'
import cart from '../assets/cart.png'

function Header() {
  return (
    <div>
      <div>
        <div className='top-nav'>
          <a href="/">Return</a>
          <a href="/">Help</a>
          <a href="/">Register / Sign In</a>
        </div>

        <div></div>

        <div className='nav'>
          <div>
            <img src={searchIcon} alt="search icon"/>
          </div>

          <div>
            <a href="/">SHOP</a>
            <a href="/">ESSENTIALS</a>
          </div>

          <div>
            <img src={logo} alt="logo"/>
          </div>

          <div>
            <a href="/">BEST SELLERS</a>
            <a href="/">ABOUT US</a>
          </div>

          <div>
            <img src={user} alt="user"/>
            <img src={bell} alt="bell"/>
            <img src={cart} alt="cart"/>
          </div>

        </div> 
      </div>
    </div>
  )
}

export default Header