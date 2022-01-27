<template>
  <div class="h-screen">
    <Header></Header>
    <nuxt />
  </div>
</template>

<script>
export default {
  middleware: 'user_auth',
  head: {
    bodyAttrs: {
      class: 'bg-colorBase200 text-colorBase500',
    },
  },
}
</script>
