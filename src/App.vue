<template>
  <div id="app">
    <Menu name="home" mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1" to="/recomend">
        <Icon type="md-videocam" />
        What's New!
      </MenuItem>
      <MenuItem name="2" to="/history">
        <Icon type="md-list-box" />
        My History
      </MenuItem>
    </Menu>
    <router-view/>
  </div>
</template>

<script>
import { Menu, MenuItem, Icon } from 'iview'

export default {
  name: 'app',
  components: {
    "Menu": Menu,
    "MenuItem": MenuItem,
    "Icon": Icon
  },
  data () {
    return {
      theme1: 'light'
    }
  },
  methods: {
    
  }
}
</script>

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
