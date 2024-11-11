// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOk_qAGaiiCHB8sHjvSryr4k6crbwsteE",
  authDomain: "react-auth-with-email-pass.firebaseapp.com",
  projectId: "react-auth-with-email-pass",
  storageBucket: "react-auth-with-email-pass.firebasestorage.app",
  messagingSenderId: "257957073543",
  appId: "1:257957073543:web:996e90c60cdb53429cde22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;