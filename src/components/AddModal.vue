<template>
  <modal ref="openModal">
    <template v-slot:header>
      <h2>Toevoegen</h2>
    </template>

    <template v-slot:body>
      <label for="date">Datum</label>
      <input id="date" type="text" v-model="date">

      <label for="team">Team</label>
      <input id="team" type="text" v-model="team">

      <label for="worship_leader">Zangleider</label>
      <input id="worship_leader" type="text" v-model="worship_leader">

      <label for="preacher">Spreker</label>
      <input id="preacher" type="text" v-model="preacher">

      <label for="eldest">Oudste</label>
      <input id="eldest" type="text" v-model="eldest">

      <label for="remark">Opmerking</label>
      <textarea id="remark" v-model="remark"/>
    </template>

    <template v-slot:footer>
      <div class="d-flex align-items-center justify-content-between">
        <button class="primary" @click="onSubmit()">Opslaan</button>
      </div>
    </template>
  </modal>

</template>

<script>
import { ref } from 'vue';
import Modal from './Modal';
import eventBus from '../util/eventBus';
import Firebase from '../classes/Firebase';

export default {
  name: 'AddModal',
  components: { Modal },
  setup() {
    const openModal = ref(null);

    eventBus.$on('open-add-modal', () => {
      openModal.value.openModal();
    });

    const date = ref('');
    const team = ref('');
    const worship_leader = ref('');
    const preacher = ref('');
    const eldest = ref('');
    const remark = ref('');

    const onSubmit = async () => {
      const firebase = new Firebase();

      try {
        const data = {
          date: new Date(date.value + ' 10:00'),
          team: team.value,
          worship_leader: worship_leader.value,
          preacher: preacher.value,
          eldest: eldest.value,
          remark: remark.value,
        }

        await firebase.create(data);

      } catch (error) {
        console.error(error);
      }

      openModal.value.closeModal();
    }

    return {
      date,
      team,
      worship_leader,
      preacher,
      eldest,
      remark,
      onSubmit,
      openModal
    }
  }
}
</script>
