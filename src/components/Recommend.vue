<template>
  <div id="wrap">
    <ItemPannel v-for="item in pannels" :key="item.id" :title="item.title" :movies="item.movies" />
  </div>
</template>

<script>
import ItemPannel from "@/components/ItemPannel.vue"

export default {
  name: 'Recommend',
  components: {
    ItemPannel,
  },
  data() {
    return {
      pannels: [
        {
          id: 1,
          title: "title 1",
          movies: [
            {
              id: 1,
              info: "information 1",
              link: "@/media/movie-example.png"
            },
            {
              id: 2,
              info: "information 2",
              link: "@/media/movie-example.png"
            },
            {
              id: 3,
              info: "information 3",
              link: "@/media/movie-example.png"
            },
            {
              id: 4,
              info: "information 4",
              link: "@/media/movie-example.png"
            }
          ]
        },
        {
          id: 2,
          title: "title 2",
          movies: [
            {
              id: 1,
              info: "information 1",
              link: "@/media/movie-example.png"
            },
            {
              id: 2,
              info: "information 2",
              link: "@/media/movie-example.png"
            },
            {
              id: 3,
              info: "information 3",
              link: "@/media/movie-example.png"
            },
            {
              id: 4,
              info: "information 4",
              link: "@/media/movie-example.png"
            }
          ]
        },
        {
          id: 3,
          title: "title 3",
          movies: [
            {
              id: 1,
              info: "information 1",
              link: "@/media/movie-example.png"
            },
            {
              id: 2,
              info: "information 2",
              link: "@/media/movie-example.png"
            },
            {
              id: 3,
              info: "information 3",
              link: "@/media/movie-example.png"
            },
            {
              id: 4,
              info: "information 4",
              link: "@/media/movie-example.png"
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
