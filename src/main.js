import "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/js/all.min.js"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// demo blocks global registration

import Box from "./components/DemoBlocks/Box.vue"
import Columns from "./components/DemoBlocks/Columns.vue"
import ContentSection from "./components/DemoBlocks/ContentSection.vue"
import MessageBody from "./components/DemoBlocks/MessageBody.vue"
import MessageSection from "./components/DemoBlocks/MessageSection.vue"
import PageSection from "./components/DemoBlocks/PageSection.vue"
import PostHeader from "./components/DemoBlocks/PostHeader.vue"
import TitleSection from "./components/DemoBlocks/TitleSection.vue"
import TestCard1 from "./components/DemoBlocks/TestCard1.vue"
import TestCard2 from "./components/DemoBlocks/TestCard2.vue"
import NotificationLink from "./components/DemoBlocks/NotificationLink.vue"
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.component('Box',Box);
app.component('Columns',Columns);
app.component('ContentSection',ContentSection);
app.component('MessageBody',MessageBody);
app.component('MessageSection',MessageSection);
app.component('PageSection',PageSection);
app.component('PostHeader',PostHeader);
app.component('TitleSection',TitleSection);
app.component('TestCard1',TestCard1);
app.component('TestCard2',TestCard2);
app.component('NotificationLink',NotificationLink);

app.mount('#app')
