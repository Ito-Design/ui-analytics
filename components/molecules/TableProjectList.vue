<template>
  <table>
    <thead>
      <tr>
        <th>プロジェクト名</th>
        <th>PV</th>
        <th>訪問数</th>
        <th>トラッキング情報</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>
          <a :href="item.domain">{{ item.name }}</a>
        </td>
        <td>{{ item.pv }}</td>
        <td>{{ item.visit }}</td>
        <td>
          <span v-if="item.tracking === 1">正常にトラッキング中</span>
          <span v-else>未トラッキング</span>
        </td>
        <td><a href="#">■</a> <a href="#">●</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.$axios
      .$get('/api/project/')
      .then((response) => (this.items = response.data))
      .catch((error) => console.log(error))
  },
}
</script>

<style lang="css" scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
  color: white;
  background-color: #1e90ff;
}
.asc::after {
  content: '▼';
}
.desc::after {
  content: '▲';
}
</style>
