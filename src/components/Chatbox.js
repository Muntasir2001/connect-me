import React, { useRef, useState } from 'react';

import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";
import Users from './Users';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import "../firebase.js"

const auth = firebase.auth();
const db = firebase.firestore();

const Chatbox = () => {
   const [user] = useAuthState(auth);

   const logout = (e) => {
      e.preventDefault();
   }


   return (
      <>
         <div className="chatbox-body">
            <div className="chatbox-left">
               <div className="topbar">
                  <h3>Connect Me</h3>
                  <button id="logout-btn" onClick={logout}>Log Out</button>
               </div>
               <div className="self">
                  <img src={user.photoURL} alt="profile-image" />
                  <p>{user.email}</p>
               </div>
               <hr />
               <div className="users">
                  <div className="user">
                     <img src={user.photoURL} alt="profile-image" />
                     <p>{user.email}</p>
                  </div>
                  <div className="user">
                     <img src={user.photoURL} alt="profile-image" />
                     <p>{user.email}</p>
                  </div>
                  <div className="user">
                     <img src={user.photoURL} alt="profile-image" />
                     <p>{user.email}</p>
                  </div>
               </div>
            </div>
            <div className="chatbox-right">
               <div className="top-bar">
                  <p>{user.email}</p>
                  <hr />
               </div>
               <div className="messages">
                  <div className="message">
                     <img src={user.photoURL} alt="profile-image" />
                     <div className="message-bottom">
                        <h3 className="username">{user.email}</h3>
                        <p>Hello there?</p>
                     </div>
                  </div>
                  <div className="message">
                     <img src={user.photoURL} alt="profile-image" />
                     <div className="message-bottom">
                        <h3 className="username">{user.email}</h3>
                        <p>How are you?</p>
                     </div>
                  </div>
                  <div className="message">
                     <img src={user.photoURL} alt="profile-image" />
                     <div className="message-bottom">
                        <h3 className="username">{user.email}</h3>
                        <p>I am good, how are you?</p>
                     </div>
                  </div>
                  <div className="message">
                     <img src={user.photoURL} alt="profile-image" />
                     <div className="message-bottom">
                        <h3 className="username">{user.email}</h3>
                        <p>I am good, how are you?</p>
                     </div>
                  </div>
                  <div className="message">
                     <img src={user.photoURL} alt="profile-image" />
                     <div className="message-bottom">
                        <h3 className="username">{user.email}</h3>
                        <p>I am good, how are you?</p>
                     </div>
                  </div>
                  <div className="message">
                     <img src={user.photoURL} alt="profile-image" />
                     <div className="message-bottom">
                        <h3 className="username">{user.email}</h3>
                        <p>I am good, how are you?</p>
                     </div>
                  </div>
                  <div className="message">
                     <img src={user.photoURL} alt="profile-image" />
                     <div className="message-bottom">
                        <h3 className="username">{user.email}</h3>
                        <p>I am good, how are you?</p>
                     </div>
                  </div>
                  <div className="message">
                     <img src={user.photoURL} alt="profile-image" />
                     <div className="message-bottom">
                        <h3 className="username">{user.email}</h3>
                        <p>I am good, how are you?</p>
                     </div>
                  </div>
                  <div className="message">
                     <img src={user.photoURL} alt="profile-image" />
                     <div className="message-bottom">
                        <h3 className="username">{user.email}</h3>
                        <p>I am good, how are you?</p>
                     </div>
                  </div>
               </div>
               <div className="input-box">
                  <form>
                     <input type="text" name="message" id="input-message" />
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}

export default Chatbox;