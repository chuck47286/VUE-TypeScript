<template>
  <div>
    <h1>这是child组件</h1>
    父组件传递过来的数据---{{msg}}
  </div>
  <button @click="send">传值给父组件</button>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Child',
  // 接收来自父组件的数据
  props: {
    msg: {
      // 数据类型检查
      type: String
    }
  },
  components: {

  },
  // 用于声明组件可以向外触发的自定义事件
  emits: ['send'],
  setup(props, ctx) {
    // props中的数据不能直接修改
    console.log(props.msg)

    let childmsg = ref('这是子组件的数据')

    let send = () => {
      // ctx 分发事件
      ctx.emit('send', childmsg.value)
    }

    return {
      childmsg,
      send
    }
  }
})
</script>
