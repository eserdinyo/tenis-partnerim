<template>
  <nuxt-link
    :to="localePath({ name: 'courts', params: { slug: city.slug } })"
    class="
      card
      transition
      duration-300
      image-full
      hover:shadow-xl
      transform
      hover:-translate-y-1
    "
  >
    <figure>
      <img :src="city.thumbnail" class="h-72 object-cover" />
    </figure>
    <div class="justify-end card-body p-0">
      <div class="bg-gray-900 py-2 pl-5 bg-opacity-70">
        <h2 class="card-title mb-1">{{ city.name }}</h2>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card.image-full:before {
  @apply opacity-10;
}
</style>
