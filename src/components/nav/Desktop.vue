<template>
  <div class="bg-white pt-8">
    <nav class="container">
      <div class="flex justify-between">
        <div class="flex justify-between w-[520px]">
          <img class="w-[140px]" src="/images/logo.png" alt="">
          <div>
            <ul class="flex p-2 w-[500px]">
              <li @click="show = !show" class="inter font-semibold text-sm pl-8 flex">
                <RouterLink class="w-[60px] flex justify-between" to="/">Learn <img class="w-[11px] h-[8px] mt-[7px]" src="/images/Vector.png" alt=""> </RouterLink>
                <div></div>
              </li>
              <li class="inter font-semibold text-sm pl-8">
                <RouterLink to="/">Pricing</RouterLink>
              </li>
              <li class="inter font-semibold text-sm pl-8">
                <RouterLink to="/">Blog</RouterLink>
              </li>
              <li class="inter font-semibold text-sm pl-8">
                <RouterLink to="/">For Business</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-[308px] flex justify-between">
          <button class="text-[#162044] border-[#162044] border-[1px] border-solid w-[140px] h-[45px] rounded-[53px]">Login</button>
          <button class="text-white border-[#162044] border-[1px] border-solid w-[140px] h-[45px] rounded-[53px] bg-[#162044]">Sign Up</button>
        </div>
      </div>
      <Transition>
        <ul v-if="show" class="absolute left-[228px] inter bg-white p-5 shadow-xl rounded-xl w-[248px]">
        <li class="pt-2">
          <RouterLink to="/">Courses</RouterLink>
        </li>
        <li class="pt-2"> <RouterLink to="/">Free Educational Resources</RouterLink> </li>
        <li class="pt-2"> <RouterLink to="/">Blog</RouterLink> </li>
      </ul>
      </Transition>
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  name: 'Navbar',
  data () {
    return {
      show: false
    }
  }
  
}

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>