// because i am getting the data in this component from firestore, the logic i used to connect my firestore to dashboard is the same logic that i am going to use here

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import ProjectComments from './ProjectComments'
import {comment} from '../../store/actions/projectActions'

class ProjectDetails extends Component{

	state = {
		comment : false,
		content : ''
	}
	commentHandler = ()=> {
		this.setState({comment: true})
	}

	postComment = (e) => {
		this.setState({content : e.target.value})
	}

	submitPost = (e) => {
		e.preventDefault()
		this.props.comment(this.state.content)

	}
	render(){
	const { project,auth } = this.props;

	if(!auth.uid) return <Redirect to='/signin'/>
		console.log(this.state.comment)
	if(project){
	return(
		<div className="container section project-details">
	      <div className="card z-depth-0">
	        <div className="card-content">
	          <span className="card-title">{project.title}</span>
	          <p>{project.content}</p>
	        </div>
	        <div className="card-action grey lighten-4 grey-text">
	          <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
	          <div>{moment(project.createdAt.toDate().toString()).calendar()}</div>
			  <button onClick={this.commentHandler}>Comment</button>
	        </div>
	      </div>
		  <div className="comments card z-depth-0">
			<ProjectComments comment={this.state.comment} changed={this.postComment} submit={this.submitPost}/>
				
		  </div>
	    </div>
	)
}
	else{
		return(
			<div className="container center">
				<p>Loading project...</p>
			</div>
			)
	}
	}
}
	


const mapStateToProps = (state, ownProps) => {
	console.log(state)
	//ownProps got in here, because i am using ROUTE on this component

	//get this page id
	const id = ownProps.match.params.id;
	//get all the projects from firestore project object
	const projects = state.firestore.data.projects;
	//select the particular propertty in my firestore object that has this id and assign that to a const project
	const project = projects ? projects[id]: null
	return{
		project : project,
		auth : state.firebase.auth
	}
}

const mapDispatchToProps = dispatch => {
	return{
		comment : (mes)=> dispatch(comment(mes))
	}
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection : 'projects'}
		])
	)(ProjectDetails)