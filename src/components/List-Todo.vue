<template>
  <tr class="text-center">
    <td>{{ todo.id }}</td>
    <td>{{ todo.userId }}</td>
    <td>{{ todo.title }}</td>
    <td>{{ todo.completed }}</td>
    <td>
      <q-btn
        color="secondary"
        label="View"
        :to="`/todo-vuex/${todo.id}`"
        class="q-mr-md"
      />
      <q-btn
        color="purple"
        label="Edit"
        class="q-mr-md"
        :to="`/todo-vuex/${todo.id}/edit`"
      />
      <q-btn color="red" label="Delete" @click="deleteBtn" />
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["todo"],
  methods: {
    ...mapActions("todo", ["deleteTodo"]),
    async deleteBtn() {
      const setuju = confirm("Are you sure want to delete this data?");
      if (setuju) {
        await this.deleteTodo(this.todo.id);
        this.$emit("refresh-table");
      } else {
      }
    },
  },
};
</script>

<style></style>
