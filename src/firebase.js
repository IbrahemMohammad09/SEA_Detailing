// src/firebase.js

import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyA-kOAjNWP_VJBepNvhgiBi3K126IPteK0",
    authDomain: "sea-detailing.firebaseapp.com",
    projectId: "sea-detailing",
    storageBucket: "sea-detailing.firebasestorage.app",
    messagingSenderId: "940510230945",
    appId: "1:940510230945:web:94983df58ef74c0c9a73e0",
    measurementId: "G-VJ9CRWD76C"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = firebaseApp.messaging();

export { messaging };
