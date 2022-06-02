import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>Adam Abdulkadir</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer