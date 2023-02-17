import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.instagram.com/mrsanchez0222/' target='_blank' rel='noreferrer'><InstagramIcon /></a>
        <a href='https://twitter.com/mrsanchez02' target='_blank' rel='noreferrer'><TwitterIcon /></a>
        <a href='https://www.linkedin.com/in/jsanchez-castillo/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
      </div>
      <p>&copy; 2023 mrsanchez</p>
    </div>
  )
}

export default Footer
