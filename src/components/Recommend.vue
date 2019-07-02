<template>
  <div id="wrap">
    <RadioGroup class="wrap-algtext" v-model="algtext">
      <Radio v-for="(item, index) in algtext_ls" :key="index" :label="item"></Radio>
    </RadioGroup>
    <Page class="wrap-page" :current="cur" :total="tot" @on-change="update_page" small show-total show-elevator />
    <ItemPannel :type="type" :link="link" :title="title" :movies="get_movies" />
  </div>
</template>

<style scoped>
#wrap {
  padding-top: 16px;
  padding-bottom: 16px;
}

.wrap-algtext, .wrap-page {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>

<script>
  import { RadioGroup, Radio, Page } from 'iview'
  import ItemPannel from "@/components/ItemPannel.vue"
  import { mapGetters } from 'vuex'
  import types from '@/store/types'
  import mock from '@/mock'

  export default {
    name: 'Recommend',
    components: {
      ItemPannel,
      RadioGroup,
      Radio,
      Page,
    },
    data() {
      return {
        algtext_ls: ["推荐1", "推荐2", "推荐3"],
        algtext: "推荐1",
        cur: 1,
        tot: 0,
        ls1: [],
        ls2: [],
        ls3: [],
        ls4: [],
        id: 1,
        type: "md-alert",
        link: "/recomend",
        title: "Most Recommend",
      }
    },
    created() {
      this.init(this.algtext)
    },
    watch: {
      algtext: function(new_v, old_v) {
        this.cur = 1
        this.tot = 0
        this.update_recommend(new_v)
      }
    },
    computed: {
      ...mapGetters(["recomend_ls_1", "recomend_ls_2", "recomend_ls_3", "recomend_ls_4", "like_ls"]),

      get_movies() {
        let _recomend_ls = []
        switch (this.algtext) {
          case "推荐1":
            if (this.recomend_ls_1.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_1, _recomend_ls)
            }
            this.$store.commit(types.CHANGE_ALG, 1)
            _recomend_ls = this.recomend_ls_1
            break
          case "推荐2":
            if (this.recomend_ls_2.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_2, _recomend_ls)
            }
            this.$store.commit(types.CHANGE_ALG, 2)
            _recomend_ls = this.recomend_ls_2
            break
          case "推荐3":
            if (this.recomend_ls_3.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_3, _recomend_ls)
            }
            this.$store.commit(types.CHANGE_ALG, 3)
            _recomend_ls = this.recomend_ls_3
            break
          case "推荐4":
            if (this.recomend_ls_4.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_4, _recomend_ls)
            }
            this.$store.commit(types.CHANGE_ALG, 4)
            _recomend_ls = this.recomend_ls_4
            break
          default:
            break
        }
        this.tot = _recomend_ls.length
        let cur_movies = _recomend_ls.slice(10 * (this.cur - 1), 10 * this.cur)
        return cur_movies
      }
    },
    methods: {
      init(algtext) {
        let _recomend_ls = mock.mock_recommend()
        this.$store.commit(types.GET_RECOMMEND_LIST_1, _recomend_ls)
        this.$store.commit(types.CHANGE_ALG, 1)
        this.tot = _recomend_ls.length
      },

      update_recommend(algtext) {
        let _recomend_ls = mock.mock_recommend()
        switch (algtext) {
          case "推荐1":
            if (this.recomend_ls_1.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_1, _recomend_ls)
            }
            this.$store.commit(types.CHANGE_ALG, 1)
            break
          case "推荐2":
            if (this.recomend_ls_2.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_2, _recomend_ls)
            }
            this.$store.commit(types.CHANGE_ALG, 2)
            break
          case "推荐3":
            if (this.recomend_ls_3.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_3, _recomend_ls)
            }
            this.$store.commit(types.CHANGE_ALG, 3)
            break
          case "推荐4":
            if (this.recomend_ls_4.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_4, _recomend_ls)
            }
            this.$store.commit(types.CHANGE_ALG, 4)
            break
          default:
            break
        }
        this.tot = _recomend_ls.length
        this.update_page(this.cur)
      },

      update_page(page) {
        this.cur = page
      }
    }
  }
</script>
