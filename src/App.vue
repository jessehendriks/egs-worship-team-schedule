<template>
  <div class="wrapper">
    <overview/>
  </div>
  <Footer/>
</template>

<script>
import Overview from './components/Overview';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: { Overview, Footer },
}
</script>

<style>
#app {
  font-family: 'Karla', sans-serif;
}
</style>
