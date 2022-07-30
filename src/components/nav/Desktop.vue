<template>
  <div class="bg-white pt-8">
    <nav>
      <div class="container flex justify-between">
        <div class="flex justify-between w-[520px]">
          <img class="w-[140px]" src="/images/logo.png" alt="">
          <div>
            <ul class="flex p-2">
              <li class="inter font-semibold text-sm pl-8" v-for="link in links" :key="link.title">
                <RouterLink to="/">{{ link.title }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-[308px] flex justify-between">
          <button class="text-[#162044] border-[#162044] border-[1px] border-solid w-[140px] h-[45px] rounded-[53px]">Login</button>
          <button class="text-white border-[#162044] border-[1px] border-solid w-[140px] h-[45px] rounded-[53px] bg-[#162044]">Sign Up</button>
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