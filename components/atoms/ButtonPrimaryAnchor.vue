<template>
  <nuxtLink
    class="font-bold py-1 px-4 rounded bg-colorMain400 text-white hover:bg-colorMain300 inline-block"
    v-bind="$attrs"
    ><span class="mr-1">
      <slot name="icon"></slot> </span
    ><slot></slot
  ></nuxtLink>
</template>
