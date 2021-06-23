<template>
  <nuxt-link
    to="/"
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
      <img
        src="https://i1.wp.com/www.okuruz.net/wp-content/uploads/2018/03/antalya-tenis-kortlar%C4%B1.jpg"
      />
    </figure>
    <div class="justify-end card-body p-0">
      <div class="bg-gray-900 py-2 pl-5 bg-opacity-70">
        <h2 class="card-title mb-1">Moda Sahil Tenis Kortu</h2>
        <div class="flex items-center mb-0">
          <LocationMarkerIcon class="h-4 w-4 mr-1" />
          <h4 class="text-sm">Kadiköy, İstanbul</h4>
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
}
</script>

<style>
.card.image-full:before {
  @apply opacity-20;
}
</style>
