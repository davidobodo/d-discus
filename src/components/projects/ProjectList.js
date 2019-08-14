import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
      	return(
          //project summary is what is displayed on my dashbboard
          //but the moment i click on it, i get linked to project details
      		<Link to={'/project/'+ project.id} key={project.id}>
      			<ProjectSummary project={project} />
      		</Link>
      		)
      })}
    </div>
  )
}

export default ProjectList
