<script setup lang="ts">
import { useQuery, useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { reactive, watch } from "vue";
import { useToast } from "vue-toastification";
import checkEmail from "@/utils/isEmail";

const toast = useToast();
const state = reactive({
  email: "",
});

const {
  mutate: joinLetter,
  onDone,
  onError,
} = useMutation(
  gql`
    mutation joinLetter($email: String) {
      joinLetter(email: $email) {
        email
      }
    }
  `,
  () => ({
    variables: {
      email: state.email,
    },
  })
);

onDone((result) => {
  console.log(result.data);
  toast.success(`Joined sucessfully`);
});
onError((error) => {
  console.log(error);
  toast.error(`${error}`);
});

const join = () => {
  const isEmail = checkEmail(state.email);
  if (!isEmail) {
    toast.error("Enter a valid email");
    return;
  }
  joinLetter();
};
</script>

<template>
  <div>
    <section>
      <div class="mx-3 lg:my-32 my-16">
        <div
          class="lg:mx-auto lg:w-3/4 bg-[#0A1833] rounded-xl text-center lg:p-16 p-8"
        >
          <div class="text-[#7EFCFC] lg:text-4xl text-3xl">
            SUBSCRIBE TO OUR NEWSLETTER
          </div>
          <div
            class="lg:text-base text-sm leading-tight my-6 heading text-white"
          >
            STAY UP TO DATE WITH LATEST NEWS, WEB3 EDUCATIONAL CONTENTS AND
            COURSES UPDATE.
          </div>
          <div class="lg:flex justify-between lg:w-1/2 mx-auto">
            <input
              type="text"
              v-model="state.email"
              class="p-3 px-3 w-2/3"
              placeholder="Email Address"
            />
            <button
              class="text-[#0A1833] p-3 px-3 bg-[#7EFCFC] lg:m-0 m-2 lg:w-36"
              @click="join"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
