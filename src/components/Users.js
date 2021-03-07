import React, { useRef, useState } from 'react';
import '../App.css';

import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import "../firebase.js"

const auth = firebase.auth();
const db = firebase.firestore();

const Users = (props) => {
   const { uid, photoURL, email } = props;
   console.log(props);

   return (
      <div key={uid} className="user">
         <img src={photoURL} alt="profile" />
         <p>{email}</p>
      </div>
   )
}

export default Users;