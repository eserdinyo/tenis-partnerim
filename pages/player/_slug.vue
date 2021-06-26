<template>
  <div class="container mx-auto px-4 mb-8">
    <Loader v-if="$fetchState.pending" />
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
        {{ $t('YEARS_PLAY_TENNIS', { year: player.howManyYears }) }}.
      </div>
      <div class="mb-8">
        <template v-if="$i18n.locale === 'tr'">
          {{ player.description }}
        </template>
        <template v-else>
          {{ player.description_en }}
        </template>
      </div>
      <div>
        <h3 class="font-medium mb-2">{{ $t('REACH_HERE') }}</h3>
        <div>
          <a
            v-if="player.instagram"
            class="inline-flex items-center mb-2"
            :href="`https://www.instagram.com/${player.instagram}/`"
            target="_blank"
            title="Instagram"
          >
            <IconInstagram
              class="h-4 transition transform hover:scale-125 mr-1"
            />
            <span class="font-medium">/{{ player.instagram }}</span>
          </a>
          <div
            v-if="player.telegram"
            class="flex items-center"
            title="Telegram"
          >
            <IconTelegram
              class="h-4 transition transform hover:scale-125"
            /><span class="font-medium">/{{ player.telegram }}</span>
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
  nuxtI18n: {
    paths: {
      tr: '/oyuncu/:slug',
      en: '/player/:slug',
    },
  },
  async fetch() {
    const slug = this.$route.params.slug
    const player = await this.$content('players').where({ slug }).fetch()
    this.player = player[0]
  },
  fetchOnServer: false,
}
</script>
