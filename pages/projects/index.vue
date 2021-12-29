<template>
  <div>
    <nuxt-link to="/projects/register">プロジェクトの新規追加</nuxt-link>
    <MoleculesTableProjectList></MoleculesTableProjectList>
    <div v-if="$auth.loggedIn">
      <p>{{ $store.state.auth.user }}</p>
      <button @click="$auth.logout()">Logout</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
