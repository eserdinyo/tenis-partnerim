<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col mb-8">
      <input
        v-model="title"
        type="text"
        class="input input-bordered mb-2"
        placeholder="Title"
      />
      <input
        :value="slug"
        type="text"
        disabled
        class="input input-disabled mb-2"
        placeholder="slug"
      />
      <input
        v-model.number="price"
        type="number"
        class="input input-bordered mb-2"
        placeholder="Price"
      />
      <button
        class="btn"
        :class="{ 'btn-disabled loading': isSaving }"
        @click="createProduct"
      >
        Save
      </button>
    </div>

    <div>
      <div v-for="product in products" :key="product.id" class="card shadow">
        <div class="card-body">
          <h2 class="card-title">{{ product.title }}</h2>
          <h3 class="card-title">{{ product.price }}</h3>
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </div>
      </div>
    </div>
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
      <!-- <Player v-for="player in players" :key="player.slug" :player="player" /> -->
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'
import slugify from 'slugify'

export default {
  async asyncData({ $graphcms }) {
    const { products } = await $graphcms.request(
      gql`
        {
          products {
            id
            title
            slug
            visible
            price
            description
          }
        }
      `
    )

    return {
      products,
    }
  },
  data() {
    return {
      players: [],
      title: '',
      price: '',
      isSaving: false,
      products: [],
    }
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
    slug() {
      return slugify(this.title, {
        lower: true,
      })
    },
  },
  methods: {
    async createProduct() {
      this.isSaving = true
      try {
        const res = await this.$graphcms.request(
          gql`
            mutation {
              createProduct(
                data: { title: "${this.title}", slug: "${this.slug}", price: ${this.price} }
              ) {
                id
                title
                slug
                price
              }
            }
          `
        )

        console.log(res)
        this.isSaving = false
      } catch (e) {
        this.isSaving = false
        console.log(e.response.errors[0])
      }
    },
  },
}
</script>
