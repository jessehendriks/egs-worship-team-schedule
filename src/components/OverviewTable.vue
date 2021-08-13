<template>
  <table>
    <thead>
    <tr>
      <th class="show-xs">Datum</th>
      <th class="show-xs">Team</th>
      <th class="show-md">Zangleider</th>
      <th class="show-md">Spreker</th>
      <th class="show-lg">Oudste</th>
      <th class="show-lg">Opmerking</th>
    </tr>
    </thead>
    <tbody v-if="data && data.length > 0">
      <table-row
        v-for="item in data"
        :key="item.date"
        :item="item"
      />
    </tbody>
    <tbody v-else>
    <tr class="no-data" >
      <td colspan="100%"><span>Er is geen data beschikbaar</span> <span class="emoji">&#128546;</span></td>
    </tr>
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

