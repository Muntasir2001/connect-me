import React, { useState, useEffect, useRef } from 'react';

import '../App.css';
import Auth from './Auth';
import Chatbox from './Chatbox';

import firebase from "firebase/app";
import "../firebase.js";
import "firebase/auth";
import "firebase/firestore";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const auth = firebase.auth();
const db = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <>
      {user ? <Chatbox /> : <Auth />}
    </>
  )
}

export default App;
