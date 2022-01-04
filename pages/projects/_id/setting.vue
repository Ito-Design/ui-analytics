<template>
  <div>
    <h1>プロジェクト設定</h1>
    <p>プロジェクト名：{{ project.name }}</p>
    <p>プロジェクトID：{{ project.id }}</p>
    <AtomsButtonProjectDel :id="project.id"></AtomsButtonProjectDel>
    <form @submit.prevent="updateProject">
      <div class="form-group">
        <label for="name">プロジェクト名</label>
        <input v-model="updateData.name" />
      </div>
      <button type="submit">変更</button>
    </form>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const project = await context.$axios.$get(
      '/api/project/' + context.params.id
    )
    return { project }
  },
  data() {
    return {
      updateData: {
        name: '',
      },
    }
  },
  methods: {
    updateProject() {
      this.$axios
        .$put('/api/project/update/' + this.$route.params.id, this.updateData)
        .then((response) => {
          console.log(response)
          this.$router.push('/projects')
        })
    },
  },
}
</script>
