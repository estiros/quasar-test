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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      user_id: 0,
      title: "",
      completed: false,
    };
  },
  computed: {
    ...mapGetters("todo", { detail: "getDetail" }),
  },
  watch: {
    detail() {
      this.user_id = this.detail.userId;
      this.title = this.detail.title;
      this.completed = this.detail.completed;
    },
  },
  mounted() {
    // this.getData();
    this.getDetail(this.$route.params.id);
  },
  methods: {
    ...mapActions("todo", ["getDetail", "editTodo"]),
    // async getData() {
    //   try {
    //     const res = await this.$axios.get(`todos/${this.$route.params.id}`);
    //     this.user_id = res.data.userId;
    //     this.title = res.data.title;
    //     this.completed = res.data.completed;
    //   } catch (error) {
    //     const data = this.$q.localStorage.getItem("todo");
    //     data.map(item => {
    //       if (item.id == this.$route.params.id) {
    //         this.user_id = item.userId;
    //         this.title = item.title;
    //         this.completed = item.completed;
    //       }
    //     });
    //   }
    // },
    async onSubmit() {
      // try {
      //   await this.$axios.patch(`todos/${this.$route.params.id}`, {
      //     userId: this.user_id,
      //     title: this.title,
      //     completed: this.completed,
      //   });
      // } catch (error) {
      //   const data = this.$q.localStorage.getItem("todo");
      //   data.map((item) => {
      //     if (item.id == this.$route.params.id) {
      //       item.userId = this.user_id;
      //       item.title = this.title;
      //       item.completed = this.completed;
      //     }
      //   });
      //   this.$q.localStorage.set("todo", data);
      // }
      this.editTodo({
        id: this.$route.params.id,
        data: {
          user_id: this.user_id,
          title: this.title,
          completed: this.completed,
        },
      });
      this.$router.push("/todo");
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
