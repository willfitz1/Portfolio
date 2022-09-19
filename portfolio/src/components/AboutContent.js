import './AboutContentStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          From sales to management, I'm a seasoned communications expert with 8
          years of product management, project management, and communications
          under the belt. I've led team building activities as part of a
          multi-million dollar company while concurrently advancing my critical
          thinking and strategic planning. I can always adapt easily and
          understand what is expected of me in the given position. Driven by the
          competition, I'm always looking to be number 1 and put my company
          first.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-containter">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
