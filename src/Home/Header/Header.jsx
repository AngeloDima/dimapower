import React from 'react'
import './header.css';

const Header = () => {
  return (
    <section className='ContainerHeader'>
      <div className="contenteHeader">
        <div className="SxH"></div>
        <div className="CenterH">
          <a href="">Home</a>
          <a href="">Blog</a>
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

export default Header