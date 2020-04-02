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
        :to="`/todo/${todo.id}`"
        class="q-mr-md"
      />
      <q-btn color="purple" label="Edit" class="q-mr-md" />
      <q-btn color="red" label="Delete" @click="deleteBtn" />
    </td>
  </tr>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    async deleteBtn() {
      const setuju = confirm("Are you sure want to delete this data?");
      if (setuju) {
        await this.$axios.delete(`todos/${this.todo.id}`);
        this.$emit("refresh-table");
      } else {
      }
    }
  }
};
</script>

<style></style>
