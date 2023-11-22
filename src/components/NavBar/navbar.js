import React from 'react';
import './navbar.css';
import logo from './as.png'
import contact from './c2.png'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
      <nav className='navbar' >
          <img src={logo} alt='Logo' className='logo'/>
          <div className='desktopMenu'>
              <Link className='listItem'>Home </Link>
              <Link className='listItem'>About</Link>
              <Link className='listItem'>Portfolio </Link>
              <Link className='listItem'>Clients </Link>
          </div>
          <button className='desktopMenuButton'>
              <img src={contact} alt='' className='contackMeImg'/>Contact me
          </button>
    </nav>
  )
}

export default Navbar