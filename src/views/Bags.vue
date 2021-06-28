<template>
  <div class="bag-list">
    <ul>
      <li v-for="bag in bags" :key="bag.id" 
        @click="show(bag)">
        <h2>{{ bag.name }}</h2>
        
        <ul class="marbles" v-show="bag.open">
          <li v-for="marble in bag.marbles" :key="marble.id">
            <router-link :to="{name: 'MarbleDetail', params: {id: marble.id}}">
              {{marble.name}}
            </router-link>
          </li>
        </ul>
        
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { inject } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const bags = ref([])
    const axios = inject("$axios")
    const store = useStore()

    axios.get("bag/user/"+store.state.user.id)
    .then(res => {
      res.data.forEach(bag => bags.value.push(bag))
    })
    .catch(err => console.error(err.message))

    const show = (bag) => {
      if (bag.open == true) bag.open = false;
      else {
        axios.get("bag/marbles/"+bag.id)
        .then(res => {
          bag.marbles = res.data
          bag.open = true
        })
        .catch(err => console.error(err.message))
      }
    }

    return { bags, show }
  }
}
</script>

<style>

</style>