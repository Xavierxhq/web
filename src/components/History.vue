<template>
  <div class="wrap">
    <Page :current="cur" :total="tot" @on-change="update_page" small show-total show-elevator />
    <div class="wrap-pannel">
      <ItemMovie v-for="item in get_movies" :key="item.id" :info="item.info" :link="item.link" />
    </div>
  </div>
</template>

<style scoped>
.wrap {
  padding-top: 16px;
  padding-bottom: 16px;
}

.wrap-pannel {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
  import { Page } from 'iview'
  import ItemMovie from "@/components/ItemMovie.vue"
  import { mapGetters } from 'vuex'
  import types from '@/store/types'
  import mock from '@/mock'

  export default {
    name: 'History',
    components: {
      ItemMovie,
      Page,
    },
    data() {
      return {
      	cur: 1,
      	tot: 0,
      }
    },
    created() {
      let _his_ls = mock.mock_history()
      this.$store.commit(types.GET_HISTORY_LIST, _his_ls)
    },
    computed: {
      ...mapGetters(["history_ls"]),

      get_movies() {
      	// alert(this.cur)
      	this.tot = this.history_ls.length
      	let cur_movies = this.history_ls.slice(10 * (this.cur - 1), 10 * this.cur)
        return cur_movies
      }
    },
    methods: {
    	update_page(page) {
    		this.cur = page
    	}
    },
  }
</script>
