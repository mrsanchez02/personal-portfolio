import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Leandro Sanchez</h2>
        <div className='prompt'>
          <p>A software developer full of curiosity and passion for learning.</p>
          <a href='https://linkedin.com/in/jsanchez-castillo/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
          <a href='mailto:leandrosanchez.it@gmail.com' target='_blank' rel='noreferrer'><EmailIcon /></a>
          <a href='https://github.com/mrsanchez02' target='_blank' rel='noreferrer'><GitHubIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>FrontEnd</h2>
            <span>HTML, CSS, ReactJs, Bootstrap, TailwindCSS, StyledComponents, MaterialUI</span>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>BackEnd</h2>
            <span>NodeJS, ExpressJS, MongoDB, .NET, MS SQL</span>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, C#, Typescript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
