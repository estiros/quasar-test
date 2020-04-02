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
      const res = await this.$axios.get(`todos/${this.$route.params.id}`);
      this.detail = res.data;
    }
  }
};
</script>

<style></style>
