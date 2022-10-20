<script setup lang="ts">
import { RouterLink } from "vue-router";
import { reactive } from "vue";
import { useModelStore } from "@/stores/model";

const { updateModelState } = useModelStore();

const state = reactive({
  show: false,
});
</script>

<template>
  <div class="bg-white pt-8">
    <nav class="lg:mx-20">
      <div class="flex justify-between">
        <div class="flex justify-between">
          <img class="w-[140px]" src="/images/logo.png" alt="" />
          <!-- <div>
            <ul class="flex p-2 w-[500px]">
              <li @click="show = !show" class="inter font-semibold text-sm pl-8 flex">
                <RouterLink class="w-[60px] flex justify-between" to="/">Learn <img class="w-[11px] h-[8px] mt-[7px]" src="/images/Vector.png" alt=""> </RouterLink>
                <div></div>
              </li>
              <li class="inter font-semibold text-sm pl-8">
                <RouterLink to="/">About</RouterLink>
              </li>
              <li class="inter font-semibold text-sm pl-8">
                <RouterLink to="/">Contact</RouterLink>
              </li>
              <li class="inter font-semibold text-sm pl-8">
                <RouterLink to="/">For Business</RouterLink>
              </li>
            </ul>
          </div> -->
        </div>
        <div class="flex justify-between">
          <ul class="flex p-3 mr-6">
            <li class="inter text-sm pl-8">
              <a href="#about">About</a>
            </li>
            <li class="inter text-sm pl-8">
              <a href="#cohorts">Programs</a>
            </li>
            <li class="inter text-sm pl-8">
              <a href="#team">Team</a>
            </li>
            <li class="inter text-sm pl-8">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <!-- <button class="text-[#162044] border-[#162044] border-[1px] border-solid w-[140px] h-[45px] rounded-[53px]">Login</button> -->
          <button
            @click="updateModelState"
            class="text-white border-[#162044] border-[1px] border-solid w-[200px] h-[45px] rounded-[53px] bg-[#162044]"
          >
            Create Account
          </button>
        </div>
      </div>
      <!-- <Transition>
        <ul
          v-if="state.show"
          class="
            absolute
            left-[228px]
            inter
            bg-white
            p-5
            shadow-xl
            rounded-xl
            w-[248px]
          "
        >
          <li class="pt-2">
            <RouterLink to="/">Courses</RouterLink>
          </li>
          <li class="pt-2">
            <RouterLink to="/">Free Educational Resources</RouterLink>
          </li>
          <li class="pt-2"><RouterLink to="/">Blog</RouterLink></li>
        </ul>
      </Transition> -->
    </nav>
  </div>
</template>

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
