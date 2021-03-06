import firebase from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyA2OUhI9wMmzZIAxcOvGJU6V9gfy_Ew4-I",
   authDomain: "connect-me-567b8.firebaseapp.com",
   databaseURL: "https://connect-me-567b8-default-rtdb.firebaseio.com",
   projectId: "connect-me-567b8",
   storageBucket: "connect-me-567b8.appspot.com",
   messagingSenderId: "506373005424",
   appId: "1:506373005424:web:549fd3601f7ae4623e14b5",
   measurementId: "G-54C2W2KNBD"
};

firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore()



// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//       databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//          projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//             storageBucket: process.env.REACT_APP_FIREBASE_API_KEY_STORAGE_BUCKET,
//                messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//                   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//                      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID