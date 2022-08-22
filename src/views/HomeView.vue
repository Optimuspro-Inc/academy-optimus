<script setup lang="ts">
import { useQuery, useMutation } from '@vue/apollo-composable'
import { storeToRefs } from 'pinia'
import gql from 'graphql-tag';
import { reactive, watch } from 'vue'
import { useToast } from "vue-toastification";
import checkEmail from '../utils/isEmail'
// @ts-ignore
import Newsletter from '../components/Newsletter.vue'
import { useModelStore } from '@/stores/model'

const { updateModelState } = useModelStore()
const  { open } = storeToRefs(useModelStore())

const toast = useToast();

const state = reactive({
  username: '',
  email: ''
})

const { result } = useQuery(gql`
      query getUsers {
        users {
          username
          email
        }
      }
    `)
  const { mutate: signUp, onDone, onError } = useMutation(gql`
    mutation createUser($userInput: CreateUserInput) {
        createUser(userInput: $userInput) {
          _id
          username
          email
        }
      }
  `,
  () => ({
      variables: {
        "userInput": {
        "email": state.email,
        "username": state.username
      }
      },
    })
  )


onDone(result => {
  console.log(result.data)
  toast.success(`${result.data.createUser.username} created!!!`);
})
onError(error => {
  console.log(error)
  toast.error(`${error}`);
})


const createAcc = async () => {
  console.log(state.username, state.email)
  const isEmail = checkEmail(state.email)
  if (!isEmail) {
    toast.error("Enter a valid email");
    return
  }
  if (!state.username) {
    toast.error("Enter Username");
    return
  }
  
  signUp()
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
              @click="updateModelState()"
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
            Optimus Pro Academy is your first-rate edu-platform for all blockchain and Web3 learning resources. 
            Founded to bridge the talent gap for Africans within the blockchain ecosystem, 

            <br /><br />
            the academy is charged with upskilling Africans with knowledge and in-demand expertise in blockchain and Web3 to enable them build, manage and promote innovative ideas to excel in the highly competitive and constantly evolving blockchain landscape.
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
              To empower 45M+ Africans with high-level professional skills in various blockchain and Web3 careers through tailored self-paced courses best suited for scholar’s need. Continuous mentorship program by industry experts for accountability and provision of certificates upon course completion for proof of industry expertise.
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
              To highlight Africa’s relevance in blockchain revolution, bridging the continent to the global financial system and encouraging growth, economic and regional development through youth education.
            </div>
          </div>
        </div>
      </div>
    </section>
    <Newsletter />
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