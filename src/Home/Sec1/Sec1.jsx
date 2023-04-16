import React from 'react'
import './sec1.css';

const Sec1 = () => {
  return (
    <section className='containerSec1'>
        
        <div className="contentSec1">
            <h1>Ehy, sono Angelo</h1>
            <h1 id="importantColor">Web Developer</h1>
            <p id="py-30">Un Full stack developer è un professionista che ha competenze sia nel lato front-end che nel lato back-end dello sviluppo web. Questo significa che è in grado di creare un sito web completo, dalla parte visiva a quella funzionale, utilizzando diversi linguaggi di programmazione e tecnologie.</p> 

            <div className="contattiSec1">
                <div className="contact1Sec1">
                    <h3>Email</h3>
                    <p id="py-10">AngeloDiMauroDev@gmail.com</p>
                </div>
                <div className="contact1Sec1">
                    <h3>Linkedin</h3>
                    <p id="py-10" >Angelo Di Mauro</p>
                </div>
            </div>
        </div>
    </section>
  )
}



export default Sec1