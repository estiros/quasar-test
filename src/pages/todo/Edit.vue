<template>
  <div>
    <h4>Ini Edit To Do {{ $route.params.id }}</h4>
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
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const res = await this.$axios.get(`todos/${this.$route.params.id}`);
      this.user_id = res.data.userId;
      this.title = res.data.title;
      this.completed = res.data.completed;
    },
    async onSubmit() {
      await this.$axios.patch(`todos/${this.$route.params.id}`, {
        userId: this.user_id,
        title: this.title,
        completed: this.completed
      });

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
