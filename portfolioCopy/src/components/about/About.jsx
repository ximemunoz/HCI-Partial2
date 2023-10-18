import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-1.jpg"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Acerca de Mí</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img"/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description"> Mi nombre es Pablo...</p>
            <a href="https://drive.google.com/file/d/1_jKgJofgShOEz2dPQUiIFiGpCZujXUvn/view?usp=share_link" className="btn" target="_blank">Download CV</a>
          </div>
          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Código</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage coding"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Resolución de Problemas</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ps"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Inglés</h3>
                <span className="skills__number">100%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage en"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Trabajo en Equipo</h3>
                <span className="skills__number">5%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage tw"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About
