<template>
  <div class="container mx-auto">
    <div class="flex items-center p-4 border-b border-gray-500 mb-8">
      <nuxt-link class="flex items-center" to="/">
        <img src="@/assets/logo.png" class="mr-2 h-14" alt="" />
        <span class="text-xl font-medium text-gray-900"
          >Tenis <br />
          Partnerim</span
        >
      </nuxt-link>

      <div class="pl-16">
        <div class="items-stretch hidden lg:flex space-x-2">
          <nuxt-link to="/courts" class="btn btn-sm btn-ghost rounded-btn">
            Kortlar
          </nuxt-link>
        </div>
      </div>

      <a
        href="https://forms.gle/3vPEF7kWpxQciBgz9"
        target="_blank"
        class="btn btn-active ml-auto hidden lg:flex"
        >Kayıt Ol</a
      >

      <div class="dropdown dropdown-end lg:hidden ml-auto">
        <div tabindex="0" class="m-1 btn btn-active"><MenuAlt3Icon /></div>
        <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a>Kortlar</a>
          </li>
          <li>
            <a href="https://forms.gle/3vPEF7kWpxQciBgz9" target="_blank"
              >Kayıt Ol</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { MenuAlt3Icon } from '@vue-hero-icons/outline'
export default {
  components: {
    MenuAlt3Icon,
  },
}
</script>

<style lang="scss" scoped></style>
