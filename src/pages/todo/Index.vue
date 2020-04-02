<template>
  <q-layout>
    <q-page padding>
      <h4>Ini Todo</h4>
      <q-btn
        color="primary"
        label="Create"
        style="margin-bottom:10px"
        to="/todo/create"
      />
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
    </q-page>
  </q-layout>
</template>

<script>
import ListTodo from "components/List-Todo";

export default {
  components: { ListTodo },
  data() {
    return {
      todo: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await this.$axios.get("todos");
      this.todo = res.data;
    }
  }
};
</script>

<style></style>
