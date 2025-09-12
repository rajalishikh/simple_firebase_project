// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHK9norvrs005j_G_XiBG9uPdjSArOQok",
  authDomain: "simple-firbase-project-aeeb1.firebaseapp.com",
  projectId: "simple-firbase-project-aeeb1",
  storageBucket: "simple-firbase-project-aeeb1.firebasestorage.app",
  messagingSenderId: "617108221158",
  appId: "1:617108221158:web:75699286af5a5416061f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth