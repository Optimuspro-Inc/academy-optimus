<script setup lang="ts">
const benefits = [
  {
    img: 'payment.png',
    title: 'Learn any high income digital skills.',
    text: 'Trading, Blockchain, Mobile App, Digital Art, and online Marketing in a self-paced course designed for your learning style.'
  },
  {
    img: 'gold-medal.png',
    title: 'Get Certified in an in-demand skill',
    text: 'Work with top companies anywhere in the world either onsite or from the comfort of your home.'
  },
  {
    img: 'globe.png',
    title: 'Secure a high paying job or career.',
    text: 'Work with top companies anywhere in the world either onsite or from the comfort of your home.'
  },
  {
    img: 'processor.png',
    title: 'Levitate above financial instability.',
    text: 'Work with top companies anywhere in the world either onsite or from the comfort of your home.'
  }
]
</script>

<template>
  <main>
    <section class="bg-white lg:mt-10 text-center lg:text-left lg:h-[110vh]">
      <div class="container lg:flex">
        <div class="pt-10 lg:pt-24 md:pl-10">
          <h2 class="text-[#162044] font-[700] text-[20px] lg:text-[52px] lg:w-[526px]">
            Get in-demand skills
            to grow your career
            in the web3 industry
          </h2>
          <p class="inter text-[16px] lg:text-[18px] lg:w-[475px] pt-5">
            Learn from industry experts, get internships, jobs and career opptunities.
          </p>
          <p class="inter text-[16px] lg:text-[18px] lg:w-[475px] pt-3">(Pay less for more. Get quality education and training)</p>

          <div class="py-5">
            <input class=" w-[150px] h-[45px] mr-2 lg:w-[242px] rounded-[5px] lg:h-[50px] border-[#E7EBEE] bg-[#FAFAFA] outline-none pl-[10px] lg:pl-[58px] lg:mr-[25px]" placeholder="Email Address" type="text">
            <input class="w-[100px] h-[45px] bg-[#162044] lg:w-[130px] lg:h-[50px] rounded-[5px] text-white shadow-lg cursor-pointer" type="submit" value="Get Started">
          </div>
        </div>


        <div>
          <img class="lg:absolute lg:right-0 lg:w-[600px] lg:h-[600px]" src="/images/smile.png" alt="">
        </div>

      </div>
    </section>

    <section class="bg-[#0A1833] lg:h-[1102px] pb-20 lg:pb-0 mt-20">
      <img class="absolute" src="/images/Decorator.png" alt="">
      <div class="container">
        <div class="text-white text-center pt-20 lg:pt-36 pb-16">
        <h2 class="sec-head">Great Benefits</h2>
        <p class="inter text-[18px] lg:w-[400px] m-auto">Start your dream career or secure a highpaying job with optimus pro academy.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <div v-for="benefit in benefits" :key="benefit.title" class="bg-[#7EFCFC] p-10 rounded-[16px] lg:h-[309px]">
          <img :src="`/images/${benefit.img}`" alt="">
          <h2 class="oswald text-[30px] font-semibold pt-4 pb-2">{{ benefit.title }}</h2>
          <p class="inter text-[18px]">{{ benefit.text }}</p>
        </div>
      </div>
      </div>
    </section>
  </main>
</template>
