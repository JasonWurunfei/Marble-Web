import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default function checkLogin() {
  const store = useStore()
  const router = useRouter()
  const route = useRoute()

  let isLogin = store.state.isLogin
  if (isLogin == false) {
    router.push({name: "Login", params: {next: route.fullPath}})
  }
}