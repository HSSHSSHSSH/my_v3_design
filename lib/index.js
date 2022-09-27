
import hButton from './components/button/index.js'
import hSelector from './components/selector/index.js'
import hInput from './components/input/index.js'
import hDemo from './components/demo/index'

let myDesign = {}  
myDesign.install = function (Vue) {
    Vue.use(hSelector)  //use触发Install方法
    Vue.use(hButton)
    Vue.use(hInput)
    Vue.use(hDemo)
}

export {hButton,hSelector,hInput,hDemo}  //按需导入

export default myDesign  //全部导入