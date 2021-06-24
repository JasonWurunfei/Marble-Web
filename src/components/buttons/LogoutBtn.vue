<template>
  <button id="LogoutBtn" @click="callback">
    <img src="@/assets/exit.svg" alt="">
    <div>Logout</div>
  </button>
</template>

<script>
export default {
  props: ['callback']
}
</script>

<style>
#LogoutBtn {
  border: none;
  padding: 1.5rem 3rem;
  border-radius: 15px;
  font-size: 1.75rem;
  font-style: italic;
  font-weight: 700;
  display: flex;
  align-items: center;
}

#LogoutBtn img {
  width: 2rem;
  margin-right: 1rem;
}

</style>