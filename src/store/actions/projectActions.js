export const createProject = (project) =>{
	//getFirestore as an argument(i passed this in index.js as an argument into thunk) 
	//the curly braces exist because it is destructuring that i am using
	return (dispatch, getState, { getFirestore }) => {
		//initialize the firestore and put everything into a constant
		const firestore = getFirestore();

		//i need to output the name of the user in my database hence
		//get the profile of the current user from firebase.profile object
		const profile = getState().firebase.profile;
		//get its uid from this property
		const authorId = getState().firebase.auth.uid;
		//go to firestore and select the collections object(this is in seen in my database)
		//get the projects collection and add this object into a new project
		firestore.collection('projects').add({
			...project,
			authorFirstName : profile.firstName,
			authorLastName : profile.lastName,
			authorId : authorId,
			createdAt: new Date()

		}).then(() => {
			dispatch({ type: 'CREATE_PROJECT_SUCCESS' , project });
		}).catch((err) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR' , err})
		});
		
	}
};

export const onComment = () => {
	console.log('i am reaching this')
	return {
		
	}
}