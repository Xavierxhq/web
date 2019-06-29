<template>
  <div id="wrap">
  	<p id="wrap-title">{{title}}</p>
    <div id="wrap-pannel">
      <ItemMovie v-for="item in movies" :key="item.id" :info="item.info" :link="item.link" />
    </div>
  </div>
</template>

<script>
import ItemMovie from "@/components/ItemMovie.vue"

export default {
  name: 'ItemMovie',
  data() {
    return {}
  },
  components: {
    ItemMovie
  },
  props: ["title", "movies"],
  created() {

  }
}
</script>

<style>
#wrap {
	padding: 8px;
	margin: 8px;
	text-align: center;
}

#wrap-title {
  padding: 16px;
  size: 32px;
  background: #2D8CE0;
  color: #FFFFFF;
}

#wrap-pannel {
  display: flex;
  flex-wrap: wrap;
}
</style>
