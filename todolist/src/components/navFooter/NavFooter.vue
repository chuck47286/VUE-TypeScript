<template>
    <!-- 编写html内容 -->
    <div class="container">
        <div>已完成{{ isComplete }} / 全部 {{ all }}</div>
        <div v-if="isComplete > 0" class="btn">
            <button @click="clear">
                清除已完成
            </button>
        </div>
    </div>
</template>
  
  
<script>
// 编写js内容, ref
import { defineComponent, ref } from 'vue'
export default defineComponent({
    // 当前组件名称
    name: 'navFooter',
    // 接收父组件的数据
    props: {

    },
    // 定义子组件
    components: {

    },
    setup(props, ctx) {
        let isComplete = ref(1)
        let all = ref(3)
        // 清除事件
        let clear = () => {
            console.log("clear");
        }
        return {
            isComplete,
            all,
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