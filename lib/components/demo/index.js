import hDemo from './index.vue'

hDemo.install = (app) => {
    app.component(hDemo.name,hDemo)
}

export default hDemo