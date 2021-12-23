<template>
  <div>
    <h1>ダッシュボード</h1>
    <div v-if="$auth.loggedIn">
      <p>{{ $store.state.auth.user }}</p>
      <button @click="$auth.logout()">Logout</button>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'user_auth',
}
</script>
