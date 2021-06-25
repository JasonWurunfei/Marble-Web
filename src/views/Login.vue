<template>
  <div class="login">
    <div class="login-form">
      <h1 class="caption">请 登 录</h1>
      <AnimationInputField
        fieldName="username"
        labelText="用户名："
        v-model="username"
        @keydown="enter"
      />
    </div>
    <WhiteSquareBtn 
      text="Login"
      :icon='require("@/assets/login.svg")'
      :callback="login" />
  </div>
</template>

<script>
import {useStore} from 'vuex'
import AnimationInputField from "@/components/AnimationInputField.vue"
import WhiteSquareBtn from "@/components/buttons/WhiteSquareBtn.vue"
import {useRoute, useRouter} from 'vue-router'
import { ref } from '@vue/reactivity'
import { inject } from 'vue'


export default {
  components: {AnimationInputField, WhiteSquareBtn},
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const username = ref('')

    const axios = inject("$axios")
  
    const login = async () => {
      await store.dispatch("login", {
        username: username.value,
        axios
      })

      const next = route.params['next']
      if (next) {
        router.push({
          name: next,
          params: {username: username.value}
        })
      } else {
        router.push({
          name: "Profile",
          params: {username: username.value}
        })
      }
    }

    const enter = (e) => {
      if (e.key === "Enter") {
        login()
      }
    }
    
    return { username, login, enter }
  }
}
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 3fr 1fr;
  position: relative;
}
.login::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("~@/assets/login-background.jpg");
  background-size: 100% 100%;
  z-index: -2;
}

.login::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;
  opacity: 0.15;
  background-size: 100% 100%;
  z-index: -1;
}

.login-form {
  width: 80%;
}
.login-form .caption {
  text-align: center;
  color: white;
  font-size: 2rem;
}

</style>