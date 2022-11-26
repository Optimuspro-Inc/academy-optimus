<script setup lang="ts">
import { useQuery, useMutation } from "@vue/apollo-composable";
import { storeToRefs } from "pinia";
import gql from "graphql-tag";
import { reactive, watch } from "vue";
import { useToast } from "vue-toastification";
import checkEmail from "../utils/isEmail";
// @ts-ignore
import Newsletter from "../components/Newsletter.vue";
import { useModelStore } from "@/stores/model";
// @ts-ignore
import Contact from "../components/Contact.vue";

const { updateModelState } = useModelStore();
const { open } = storeToRefs(useModelStore());
</script>

<template>
  <main>
    <section
      id="Articles"
      class="bg-white lg:mt-10 text-center lg:text-left lg:h-[110vh]"
    >
      <div class="lg:ml-20 mx-8 lg:flex pb-20">
        <div class="pt-10 lg:pt-24 lg:70%">
          <h2
            class="text-[#162044] font-black text-[30px] leading-tight lg:text-[55px] lg:mr-8"
          >
            Check out Our Articles
          </h2>
        </div>
      </div>
      <div class="lg:mx-20 mx-8 pb-20 text-[#162044]">
        <div class="lg:flex justify-between">
          <div class="lg:w-200 lg:my-0 my-10">
            <img
              class="border-4 border-[#162044]"
              src="/images/about.png"
              alt=""
            />
            <div class="lg:text-lg">
              Post Description........
              <span class="underline ml-1 text-[#162044]">
                <a href="" target="_blank" rel="noopener norefferer"
                  >Read More!</a
                >
              </span>
            </div>
          </div>
          
          </div>
        </div>
    </section>

    <section
      id="Videos"
      class="bg-white lg:mt-10 text-center lg:text-left lg:h-[110vh]"
    >
      <div class="lg:ml-20 mx-8 lg:flex pb-20 ">
        <div class="pt-10 lg:pt-24 lg:70%">
          <h2
            class="text-[#162044] font-black text-[30px] leading-tight lg:text-[55px] lg:mr-8"
          >
            Watch our Video Contents
          </h2>
        </div>
      </div>
      <div class="lg:mx-20 mx-8 pb-20 text-[#162044] ">
        <div class="lg:flex">
          <div class=" lg:my-0 my-10">
            <iframe
              width="650"
              height="400"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            >
            </iframe>
            <a href="" target="_blank" rel="noopener norefferer"
                  >Subscribe to our Youtube Channel</a
                >
          </div>
    
        </div>
      </div>
    </section>

    <Newsletter />

    <Contact />
  </main>

  <footer class="mt-20">
    <div class="bg-[#F4F7FF]">
      <div class="flex justify-around w-[300px] m-auto py-10">
        <a
          href="https://www.facebook.com/profile.php?id=100082993549468"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-[30px]" src="/images/fb.png" alt="" />
        </a>

        <a
          href="https://t.me/optimuspro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-[30px]" src="/images/tg.png" alt="" />
        </a>
        <a
          href="https://www.instagram.com/p/Cgw2_qmDmY3/?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-[30px]" src="/images/ig.png" alt="" />
        </a>
        <a
          href="https://twitter.com/academy_optimus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-[30px]" src="/images/tw.png" alt="" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCdG6TSofIqs0VwrLTNw7z2w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="w-[30px]" src="/images/youtube.png" alt="" />
        </a>
      </div>
    </div>
    <div class="bg-[#0A1833]">
      <p class="text-white inter text-[16px] text-center py-3">
        optimusproacademy@gmail.com
      </p>
      <div class="lg:mx-20">
        <div class="py-10">
          <p class="text-white inter text-[16px] text-center">
            Copyright © {{ new Date().getFullYear() }} all rights reserved
            Optimus Pro
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
