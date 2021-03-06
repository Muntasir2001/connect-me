import React, { useRef, useState } from 'react';

import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import "../firebase.js"

const auth = firebase.auth();
const db = firebase.firestore();

const Message = () => {


}

export default Message;