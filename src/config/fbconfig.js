 import firebase from 'firebase/app';
 import 'firebase/firestore';
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
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase