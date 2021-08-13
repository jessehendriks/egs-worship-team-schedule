import firebase from 'firebase/app';

// Firebase config
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();
//
// messaging.getToken({vapidKey: 'BDKujyhV26n9hJQnXKFDP58CC7YvxPJVbYLDqduTqG2RgRLqo60rm4Pvy5-L-Bqqv2wxz8X-lQaDJ8PJNAZUMmI'}).then((currentToken) => {
//   if (currentToken) {
//     sendTokenToServer(currentToken);
//   } else {
//     console.log('No registration token available. Request permission to generate one.');
//     setTokenSentToServer(false);
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   setTokenSentToServer(false);
// });
//
// function sendTokenToServer(currentToken) {
//   if (!isTokenSentToServer()) {
//     console.log('Sending token to server...', currentToken);
//
//     setTokenSentToServer(true);
//   } else {
//     console.log('Token already sent to server so won\'t send it again ' +
//       'unless it changes');
//   }
// }
//
// function isTokenSentToServer() {
//   return window.localStorage.getItem('sentToServer') === '1';
// }
//
// function setTokenSentToServer(sent) {
//   window.localStorage.setItem('sentToServer', sent ? '1' : '0');
// }
//
// function requestPermission() {
//   console.log('Requesting permission...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//       // TODO(developer): Retrieve a registration token for use with FCM.
//       // In many cases once an app has been granted notification permission,
//       // it should update its UI reflecting this.
//     } else {
//       console.log('Unable to get permission to notify.');
//     }
//   });
// }
//
// requestPermission();
