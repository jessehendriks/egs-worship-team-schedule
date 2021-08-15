<template>
  <section id="options">
    <div class="column">
      <toggle-theme-mode/>
    </div>

    <div class="column align-right">
      <button type="button" @click="openAddModal">
        <font-awesome-icon icon="plus"/>
      </button>
    </div>
  </section>

  <add-modal ref="addModal"/>
</template>

<script>
import ToggleThemeMode from './toggleThemeMode';
import AddModal from './AddModal';
import eventBus from '../util/eventBus';

export default {
  name: 'Options',
  components: { AddModal, ToggleThemeMode },
  setup() {
    const openAddModal = () => {
      eventBus.$emit('open-add-modal');
    }

    return {
      openAddModal,
    }
  }
}
</script>
