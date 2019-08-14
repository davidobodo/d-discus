import React from 'react'
import Typing from '../Typing'

const ProjectComments = (props) => {
    return(
        <div>
            This is my comment box
            <Typing comment={props.comment} changed={props.changed} submit={props.submit}/>
        </div>
    )
}

export default ProjectComments