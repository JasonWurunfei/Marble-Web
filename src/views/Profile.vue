<template>
  <h1>Profile: {{ username }}</h1>
</template>

<script>
import checkLogin from "@/composables/checkLogin"

export default {
  props: ['username'],
  setup() {
    checkLogin()
  }
}
</script>

<style>

</style>