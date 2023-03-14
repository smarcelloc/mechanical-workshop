import { createApp } from 'vue';
import AppRoot from '@/App.vue';
import { Quasar } from 'quasar';
import quasarConfig from '@/config/quasar';
import router from '@/config/router';

const app = createApp(AppRoot);

app.use(Quasar, quasarConfig);
app.use(router);

app.mount('#app');
