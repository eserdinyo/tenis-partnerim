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
      <Player v-for="player in players" :key="player.slug" :player="player" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [],
    }
  },
  async fetch() {
    const players = await this.$content('players').fetch()
    this.players = players
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://www.tenispartnerim.com/',
        },
      ],
      meta: [
        { name: 'og:url', content: this.$config.siteURL },
        { name: 'og:type', content: 'website' },
        {
          name: 'og:image',
          content: this.$config.siteURL + '/tenis-partnerim-huge-logo.png',
        },
        { name: 'og:description', content: this.defaultMetaDescription },
        { name: 'description', content: this.defaultMetaDescription },
        {
          name: 'twitter:description',
          content: this.defaultMetaDescription,
        },
        {
          name: 'twitter:image',
          content: this.$config.siteURL + '/tenis-partnerim-huge-logo.png',
        },
      ],
    }
  },
  computed: {
    defaultMetaDescription() {
      return 'Seviyenize uygun tenis partnerleri bulun!'
    },
  },
}
</script>
