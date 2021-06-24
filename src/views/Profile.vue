<template>
  <h1>Profile: {{ username }}</h1>
  <button @click="logout">Logout</button>
</template>

<script>
import checkLogin from "@/composables/checkLogin"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  props: ['username'],
  setup() {
    checkLogin()
    const store = useStore()
    const router = useRouter()
    const logout = () => {
      store.dispatch("logout")
      router.push({name: 'Home'})
    }
    return { logout }
  }
}
</script>

<style>

</style>