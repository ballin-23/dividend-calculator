import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const aap = createApp(App)
aap.use(Antd)
aap.mount('#app')
