import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import commentsReducer from './commentsReducer'


const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
	//get firestore reducer(already prepared reducer). this is for connecting my projects collection to my dashboard
	firestore: firestoreReducer,
	// firebase reducer is used mainly because of its auth service that i want to use to do my authentication
	firebase: firebaseReducer,
	comments: commentsReducer 
});

export default rootReducer