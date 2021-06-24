import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

/*
Usage Example:

Define vue instances which require login like this:
export default {
  ...
  setup() {
    return checkLogin(() => {
      any thing that should appear in normal setup
      should be placed in here.
    })
  },
  ...
}
*/

export default function checkLogin(setup) {
  const store = useStore()
  const router = useRouter()
  const route = useRoute()

  let isLogin = store.state.isLogin
  if (isLogin == false) {
    router.push({name: "Login", params: {next: route.name}})
  } else {
    if (setup !== undefined) return setup()
    else
      throw new Error("setup function is not defined")
  }
}