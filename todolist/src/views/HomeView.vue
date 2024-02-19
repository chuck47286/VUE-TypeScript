<template>
  <!-- 编写html内容 -->
  <div>
  <!-- 1.子组件引入 -->
  <nav-header></nav-header>
  <nav-main></nav-main>
  <nav-footer></nav-footer>
  <div>
    {{list}}
  </div>
    <!-- <div>
      {{num1}} ---- {{num2}}
      两个数的和：{{addNum}}
    </div>
    <div>
      <button @click="add">add</button>
    </div> -->
  </div>

  <!-- 2. ref定义数据 or reactive + torefs -->
  <!-- <div @click="clickNum">
    {{ num }}
  </div>
  <div @click="clickNum1">
    {{ num1 }}
  </div> -->
  <!-- <div>
    {{ name }}
  </div>
  <div>
    {{ arr.slice(0,2) }}
  </div>
  <div>
    {{ obj }}
  </div> -->

  <!-- 3. reactive 定义对象 -->
  <!-- <div>
    {{ data.num }}
  </div>
  <div>
    {{ data.name }}
  </div>
  <div>
    {{ data.arr.slice(0,2) }}
  </div>
  <div>
    {{ data.obj }}
  </div> -->
</template>


<script>
// 编写js内容
import NavHeader from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
import { defineComponent, computed, ref, reactive, toRefs} from 'vue'
import { useStore } from 'vuex'

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
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    // let num = ref(10)
    // let name = ref('jack')
    // let arr = ref(['a', 'b', 'c', 'd'])
    // let obj = ref({
    //   age: 20
    // })
    // let num1 = ref(10)
    // let num2 = ref(20)

    // let num1 = ref(10)
    // let data = reactive({
    //   num: 10,
    //   name: 'jack',
    //   age: 20,
    //   obj: {
    //     price: 20
    //   },
    //   arr: ['a', 'b', 'c', 'd']
    // })
    // // 定义方法
    // let clickNum = () => {
    //   // 访问reactive定义的数据，要写对象的属性名的形式
    //   console.log(data.num)
    // }
    // let clickNum1 = () => {
    //   // 访问ref定义的数据，要写数据名.value形式
    //   console.log(num1.value)
    // }
    // let addNum = computed(() => {
    //   // 必须返回一个值
    //   return num1.value + num2.value
    // })

    // let add =() => {
    //   num1.value++
    //   num2.value++
    // }

    return {
      // num,
      // name,
      // arr,
      // obj

      // data
      // ...toRefs(data),
      // num1,
      // num2,
      // addNum,
      // add,
      // clickNum,
      // clickNum1,
      list
    }
  }
})
</script>

<style scoped lang="scss">
/* CSS样式+作用域(当前组件生效) */
</style>