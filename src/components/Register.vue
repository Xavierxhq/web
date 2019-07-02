<template>
  <div class="wrap">

    <div class="wrap-input">
      <p class="wrap-input-p">昵称</p>
      <div class="wrap-input-div" style="text-align: left;">
        <Input v-model="username" placeholder="请输入昵称" style="width: 50%;"/>
      </div>
    </div>

    <div class="wrap-input">
      <p class="wrap-input-p">年龄</p>
      <div class="wrap-input-div" style="text-align: left;">
        <Input v-model="userage" placeholder="请输入年龄" number style="width: 50%;"/>
      </div>
    </div>

    <div class="wrap-input">
      <p class="wrap-input-p">您的职业</p>
      <div class="wrap-input-div" style="text-align: left;">
        <Input v-model="userjob" placeholder="请输入职业" number style="width: 50%;"/>
      </div>
    </div>

    <div class="wrap-input">
      <p class="wrap-input-p">性别</p>
      <div class="wrap-input-div" style="text-align: left;">
        <RadioGroup v-model="usergender" style="padding-top: 6px;">
          <Radio label="1">
            <span>男</span>
          </Radio>
          <Radio label="0">
            <span>女</span>
          </Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="wrap-input">
      <p class="wrap-input-p">婚姻</p>
      <div class="wrap-input-div" style="text-align: left;">
        <RadioGroup v-model="usermarry" style="padding-top: 6px;">
          <Radio label="married">
            <span>已婚</span>
          </Radio>
          <Radio label="single">
            <span>单身</span>
          </Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="wrap-button">
      <Button type="primary" shape="circle" size="large" @click="register">注册</Button>
    </div>

  </div>
</template>

<style scoped>
.wrap {
  padding-top: 64px;
}

.wrap-input {
  display: flex;
}

.wrap-input-p, .wrap-input-div {
  width: 50%;
  padding: 8px;
}


.wrap-input-p {
  text-align: right;
  line-height: 32px;
}

.wrap-button {
  padding-top: 32px;
  width: 100%;
  text-align: center;
}
</style>

<script>
  import { Input, RadioGroup, Radio, Button } from 'iview'
  import types from '@/store/types'

  export default {
    name: 'register',
    components: {
      Input,
      RadioGroup,
      Radio,
      Button,
    },
    data () {
      return {
        username: "",
        userage: 18,
        userjob: "",
        usergender: "1",
        usermarry: "married"
      }
    },
    methods: {
      
    },
    computed: {
    },
    methods: {
      register() {
        let params = new URLSearchParams()
        params.append('userid', -1)
        params.append('userage', this.userage)
        params.append('usergender', this.usergender)
        params.append('usermarry', this.usermarry)
        params.append('userjob', this.userjob)
        params.append('alg', 1)
        const url = "recommend" + 1

        let _user = {
          id: -1,
          username: this.username,
          userage: this.userage,
          userjob: this.userjob,
          usergender: this.usergender,
          usermarry: this.usermarry,
        }
        this.$store.commit(types.CHANGE_USER, _user)

        this.$Loading.start()
        this.$http.post("recommend1", params).then(response => {
          console.log("成功: ", response.data)
          this.$Loading.finish()
        }).catch(error => {
          console.log("失败")
          this.$Loading.error()
        })

        this.$router.replace('/home/commonhistory')
      },

      get_url() {
        
      }
    }
  }
</script>
