import './header.css';

import React, { useState } from 'react'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className='ContainerHeader'>
      <div className="contenteHeader">
      <button className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="SxH"></div>
        <div className={`CenterH ${isOpen ? 'open' : ''}`}>



          <a href="/">Home</a>
          <a href="/blog">Blog</a>
          <a href="">PortFolio</a>
          <a href="">Servizi</a>


        </div>
        <div className="DxH">
          <a href="">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default Header;