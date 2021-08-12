<template>
  <table>
    <thead>
    <tr>
      <th class="show-xs">Datum</th>
      <th class="show-xs">Team</th>
      <th class="show-md">Zangleider</th>
      <th class="show-md">Spreker</th>
      <th class="show-md">Oudste</th>
      <th class="show-md">Opmerking</th>
    </tr>
    </thead>
    <tbody>
      <table-row
        v-for="item in data"
        :key="item.date"
        :item="item"
      />
    </tbody>
  </table>
</template>

<script>
import TableRow from './TableRow';

export default {
  components: { TableRow },
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
