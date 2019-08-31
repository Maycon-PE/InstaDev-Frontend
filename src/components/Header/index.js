import React from 'react'
import { Link } from 'react-router-dom'

import {
	Header as HeaderStyle
} from './styles'

import logo from '../../assets/logo.svg'
import camera from '../../assets/camera.svg'

const Header = () => 
  <HeaderStyle id='main-header'>
    <div className='header-content'>
      <Link to='/'>
        <img src={logo} alt='InstaRocket' />
      </Link>
      <Link to='/new'>
        <img src={camera} alt='Eviar publicação' />
      </Link>
    </div>
  </HeaderStyle>

export default Header