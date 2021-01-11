import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyCCmcCSqbgiyDyeJCOQqZlJOBo1GUA8XB0',
    authDomain: 'firegram-1a769.firebaseapp.com',
    projectId: 'firegram-1a769',
    storageBucket: 'firegram-1a769.appspot.com',
    messagingSenderId: '691629516748',
    appId: '1:691629516748:web:d0dd7588c82886971ddf69'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
