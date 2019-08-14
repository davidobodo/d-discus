import React from 'react'
import './Typing.css'

const Typing =(props) => {
    let typing = null
    if(props.comment){
        typing = <input className="myInput" onChange={props.changed} placeholder="write a comment..."/>
    }
    return (
        <form onSubmit={props.submit}>
            {typing}
        </form>
    )
}

export default Typing