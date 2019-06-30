<template>
  <div class="wrap">
  	<div class="wrap-title">
      <p class="wrap-title-p">
        <Icon :type="type" />
        {{title}}
      </p>
      <router-link class="wrap-title-link" :to="link">
        <Icon type="md-arrow-dropright-circle" />
        查看更多
      </router-link>
    </div>
    <div class="wrap-pannel">
      <ItemMovie v-for="item in movies" :key="item.id" :info="item.info" :link="item.link" />
    </div>
  </div>
</template>

<style scoped>
.wrap {
  /*padding: 8px;
  margin: 8px;*/
  text-align: center;
}

.wrap-title {
  display: flex;
  padding: 16px;
  background: #2D8CE0;
  color: #FFFFFF;
}

.wrap-title-p {
  flex-grow: 1;
  size: 72px;
  text-align: left;
}

.wrap-title-link {
  color: #FFFFFF;
}

.wrap-pannel {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
  import { Icon } from 'iview'
  import ItemMovie from "@/components/ItemMovie.vue"

  export default {
    name: 'ItemPannel',
    data() {
      return {}
    },
    components: {
      Icon,
      ItemMovie
    },
    props: ["type", "link", "title", "movies"],
    created() {
      // console.log("ItemPannel created.")
    },
    methods: {
      list_more() {
        console.log("to list more movies")
      }
    }
  }
</script>
