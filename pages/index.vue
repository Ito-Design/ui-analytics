<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <AtomsLogo></AtomsLogo>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <nav>
          <nuxt-link to="/log-in">ログイン画面へ</nuxt-link>
          <br />
          <nuxt-link to="/register-member">ユーザー登録</nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'notLogin',
}
</script>

<script>
export default {
  layout: 'notLogin',
  data() {
    return {
      user: {
        name: 'Steve Harry',
        email: 'steve@test.com',
        password: 'password',
      },
    }
  },
}
</script>
