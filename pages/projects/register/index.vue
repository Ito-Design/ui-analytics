<template>
  <div>
    <form @submit.prevent="registerProject">
      <div class="form-group">
        <label for="name">プロジェクト名</label>
        <input v-model="items.name" />
      </div>
      <button type="submit" @click="submit">登録</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {
        name: '',
        pv: 0,
        visit: 0,
        tracking: 0,
        domain: 'https://backlog.com/ja/',
      },
    }
  },
  methods: {
    registerProject() {
      this.$axios.post('/api/project/register', this.items)
    },
    submit() {
      this.$router.push({ name: 'projects' })
    },
  },
}
</script>
