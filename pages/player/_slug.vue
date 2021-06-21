<template>
  <div class="container mx-auto px-4">
    <div v-if="$fetchState.pending">loading</div>
    <div v-else>
      <div class="flex items-center py-8">
        <img
          :src="player.image"
          class="rounded-full h-28 w-28 object-cover mr-4"
        />
        <div>
          <h3 class="card-title mb-2">
            {{ player.name }}, {{ player.age }} yaş
          </h3>
          <div class="flex items-center mb-2">
            <LocationMarkerIcon class="h-4 w-4 mr-1" />
            <h4 class="text-sm">{{ player.district }}, {{ player.city }}</h4>
          </div>
          <h4 class="text-sm font-medium">Seviye: ITN {{ player.itn }}</h4>
        </div>
      </div>
      <div class="font-bold mb-4">
        {{ player.howManyYears }} yıldır tenis oynuyorum.
      </div>
      <div class="mb-8">
        {{ player.description }}
      </div>
      <div>
        <h3 class="font-medium mb-2">Buradan Ulaşabilirsiniz</h3>
        <div class="flex items-center space-x-2">
          <a :href="player.instagram" target="_blank">
            <IconInstagram class="h-4 transition transform hover:scale-125" />
          </a>
          <div class="flex items-center">
            <IconTelegram
              class="h-4 transition transform hover:scale-125"
            /><span class="font-medium">/@{{ player.telegram }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LocationMarkerIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    LocationMarkerIcon,
  },
  data() {
    return {
      player: null,
    }
  },
  async fetch() {
    const slug = this.$route.params.slug
    const player = await this.$content('players').where({ slug }).fetch()
    this.player = player[0]
  },
  fetchOnServer: false,
}
</script>
