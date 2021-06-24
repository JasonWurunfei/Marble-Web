<template>
  <div class="container">
    <section class="display">
      <router-view/>
    </section>
    <section class="nav">
      <NavBar/>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: {NavBar}
}
</script>

<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
}

.container {
  width: 100vw;
  height: 100vh;
}

.display {
  height: 85%;
}

.nav {
  height: 15%;
}
</style>
