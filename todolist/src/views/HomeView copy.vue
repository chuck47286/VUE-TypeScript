<template>
  <!-- 编写html内容 -->
  <div>
  <!-- 1.子组件引入 -->
  <!-- <nav-header></nav-header>
  <nav-main></nav-main>
  <nav-footer></nav-footer> -->
  {{name}} -- {{num}} -- {{obj}}

  <!-- <button @click="goto">跳转路由</button> -->

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
import { defineComponent, computed, ref, reactive, toRefs, onMounted, onUnmounted} from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  // 当前组件名称
  name: 'HomeCopy',
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
    // 创建一个全局的路由对象
    let router = useRouter()
    // console.log(router)
    // 创建一个当前的路由对象
    let route = useRoute()
    // console.log(route.query)
    // console.log(route.params)
    let name = ref('')
    let num = ref(null)
    let obj = ref({})
    
    onMounted (() => {
      name.value = route.params.name
      num.value = route.params.num
      obj.value = route.params.obj
      console.log('home onMounted')
    })

    // let goto = () => {
    //   // 跳转路由
    //   // push 方法  可以传入跳转的路径
    //   // back 方法  回到上一页
    //   // go   方法  正数(1)是下一页，负数(-1)是上一页
    //   router.push('/about')
    //   // router.go(1)
    // }
    // let store = useStore()
    // let list = computed(() => {
    //   return store.state.list
    // })
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
      // list,
      // goto,
      name,
      num,
      obj
    }
  }
})
</script>

<style scoped lang="scss">
/* CSS样式+作用域(当前组件生效) */
</style>