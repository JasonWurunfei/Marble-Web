<template>
  <h1 v-if="id">Edit Marble {{ id }}</h1>
  <h2 v-else>Create Marble</h2>
  <form @submit.prevent="createMarbleAndImpression">
    <label>Name</label>
    <input type="text" ref="name" required>
    
    <label>Translation</label>
    <input type="text" ref="translation" required>
    
    <label>Story</label>
    <input type="text" ref="story">

    <label>Image</label>
    <input ref="image" type="file" class="file">
    
    <label>Audio</label>
    <input ref="audio" type="file" class="file">

    <label>Video</label>
    <input ref="video" type="file" class="file">

    <button class="submit">Create</button> 
  </form>
  
</template>

<script>
import { inject } from 'vue'
import { useStore } from 'vuex'
import { ref } from '@vue/reactivity'

export default {
  props: ['id'],
  setup() {
    const store = useStore()
    const name = ref('')
    const userId = store.state.user.id
    const story = ref('')
    const translation = ref('')
    const axios = inject("$axios")
    const image = ref(null)
    const audio = ref(null)
    const video = ref(null)

    const uploadFile = async (file, marbleId, type) => {
      const fd = new FormData()
      fd.append("file", file)
      fd.append("marbleId", marbleId)
      fd.append("type", type)
      return await axios.post('api/impression/', fd)
    }

    const uploadVideo = async (marbleId) => {
      return uploadFile(video.value.files[0], marbleId, 1)
    }
    const uploadImage = async (marbleId) => {
      return uploadFile(image.value.files[0], marbleId, 2)
    }
    const uploadAudio = async (marbleId) => {
      return uploadFile(audio.value.files[0], marbleId, 3)
    }

    const createMarbleAndImpression = () => {
      let marbleId
      axios({
        method: 'post',
        url: "api/marble/",
        data: {
          name: name.value.value,
          userId: parseInt(userId),
          translation: translation.value.value,
          story: story.value.value
        }
      }).then(res => {
        marbleId = res.data.id

        if(document.querySelectorAll(".file")[0].files[0] !== undefined) uploadImage(marbleId)
        if (document.querySelectorAll(".file")[1].files[0] !== undefined) uploadAudio(marbleId)
        if(document.querySelectorAll(".file")[2].files[0] !== undefined) uploadVideo(marbleId)

        alert("Successfully Created！")
      })
    }

    return { 
      name, 
      translation, 
      story, 
      image, 
      audio,
      video,
      uploadVideo,
      uploadImage,
      uploadAudio,
      createMarbleAndImpression
    }
  }
}
</script>

<style scoped>
  h2 {
    margin: 10px 0 0 0;
    text-align: center;
  }
  form {
      max-width: 30px 420px;
      margin: 0px auto;
      background: white;
      text-align: left;
      padding: 20px;
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
    display: block;
    text-align: center;
  }
</style>