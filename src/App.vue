<template>
  <toggle-theme-mode/>
  <overview/>
  <custom-footer/>
</template>

<script>
import Overview from './views/Overview';
import ToggleThemeMode from './components/toggleThemeMode';
import CustomFooter from './components/CustomFooter';

export default {
  name: 'App',
  components: { CustomFooter, ToggleThemeMode, Overview },
}
</script>

<style>
#app {
  font-family: 'Karla', sans-serif;
}
</style>
