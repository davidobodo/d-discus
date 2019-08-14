import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
//firestoreConnect is to identify the particular collection i want to connect to in my database
import { firestoreConnect } from 'react-redux-firebase'
//compose is for joining together the two higher order components present in this component
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import './Dashboard.css'

class Dashboard extends Component {

	

	render(){
		const { projects, auth, notifications } = this.props;

		if(!auth.uid) return <Redirect to='/signin'/>
	
		return(
			<div className="container dashboard dash">
				<div className="row">
					<div className=" col s12 m6">
						<ProjectList projects={projects}/>
					</div>
					<div className=" col s12 m5 offset-m1">
						<Notifications notifications={notifications}/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		//the projects can actually be seen in both the ordered object and data object in firestore but i chose the ordered object because it has numbers, so its kind of arranged(i need my projects to be arranged)
		projects : state.firestore.ordered.projects,
		auth : state.firebase.auth,
		//notifications are also seen inside my firestore ordered object
		notifications: state.firestore.ordered.notifications
	}
}


export default compose(
		  connect(mapStateToProps),
		  //firestore is a function that takes in an array, inside the array we have objects that i want to connect to this component
  		firestoreConnect([
    		{ collection: 'projects', orderBy: ['createdAt', 'desc'] },
    		{ collection: 'notifications', limit:3, orderBy: ['time', 'desc']}
  		])
)(Dashboard)