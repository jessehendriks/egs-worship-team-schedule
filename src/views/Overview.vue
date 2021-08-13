<template>
  <div>
    <header>
      <h1>Muziekrooster 2021/2022</h1>
    </header>

    <section id="table" v-if="data.length > 0">
      <overview-table :data="data"/>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import OverviewTable from '../components/OverviewTable';
import firebase from 'firebase/app';
import 'firebase/firestore';

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

export default {
  components: { OverviewTable },
  setup() {
    let data = ref([]);
    const firebaseData = async () => {
      try {
        const snapshot = await firebase.firestore().collection('schedule')
        .where('date', '>', new Date())
        .orderBy('date').get();
        data.value = snapshot.docs.map(doc => doc.data());
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      firebaseData();
    });

    return {
      data,
    }
  }
}
</script>
