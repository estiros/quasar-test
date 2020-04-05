<template>
  <div>
    <h4>Ini Detail {{ $route.params.id }}</h4>
    <h6>ID: {{ detail.id }}</h6>
    <h6>User Id: {{ detail.userId }}</h6>
    <h6>Title: {{ detail.title }}</h6>
    <h6>Status: {{ detail.completed }}</h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      try {
        const res = await this.$axios.get(`todos/${this.$route.params.id}`);
        this.detail = res.data;
      } catch (error) {
        console.log(error);
        const data = this.$q.localStorage.getItem("todo");
        data.map(item => {
          if (item.id == this.$route.params.id) {
            this.detail = item;
          }
        });
      }
    }
  }
};
</script>

<style></style>
