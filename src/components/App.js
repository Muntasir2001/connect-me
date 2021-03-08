import React from 'react';

import '../App.css';
import Auth from './Auth';
import Chatbox from './Chatbox';

import firebase from "firebase/app";
import "../firebase.js";
import "firebase/auth";
import "firebase/firestore";

import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();
const db = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <>
      {/* checks to see whether if user is logged in or not */}
      {user ? <Chatbox /> : <Auth />}
    </>
  )
}

export default App;
