<template>
  <div class="profile">
    <div class="hero" v-if="period">
      <h1 class="caption">{{ period }}好! {{ username }}</h1>
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
import checkLogin from "@/composables/checkLogin"
import WhiteSquareBtn from "@/components/buttons/WhiteSquareBtn.vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  props: ['username'],
  components: {WhiteSquareBtn},
  setup() {
    return checkLogin(() => {
      const store = useStore()
      const router = useRouter()
      const logout = () => {
        store.dispatch("logout")
        router.push({name: 'Home'})
      }

      const hour = new Date().getHours()
      let period
      if (hour <= 12) {
        period = "早上"
      }

      if (12< hour && hour <= 18) {
        period = "下午"
      }

      if (hour > 18) {
        period = "晚上"
      }
      return { logout, period }
    })
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