<template>
  <input
    :value="value"
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },
}
</script>
