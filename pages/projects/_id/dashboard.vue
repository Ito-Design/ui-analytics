<template>
  <div>
    <h1>ダッシュボード</h1>
    <p>{{ item.name }}</p>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const item = await context.$axios.$get('/api/project/' + context.params.id)
    return { item }
  },
}
</script>
