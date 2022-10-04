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
    <section class="bg-white lg:mt-10 text-center lg:text-left lg:h-[110vh]">
      <div class="lg:ml-20 mx-8 lg:flex">
        <div class="pt-10 lg:pt-24 lg:w-1/2">
          <h2
            class="text-[#162044] font-black text-[30px] leading-tight lg:text-[55px] lg:mr-8"
          >
            Acquire in-demand skills to grow your career in web3 industry.
          </h2>
          <p class="inter text-[16px] lg:w-[440px] lg:text-[16px] pt-5">
            Learn from industry experts, enjoy direct mentorship benefits, get
            first-hand access to internship and career opportunities.
          </p>

          <div class="py-5">
            <input
              @click="updateModelState()"
              class="bg-[#162044] rounded-[5px] text-white shadow-lg cursor-pointer px-20 p-3"
              type="submit"
              value="Create Account"
            />
          </div>
        </div>

        <div>
          <img
            class="md:w-[469px] m-auto lg:w-[669px]"
            src="/images/smile.png"
            alt=""
          />
        </div>
      </div>
      <div class="lg:ml-20 mx-8 lg:flex"></div>
    </section>

    <section id="about">
      <div class="lg:mx-20 mx-8">
        <div
          class="heading lg:text-5xl text-3xl lg:my-0 my-8 font-bold text-center text-[#162044]"
        >
          About Optimus Pro Academy
        </div>
        <div class="lg:flex justify-between">
          <div class="lg:text-lg lg:w-1/2 my-auto text-[#0A1833]">
            Optimus Pro Academy is your first-rate edu-platform for all
            blockchain and Web3 learning resources. Founded to bridge the talent
            gap for Africans within the blockchain ecosystem. <br />
            <br />
            The academy is charged with upskilling Africans with knowledge and
            in-demand expertise in blockchain and Web3 to enable them build,
            manage and promote innovative ideas to excel in the highly
            competitive and constantly evolving blockchain landscape.
          </div>
          <div class="lg:w-1/2 lg:my-0 my-10">
            <img class="" src="/images/about.png" alt="" />
          </div>
        </div>
        <div class="lg:flex justify-between lg:mx-20">
          <div
            class="card lg:mb-0 mb-12 lg:px-8 px-4 lg:py-10 py-8 lg:w-1/2 lg:mr-5 rounded-md text-[#0A1833]"
          >
            <img class="w-[60px]" src="/images/terminals.webp" alt="" />
            <div class="heading text-2xl my-4">MISSION</div>
            <div class="lg:text-lg">
              To empower 85M+ Africans with high-level professional skills in
              various blockchain and Web3.0 careers through tailored self-paced
              courses and programs best suited for scholar’s need.
            </div>
          </div>
          <div
            class="card lg:px-8 px-4 lg:py-10 py-8 lg:w-1/2 lg:ml-5 rounded-md text-[#0A1833]"
          >
            <img src="/images/rocket2.webp" alt="" class="w-[60px]" />
            <div class="heading text-2xl my-4">VISION</div>
            <div class="lg:text-lg">
              To highlight Africa’s relevance in the blockchain revolution,
              bridging the continent to the global financial system and
              encouraging growth, economic and regional development.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="cohorts">
      <div class="lg:mx-20 mx-8">
        <div class="lg:mx-auto bg-[#0A1833] text-center lg:p-16 p-8 my-10">
          <div class="text-[#7EFCFC] lg:text-4xl text-3xl">
            Join Our Upcoming Training Programs
          </div>
          <div class="lg:flex justify-between w-[100%] m-auto py-10">
            <div class="bg-white lg:mx-auto lg:w-1/6 rounded-xl text-center">
              <div
                class="lg:text-base text-sm leading-tight my-6 heading text-[#0A1833]"
              >
                FINANCIAL ANALYSIS
              </div>
              <div class="flex justify-around w-[80px] m-auto py-5">
                <img
                  class="w-[70]"
                  src="/images/market-analysis.png"
                  alt="Solididty Cohort"
                />
              </div>
              <button
                class="text-[#0A1833] p-3 px-3 bg-[#7EFCFC] lg:m-0 m-2 lg:w-36 py-3"
              >
                Apply
              </button>
            </div>
            <div class="bg-white lg:mx-auto lg:w-1/6 rounded-xl text-center">
              <div
                class="lg:text-base text-sm leading-tight my-6 heading text-[#0A1833]"
              >
                BLOCKCHAIN PROGRAMMING
              </div>
              <div class="flex justify-around w-[80px] m-auto py-5">
                <img
                  class="w-[70]"
                  src="/images/ethereum.webp"
                  alt="Solididty Cohort"
                />
              </div>
              <button
                class="text-[#0A1833] p-3 px-3 bg-[#7EFCFC] lg:m-0 m-2 lg:w-36 py-3"
              >
                Apply
              </button>
            </div>
            <div class="bg-white lg:mx-auto lg:w-1/6 rounded-xl text-center">
              <div
                class="lg:text-base text-sm leading-tight my-6 heading text-[#0A1833]"
              >
                DIGITAL ARTS AND PRODUCT DESIGN
              </div>
              <div class="flex justify-around w-[80px] m-auto py-5">
                <img
                  class="w-[70]"
                  src="/images/product-design.webp"
                  alt="Solididty Cohort"
                />
              </div>
              <button
                class="text-[#0A1833] p-3 px-3 bg-[#7EFCFC] lg:m-0 m-2 lg:w-36 py-3"
              >
                Apply
              </button>
            </div>
            <div class="bg-white lg:mx-auto lg:w-1/6 rounded-xl text-center">
              <div
                class="lg:text-base text-sm leading-tight my-6 heading text-[#0A1833]"
              >
                MARKETING AND MANAGEMENT
              </div>
              <div class="flex justify-around w-[80px] m-auto py-5">
                <img
                  class="w-[70]"
                  src="/images/bullhorn.webp"
                  alt="Solididty Cohort"
                />
              </div>
              <button
                class="text-[#0A1833] p-3 px-3 bg-[#7EFCFC] lg:m-0 m-2 lg:w-36 py-3"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="team">
      <div class="lg:mx-20 mx-8">
        <div class="lg:mx-auto text-[#162044] text-center lg:p-16 p-8 my-10">
          <div
            class="heading lg:text-5xl text-3xl lg:my-0 my-8 font-bold text-center text-[#162044]"
          >
            Meet The Team
          </div>
          <div class="lg:flex justify-between w-[80%] m-auto py-10">
            <div class="lg:w-1/6 lg:mx-auto">
              <div class="lg:mx-auto lg:w-1/5 rounded-xl text-center">
                <div class="flex justify-around w-[80px] m-auto py-5">
                  <img
                    class="w-[70] rounded-full"
                    src="/images/bullhorn.webp"
                    alt="Solididty Cohort"
                  />
                </div>
                <div class="lg:text-lg my-1 text-[#162044]">Bolande Akubo</div>
              </div>
            </div>
            <div class="lg:w-1/6 lg:mx-auto">
              <div class="lg:mx-auto lg:w-1/5 rounded-xl text-center">
                <div class="flex justify-around w-[80px] m-auto py-5">
                  <img
                    class="w-[70] rounded-full"
                    src="/images/bullhorn.webp"
                    alt="Solididty Cohort"
                  />
                </div>
                <div class="lg:text-lg my-1 text-[#162044]">Bolande Akubo</div>
              </div>
            </div>
            <div class="lg:w-1/6 lg:mx-auto">
              <div class="lg:mx-auto lg:w-1/5 rounded-xl text-center">
                <div class="flex justify-around w-[80px] m-auto py-5">
                  <img
                    class="w-[70] rounded-full"
                    src="/images/bullhorn.webp"
                    alt="Solididty Cohort"
                  />
                </div>
                <div class="lg:text-lg my-1 text-[#162044]">Bolande Akubo</div>
              </div>
            </div>
            <div class="lg:w-1/6 lg:mx-auto">
              <div class="lg:mx-auto lg:w-1/5 rounded-xl text-center">
                <div class="flex justify-around w-[80px] m-auto py-5">
                  <img
                    class="w-[70] rounded-full"
                    src="/images/bullhorn.webp"
                    alt="Solididty Cohort"
                  />
                </div>
                <div class="lg:text-lg my-1 text-[#162044]">Bolande Akubo</div>
              </div>
            </div>
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
<style scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
/* 
@media (min-width: 1024px) {
  .hero-img {
    width: 500px !important;
    height: 500px !important;
  }
  .hero-text {
    width: 450px;
    padding-top: 0px !important;
  }
  .spec{
    padding-top: 40px !important
  }
} */
</style>
