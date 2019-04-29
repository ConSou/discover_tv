import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyDyaCMLykF_nvgXyC_waiLmRkvSc7m41ns",
  authDomain: "tvdiscoveryapp.firebaseapp.com",
  databaseURL: "https://tvdiscoveryapp.firebaseio.com",
  projectId: "tvdiscoveryapp",
  storageBucket: "tvdiscoveryapp.appspot.com",
  messagingSenderId: "406836284043"
};
firebase.initializeApp(config);
firebase.firestore()

export default firebase;
