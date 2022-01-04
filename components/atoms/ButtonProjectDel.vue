<template>
  <button @click="deleteRow(id)">プロジェクト{{ id }}の削除</button>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteRow(id) {
      this.$axios
        .delete('/api/project/del/' + id)
        .then((response) => {
          console.log(response)
          this.$router.push('/projects')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
