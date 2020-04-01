<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-input v-model="title" label="Title" />
      <q-input v-model="desc" type="textarea" label="Description" />
      <q-btn color="primary" label="Save" :loading="loading" @click="save" />
      <div class="q-pa-md">
        <q-markup-table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in notes" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.desc }}</td>
              <td>
                <q-btn color="red" label="Delete" @click="hapus(index)" />
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      desc: "",
      loading: false,
      notes: []
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.notes = this.$q.localStorage.getItem("notes");
    },
    save() {
      this.loading = true;
      if (this.notes.length === 0) {
        this.notes = [
          {
            title: this.title,
            desc: this.desc
          }
        ];
      } else {
        this.notes.push({
          title: this.title,
          desc: this.desc
        });
      }

      this.title = "";
      this.desc = "";
      this.$q.localStorage.set("notes", this.notes);

      this.loading = false;
    },
    hapus(index) {
      this.notes.splice(index, 1);
      this.$q.localStorage.set("notes", this.notes);
    }
  }
};
</script>

<style></style>
