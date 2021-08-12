<template>
  <div class="filter">
    <div v-for="option in filterOptions" :key="option">
      <label for="toggle">{{ option }}</label>
      <input type="checkbox" id="toggle" class="visually-hidden">
      <div class="control-me"></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const filterOptions = ['Leef', 'Puur', 'Vrij'];

    return {
      filterOptions
    }
  }
}
</script>

<style>
label {
  background: #e35d5b;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
}

.visually-hidden {
  position: absolute;
  left: -100vw;

  /* Note, you may want to position the checkbox over top the label and set the opacity to zero instead. It can be better for accessibilty on some touch devices for discoverability. */
}
</style>
