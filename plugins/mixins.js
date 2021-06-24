import Vue from 'vue'

Vue.mixin({
  computed: {
    defaultMetaDescription() {
      return 'Some default meta description'
    },
  },
  methods: {
    head(name, description, image) {
      return {
        title: name ? `${name} - Tenis Partnerim` : 'Tenis Partnerim',
        link: [
          {
            rel: 'canonical',
            href: this.$config.siteURL + this.$route.path,
          },
        ],
        meta: [
          { name: 'og:url', content: this.$config.siteURL },
          { name: 'og:type', content: 'website' },
          {
            name: 'og:image',
            content: image || this.$config.siteURL + '/logo.png',
          },
          {
            name: 'og:description',
            content: description || this.defaultMetaDescription,
          },
          {
            name: 'description',
            content: description || this.defaultMetaDescription,
          },
          {
            name: 'twitter:description',
            content: description || this.defaultMetaDescription,
          },
          {
            name: 'twitter:image',
            content: image || this.$config.siteURL + '/logo.png',
          },
        ],
      }
    },
  },
})
