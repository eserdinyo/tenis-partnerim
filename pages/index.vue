<template>
  <div class="container mx-auto px-4">
    <div v-if="$fetchState.pending">loading</div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
    >
      <Player v-for="player in players" :key="player.slug" :player="player" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [],
    }
  },
  async fetch() {
    const players = await this.$content('players').fetch()
    this.players = players
  },
}
</script>
