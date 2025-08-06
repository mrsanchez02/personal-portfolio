import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/NavBar.css'
import ReorderIcon from '@mui/icons-material/Reorder'

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false)

  const HandleToggle = () => {
    setExpandNavbar((prev) => !prev)
  }

  const location = useLocation()

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button onClick={HandleToggle}><ReorderIcon /></button>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/about'>About Me</Link>
      </div>
    </div>
  )
}

export default Navbar
