import React from 'react'

const comment =(props)=> {
    console.log(props.message)
    return(
        <span className="comment_inner">{props.message.comment}</span>
    )
}

export default comment