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

const testimonies = [
  {
    img: 'image.png',
    name: 'Cham',
    title: 'Product designer',
    text: ' our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions'
  },
  {
    img: 'image.png',
    name: 'Scopic Software',
    title: 'Custom IT Solutions Firm',
    text: 'We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured'
  },
  {
    img: 'image.png',
    name: 'Russell Lee',
    title: 'Writer',
    text: 'It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.'
  },
  {
    img: 'image.png',
    name: 'Solace Engineers Inc.',
    title: 'Solace Engineers Inc.',
    text: 'At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.'
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
          <h2 class="oswald text-[30px] font-semibold pt-4 pb-2 text-[#0A1833]">{{ benefit.title }}</h2>
          <p class="inter text-[18px]">{{ benefit.text }}</p>
        </div>
      </div>
      </div>
    </section>

    <section class="bg-white py-20 ">
      <img class="absolute right-0" src="/images/Decorator-white.png" alt="">
      <div class="container">

        <div class="text-center py-20">
          <h3 class="text-[#0A1833] inter font-semibold">KICKSTART YOUR EDUCATION</h3>
          <h2 class="sec-head text-[#162044] lg:w-[600px] m-auto">Thousands Of People Trust Us With Their Education</h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-4">
          <div v-for="testimony in testimonies" :key="testimony.name" class="bg-[#E7EBEE] hover:bg-[#fff] shadow-xl p-10 rounded-[10px] text-[#5F7285] inter lg:h-[273px]">
            <p class="font-medium"> {{ testimony.text }}</p>
            <div class="pt-10 flex">
              <img :src="`/images/${testimony.img}`" alt="">
              <div class="pl-2">
                <p class="font-semibold">{{ testimony.name }}</p>
                <p>{{ testimony.title }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- <div>
          <img src="/images/slider nav.png" alt="">
        </div> -->
      </div>

    </section>

    <section class="bg-white lg:py-20">
      <img class="hidden lg:block lg:absolute" src="/images/Decorator-dark.png" alt="">
      <img class="block lg:hidden absolute" src="/images/Decorator.png" alt="">
      <div class="container">

        <div class="text-center lg:pt-36">
          <h3 class="text-[#0A1833] inter font-semibold">OPTIMUM PRO ACADEMY</h3>
          <h2 class="sec-head text-[#162044] lg:w-[600px] m-auto">Blockchain Professionals Are In High Demand</h2>
        </div>

        <div class="lg:flex mt-20 inter">

          <div class="lg:w-[1146px]">
            <img class="lg:w-[332px]" src="/images/linkedin-icon.png" alt="">
            <p class="text-[20px]">Blockchain has emerged from the once shadowy world of cryptocurrency to become a business solution in search of problems. Which means that you don’t have to be in financial services to be seeking new hires who have background and expertise in putting blockchain to use.</p>
            <div class="flex mt-9">
              <img src="/images/read.png" alt="">
              <p class="pl-5">Read the full article</p>
            </div>
          </div>

          <div class="mt-5">
            <img src="/images/job_demand.jpg" alt="">
          </div>

        </div>
        
      </div>

    </section>
  </main>
</template>
