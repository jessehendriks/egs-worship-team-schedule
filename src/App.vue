<template>
  <toggle-theme-mode/>
  <overview/>
  <custom-footer/>
</template>

<script>
import CustomFooter from './components/CustomFooter';
import ToggleThemeMode from './components/toggleThemeMode';
import Overview from './views/Overview';

export default {
  name: 'App',
  components: { Overview, ToggleThemeMode, CustomFooter },
}
</script>

<style>
#app {
  font-family: 'Karla', sans-serif;
}
</style>
