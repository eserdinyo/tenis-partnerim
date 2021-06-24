<template>
  <div class="container mx-auto px-4">
    <Loader v-if="$fetchState.pending" />
    <div
      v-else
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
        mb-8
      "
    >
      <Court v-for="court in courts" :key="court.slug" :court="court" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courts: [],
    }
  },
  nuxtI18n: {
    paths: {
      tr: '/kortlar',
      en: '/courts',
    },
  },
  async fetch() {
    const courts = await this.$content('courts').fetch()
    this.courts = courts
  },
}
</script>

<style lang="scss" scoped></style>
