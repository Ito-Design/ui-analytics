<template>
  <div>
    <h1>ダッシュボード</h1>
    <h1>{{ message }}</h1>
    <h2>{{ sort_key }}</h2>
    <table>
      <thead>
        <tr>
          <!-- ソートする引数を指定 -->
          <th @click="sortBy('name')">Name</th>
          <th @click="sortBy('email')">Email</th>
          <th @click="sortBy('website')">Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in sort_users" :key="user.id">
          <!-- 表示する内容を出力 -->
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="$auth.loggedIn">
      <p>{{ $store.state.auth.user }}</p>
      <button @click="$auth.logout()">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'user_auth',
  data() {
    return {
      message: 'Sort Column In Table',
      users: [],
      sort_key: '',
    }
  },
  computed: {
    sort_users() {
      const sortUsers = this.users
      if (this.sort_key !== '') {
        sortUsers.sort((a, b) => {
          if (a[this.sort_key] < b[this.sort_key]) return -1
          if (a[this.sort_key] > b[this.sort_key]) return 1
          return 0
        })
        return sortUsers
      } else {
        return sortUsers
      }
    },
  },
  // created() {
  //   const items = [
  //     { name: 'Edward', number: 21 },
  //     { name: 'Sharpe', number: 37 },
  //     { name: 'And', number: 45 },
  //     { name: 'The', number: -12 },
  //     { name: 'Magnetic', number: 13 },
  //     { name: 'Zeros', number: 37 },
  //   ]

  //   items.sort(function (a, b) {
  //     const nameA = a.name.toUpperCase()
  //     const nameB = b.name.toUpperCase()
  //     if (nameA < nameB) return 1
  //     if (nameA > nameB) return -1
  //     return 0
  //   })

  //   console.log(items.sort())
  // },
  mounted() {
    this.$axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => (this.users = response.data))
  },
  methods: {
    sortBy(key) {
      this.sort_key = key
      console.log()
    },
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
</style>
