<template>
  <div class="container mx-auto px-4">
    <Loader v-if="$fetchState.pending" />
    <template v-else>
      <h1 class="text-5xl mb-8">{{ city.name }}</h1>
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
        <Court v-for="court in courts" :key="court.slug" :court="court" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Courts',
  data() {
    return {
      courts: [],
      city: null,
    }
  },
  nuxtI18n: {
    paths: {
      tr: '/:slug',
      en: '/:slug',
    },
  },
  async fetch() {
    const citySlug = this.$route.params.slug.split('-')[0]

    const courts = await this.$content('courts').where({ citySlug }).fetch()
    const city = await this.$content('cities')
      .where({ slug: this.$route.params.slug })
      .fetch()
    this.courts = courts
    this.city = city[0]
  },
  head() {
    return this.city && this.head(this.city.name, this.description)
  },
  computed: {
    description() {
      return 'İstanbuldaki tüm tenis kortlarını incele!'
    },
  },
}
</script>

<style lang="scss" scoped></style>
