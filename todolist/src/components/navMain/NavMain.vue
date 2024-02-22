<template>
  <!-- 编写html内容 -->
  <div>
    <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index">
        <div class="item">
          <input type="checkbox" v-model="item.complete" />
          {{ item.title }}
          <button class="del" @click="del(item, index)">删除</button>
        </div>
      </div>
    </div>
    <div v-else>
      暂无任务
    </div>
  </div>
</template>
  
  
<script>
// 编写js内容
import { defineComponent, ref } from 'vue'
export default defineComponent({
  // 当前组件名称
  name: 'navMain',
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
  emits: ['del'],
  setup(props, ctx) {
    // 罗列复选框
    // 删除任务
    let del = (item, index) => {
      ctx.emit('del', index);
    }
    return {
      del
    }
  }
})
</script>
  
<style scoped lang="scss">
/* CSS样式+作用域(当前组件生效) */
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 160px;
  cursor: pointer;

  button {
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
    z-index: 99;
  }

  &:hover {
    background: #ddd;

    button {
      display: block;
    }
  }
}
</style>