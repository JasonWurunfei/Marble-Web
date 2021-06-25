<template>
  <input type="text" v-model="username" @keydown="enter">
  <button @click="login">Login</button>
</template>

<script>
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import { ref } from '@vue/reactivity'
import { inject } from 'vue'


export default {
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

</style>