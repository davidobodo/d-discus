import React from 'react'

const comment =(props)=> {
    return(
        <span className="comment_inner">{props.message.comment}</span>
    )
}

export default comment