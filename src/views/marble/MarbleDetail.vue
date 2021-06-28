<template>
  <div class="marble-detail" >
    <div class="marble-info" v-if="marble">
      <h1>{{marble.name}}</h1>
      <time :datetime="marble.creationTime">marble.creationTime</time>
      <h2>{{marble.translation}}</h2>
      <p>{{marble.story}}</p>
    </div>
    <div class="impressions">

    </div>
  </div>

</template>

<script>
import { inject, ref } from 'vue'

export default {
  props: ['id'],
  setup(props) {

    const marble = ref(null)
    const axios = inject("$axios")

    axios.get(`marble/${props.id}`)
    .then(res => marble.value = res.data)
    .catch(err => console.error(err.message))

    return { marble }

  }
}
</script>

<style>

</style>