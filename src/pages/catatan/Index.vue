<template>
  <div>
    <h4>Ini Catatan</h4>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-input v-model="title" label="Title" />
        <q-input v-model="subtitle" label="Subtitle" />
        <q-input v-model="desc" type="textarea" label="Description" />
        <div class="row">
          <div class="col-6">
            <q-checkbox v-model="completed" label="Sudah" />
          </div>
          <div class="col-6 text-right">
            <q-btn
              color="primary"
              label="Save"
              :loading="loading"
              @click="save"
            />
          </div>
        </div>

        <div class="row">
          <div
            class="col-4 col-4 q-pa-md"
            v-for="(item, index) in catatan"
            :key="index"
          >
            <q-card
              :class="
                'my-card ' + (item.completed ? 'bg-secondary text-white' : '')
              "
            >
              <q-card-section>
                <div class="text-h6">{{ item.title }}</div>
                <div class="text-subtitle2">{{ item.subtitle }}</div>
              </q-card-section>

              <q-card-section>
                {{ item.desc }}
              </q-card-section>

              <q-separator dark />

              <q-card-actions align="around">
                <q-btn flat>Sudah</q-btn>
                <q-btn flat>Delete</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      subtitle: "",
      desc: "",
      completed: false,
      loading: false
    };
  },
  computed: {
    catatan() {
      return this.$store.state.catatan.catatanState;
    }
  },
  methods: {
    save() {
      this.loading = true;
      const val = {
        title: this.title,
        subtitle: this.subtitle,
        desc: this.desc,
        completed: this.completed
      };
      this.$store.commit("catatan/createCatatan", val);
      this.loading = false;
    }
  }
};
</script>

<style></style>
