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

   //gets the current state of the logged in user 
   const [user] = useAuthState(auth);
   const [messageDocID, setMessageDocID] = useState();

   //scrolls to the bottom when a new message is entered
   const scrollTo = useRef();

   const [formValue, setFormValue] = useState('');

   const messageRef = db.collection('message').doc(messageDocID).collection('messages');

   //query to get latest messages from the database
   const query = messageRef.orderBy('sentAt').limit(100);
   const [chatMessages] = useCollectionData(query, { idField: 'id' });

   // eslint-disable-next-line
   const createMessageDocID = () => {
      if (otherUserUID > currentUserUID) {
         setMessageDocID(otherUserUID + currentUserUID);
      } else {
         setMessageDocID(currentUserUID + otherUserUID);
      }
   }

   const sendMessage = async (e) => {
      e.preventDefault();

      const { photoURL } = user;

      await messageRef.add({
         text: formValue,
         sentAt: firebase.firestore.FieldValue.serverTimestamp(),
         sentBy: currentUserUID,
         sentByName: user.email,
         photoURL: photoURL
      });

      setFormValue('');

      scrollTo.current.scrollIntoView({ behavior: 'smooth' });
   }

   // useEffect(() => {
   //    createMessageDocID();
   //    // eslint-disable-next-line
   // }, []);


   useEffect(() => {
      createMessageDocID();

      db.collection('message').doc(messageDocID).get()
         .then(doc => {
            if (doc.exists) {
               console.log("chat exists");
            } else {
               console.log("No such chat! Adding it now");
               db.collection('message').doc(messageDocID).set({

               });
            }
         });

   }, [messageDocID, createMessageDocID]);

   return (
      <>
         <div className="top-bar">
            <p>{otherUserEmail}</p>
            <hr />
         </div>
         <div className="messages">
            {
               chatMessages && chatMessages.map((mssg) => {
                  return (
                     <div key={mssg.id} className="message">
                        <img src={mssg.photoURL} alt="profile" />
                        <div className="message-bottom">
                           <h3 className="username">{mssg.sentByName}</h3>
                           <p>{mssg.text}</p>
                        </div>
                     </div>
                  );
               })
            }
            <div id="bottom" ref={scrollTo}></div>
         </div>
         <div className="input-box">
            <form onSubmit={sendMessage}>
               <input type="text" name="message" id="input-message" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
               <input type="submit" value="Send" id="input-submit" />
            </form>
         </div>
      </>
   )
}

export default Chatarea;