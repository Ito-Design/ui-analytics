<template>
  <div>
    <h1>ダッシュボード</h1>
    <h2>{{ sort_key }}: {{ sort_asc ? '昇順' : '降順' }}</h2>
    <table>
      <thead>
        <tr>
          <!-- ソートする引数を指定 -->
          <th :class="addClass('name')" @click="sortBy('name')">Name</th>
          <th :class="addClass('email')" @click="sortBy('email')">Email</th>
          <th :class="addClass('website')" @click="sortBy('website')">
            Website
          </th>
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
      sort_asc: true,
    }
  },
  computed: {
    sort_users() {
      const sortUsers = this.users
      if (this.sort_key !== '') {
        let set = 1
        this.sort_asc ? (set = 1) : (set = -1)
        sortUsers.sort((a, b) => {
          if (a[this.sort_key] < b[this.sort_key]) return -1 * set
          if (a[this.sort_key] > b[this.sort_key]) return 1 * set
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
      this.sort_key === key
        ? (this.sort_asc = !this.sort_asc)
        : (this.sort_asc = true)
      this.sort_key = key
    },
    addClass(key) {
      return {
        asc: this.sort_key === key && this.sort_asc,
        desc: this.sort_key === key && !this.sort_asc,
      }
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
.asc::after {
  content: '▼';
}
.desc::after {
  content: '▲';
}
</style>
