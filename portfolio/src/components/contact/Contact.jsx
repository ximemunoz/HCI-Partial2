import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contacto</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title"> Hablemos de cualquier cosa... </h3>
          <p className="contact__details">¿No te gustan los forms? Envíame un correo. </p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Escribe tu nombre'/>
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Escribe tu email'/>
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Escribe tu asunto'/>
          </div>

          <div className="contact__form-div contact__form-area">
              <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="10" 
              className='contact__form-input' 
              placeholder='Escribe tu mensaje'></textarea>
          </div>
          
          <button className="btn">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
