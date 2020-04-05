<template>
  <q-layout>
    <q-page padding>
      <h4>Ini Todo Vuex</h4>
      <div class="row q-mb-sm">
        <div class="col-6">
          <q-btn color="primary" label="Create" to="/todo-vuex/create" />
        </div>
        <div class="col-4">
          <div class="row">
            <q-input
              v-model="textSearch"
              label="Search by Title"
              class="col-8 q-mb-sm"
            />
            <q-btn flat icon="search" @click="searchTodo(textSearch)" />
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
                @click="filterTodo(item.id)"
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
            @refresh-table="getTodo"
          />
        </tbody>
      </q-markup-table>
      <h4 class="text-center" v-if="isEmpty == true">Data tidak ada</h4>
    </q-page>
  </q-layout>
</template>

<script>
import ListTodo from "components/List-Todo";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { ListTodo },
  data() {
    return {
      textSearch: "",
      completed: [
        { id: false, name: "False" },
        { id: true, name: "True" },
      ],
    };
  },
  mounted() {
    // this.getData();
    this.getTodo();
  },
  methods: {
    ...mapActions("todo", ["getTodo", "searchTodo", "filterTodo"]),
  },
  computed: {
    ...mapGetters("todo", {
      todo: "getTodo",
      isEmpty: "getIsEmpty",
    }),
  },
};
</script>

<style></style>
