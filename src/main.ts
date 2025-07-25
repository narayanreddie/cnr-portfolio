import { createApp } from 'vue';
import App from '@/pages/Home.vue';
import { injectHeadMeta } from '@/composables/useHeadMeta';
import { createHead } from '@vueuse/head';
import '@/assets/styles/globals.css';

document.documentElement.classList.add('dark'); // force dark
const app = createApp(App);
app.use(createHead());
injectHeadMeta();
app.mount('#app');
