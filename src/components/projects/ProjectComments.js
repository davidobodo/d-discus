import React from 'react'
import Typing from '../Typing'

const ProjectComments = (props) => {
    console.log(props)
    return(
        <div>
            <div>{props.comments}</div>
            <Typing comment={props.comment} changed={props.changed} submit={props.submit}/>
        </div>
    )
}

export default ProjectComments