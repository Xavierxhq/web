<template>
  <div id="wrap">
    <RadioGroup v-model="alg">
      <Radio label="推荐1"></Radio>
      <Radio label="推荐2"></Radio>
      <Radio label="推荐3"></Radio>
      <Radio label="推荐4"></Radio>
    </RadioGroup>
    <ItemPannel v-for="item in pannels" :key="item.id" :type="item.type" :link="item.link" :title="item.title" :movies="item.movies" />
  </div>
</template>

<style scoped>
#wrap {
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>

<script>
  import { RadioGroup, Radio } from 'iview'
  import ItemPannel from "@/components/ItemPannel.vue"
  import { mapGetters } from 'vuex'
  import types from '@/store/types'
  import mock from '@/mock'

  export default {
    name: 'Recommend',
    components: {
      ItemPannel,
      RadioGroup,
      Radio
    },
    data() {
      return {
        alg_ls: ["推荐1", "推荐2", "推荐3", "推荐4"],
        alg: "推荐1",
        pannels: [
          {
            id: 1,
            type: "md-alert",
            link: "/recomend",
            title: "Most Recommend",
            movies: [],
          },
          {
            id: 2,
            type: "md-aperture",
            link: "/recomend",
            title: "You might like",
            movies: [],
          },
        ]
      }
    },
    created() {
      this.update(this.alg)
    },
    watch: {
      alg: function(new_v, old_v) {
        this.update(new_v)
      }
    },
    computed: {
      ...mapGetters(["recomend_ls", "like_ls"])
    },
    methods: {
      update(content) {
        let recomend_alg = this.alg_ls.findIndex(item => item == content)
        let _recomend_ls = mock.mock_recommend(recomend_alg)
        let _like_ls = mock.mock_recommend(recomend_alg)

        this.$store.commit(types.GET_RECOMMEND_LIST, _recomend_ls)
        this.pannels[0].movies = this.recomend_ls
        this.$store.commit(types.GET_LIKE_LIST, _like_ls)
        this.pannels[1].movies = this.like_ls
      }
    }
  }
</script>
