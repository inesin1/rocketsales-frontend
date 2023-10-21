<template>
  <a-card
      title="Тестовое задание для RocketSales от Артёма Несина"
  >
    <template #extra>
      <a-input-search
          v-model:value=search
          placeholder="Найти..."
          @input="loadData()"
      />
    </template>

    <a-table
        :columns="columns"
        :data-source="data"
        :expand-column-width="100"
    >
      <template #expandedRowRender="{ record }">
        <ul>
          <li v-for="contact in record.contacts" :key="contact.id">
            <a-space>
              {{ contact.name }}

              <a :href="'tel:' + contact.phone_number">
                <PhoneOutlined/>
              </a>

              <a :href="'mailto:' + contact.email">
                <MailOutlined/>
              </a>
            </a-space>
          </li>
        </ul>
      </template>
      <template #expandColumnTitle>
        <span>Контакты</span>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'status'">
          <span>
            <a-tag
              :color="record.status.color"
            >
              {{ record.status.name }}
            </a-tag>
          </span>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios";
import {Lead} from "@/models/Lead";

export default defineComponent({
  name: "App",
  data() {
    return {
      columns: [
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Бюджет',
          dataIndex: 'price',
          key: 'price'
        },
        {
          title: 'Статус',
          dataIndex: ['status', 'name'],
          key: 'status'
        },
        {
          title: 'Ответственный',
          dataIndex: ['responsible_user', 'name'],
          key: 'responsible_user'
        },
        {
          title: 'Дата создания',
          dataIndex: 'created_at',
          key: 'created_at'
        },
      ],

      data: [] as Lead[],

      search: ''
    };
  },
  methods: {
    async loadData() {
      const res = await axios
          .get(`http://localhost:3000/api/leads?query=${this.search}`);

      if (res.status == 204) this.data = [];
      if (res.status == 200) this.data = res.data;
    },
  },
  created() {
    this.loadData();
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;;
  margin-top: 60px;
}
</style>
