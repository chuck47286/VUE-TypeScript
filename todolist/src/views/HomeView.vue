<template>
  <!-- 编写html内容 -->
  <!-- 1.子组件引入 -->
  <nav-header></nav-header>
  <nav-main></nav-main>
  <nav-footer></nav-footer>
  <!-- 2. ref定义数据 -->
  <div>
    {{ num }}
  </div>
  <div>
    {{ name }}
  </div>
  <div>
    {{ arr.slice(0,2) }}
  </div>
  <div>
    {{ obj }}
  </div>
</template>


<script>
// 编写js内容
import NavHeader from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  // 当前组件名称
  name: 'Home',
  // 接收父组件的数据
  props: {

  },
  // 定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup(props, ctx) {
    let num = ref(10)
    let name = ref('jack')
    let arr = ref(['a', 'b', 'c', 'd'])
    let obj = ref({
      age: 20
    })
    return {
      num,
      name,
      arr,
      obj
    }
  }
})
</script>

<style scoped lang="scss">
/* CSS样式+作用域(当前组件生效) */
</style>