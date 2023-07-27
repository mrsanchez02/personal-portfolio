import React, { useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import '../styles/Home.css'
import { Typography } from '@mui/material'

const Home = () => {
  const [frontEndSkills] = useState([
    { key: 0, label: 'HTML' },
    { key: 1, label: 'CSS' },
    { key: 2, label: 'ReactJs' },
    { key: 3, label: 'NextJs' },
    { key: 4, label: 'TailwindCss' },
    { key: 5, label: 'Bootstrap' },
    { key: 6, label: 'MaterialUI' }
  ])

  const [backEndSkills] = useState([
    { key: 0, label: 'NodeJs' },
    { key: 1, label: 'ExpressJS' },
    { key: 2, label: 'TypeORM' },
    { key: 3, label: 'Mongoose' },
    { key: 4, label: 'MongoDB' },
    { key: 5, label: 'PostgreSQL' },
    { key: 6, label: 'MS SQL' }
  ])

  const [programmingLanguages] = useState([
    { key: 0, label: 'Javascript' },
    { key: 1, label: 'Typescript' },
    { key: 2, label: 'C#' }
  ])

  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I'm Leandro Sanchez</h2>
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
<<<<<<< HEAD
            <Typography variant='h2' mb={4}>FrontEnd</Typography>
            <Stack direction='row' spacing={1}>
              {frontEndSkills.map((frontSkill, index) => (
                <Chip label={frontSkill.label} color='primary' key={frontSkill.key} />
              ))}
            </Stack>
=======
            <h2>FrontEnd</h2>
            <span>HTML, CSS, ReactJs, Bootstrap, TailwindCSS, StyledComponents, MaterialUI, NextJS</span>
>>>>>>> 2433c7e4a3d68a9dc4aad4db5d8b35abaf795189
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <Typography variant='h2' mb={4}>BackEnd</Typography>
            <Stack direction='row' spacing={1}>
              {backEndSkills.map((backSkill, index) => (
                <Chip label={backSkill.label} color='primary' key={backSkill.key} />
              ))}
            </Stack>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <Typography variant='h2' mb={4}>Languages</Typography>
            <Stack direction='row' spacing={1}>
              {programmingLanguages.map((language, index) => (
                <Chip label={language.label} color='primary' key={language.key} />
              ))}
            </Stack>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
