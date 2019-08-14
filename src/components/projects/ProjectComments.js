import React from 'react'
import Typing from '../Typing'
import Comment from './Comment'
import './ProjectComments.css'

const ProjectComments = (props) => {
    console.log(props.comments)
    return(
        <div className="comment">
            <h6><strong>comments....</strong></h6>
           {props.comments.map(comment => (
               <Comment 
                key={comment.id} 
                message={comment}/>
           ))}
            <Typing comment={props.comment} changed={props.changed} submit={props.submit}/>
        </div>
    )
}

export default ProjectComments