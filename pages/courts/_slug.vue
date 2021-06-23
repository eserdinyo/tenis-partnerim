<template>
  <div class="container mx-auto px-4 mb-8">
    <Loader v-if="$fetchState.pending" />
    <div v-else>
      <h1 class="text-3xl md:text-6xl mb-8">
        {{ court.name }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="">
          <CourtSlider :images="court.images" />
        </div>
        <div>info</div>
      </div>
      <div class="mt-8">
        <GMap
          ref="gMap"
          language="tr"
          :cluster="{ options: { styles: clusterStyle } }"
          :center="{ lat: locations[0].lat, lng: locations[0].lng }"
          :options="{ fullscreenControl: false, styles: mapStyle }"
          :zoom="6"
        >
          <GMapMarker
            v-for="location in locations"
            :key="location.id"
            :position="{ lat: location.lat, lng: location.lng }"
            :options="{
              icon:
                location === currentLocation ? pins.selected : pins.notSelected,
            }"
            @click="currentLocation = location"
          >
            <GMapInfoWindow :options="{ maxWidth: 200 }">
              <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code>
            </GMapInfoWindow>
          </GMapMarker>
          <GMapCircle :options="circleOptions" />
        </GMap>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      court: null,
      currentLocation: {},
      circleOptions: {},
      locations: [],
      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...',
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    }
  },
  async fetch() {
    const slug = this.$route.params.slug
    const court = await this.$content('courts').where({ slug }).fetch()
    this.court = court[0]
    const coordinate = {
      lat: this.court.lat,
      lng: this.court.lng,
    }
    this.locations.push(coordinate)
  },
}
</script>

<style lang="scss" scoped></style>
