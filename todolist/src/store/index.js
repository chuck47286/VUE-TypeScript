import { createStore } from 'vuex'

export default createStore({
  // 定义所需要的状态(全局的，即使不是父子组件也可实现)
  state: {
    name: 'jack'
  },
  getters: {
  },
  // 同步修改state 都是方法
  // 第一个参数state 第二个参数是需要修改的值
  mutations: {
    setName(state, payload) {
      // 1. 赋值
      state.name = payload
      // 2. 截取
      // state.name.slice(0, 1)
    }
  },
  // 异步提交mutation
  // 第一个参数是store, 第二个参数是修改的值
  actions: {
    // per 2s 操作name
    asyncSetName(store, params) {
      setTimeout(() => {
        // commit 是提交mutation
        store.commit('setName', params)
      }, 2000)
    }
  },
  // 模块化
  modules: {
  }
})
