import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, index) => <ProjectItem key={index} id={index} name={project.name} image={project.image} />)}
      </div>
    </div>
  )
}

export default Projects
