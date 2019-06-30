<template>
  <div id="app">
    <div class="app">
      <Menu class="app-navigate" name="home" mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1" to="/recomend">
          <Icon type="md-videocam" />
          推荐
        </MenuItem>
        <MenuItem name="2" to="/history">
          <Icon type="md-list-box" />
          观看历史
        </MenuItem>
      </Menu>
      <p class="app-user">当前用户 :</p>
      <Input v-model="userid" number icon="md-contact" placeholder="用户ID:0~6040" style="width: 128px" @on-blur="change_user" @on-enter="change_user" />
    </div>
    <router-view/>
  </div>
</template>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
  text-align: center;
  width: 100%;
  height: 100%;
}

.app {
  display: flex;
  align-items: center;
}

.app-navigate {
  flex-grow: 1;
}

.app-user {
  margin-right: 16px;
}
</style>

<script>
  import { Menu, MenuItem, Icon, Input } from 'iview'
  import { mapGetters } from 'vuex'
  import types from '@/store/types'
  import mock from '@/mock'

  export default {
    name: 'app',
    components: {
      Menu,
      MenuItem,
      Icon,
      Input,
    },
    data () {
      return {
        theme1: 'light',
        userid: 0,
        old_userid: 0
      }
    },
    methods: {
      
    },
    computed: {
      ...mapGetters(["user"])
    },
    methods: {
      change_user() {
        if (parseInt(this.userid) != parseInt(this.old_userid)) {
          let _recomend_ls = mock.mock_recommend()
          this.$store.commit(types.GET_RECOMMEND_LIST_1, _recomend_ls)

          let _his_ls = mock.mock_history()
          this.$store.commit(types.GET_HISTORY_LIST, _his_ls)

          this.old_userid = this.userid
        }
      }
    }
  }
</script>
