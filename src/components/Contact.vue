<template>
  <div>
    <section id="contact">
      <div class="lg:mx-20 mx-8">
        <div
          class="heading lg:text-6xl font-bold text-3xl text-[#162044] text-center capitalize"
        >
          contact us
        </div>
        <div class="lg:flex justify-between my-8">
          <div class="lg:w-1/2 lg:mx-auto">
            <div class="my-3">
              <input
                type="text"
                v-model="state.email"
                class="p-3 border border-gray-300 w-full bg-[#FAFAFA]"
                placeholder="Email Address"
              />
            </div>
            <div class="my-3">
              <input
                type="text"
                v-model="state.subject"
                class="p-3 border border-gray-300 w-full bg-[#FAFAFA]"
                placeholder="Subject"
              />
            </div>
            <div class="my-3">
              <textarea
                class="w-full h-32 border border-gray-300 p-3 bg-[#FAFAFA]"
                v-model="state.message"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="mt-6 text-center">
              <button
                @click="sendMail()"
                class="p-3 bg-[#0A1833] w-40 text-[#FAFAFA]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useToast } from "vue-toastification";
import checkEmail from "@/utils/isEmail";

const state = reactive({
  email: "",
  subject: "",
  message: "",
});
const toast = useToast();

const sendMail = async () => {
  const isEmail = checkEmail(state.email);
  if (!isEmail) {
    toast.error("Enter a valid email");
    return;
  }

  if (!state.subject || !state.message) {
    toast.error("Enter every field");
    return;
  }

  // console.log('Fired')
  let data = {
    subject: state.subject,
    email: state.email,
    message: state.message,
  };
  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/sales.ng@optimus.com",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    );

    toast.success("Message sent");
  } catch (error) {
    toast.error("Something went wrong");
  }
};
</script>

<style scoped></style>
