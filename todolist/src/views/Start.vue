<template>
  <button @click="start">开始任务</button>
</template>


<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Start',
  setup() {
    let router = useRouter()
    let name = ref('jack')
    let num = ref(10)
    let obj = ref({
      msg: 'start'
    })

    onUnmounted( () => {
      console.log('start onUnmounted')
    })

    onMounted( () => {
      console.log('start onMounted')
    })
    console.log('start set up')

    let start = () => {
      // push 方式 可以携带参数跳转
      //  query模式
      //  params模式
      router.push({
        // path: '/home',
        // query: {
        //   name: name.value,
        //   num: num.value,
        //   obj: JSON.stringify(obj)
        // }
        name: 'home',
        params: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj.value)
        }
      })
    }
    return {
      start
    }
  }

})
</script>