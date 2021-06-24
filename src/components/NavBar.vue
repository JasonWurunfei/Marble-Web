<template>
  <router-link :to="{name: 'Home'}">Home</router-link>
  <router-link :to="{name: 'Bags'}">Bags</router-link>
  <router-link :to="{name: 'Profile', params: {username: username }}">Profile</router-link>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const username = ref('guest')
    return { username }
  }
}
</script>

<style>

</style>