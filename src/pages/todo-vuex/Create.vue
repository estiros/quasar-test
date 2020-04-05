<template>
  <div>
    <h4>Ini Create To Do</h4>
    <div class="q-pa-md">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          type="number"
          v-model="user_id"
          label="User ID *"
          min="0"
          hint="User ID berupa nomor"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type user id',
          ]"
        />

        <q-input
          filled
          v-model="title"
          label="Title"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type title',
          ]"
        />

        <!-- <q-toggle v-model="completed" label="I accept the license and terms" /> -->
        <p>Completed</p>
        <q-radio dense v-model="completed" :val="true" label="Sudah" />
        <q-radio dense v-model="completed" :val="false" label="Belum" />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="red" class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user_id: 0,
      title: "",
      completed: false,
    };
  },
  methods: {
    ...mapActions("todo", ["createTodo"]),
    async onSubmit() {
      await this.createTodo({
        data: {
          user_id: this.user_id,
          title: this.title,
          completed: this.completed,
        },
      });
      this.$router.push("/todo-vuex");
    },
    onReset() {
      this.user_id = "";
      this.title = "";
      this.completed = false;
    },
  },
};
</script>

<style></style>
