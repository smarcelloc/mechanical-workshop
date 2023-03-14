import { createApp } from 'vue';
import AppRoot from '@/App.vue';
import { Quasar } from 'quasar';
import quasarConfig from '@/config/quasar';

const app = createApp(AppRoot);

app.use(Quasar, quasarConfig);

app.mount('#app');
