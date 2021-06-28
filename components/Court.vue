<template>
  <nuxt-link
    :to="localePath({ name: 'courts-slug', params: { slug: court.slug } })"
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
      <img loading="lazy" :src="court.cover" class="h-60 object-cover" />
    </figure>
    <div class="justify-end card-body p-0">
      <div class="bg-gray-900 py-2 pl-5 bg-opacity-70">
        <h2 class="card-title mb-1">{{ court.name }}</h2>
        <div class="flex items-center mb-0">
          <LocationMarkerIcon class="h-4 w-4 mr-1" />
          <h4 class="text-sm">{{ court.district }}, {{ court.city }}</h4>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { LocationMarkerIcon } from '@vue-hero-icons/outline'
export default {
  components: {
    LocationMarkerIcon,
  },
  props: {
    court: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.card.image-full:before {
  @apply opacity-20;
}
</style>
