<template>
  <h1 v-if="id">Edit Marble {{ id }}</h1>
  <h2 v-else>Create Marble</h2>
  <form @submit.prevent="createMarble">
    <label>Name</label>
    <input type="text" ref="name" required>
    
    <label>Translation</label>
    <input type="text" ref="translation" required>
    
    <label>Story</label>
    <input type="text" ref="story">

    <label>Picture</label>
    <input type="file" @change="cons($event)">
    <button>上传文件</button>
    
    <label>Audio</label>
    <input type="file">

    <label>Media</label>
    <input type="file">

    <button class="submit">Create</button> 
  </form>
  
</template>

<script>
import { inject } from 'vue'
import { useStore } from 'vuex'
import { ref } from '@vue/reactivity'
import checkLogin from "@/composables/checkLogin"

export default {
  props: ['id'],
  setup() {
    return checkLogin(() => {
      const store = useStore()
      const name = ref('')
      const userId = store.state.user.id
      const story = ref('')
      const translation = ref('')
      const axios = inject("$axios")

      const createMarble = () => {
        const creationTime = Date.now()
        axios({
          method: 'post',
          url: "marble/",
          data: {
            name: name.value.value,
            userId: parseInt(userId),
            translation: translation.value.value,
            story: story.value.value
          }
        })
      }

      return { name, translation, story, createMarble, cons }
    })
  }
}
</script>

<style scoped>
  form {
      max-width: 30px 420px;
      margin: 30px auto;
      background: white;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
  }
  label {
      color: #aaa;
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
  }
  input, select {
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: #555;
  }
  input[type='checkbox'] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .submit {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  }
  .submit {
    text-align: center;
  }
</style>