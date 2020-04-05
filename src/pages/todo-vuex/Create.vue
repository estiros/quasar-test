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
            val => (val !== null && val !== '') || 'Please type user id'
          ]"
        />

        <q-input
          filled
          v-model="title"
          label="Title"
          lazy-rules
          :rules="[val => (val !== null && val !== '') || 'Please type title']"
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
export default {
  data() {
    return {
      user_id: 0,
      title: "",
      completed: false
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$axios.post("todos", {
          userId: this.user_id,
          title: this.title,
          completed: this.completed
        });
      } catch (error) {
        let data = this.$q.localStorage.getItem("todo");
        if (data.length === 0) {
          data = [
            {
              id: 1,
              userId: this.user_id,
              title: this.title,
              completed: this.completed
            }
          ];
        } else {
          const idLast = data[data.length - 1].id;
          data.push({
            id: parseInt(idLast) + 1,
            userId: this.user_id,
            title: this.title,
            completed: this.completed
          });
        }
        this.$q.localStorage.set("todo", data);
      }

      this.$router.push("/todo");
    },
    onReset() {
      this.user_id = "";
      this.title = "";
      this.completed = false;
    }
  }
};
</script>

<style></style>
