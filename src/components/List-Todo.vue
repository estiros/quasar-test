<template>
  <tr class="text-center">
    <td>{{ todo.id }}</td>
    <td>{{ todo.userId }}</td>
    <td>{{ todo.title }}</td>
    <td>{{ todo.completed }}</td>
    <td>
      <q-btn color="secondary" label="View" />
      <q-btn color="purple" label="Edit" />
      <q-btn color="red" label="Delete" />
    </td>
  </tr>
</template>

<script>
export default {
  props: ["todo"]
};
</script>

<style></style>
