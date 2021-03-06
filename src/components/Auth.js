import '../App.css';
import App from './App';
import Chatbox from './Chatbox.js';

import React, { useRef, useState } from 'react';

import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import "../firebase.js"

const auth = firebase.auth();
const db = firebase.firestore();

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