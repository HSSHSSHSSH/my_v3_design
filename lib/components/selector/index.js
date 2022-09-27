import hSelector from './index.vue'

hSelector.install = (app) => {
    app.component(hSelector.name,hSelector)
}

export default hSelector