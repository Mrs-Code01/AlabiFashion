import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Nav.css'
import logo from '../images/logo.png'
import phone from '../images/phone.png'
import menu from '../images/menu.png'

const Nav = () => {
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [hamburgerShow, setHamburgerShow] = useState(false);

  return (
    <>
      <nav className="navbar">
        <img src={menu} alt="" className='hamburger' onClick={() => setHamburgerShow(!hamburgerShow)} />
        <img src={logo} alt="" />
        <ul className={`nav-list ${hamburgerShow ? "see" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="#" onClick={() => setShowShopMenu(!showShopMenu)}>
              Shop <span className="arrow">&gt;</span>
            </Link>
            <ul className={`dropdown-menu slide-menu ${showShopMenu ? "show" : ""}`}>
              <li><button onClick={() => setShowShopMenu(false)}>x</button></li>
              <li><Link to="/agbadacat">Agbada</Link></li>
              <li><Link to="/bubucat">Bubus</Link></li>
              <li><Link to="/capcat">Cap</Link></li>
              <li><Link to="/gowncat">Gowns</Link></li>
              <li><Link to="/jacketcat">Jackets</Link></li>
              <li><Link to="/mennativecat">Men Native</Link></li>
              <li><Link to="/shirtcat">Shirt</Link></li>
              <li><Link to="/shorttrousercat">Short Trousers</Link></li>
              <li><Link to="/skirtcat">Skirt</Link></li>
              <li><Link to="/trousercat">Trousers</Link></li>
              <li><Link to="/twopaircat">Two Pair Wears</Link></li>
            </ul>
          </li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/sizeguide">Size Guide</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <a href="tel:+2348070967310" className='phone'><img src={phone} alt="" /></a>
      </nav>
    </>
  )
}

export default Nav
