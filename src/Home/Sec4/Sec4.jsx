import React from 'react'
import './sec4.css';



const Sec4 = () => {
  return (
    <section className='containerSec4'>
        <div className="contentSec4">


            <div className="SxSec4">
                <h2>Quali linguaggi di <span id="giallo"> programmazione </span> uso?</h2>
                <p>Come Web Developer, utilizzo una serie di strumenti e tecnologie per creare e gestire siti web e applicazioni web. Questi strumenti includono linguaggi di markup come HTML e CSS, linguaggi di programmazione come JavaScript e PHP, sistemi di gestione di database come MySQL, e framework come React JS, Vue.js e Laravel.</p>

                <div className="containerLinee">
                    <div className='LineaYellow'></div>
                    <div className='LineaYellow'></div>
                    <div className='LineaYellow'></div>
                </div>
            </div>

            <div className="DxSec4">
                <div className="cardSec4">HTML</div>
                <div className="cardSec4">CSS</div>
                <div className="cardSec4">SCSS</div>
                <div className="cardSec4">JAVASCRIPT</div>
                <div className="cardSec4">PHP</div>
                <div className="cardSec4">JAVA</div>
                <div className="cardSec4">REACT.JS</div>
                <div className="cardSec4">LARAVEL</div>
                <div className="cardSec4">VUE.JS</div>
                <div className="cardSec4">MYSQL</div>
                <div className="cardSec4">GITHUB</div>
            </div>
        </div>
    </section>
  )
}

export default Sec4