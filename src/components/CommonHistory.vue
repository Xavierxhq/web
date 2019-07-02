<template>
  <div id="wrap">
    <!-- <RadioGroup class="wrap-algtext" v-model="algtext">
      <Radio v-for="(item, index) in algtext_ls" :key="index" :label="item"></Radio>
    </RadioGroup> -->
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
    name: 'CommonHistory',
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
        id: 1,
        type: "md-alert",
        link: "/recomend",
        title: "Most Viewd",
      }
    },
    created() {
      this.init(this.algtext)

      let params = new URLSearchParams()
      this.$Loading.start()
      this.$http.post("recommend1", params).then(response => {
        console.log("成功: ", response.data)
        this.$Loading.finish()
      }).catch(error => {
        console.log("失败")
        this.$Loading.error()
      })
    },
    watch: {
      algtext: function(new_v, old_v) {
        this.cur = 1
        this.tot = 0
        this.update_recommend(new_v)
      }
    },
    computed: {
      ...mapGetters(["common_history_ls"]),

      get_movies() {
        if (this.common_history_ls.length < 1) {
          this.$store.commit(types.GET_COMMON_HISTORY_LIST, mock.mock_recommend())
        }
        this.tot = this.common_history_ls.length
        let cur_movies = this.common_history_ls.slice(10 * (this.cur - 1), 10 * this.cur)
        return cur_movies
      }
    },
    methods: {
      init(algtext) {
        let _common_history_ls = mock.mock_recommend()
        this.$store.commit(types.GET_COMMON_HISTORY_LIST, _common_history_ls)
        this.tot = _common_history_ls.length
      },

      update_recommend(algtext) {
        let _common_history_ls = mock.mock_recommend()
        if (this.common_history_ls.length < 1) {
          this.$store.commit(types.GET_COMMON_HISTORY_LIST, _common_history_ls)
        }
        this.tot = _common_history_ls.length
        this.update_page(this.cur)
      },

      update_page(page) {
        this.cur = page
      }
    }
  }
</script>
