<template>
    <!-- 编写html内容 -->
    <div>
        <input 
        placeholder="请输入任务名称" 
        v-model="value" 
        @keydown.enter="enter"
        />
    </div>
</template>
  
  
<script>
// 编写js内容
import { defineComponent, ref } from 'vue'
export default defineComponent({
    // 当前组件名称
    name: 'navHeader',
    // 接收父组件的数据
    props: {

    },
    // 定义子组件
    components: {

    },
    setup(props, ctx) {
        let value = ref('')
        // 按回车确认
        let enter = () => {
            console.log(value.value)
        }
        return {
            value,
            enter
        }
    }
})
</script>
  
<style scoped lang="scss">
/* CSS样式+作用域(当前组件生效) */
input {
    margin-bottom: 10px;
}
</style>