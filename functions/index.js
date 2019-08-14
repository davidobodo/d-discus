const functions = require('firebase-functions');
//import firebase admin
const admin = require('firebase-admin');
//initialize my app
admin.initializeApp(functions.config().firebase);

const createNotification = (notification => {
	// create a new firestore collection called notification
	return admin.firestore().collection('notifications')
	//add the notification i passed in here to the document
		.add(notification)
		.then(doc => console.log('notification added', doc));
})

//when i create(onCreate) a document in my projects collection trigger this function
exports.projectCreated = functions.firestore.document('projects/{projectId}')
	.onCreate(doc => {
		// doc.data() has all the info in my firestore projects collection
		const project = doc.data();
		const projectNotification = {
			content: 'Added a new project',
			//the template string is used so that i can output a variable as a string
			user : `${project.authorFirstName} ${project.authorLastName}`,
			//get the time in my firestore database
			time : admin.firestore.FieldValue.serverTimestamp()
		}

		//call createNotification function passing this argument into it
		return createNotification(projectNotification);
	});


//when a new user is created using out auth service call this function
// exports.userJoined = functions.auth.user()
// 	.onCreate(user =>{

//get the document with this user.uid from my users collection
// 		return admin.firestore().collection('users')
// 			.doc(user.uid).get().then(doc =>{

// 				const newUser = doc.data();
// 				const notification = {
// 					content : 'Joined the party',
// 					user : `${newUser.firstName} ${newUser.lastName}`,
// 					time : admin.firestore.FieldValue.serverTimestamp()
// 				};

// 				return createNotification(notification);
// 			});
// 	});


// exports.userJoined = functions.firestore.document("users/{uid}")
// 	.onCreate(user =>{

// 		return admin.firestore().collection('users')
// 			.doc(user.uid).get().then(doc =>{

// 				const newUser = doc.data();
// 				const notification = {
// 					content : 'Joined the party',
// 					user : `${newUser.firstName} ${newUser.lastName}`,
// 					time : admin.firestore.FieldValue.serverTimestamp()
// 				};

// 				return createNotification(notification);
// 			});
// 	});


//call this function the moment i create a document in my users collection(i.e signing up)
exports.userJoined = functions.firestore.document('users/{userID}')
	.onCreate(snap => {
	    const user = snap.data();
	    const displayName = `${user.firstName} ${user.lastName}`;   
	     
	    const userNotification = {
	        content: 'New user join our project',
	        user: displayName ,
       		time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(userNotification)
})
