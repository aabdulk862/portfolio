import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design UI elements and tools</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimize existing user interface designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design user interactions on web pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Identify and troubleshooting UX problems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Translate requirements into attractive user interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Incorporate customer feedback to enhance user experience</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop front end website architecture.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop back-end website applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create servers and databases for functionality</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Troubleshoot, debug and upgrade software</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build features and applications with a responsive design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Updated on the latest web applications and programming practices</p>
            </li>
    
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF Cloud */}
      </div>
    </section>
  )
}

export default Services