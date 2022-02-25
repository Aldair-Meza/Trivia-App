import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/' className='title'>
            Trivia API
        </Link>
        <hr className='dividir'/>
    </div>
  )
}

export default Header