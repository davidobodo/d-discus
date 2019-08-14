import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'
import './Navbar.css'
import logo from '../../assets/d.jpg'

const Navbar = (props) => {

	const { auth, profile } = props;

	//using the uid again to guard certain links
	const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/>;
	return(
		<nav className=" nav-wrapper grey darken-3">
			<div className="container">
				<Link to='/'><img src={logo} className="myLogo"/></Link>
				{ links }			
			</div>
		</nav>
	)
}


const mapStateToProps = (state) => {
	return {
		auth : state.firebase.auth,
		profile : state.firebase.profile
	}
}

export default connect(mapStateToProps)(Navbar)