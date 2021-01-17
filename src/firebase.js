import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB9AoW0vxk-hw4cJRW2Jsva2s3aECSTlaU",
    authDomain: "slack-clone-1e9bd.firebaseapp.com",
    projectId: "slack-clone-1e9bd",
    storageBucket: "slack-clone-1e9bd.appspot.com",
    messagingSenderId: "719389930227",
    appId: "1:719389930227:web:5604ecf44bd1354a323d86"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;