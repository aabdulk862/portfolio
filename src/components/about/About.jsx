import React from 'react'
import './about.css'
import ME from '../../assets/sunglass1.jpeg'
import {FaAward} from 'react-icons/fa'
import {BsBook} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years in Software Development</small>
            </article>

            <article className='about__card'>
              <BsBook className='about__icon'/>
              <h5>Education</h5>
              <small>B.S. in Information Technology</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
          I'm a Web Developer who is knowledgeable in a wide array of front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best web developer I can be and to make an impact on the technology industry. I am dedicated to perfecting my craft by learning everday and pushing my abilities with code.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About