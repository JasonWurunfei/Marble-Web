<template>
  <button class="white-square-btn" @click="callback">
    <img :src="icon" alt="">
    <div>{{text}}</div>
  </button>
</template>

<script>
export default {
  props: ['text', 'icon', 'callback'],
}
</script>

<style>
.white-square-btn {
  border: none;
  padding: 1.5rem 3rem;
  border-radius: 15px;
  font-size: 1.75rem;
  font-style: italic;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.white-square-btn img {
  width: 2rem;
  margin-right: 1rem;
}

</style>