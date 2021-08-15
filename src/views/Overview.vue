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
import Firebase from '../classes/Firebase';

export default {
  components: { OverviewTable },
  setup() {
    let data = ref([]);
    const firebaseData = async () => {

      const firebase = new Firebase();

      try {
        data.value = await firebase.retrieveItems();
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
