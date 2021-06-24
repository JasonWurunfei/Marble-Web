<template>
  <h1>Marble Details for Marble {{ id }}</h1>
</template>

<script>
import checkLogin from "@/composables/checkLogin"

export default {
  props: ['id'],
  setup() {
    checkLogin()
  }
}
</script>

<style>

</style>