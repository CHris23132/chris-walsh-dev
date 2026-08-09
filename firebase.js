import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC7v3tspF41UINBAswDM3r0c364yrJz88U',
  authDomain: 'innovationlab-2a7bf.firebaseapp.com',
  projectId: 'innovationlab-2a7bf',
  storageBucket: 'innovationlab-2a7bf.firebasestorage.app',
  messagingSenderId: '344321204065',
  appId: '1:344321204065:web:ee5939f9a55e2797546f20',
  measurementId: 'G-7J2G7ZVJS6'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {
  app,
  analytics,
  db,
  collection,
  addDoc,
  serverTimestamp
};
