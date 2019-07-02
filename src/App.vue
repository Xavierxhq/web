<template>
  <router-view id="app" />
</template>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>

<script>
  export default {
    name: 'app'
  }
</script>
