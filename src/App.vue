<template>
  <toggle-theme-mode/>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from './components/Footer';
import ToggleThemeMode from './components/toggleThemeMode';

export default {
  name: 'App',
  components: { ToggleThemeMode, Footer },
}

</script>

<style>
#app {
  font-family: 'Karla', sans-serif;
}
</style>
