<template>
  <nuxt-link
    :to="localePath({ name: 'player-slug', params: { slug: player.slug } })"
    class="
      card
      transition
      text-center
      hover:shadow-xl
      border border-gray-900
      cursor-pointer
    "
  >
    <figure class="px-10 pt-10">
      <img
        loading="lazy"
        :src="player.image"
        :alt="player.slug"
        :title="player.slug"
        class="rounded-full h-28 w-28 object-cover mx-auto"
      />
    </figure>
    <div class="card-body flex flex-col">
      <h3 class="card-title mb-2">
        {{ player.name }}, {{ player.age }} {{ $t('YEARS_OLD') }}
      </h3>
      <div class="flex items-center justify-center mb-2">
        <LocationMarkerIcon class="h-4 w-4 mr-1" />
        <h4 class="text-sm">{{ player.district }}, {{ player.city }}</h4>
      </div>
      <h4 class="text-sm mb-8 font-medium">
        {{ $t('LEVEL') }}: ITN {{ player.itn }}
      </h4>
      <p v-if="player.description" class="mb-8">
        <template v-if="$i18n.locale === 'tr'">
          {{ player.description.substr(0, 120) }}...
        </template>
        <template v-else>
          {{ player.description_en.substr(0, 120) }}...
        </template>
      </p>
      <div class="justify-center card-actions mt-auto">
        <nuxt-link
          :to="
            localePath({ name: 'player-slug', params: { slug: player.slug } })
          "
          class="btn btn-outline"
          >{{ $t('MORE') }}...</nuxt-link
        >
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
    player: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
