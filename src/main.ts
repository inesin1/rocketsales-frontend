import { createApp } from 'vue'
import App from './App.vue'
import { Card, Table, Space, Divider, Input, Tag } from 'ant-design-vue'
import {PhoneOutlined, MailOutlined} from "@ant-design/icons-vue";

createApp(App)
    .use(Card)
    .use(Table)
    .use(Space)
    .use(Divider)
    .use(Input)
    .use(Tag)
    .component('PhoneOutlined', PhoneOutlined)
    .component('MailOutlined', MailOutlined)
    .mount('#app')
