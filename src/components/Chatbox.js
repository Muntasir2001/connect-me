import React, { useEffect, useState } from 'react';

import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";
import Chatarea from './Chatarea'

import { useAuthState } from 'react-firebase-hooks/auth';

import "../firebase.js"

const auth = firebase.auth();
const db = firebase.firestore();

const Chatbox = () => {
   const [user] = useAuthState(auth);
   const [users, setUsers] = useState([]);
   const [isTextArea, setIsTextArea] = useState(false);
   const [otherUserUID, setOtherUserUID] = useState();
   const [otherUserEmail, setOtherUserEmail] = useState();

   let docRef = db.collection("user").doc(user.uid);

   const getUsers = () => {
      let usersSet = [];
      db.collection('user').get()
         .then((data) => {
            data.docs.forEach(doc => {
               usersSet.push(doc.data());
            });
            setUsers(usersSet);
         })
         .catch(err => console.log(err));
      return usersSet;
   }

   //create text area
   const createTextArea = (uid, email) => {
      setIsTextArea(true);
      setOtherUserUID(uid);
      setOtherUserEmail(email);
   }

   useEffect(() => {
      docRef.get()
         .then((doc) => {
            if (doc.exists) {
               console.log("Doc exists");
            } else {
               // doc.data() will be undefined in this case
               console.log("No such document! Adding it now");
               db.collection('user').doc(user.uid).set({
                  uid: user.uid,
                  email: user.email,
                  photoURL: user.photoURL,
                  chats: []
               });
            }
         }).catch((error) => {
            console.log("Error getting document:", error);
         });

      getUsers();
   }, []);

   return (
      <>
         <div className="chatbox-body">
            <div className="chatbox-left">
               <div className="topbar">
                  <h3>Connect Me</h3>
                  <button id="logout-btn" onClick={() => auth.signOut()}>Log Out</button>
               </div>
               <div className="self">
                  <img src={user.photoURL} alt="profile" />
                  <p>{user.email}</p>
               </div>
               <hr />
               <div className="users">
                  {
                     users.map((data) => {
                        const { uid, photoURL, email } = data;
                        if (user.uid !== uid) {
                           return (
                              <div onClick={() => createTextArea(uid, email)} key={uid} className="user">
                                 <img src={photoURL} alt="profile" />
                                 <p>{email}</p>
                              </div>
                           );
                        }
                     })
                  }
               </div>
            </div>
            <div className="chatbox-right">
               {isTextArea ? <Chatarea otherUserUID={otherUserUID} otherUserEmail={otherUserEmail} currentUserUID={user.uid} /> : null}
            </div>
         </div>
      </>
   )
}

export default Chatbox;