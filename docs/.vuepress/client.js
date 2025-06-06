import { defineClientConfig } from '@vuepress/client';
import Utterances from './components/Utterances.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 注册全局组件
    app.component('Utterances', Utterances);
  },
  setup() {},
  rootComponents: []
})