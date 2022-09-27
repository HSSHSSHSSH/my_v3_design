import { createApp } from 'vue'
import App from './App.vue'
import router from './plugin/router/index'
import myDesign from '../lib/index'
import hljs from "highlight.js";
import "highlight.js/styles/color-brewer.css";
let app = createApp(App)
// createApp(App).use(router).mount('#app')

app.use(router)
app.use(myDesign)
hljs.configure({
    ignoreUnescapedHTML: true,
    languages: [
      "javascript",
      "css",
      "python",
      "html",
      "bash",
      "java",
      "sql",
      "json",
      "http",
      "go",
      "c++",
      "c#",
      "",
    ],
  });
  app.directive("highlight", function (el) {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  });
app.mount('#app')
