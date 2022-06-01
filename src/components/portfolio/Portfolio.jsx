import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/clothing.png'
import IMG2 from '../../assets/kanban.png'
import IMG3 from '../../assets/nasa.png'
import IMG4 from '../../assets/countdown.png'
import IMG5 from '../../assets/quotegen.png'
import IMG6 from '../../assets/joke-teller.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Royal Clothing Outlet - Made with React, Redux, GraphQL, Stripe, Firebase',
    github: 'https://github.com/aabdulk862/royal-clothing-outlet',
    demo: 'https://royal-clothing-outlet.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Kanban Board - Project management tool designed to help visualize work',
    github: 'https://github.com/aabdulk862/kanban-board',
    demo: 'https://aabdulk862.github.io/kanban-board/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'NASA APOD - Uses the NASA API to get and save random astronomy pictures of the day',
    github: 'https://github.com/aabdulk862/nasa-pictures-of-the-day',
    demo: 'https://aabdulk862.github.io/nasa-pictures-of-the-day/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Custom Countdown - Counts down the days, hours, minutes, and seconds to a given date',
    github: 'https://github.com/aabdulk862/custom-countdown-app',
    demo: 'https://aabdulk862.github.io/custom-countdown-app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Quote Generator - Display a random quote from an api of quotes and tweet it to your followers',
    github: 'https://github.com/aabdulk862/quote-generator',
    demo: 'https://aabdulk862.github.io/quote-generator/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Joke Teller Robot -  Uses the VoiceRSS Text-to-speech API and the JokeAPI',
    github: 'https://github.com/aabdulk862/joke-teller',
    demo: 'https://aabdulk862.github.io/joke-teller/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio