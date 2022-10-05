
import hButton from './components/button/index.js'
import hSelector from './components/selector/index.js'
import hInput from './components/input/index.js'
import hDemo from './components/demo/index'
import hSpace from './components/space/index'

let myDesign = {}  
let comArr = [hButton,hSelector,hInput,hDemo,hSpace]
myDesign.install = function (Vue) {
    // Vue.use(hSelector)  //use触发Install方法
    // Vue.use(hButton)
    // Vue.use(hInput)
    // Vue.use(hDemo)
    comArr.forEach(e => {
        Vue.use(e)
    })
}

export {hButton,hSelector,hInput,hDemo,hSpace}  //按需导入

export default myDesign  //全部导入