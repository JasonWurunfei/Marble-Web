<template>
  <h1 v-if="id">Edit Marble {{ id }}</h1>
  <h2 v-else>Create Marble</h2>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style>

</style>