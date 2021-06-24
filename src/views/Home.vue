<template>
  <h2>Home</h2>
  <button>
    <router-link :to="{name: 'MarbleCreate'}" >New</router-link>
  </button>
</template>

<script>

export default {
  name: 'Home',

}
</script>
