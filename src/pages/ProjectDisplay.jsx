import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GithubIcon from '@material-ui/icons/GitHub'
import RocketLaunchIcon from '@material-ui/icons/Launch'
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {
  const { id } = useParams()
  const { name, image, description, skills = [], githubLink, deploymentLink } = ProjectList[id]

  return (
    <div className='project'>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <div className='project__body'>
        <h2>Description:</h2>
        <p>{description}</p>
        <h2>Tools:</h2>
        <span>{skills.join(' | ')}</span>
      </div>
      <div className='project__footer'>
        {githubLink.map((gitLink, index) => (
          <a href={githubLink} key={index} target='_blank' rel='noreferrer'>
            <GithubIcon />
          </a>
        ))}
        <a href={deploymentLink} target='_blank' rel='noreferrer'>
          <RocketLaunchIcon />
        </a>
      </div>
    </div>
  )
}

export default ProjectDisplay
