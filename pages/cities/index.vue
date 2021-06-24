<template>
  <div class="container mx-auto px-4">
    <Loader v-if="$fetchState.pending" />
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
    >
      <CityItem v-for="city in cities" :key="city.slug" :city="city" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [],
    }
  },
  nuxtI18n: {
    paths: {
      tr: '/kortlar',
      en: '/courts',
    },
  },
  async fetch() {
    const cities = await this.$content('cities').fetch()
    this.cities = cities
  },
}
</script>
