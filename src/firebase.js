import firebase from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyBtROcvde12X-P0MMYs-dq_BGiGfYGh8KM",
   authDomain: "testingmuntasir-connectme.firebaseapp.com",
   // databaseURL: "https://connect-me-567b8-default-rtdb.firebaseio.com",
   projectId: "testingmuntasir-connectme",
   storageBucket: "testingmuntasir-connectme.appspot.com",
   messagingSenderId: "79924300817",
   appId: "1:79924300817:web:523f1992af18677f53b5b0",
   // measurementId: "G-54C2W2KNBD"
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