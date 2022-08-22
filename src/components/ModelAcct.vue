<template>
  <div>
     <div
      v-if="open"
      class="h-full w-full bg-black fixed top-0 opacity-50"
    ></div>
   <div
      v-if="open"
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
              @click="updateModelState"
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
  </div>
</template>

<script setup lang="ts">
import { useQuery, useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag';
import { reactive } from 'vue'
import { useToast } from "vue-toastification";
import checkEmail from '@/utils/isEmail'
import { storeToRefs } from 'pinia'
import { useModelStore } from '@/stores/model'


// const toast = useToast();
const  { open } = storeToRefs(useModelStore())
const { updateModelState } = useModelStore()

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

<style scoped>

</style>