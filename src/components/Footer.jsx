import React from 'react'

import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__about'>
          <p>
            <img src={logo} className='footer__logo' alt='' />
          </p>
          <p>
            InfoDolar is a website made with React. <br /> <br />
            <a href='https://github.com/franco2325'> See my Github here.</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
