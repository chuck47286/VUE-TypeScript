<template>
    <div>
        <h1>这是detail组件</h1>
    </div>
    <child :msg='msg' @send='send'></child>
</template>

<script>
import child from '@/components/child/Child.vue'
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'Detail',
  components: {
    child
  },
  setup() {
    let msg = ref("这是父组件的数据")
    let send = (val) => {
      console.log(val)
    }
    return {
      msg,
      send
    }
  }
})
</script>
  