<template>
  <q-layout>
    <q-page padding>
      <h4>Ini Todo</h4>
      <div class="row q-mb-sm">
        <div class="col-6">
          <q-btn color="primary" label="Create" to="/todo/create" />
        </div>
        <div class="col-4">
          <div class="row">
            <q-input
              v-model="textSearch"
              label="Search by Title"
              class="col-8 q-mb-sm"
            />
            <q-btn flat icon="search" @click="search" />
          </div>
        </div>
        <div class="col-2">
          <q-btn-dropdown color="pink" label="Filter By Status">
            <q-list>
              <q-item
                clickable
                v-close-popup
                v-for="item in completed"
                :key="item.id"
                @click="filter(item.id)"
              >
                <q-item-section>
                  <q-item-label>{{ item.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>

      <q-markup-table>
        <thead>
          <tr class="text-center">
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <ListTodo
            v-for="item in todo"
            :key="item.id"
            :todo="item"
            @refresh-table="getData"
          />
        </tbody>
      </q-markup-table>
      <h4 class="text-center" v-if="isEmpty == true">Data tidak ada</h4>
    </q-page>
  </q-layout>
</template>

<script>
import ListTodo from "components/List-Todo";

export default {
  components: { ListTodo },
  data() {
    return {
      todo: [],
      textSearch: "",
      completed: [
        { id: false, name: "False" },
        { id: true, name: "True" }
      ],
      isEmpty: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const res = await this.$axios.get("todos");
        this.$q.localStorage.set("todo", res.data);
      } catch (error) {
        console.log("ga konek");
      }
      this.todo = this.$q.localStorage.getItem("todo");
    },
    async search() {
      const res = await this.$axios.get(`todos/?q=${this.textSearch}`);
      this.todo = res.data;
      if (res.data.length > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
      console.log(res);
    },
    async filter(item) {
      const res = await this.$axios.get(`todos/?completed=${item}`);
      this.todo = res.data;
    }
  }
};
</script>

<style></style>
