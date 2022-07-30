<template>
  <div class="bg-white pt-8">
    <nav>
      <div class="container">
        <div class="logo flex justify-between w-[520px]">
          <img class="w-[140px]" src="/images/logo.png" alt="">
          <div>
            <ul class="flex p-2">
              <li class="inter pl-8" v-for="link in links" :key="link.title">
                <RouterLink to="/">{{ link.title }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const links = [
  {
    title: 'Learn',
    link: '/'
  },
  {
    title: 'Pricing',
    link: '/'
  },
  {
    title: 'Blog',
    link: '/'
  },
  {
    title: '  For Business ',
    link: '/'
  },
  
]

</script>

<style scoped>

</style>