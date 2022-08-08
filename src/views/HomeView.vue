<script setup>
import { reactive } from 'vue'
import *as  axios from 'axios'


defineProps({
  toggle: Function,
  modal: Boolean,
});



const state = reactive({
  username: '',
  email: ''
})

const createAcc = async () => {
  console.log(state.username, state.email)

  const { data } = axios.post()
}
</script>

<template>
  <main>
    <section class="bg-white lg:mt-10 text-center lg:text-left lg:h-[110vh]">
      <div class="lg:ml-20 mx-8 lg:flex">
        <div class="pt-10 lg:pt-24 lg:w-1/2">
          <h2
            class="
              text-[#162044]
              font-black
              text-[30px]
              leading-tight
              lg:text-[55px] lg:mr-8
            "
          >
            Get in-demand skills to grow your career in the web3 industry
          </h2>
          <p class="inter text-[16px] lg:text-[16px] pt-5">
            Learn from industry experts, get internships, jobs and career
            opptunities.
          </p>
          <p class="inter text-[16px] lg:text-[16px] pt-3">
            (Pay less for more. Get quality education and training)
          </p>

          <div class="py-5">
            <input
              @click="toggle()"
              class="
                bg-[#162044]
                rounded-[5px]
                text-white
                shadow-lg
                cursor-pointer
                px-20
                p-3
              "
              type="submit"
              value="Create Account"
            />
          </div>
        </div>

        <div>
          <img
            class="lg:absolute lg:right-0 lg:w-1/2"
            src="/images/smile.png"
            alt=""
          />
        </div>
      </div>
    </section>

    <section id="about">
      <div class="lg:mx-20 mx-8">
        <div
          class="
            heading
            lg:text-5xl
            text-3xl
            lg:my-0
            my-8
            font-bold
            text-center text-[#162044]
          "
        >
          About Optimus Pro Academy
        </div>
        <div class="lg:flex justify-between">
          <div class="lg:text-lg lg:w-1/2 my-auto text-[#0A1833]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            perspiciatis. Provident tenetur distinctio deserunt cum odit
            aspernatur velit, quos repellat aperiam sint, suscipit ipsum error
            commodi facere nam earum perspiciatis.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            perspiciatis. Provident tenetur distinctio
          </div>
          <div class="lg:w-1/2 lg:my-0 my-10">
            <img class="" src="/images/about.png" alt="" />
          </div>
        </div>
        <div class="lg:flex justify-between lg:mx-20">
          <div
            class="
              card
              lg:mb-0
              mb-12
              lg:px-8
              px-4
              lg:py-10
              py-8
              lg:w-1/2 lg:mr-5
              rounded-md
              text-[#0A1833]
            "
          >
            <img src="/images/mission.png" alt="" />
            <div class="heading text-2xl my-4">MISSION</div>
            <div class="lg:text-lg">
              Work with top companies anywhere in the world either onsite or
              from the comfort of your home.
            </div>
          </div>
          <div
            class="
              card
              lg:px-8
              px-4
              lg:py-10
              py-8
              lg:w-1/2 lg:ml-5
              rounded-md
              text-[#0A1833]
            "
          >
            <img src="/images/vision.png" alt="" />
            <div class="heading text-2xl my-4">VISION</div>
            <div class="lg:text-lg">
              Work with top companies anywhere in the world either onsite or
              from the comfort of your home.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="mx-3 lg:my-32 my-16">
        <div
          class="
            lg:mx-auto lg:w-3/4
            bg-[#0A1833]
            rounded-xl
            text-center
            lg:p-16
            p-8
          "
        >
          <div class="text-[#7EFCFC] lg:text-base text-sm">
            SUBSCRIBE TO OUR NEWSLETTER
          </div>
          <div
            class="lg:text-5xl text-3xl leading-tight my-6 heading text-white"
          >
            GET LATEST NEW AND UPDATES ON WEB3 COURSES AND CONTENT
          </div>
          <div class="lg:flex justify-between lg:w-1/2 mx-auto">
            <input type="text" class="p-3 px-3 w-2/3" placeholder="Email Address" />
            <button
              class="text-[#0A1833] p-3 px-3 bg-[#7EFCFC] lg:m-0 m-2 lg:w-36"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="lg:mx-20 mx-8">
        <div
          class="
            heading
            lg:text-6xl
            font-bold
            text-3xl text-[#162044] text-center
            capitalize
          "
        >
          contact us
        </div>
        <div class="lg:flex justify-between my-8">
          <div class="bg-[#FAFAFA] p-4 lg:w-96">
            <div class="lg:text-2xl text-xl text-[#0A1833] font-bold">
              Contact
            </div>
            <div>M: +234(0)909.199.6571</div>
            <div>E: sales.ng@optimus.com</div>
          </div>
          <div class="lg:w-1/2">
            <div class="my-3">
              <input
                type="text"
                class="p-3 border border-gray-300 w-full bg-[#FAFAFA]"
                placeholder="Email Address"
              />
            </div>
            <div class="my-3">
              <input
                type="text"
                class="p-3 border border-gray-300 w-full bg-[#FAFAFA]"
                placeholder="Subject"
              />
            </div>
            <div class="my-3">
              <textarea
                class="w-full h-32 border border-gray-300 p-3 bg-[#FAFAFA]"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="mt-6 text-center">
              <button class="p-3 bg-[#7EFCFC] w-40 text-[#0A1833]">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main modal -->
    <div
      v-if="modal"
      class="h-full w-full bg-black fixed top-0 opacity-50"
    ></div>
    <div
      v-if="modal"
      id="defaultModal"
      tabindex="-1"
      class="
        overflow-y-auto overflow-x-hidden
        fixed
        top-0
        right-0
        left-0
        z-50
        w-full
        md:inset-0 md:h-full
        justify-center
        items-center
        flex
      "
      aria-modal="true"
      role="dialog"
    >
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div
          class="relative bg-white rounded-lg shadow h-[420px]"
        >
          <!-- Modal header -->
          <div class="flex justify-between items-start p-4 rounded-t">
            <button
              @click="modal = false"
              type="button"
              class="
                text-gray-400
                bg-transparent
                hover:bg-gray-200 hover:text-gray-900
                rounded-lg
                text-sm
                p-1.5
                ml-auto
                inline-flex
                items-center
                dark:hover:bg-gray-600 dark:hover:text-white
              "
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <!-- <span class="sr-only">Close modal</span> -->
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <div class="text-3xl text-center heading text-[#162044]">
              CREATE ACCOUNT
            </div>
            <div class="my-3 lg:w-2/3 mx-auto relative">
              <img
                src="/images/bxs_user.png"
                class="absolute top-3 left-4"
                alt=""
              />
              <input
                v-model="state.username"
                type="text"
                class="p-3 border border-gray-200 w-full pl-12"
                placeholder="Username"
              />
            </div>
            <div class="my-3 lg:w-2/3 mx-auto relative">
              <img
                src="/images/eva_email-fill.png"
                class="absolute top-3 left-4"
                alt=""
              />
              <input
                v-model="state.email"
                type="text"
                class="p-3 border border-gray-200 w-full pl-12"
                placeholder="Email Address"
              />
            </div>

            <div class="my-8 text-center">
              <button @click="createAcc" class="p-3 bg-[#7EFCFC] w-40 text-[#0A1833]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="mt-20">
    <div class="bg-[#F4F7FF]">
      <div class="flex justify-around w-[300px] m-auto py-10">
        <a
          href="https://www.facebook.com/OptimusPro/"
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
          href="https://www.instagram.com/p/Cgw2_qmDmY3/?igshid=YmMyMTA2M2Y=
"
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
      <div class="lg:mx-20">
        <div class="py-10">
          <p class="text-white inter text-[16px] text-center">
            Copyright © 2022 all rights reserved Optimus Pro
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