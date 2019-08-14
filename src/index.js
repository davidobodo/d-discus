import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbconfig from './config/fbconfig'

const store = createStore(rootReducer, 
	//these store enhancers are to give my store extra ability 
	compose(
	applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),//store enhancer, with extra argument is a function that enables me to be able to pass "EXTRA ARGUMENTS" into my thunk function(check out the actions folder to see my thunk)
	reduxFirestore(fbconfig),// store enhancer, fbconfig was passed in here so that firestore would know the exact project in my database to interact with(same with the passing of the argument below)
	//i want to use the information of my user in firestore hence i connect that info to my firebase using useFirestoreForProfile
	//then i specify the actual details i want firebase to take and that is the users collection
	//note, before doing this firebase.profile property was empty, but after doing this i would see the information of my user in the object
	reactReduxFirebase(fbconfig, {useFirestoreForProfile : true, userProfile : 'users', attachAuthIsReady: true})//store enhancer, attachAuthIsReady is there so that firebase auth services is done doing its work
	)
);


//this code ensures that my app doesnt render until my firebase auth service is done checking whether i am logged in or out
store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
	serviceWorker.unregister();
})





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

