<template>
  <div
    class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <AtomsLogo></AtomsLogo>
      <AtomsBox>
        <form @submit.prevent="loginUser">
          <!-- <div>
            <label for="email">Email:</label>
            <input v-model="user.email" />
          </div> -->
          <div>
            <!-- <label for="password">Password:</label> -->
            <!-- <input v-model="user.password" type="password" /> -->
            <!-- <label for="email">メールアドレス</label> -->
            <MoleculesItem>
              <template #title>メールアドレス</template>
              <AtomsInput
                :value="user.email"
                type="text"
                @input="user.email = $event"
              ></AtomsInput>
            </MoleculesItem>
            <MoleculesItem class="mt-3">
              <template #title>パスワード</template>
              <AtomsInput
                autocomplete=""
                :value="user.password"
                type="password"
                @input="user.password = $event"
              ></AtomsInput>
            </MoleculesItem>
          </div>
          <AtomsButton type="submit" class="w-full mt-3">ログイン</AtomsButton>
        </form>
        <div id="errorMessage"></div>
      </AtomsBox>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'notLogin',
  data() {
    return {
      type: {
        text: 'text',
        password: 'password',
      },
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
