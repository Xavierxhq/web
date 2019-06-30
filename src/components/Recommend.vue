<template>
  <div id="wrap">
    <RadioGroup class="wrap-alg" v-model="alg">
      <Radio label="推荐1"></Radio>
      <Radio label="推荐2"></Radio>
      <Radio label="推荐3"></Radio>
      <Radio label="推荐4"></Radio>
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

.wrap-alg, .wrap-page {
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
        alg_ls: ["推荐1", "推荐2", "推荐3", "推荐4"],
        alg: "推荐1",
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
      this.init(this.alg)
    },
    watch: {
      alg: function(new_v, old_v) {
        this.cur = 1
        this.tot = 0
        this.update_recommend(new_v)
      }
    },
    computed: {
      ...mapGetters(["recomend_ls_1", "recomend_ls_2", "recomend_ls_3", "recomend_ls_4", "like_ls"]),

      get_movies() {
        let _recomend_ls = []
        switch (this.alg) {
          case "推荐1":
            if (this.recomend_ls_1.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_1, _recomend_ls)
            }
            _recomend_ls = this.recomend_ls_1
            break
          case "推荐2":
            if (this.recomend_ls_2.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_2, _recomend_ls)
            }
            _recomend_ls = this.recomend_ls_2
            break
          case "推荐3":
            if (this.recomend_ls_3.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_3, _recomend_ls)
            }
            _recomend_ls = this.recomend_ls_3
            break
          case "推荐4":
            if (this.recomend_ls_4.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_4, _recomend_ls)
            }
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
      init(alg) {
        let _recomend_ls = mock.mock_recommend()
        this.$store.commit(types.GET_RECOMMEND_LIST_1, _recomend_ls)
        this.tot = _recomend_ls.length
      },

      update_recommend(alg) {
        let _recomend_ls = mock.mock_recommend()
        switch (alg) {
          case "推荐1":
            if (this.recomend_ls_1.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_1, _recomend_ls)
            }
            break
          case "推荐2":
            if (this.recomend_ls_2.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_2, _recomend_ls)
            }
            break
          case "推荐3":
            if (this.recomend_ls_3.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_3, _recomend_ls)
            }
            break
          case "推荐4":
            if (this.recomend_ls_4.length < 1) {
              this.$store.commit(types.GET_RECOMMEND_LIST_4, _recomend_ls)
            }
            break
          default:
            break
        }
        this.tot = _recomend_ls.length
        this.update_page(this.cur)
      },

      update_page(page) {
        this.cur = page
        // let _all_ls = []
        // switch (this.alg) {
        //   case "推荐1":
        //     _all_ls = this.recomend_ls_1
        //     break
        //   case "推荐2":
        //     _all_ls = this.recomend_ls_2
        //     break
        //   case "推荐3":
        //     _all_ls = this.recomend_ls_3
        //     break
        //   case "推荐4":
        //     _all_ls = this.recomend_ls_4
        //     break
        //   default:
        //     break
        // }

        // let cur_movies = _all_ls.slice(10 * (page - 1), 10 * page)
        // return cur_movies
      }
    }
  }
</script>
