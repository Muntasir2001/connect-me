import React, { useEffect, useRef, useState } from 'react';

import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import "../firebase.js"

const auth = firebase.auth();
const db = firebase.firestore();

const Chatarea = (props) => {
   const { otherUserUID, otherUserEmail, currentUserUID } = props;
   const [user] = useAuthState(auth);
   const [messageDocID, setMessageDocID] = useState();
   const [messages, setMessages] = useState([]);
   const inputMessage = useRef();
   const messageRef = db.collection('message').doc(messageDocID);
   // const query = messageRef.orderBy('createdAt').limit(25);

   // const [messages] = useCollectionData(query, { idField: 'id' });

   const createMessageDocID = () => {
      const a = setMessageDocID(otherUserUID + currentUserUID);
      console.log(setMessageDocID);
   }

   const sendMessage = (mssg) => {
      setMessages(arr => [...arr, inputMessage.current.value]);
      console.log(inputMessage.current.value);
      console.log(messages);
   }

   const saveMessage = (mssgText, sentAt, sentBy) => {

   }

   useEffect(() => {
      createMessageDocID();

      messageRef.get()
         .then(doc => {
            if (doc.exists) {
               console.log("chat exists");
            } else {
               console.log("No such chat! Adding it now")
               db.collection('message').doc(messageDocID).set({

               });
            }
         });

   }, [createMessageDocID]);

   return (
      <>
         <div className="top-bar">
            <p>{otherUserEmail}</p>
            <hr />
         </div>
         <div className="messages">
            <div className="message">
               <img src={user.photoURL} alt="profile" />
               <div className="message-bottom">
                  <h3 className="username">{user.email}</h3>
                  <p>Hello there?</p>
               </div>
            </div>
            {/* <div className="message">
               <img src={user.photoURL} alt="profilee" />
               <div className="message-bottom">
                  <h3 className="username">{user.email}</h3>
                  <p>How are you?</p>
               </div>
            </div>
            <div className="message">
               <img src={user.photoURL} alt="profile" />
               <div className="message-bottom">
                  <h3 className="username">{user.email}</h3>
                  <p>I am good, how are you?</p>
               </div>
            </div> */}
         </div>
         <div className="input-box">
            <form onSubmit={(e) => {
               e.preventDefault();
               sendMessage(e.target.value)
            }}>
               <input ref={inputMessage} type="text" name="message" id="input-message" />
               <input type="submit" value="Send" id="input-submit" />
            </form>
         </div>

      </>
   )

}

export default Chatarea;