<template>
  <!-- 编写html内容 -->
  <div class="container">
    <div>已完成{{ isComplete }} / 全部 {{ list.length }}</div>
    <div v-if="isComplete > 0" class="btn">
      <button @click="clear">
        清除已完成
      </button>
    </div>
  </div>
</template>
  
  
<script>
// 编写js内容, ref
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  // 当前组件名称
  name: 'navFooter',
  // 接收父组件的数据
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  // 定义子组件
  components: {

  },
  setup(props, ctx) {
    // 统计已完成
    let isComplete = computed(() => {
      let arr = props.list.filter((item) => {
        return item.complete
      })
      return arr.length
    })
    // 清除事件
    let clear = () => {
      let arr = props.list.filter((item) => {
        return item.complete === false
      })
      ctx.emit('clear', arr)
    }
    return {
      isComplete,
      clear
    }
  }
})
</script>
  
<style scoped lang="scss">
/* CSS样式+作用域(当前组件生效) */
.container {
  display: flex;
  align-items: center;

  .btn {
    margin-left: 10px;
  }
}
</style>