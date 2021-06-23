<template>
  <splide ref="primary" :options="primaryOptions" class="main">
    <splide-slide v-for="(image, i) in images" :key="i">
      <img :src="image" class="h-96 w-full object-cover" />
    </splide-slide>
  </splide>
</template>

<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      primaryOptions: {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: true,
        arrows: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
