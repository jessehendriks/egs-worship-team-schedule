<template>
  <div id="toggleThemeMode">
    <label for="checkbox" class="checkbox-label">
    <input type="checkbox" class="checkbox" id="checkbox" v-model="isDarkTheme">
      <font-awesome-icon icon="moon"/>
      <font-awesome-icon icon="sun"/>
      <span class="ball"></span>
    </label>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const isDarkTheme = ref(false);
    if (localStorage.getItem('theme')) {
      setDarkClass(localStorage.getItem('theme') === 'dark');
    } else {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

      setDarkClass(prefersDarkScheme.matches);
    }

    function setDarkClass(bool) {
      if (bool) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-theme');
      } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-theme');
      }

      isDarkTheme.value = localStorage.getItem('theme') === 'dark';
    }

    watch(isDarkTheme, (currentValue) => {
      setDarkClass(currentValue);
    });

    return {
      isDarkTheme,
    };
  }
}
</script>
