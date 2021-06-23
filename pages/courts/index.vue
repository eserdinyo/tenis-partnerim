<template>
  <div class="container mx-auto px-4">
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
        mb-8
      "
    >
      <Court v-for="n in 8" :key="n" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
