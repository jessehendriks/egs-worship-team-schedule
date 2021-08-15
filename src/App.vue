<template>
  <options/>
  <overview/>
  <custom-footer/>
</template>

<script>
import Overview from './views/Overview';
import CustomFooter from './components/CustomFooter';
import Options from './components/Options';

export default {
  name: 'App',
  components: { Options, CustomFooter, Overview },
}
</script>

<style>
#app {
  font-family: 'Karla', sans-serif;
}
</style>
