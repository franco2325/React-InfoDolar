import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const mainNav = [
  {
    display: 'InfoDolar',
    path: '/',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
]

const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    }
    window.addEventListener('scroll', shrinkHeader)
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }
  }, [])

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <img src={logo} alt='Logo' />
        </div>
        <div className='header__menu'>
          <div className='header__menu__left'>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item
                header__menu__left__item`}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
