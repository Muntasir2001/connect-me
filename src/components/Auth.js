import React from 'react';
import '../App.css';

import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

import "../firebase.js"

const auth = firebase.auth();

const Auth = () => {
   //handle login
   const handleLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
   }

   return (
      <>
         <div className="auth-body">
            <nav id="nav">
               <div className="container">
                  <h1>Connect Me</h1>
               </div>
            </nav>
            <div className="form-login">
               <input id="login-btn" type="submit" value="Login With Google" onClick={handleLogin} />
            </div>
         </div>
      </>

   )
}

export default Auth;