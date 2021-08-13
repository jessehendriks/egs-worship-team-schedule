<template>
  <div class="wrapper">
    <router-view/>
  </div>
  <Footer/>
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'App',
  components: { Footer },
}

</script>

<style>
#app {
  font-family: 'Karla', sans-serif;
}
</style>
