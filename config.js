import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
 apiKey: "AIzaSyAWYf1-Yp_foQEbrGDKoQ3sGjKwYpSNi5Q",
  authDomain: "e-library-41ddf.firebaseapp.com",
  projectId: "e-library-41ddf",
  storageBucket: "e-library-41ddf.appspot.com",
  messagingSenderId: "724054347624",
  appId: "1:724054347624:web:66ac43e548c9a3f49f50dd",
  measurementId: "G-G3K7BWL5LH"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
