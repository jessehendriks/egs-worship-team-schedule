<template>
  <tr @click="toggleRow" :class="{ 'active-row': opened }">
    <th class="show-xs">{{ convertedDate }}</th>
    <td class="show-xs">{{ item.team }}</td>
    <td class="show-md">{{ item.worship_leader }}</td>
    <td class="show-md">{{ item.preacher }}</td>
    <td class="show-md">{{ item.eldest }}</td>
    <td class="show-md">{{ item.remark }}</td>
  </tr>
  <tr v-if="opened" class="collapse-row">
    <td colspan="100%">
      <p>
        <strong>Zangleider: </strong>
        {{ item.worship_leader }}
      </p>
      <p>
        <strong>Spreker: </strong>
        {{ item.preacher }}
      </p>
      <p>
        <strong>Oudste: </strong>
        {{ item.eldest }}
      </p>
      <p>
        <strong>Opmerking: </strong>
        {{ item.remark }}
      </p>
    </td>
  </tr>
</template>

<script>
import { ref, computed } from 'vue';
import eventBus from '../util/eventBus';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    eventBus.$on('blaat', () => {
      opened.value = false;
    });

    const opened = ref(false);
    const toggleRow = () => {
      if (!opened.value) {
        eventBus.$emit('blaat');
      }

      opened.value = !opened.value;
    };
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const convertedDate = computed(() => props.item.date.toDate().toLocaleDateString('nl-NL', options))

    return {
      opened,
      toggleRow,
      convertedDate,
    }
  }
}
</script>
