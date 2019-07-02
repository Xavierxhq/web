<template>
  <div class="wrap">
  	<p class="wrap-info">{{info}}</p>
    <img class="wrap-img" :src="img" />
  </div>
</template>

<style scoped>
.wrap {
  padding: 8px;
  margin: 8px;
  border-bottom: 2px solid #2D8CE0;
}

.wrap-info {
  padding: 8px;
}

.wrap-img {
  width: 136px;
  height: 193px;
}
</style>

<script>
  import MovieExample from "@/assets/scut.png"

  export default {
    name: 'ItemMovie',
    data() {
  	  return {
        img: MovieExample
      }
    },
    props: ["info", "link"],
    created() {
      this.update(this.$props.link)
    },
    watch: {
      link: function(new_v, old_v) {
        this.update(this.$props.link)
      }
    },
    methods: {
      update(l) {
        let prefix = "/static/img/"
        this.img = prefix + "/" + l
      }
    }
  }
</script>
