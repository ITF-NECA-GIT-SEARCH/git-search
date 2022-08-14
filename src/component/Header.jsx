import React from 'react'
import './Header.css'
import github from '../github.png';
function Header() {
  return (
    <div className='header'>
        <div className='header-dev'>
          <img src={github} alt="icon" className='icon1'/>
          <h1>GitSearch</h1>
        </div>
        <h4>ITF-NECA Web</h4>
    </div>
  )
}

export default Header