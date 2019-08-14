 //the app at the front of this import ensures that i import only the core functionality and not the whole firebase
 //if i removed the /app from my import there would be a warning in my console.log
 import firebase from 'firebase/app';

 //firestore is the database from firebase we will be using
 import 'firebase/firestore';

 //i would be using firebase auth services to do all the authentication in this app
 import 'firebase/auth';

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBl4SvVOfqbrP-K8lud7xiPSBEtoum5J6Y",
    authDomain: "myfirst-fullstackproject.firebaseapp.com",
    databaseURL: "https://myfirst-fullstackproject.firebaseio.com",
    projectId: "myfirst-fullstackproject",
    storageBucket: "myfirst-fullstackproject.appspot.com",
    messagingSenderId: "732658371369",
    appId: "1:732658371369:web:ac4733a068f62192"
  };

  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase