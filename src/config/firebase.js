// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail
 } 
 from 'firebase/auth';
 import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

 import { 
  getFirestore, 
  addDoc, 
  collection
  } from 'firebase/firestore';
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDonDPSZVukTZ8DaU6VHxddL_QSB7nOoUI",
  authDomain: "project-777b0.firebaseapp.com",
  projectId: "project-777b0",
  storageBucket: "project-777b0.appspot.com",
  messagingSenderId: "625099914139",
  appId: "1:625099914139:web:93665c97acf8b573663f3e",
  measurementId: "G-QNRLSRDGEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();



export const onAuthStateChange = () => {
  return auth().onAuthStateChanged(user => {
    if (user) {
      console.log("The user is logged in");
    } else {
      console.log("The user is not logged in");
    }
  });
}

export const storage = getStorage();


export const logout = () => {
  signOut(auth);
};


export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}





// export const signUp = async (email, password) => {
//   try {
//     const userCredentials = await createUserWithEmailAndPassword(
//       auth, 
//       email, 
//       password
//     );
//     const user = userCredentials.user
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       email: user.email,
//     })
//     return true;
//   } catch (error) {
//     return{
//       error: error.message
//     }
//   }
// }


// export const logOut = async() => {
//   try {
//     await signOut(auth)
//     return true
//   } catch (error) {
//     return false
//   }
// }

