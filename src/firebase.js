import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC4dy8cuIqjzFXS6Eyu6edSWhn1375M5RA",
  authDomain: "m7mod-yt.firebaseapp.com",
  projectId: "m7mod-yt",
  storageBucket: "m7mod-yt.appspot.com",
  messagingSenderId: "900556272182",
  appId: "1:900556272182:web:a97fd8271b377858e3de97"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
 