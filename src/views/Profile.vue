<template>
  <div class="profile" >
    <div class="hero">
      <h1 class="caption" v-if="user">
        {{ period }}好! {{ user.username }}
      </h1>
    </div>
    <div class="dashboard">
      <WhiteSquareBtn 
        text="Logout"
        :icon='require("@/assets/exit.svg")'
        :callback="logout" />
    </div>
  </div>
</template>

<script>

import WhiteSquareBtn from "@/components/buttons/WhiteSquareBtn.vue"
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  components: {WhiteSquareBtn},
  setup() {
    const store = useStore()
    const router = useRouter()

    const user = store.state.user
    const logout = () => {
      store.dispatch("logout")
      router.push({name: 'Home'})
    }

    const period = ref("")
    const hour = new Date().getHours()
    if (hour <= 12) {
      period.value = "早上"
    }

    if (12< hour && hour <= 18) {
      period.value = "下午"
    }

    if (hour > 18) {
      period.value = "晚上"
    }
    return { logout, period, user }
  }
}
</script>

<style>
.profile {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 3fr 1fr;
  position: relative;
}
.profile::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("~@/assets/profile-background.png");
  background-size: 100% 100%;
  z-index: -2;
}

.profile::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;
  opacity: 0.15;
  background-size: 100% 100%;
  z-index: -1;
}

.profile .hero .caption {
  color: white;
  font-size: 3rem;
}

</style>