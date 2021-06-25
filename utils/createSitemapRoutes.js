export const createSitemapRoutes = async () => {
  const routes = []
  let cities = []
  let courts = []
  const { $content } = require('@nuxt/content')
  if (courts === null || courts.length === 0)
    courts = await $content('courts').fetch()
  if (cities === null || cities.length === 0)
    cities = await $content('cities').fetch()
  for (const city of cities) {
    routes.push(`/${city.slug}`)
  }
  for (const court of courts) {
    routes.push(`/kort/${court.slug}`)
  }
  return routes
}
