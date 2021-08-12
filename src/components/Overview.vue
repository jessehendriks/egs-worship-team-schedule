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
import OverviewTable from './OverviewTable';
import firebase from 'firebase/app';

export default {
  components: { OverviewTable },
  setup() {
    let data = ref([]);
    const firebaseData = async () => {
      try {
        const snapshot = await firebase.firestore().collection('schedule').get();
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
