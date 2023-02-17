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
      <div className='project__card'>
        <div className='project__card-header'>
          <img src={image} alt={name} />
          <h2>{name}</h2>
        </div>
        <div className='project__card-body'>
          <h3>Description:</h3>
          <p>{description}</p>
          <h3>Tools:</h3>
          <span>{skills.join(' | ')}</span>
        </div>
        <div className='project__card-footer'>
          {githubLink.map((githubLink, index) => (
            <a href={githubLink} key={index} target='_blank' rel='noreferrer'>
              <GithubIcon />
            </a>
          ))}
          <a href={deploymentLink} target='_blank' rel='noreferrer'>
            <RocketLaunchIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay
