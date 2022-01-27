<template>
  <header class="bg-colorBase100 grid grid-cols-3 py-1">
    <AtomsLogo class="col-start-2"></AtomsLogo>
    <div class="flex justify-end items-center">
      <div class="mr-3">ログイン状態:{{ $auth.loggedIn }}</div>
      <div v-if="$auth.loggedIn">
        <button class="mr-3" @click="$auth.logout()">ログアウト</button>
      </div>
    </div>
  </header>
</template>
