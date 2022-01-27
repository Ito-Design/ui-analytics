<template>
  <div>
    <header>ログイン状態:{{ $auth.loggedIn }}</header>
    <nuxt />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-colorBase200 text-colorBase500',
    },
  },
}
</script>
