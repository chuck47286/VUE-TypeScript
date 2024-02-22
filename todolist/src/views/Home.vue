<template>
  <!-- 编写html内容 -->
  <div>
    <!-- 1.子组件引入 -->
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>


<script>
// 编写js内容
import NavHeader from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  // 当前组件名称
  name: 'home',
  // 接收父组件的数据
  props: {

  },
  // 定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {
    let value = ref('');
    // 全局属性获取list
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    })
    // 添加任务
    let add = (val) => {
      value.value = val
      // 先进行逻辑判断，只有之前没有添加的才可以添加操作
      let flag = true
      list.value.map(item => {
        if (item.title === value.value) {
          flag = false
          alert("任务已存在")
        }
      })
      if (flag) {
        // 调用 mutations中的添加方法
        store.commit('addTodo', {
          title: value.value,
          complete: false
        });
        store.commit('updateLocalStorage');
      }

    };
    // 删除任务
    let del = (index) => {
      // 调用 mutations中的删除方法
      store.commit('delTODO', index);
      store.commit('updateLocalStorage');
    }
    // 清除任务
    let clear = (arr) => {
      // 调用 mutations中的清空方法
      store.commit('clear', arr);
      store.commit('updateLocalStorage');
    }
    return {
      list,
      value,
      add,
      del,
      clear
    }
  }
})
</script>

<style scoped lang="scss">
/* CSS样式+作用域(当前组件生效) */
</style>