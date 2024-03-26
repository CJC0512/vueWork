import { createApp } from 'vue'                 // 객체 구조분해 할당으로 받기
// import router from './router/01_router.js'      // 객체 그대로 받기
import router2 from './router/02_nestedRoute.js';
import App from './App.vue'

/* router 설정을 하기 위해서는 다음과 같이 router를 등록해 주어야한다. */
// createApp(App).mount('#app')
const app = createApp(App);

// app.use(router);
app.use(router2);
app.mount('#app');