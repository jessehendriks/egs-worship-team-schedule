import firebase from 'firebase/app';
import 'firebase/firestore';

class Firebase {
  constructor() {
    if (firebase.apps.length === 0) {
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

      firebase.firestore().enablePersistence()
        .catch((err) => {
          if (err.code === 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
          } else if (err.code === 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
          }
        });
      // Subsequent queries will use persistence, if it was enabled successfully
    }
  }

  async retrieveItems() {
    console.log('retrieve items');
    const snapshot = await firebase.firestore().collection('schedule')
      .where('date', '>', new Date())
      .orderBy('date').get();
    return snapshot.docs.map(doc => doc.data());
  }

  async create(object) {
    return await firebase.firestore().collection('schedule').add(object);
  }
}

export default Firebase;
