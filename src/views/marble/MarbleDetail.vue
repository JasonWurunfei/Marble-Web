<template>
  <div class="marble-detail" >
    <div class="marble-info" v-if="marble">
      <h1>{{marble.name}}</h1>
      <time :datetime="marble.creationTime">marble.creationTime</time>
      <h2>{{marble.translation}}</h2>
      <p>{{marble.story}}</p>
    </div>
    <div class="impressions">

      <section class="videos" >
        <ul v-if="videos">
          <li v-for="video in videos" :key="video.id">
            <video width="320" height="240" controls>
              <source :src="baseURL+video.path" >
              Your browser does not support the video tag.
            </video>
          </li>
        </ul>
      </section>

      <section class="images" >
        <ul v-if="images">
          <li v-for="image in images" :key="image.id">
            <img :src="baseURL+image.path" alt="" width="200">
          </li>
        </ul>
      </section>

      <section class="audios" >
        <ul v-if="audios">
          <li v-for="audio in audios" :key="audio.id">
            <audio controls>
              <source :src="baseURL+audio.path" >
              Your browser does not support the audio element.
            </audio>
          </li>
        </ul>
      </section>

    </div>
  </div>

</template>

<script>
import { inject, ref } from 'vue'

export default {
  props: ['id'],
  setup(props) {

    const marble = ref(null)
    const videos = ref(null)
    const images = ref(null)
    const audios = ref(null)
    const axios = inject("$axios")
    const baseURL = inject("baseURL")

    axios.get(`api/marble/${props.id}`)
    .then(res => marble.value = res.data)
    .catch(err => console.error(err.message))

    axios.get(`api/impression/marble/${props.id}`)
    .then(res => {
      videos.value = res.data.filter(impression => impression.type === 1)
      images.value = res.data.filter(impression => impression.type === 2)
      audios.value = res.data.filter(impression => impression.type === 3)
    })
    .catch(err => console.error(err.message))

    return { 
      marble,
      videos,
      images,
      audios,
      baseURL
    }

  }
}
</script>

<style>

</style>