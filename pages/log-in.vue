<template>
  <div>
    <div>
      <h1>ログインユーザ</h1>
      <form @submit.prevent="loginUser">
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="user.email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input v-model="user.password" type="password" />
        </div>

        <button type="submit">ログイン</button>
      </form>
      <div id="errorMessage"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  // mounted() {
  //   alert('ページが読み込まれました！')
  // },
  methods: {
    async loginUser() {
      try {
        await this.$auth.loginWith('local', {
          data: this.user,
        })
        console.log('成功')
      } catch {
        document.getElementById('errorMessage').innerHTML =
          'ログイン情報が間違っています'
      }
    },
  },
}
</script>

<style lang="css" scoped>
#errorMessage {
  color: red;
}
</style>
