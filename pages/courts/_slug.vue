<template>
  <div class="container mx-auto px-4 mb-8">
    <Loader v-if="$fetchState.pending" />
    <div v-else>
      <h1 class="text-3xl md:text-6xl mb-8">
        {{ court.name }}
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <client-only>
            <CourtSlider v-if="court.images" :images="court.images" />
          </client-only>
        </div>
        <div>
          <div class="font-semibold">Fiyat: {{ court.price }}</div>
          <div class="flex items-center">
            <LocationMarkerIcon class="h-4 w-4 mr-1" />
            <a target="_blank" class="link" :href="court.adress"
              >Adres için tıklayın.</a
            >
          </div>
          <div class="flex items-center">
            <PhoneIcon class="h-4 w-4 mr-1" />
            <a class="link" :href="`tel:${court.phone}`"
              >Aramak için tıklayın</a
            >
          </div>
        </div>
      </div>
      <div>
        <h2
          class="text-3xl border-b border-gray-500 mb-4 mt-8 pb-2 font-medium"
        >
          Yorumlar
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="(comment, idx) in court.comments"
            :key="idx"
            class="p-4 border rounded-md shadow-sm"
          >
            {{ comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LocationMarkerIcon, PhoneIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    LocationMarkerIcon,
    PhoneIcon,
  },
  data() {
    return {
      court: null,
    }
  },
  async fetch() {
    const slug = this.$route.params.slug
    const court = await this.$content('courts').where({ slug }).fetch()
    this.court = court[0]
  },
  head() {
    return this.court && this.head(this.court.name, this.court.name)
  },
}
</script>

<style lang="scss" scoped></style>
