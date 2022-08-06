<script setup lang="ts">
</script>

<template>
  <main>
    <section class="bg-white lg:mt-10 text-center lg:text-left lg:h-[100vh]">
      <div class="container lg:flex">
        <div class="pt-10 lg:pt-24">
          <h2
            class="
              text-[#162044]
              font-black
              text-[30px]
              leading-tight
              lg:text-[50px] lg:w-[526px]
            "
          >
            Get in-demand skills to grow your career in the web3 industry
          </h2>
          <p class="inter text-[16px] lg:text-[16px] lg:w-[475px] pt-5">
            Learn from industry experts, get internships, jobs and career
            opptunities.
          </p>
          <p class="inter text-[16px] lg:text-[16px] lg:w-[475px] pt-3">
            (Pay less for more. Get quality education and training)
          </p>

          <div class="py-5">
            <!-- <input
              class="
                w-[150px]
                h-[45px]
                mr-2
                lg:w-[242px]
                rounded-[5px]
                lg:h-[50px]
                border-[#E7EBEE]
                bg-[#FAFAFA]
                outline-none
                pl-[10px]
                lg:pl-[58px] lg:mr-[25px]
              "
              placeholder="Email Address"
              type="text"
            /> -->
            <input
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
            class="lg:absolute lg:right-0 lg:w-[600px] lg:h-[600px]"
            src="/images/smile.png"
            alt=""
          />
        </div>
      </div>
    </section>

    <section>
      <div class="container">
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
          <div class="lg:w-1/2 lg:p-10 lg:my-0 my-10">
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
            <input type="text" class="p-3 px-3" placeholder="Email Address" />
            <button
              class="text-[#0A1833] p-3 px-3 bg-[#7EFCFC] lg:m-0 m-2 lg:w-36"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div
          class="
            heading
            lg:text-6xl
            font-bold
            text-3xl
            text-[#162044] text-center
            capitalize
          "
        >
          contact us
        </div>
        <div class="lg:flex justify-between my-8">
          <div class="bg-[#FAFAFA] p-4 lg:w-96">
            <div class="lg:text-2xl text-xl text-[#0A1833] font-bold">Contact</div>
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
      <div class="container">
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
</style>