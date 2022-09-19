import './FooterStyles.css'

import React from 'react'

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>69 Westwood Road</p>
              <p>Boston, MA</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              1-617-997-3431
            </h4>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: '#fff', marginRight: '2rem' }}
                />
                willfitzy03@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About Me</h4>
            <p>
              My name is William Fitzgerald. I am a Full Stack Developer, and I
              enjoy working and discussing on projects that influence the world
              around us.
            </p>
            <div className="social">
              <FaFacebook
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
              <FaGithub
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
              <FaLinkedin
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
