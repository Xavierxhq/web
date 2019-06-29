<template>
  <div id="wrap">
  	<p>{{info}}</p>
    <img :src="link" />
  </div>
</template>

<script>
export default {
  name: 'ItemMovie',
  data() {
	  return {
	  	info: "information",
	  	link: ""
	  }
  },
  props: ["info", "link"]
}
</script>

<style>
#app {
	padding: 16px;
	margin: 8px;
	text-align: center;
}
</style>
