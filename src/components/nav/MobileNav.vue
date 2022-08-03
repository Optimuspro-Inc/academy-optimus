
<template>
  <div class="content h-[60px] w-full bg-white">
    <div class="container pt-4 flex justify-between">
      <router-link to="/">
        <img class="w-24 lg:w-32" src="/images/logo.png" alt="" />
      </router-link>
      <div @click="openNav" class="flex burger lg:mt-0">
          <img class="w-6 lg:w-32" src="/images/bar-black.svg" alt="" />
      </div>
    </div>
    <div id="mySidenav" :class="[!state.open ? 'sidenav' : 'sidenavOpen']" >
      <div class="lg:mx-20 mx-8 flex justify-between">
        <router-link to="/">
          <!-- <img class="w-24 lg:w-32" src="../static/logo-black.png" alt="" /> -->
          <img class="w-[93px]" src="/images/logo.png" alt="">
        </router-link>
        <a
          href="javascript:void(0)"
          class="closebtn lg:-mt-10 -mt-6"
          @click="closeNav"
          >&times;</a
        >
      </div>
      <div class="lg:mx-20 mx-8 mt-10">
        <div
          class="
            normal-case
            lg:text-8xl
            text-2xl
            lg:flex
            font-inter
            text-black
          "
        >
          <a @click="state.show = !state.show">
            <div class="flex link lg:my-0 my-4">Learn <img class="w-[11px] h-[8px] mt-[15px] ml-3" src="/images/Vector.png" alt=""></div>
          </a>
          <Transition>
            <ul v-if="state.show" class=" left-[228px] inter bg-white pl-2 w-[248px]">
              <li @click="closeNav" class="pt-2">
                <RouterLink to="/">Courses</RouterLink>
              </li>
              <li @click="closeNav" class="pt-2"> <RouterLink to="/">Free Educational Resources</RouterLink> </li>
              <li @click="closeNav" class="pt-2"> <RouterLink to="/">Blog</RouterLink> </li>
            </ul>
          </Transition>
          <router-link  to="/" @click="closeNav">
            <div class="link lg:my-0 my-4">Pricing</div>
          </router-link>
          <router-link  to="/" @click="closeNav">
            <div class="link lg:my-0 my-4">Blog</div>
          </router-link>
          <router-link  to="/" @click="closeNav">
            <div class="link lg:my-0 my-4">For Business</div>
          </router-link>
          
        </div>
        
      </div>
      <!-- <div class="line bg-black w-screen lg:mt-40"></div> -->
      <div class="lg:mx-20 mx-8 mt-20">
        <div class="lg:flex justify-between text-black mt-8 text-base">
          <div class="lg:flex justify-between w-96 font-inter">
            <!-- <div>Legal services at it’s best.</div> -->
            <!-- <div class="lg:mt-0 mt-4">+234 703 964 4259</div> -->
          </div>
          <!-- <div class="flex justify-around lg:w-96 lg:mt-0 mt-44">
            <a href="https://facebook.com/ensiocreative" target="blank">
              <div>Facebook</div>
            </a>
            <a href="https://twitter.com/Ensio_Creative" target="blank">
              <div>Twitter</div>
            </a>
            <a href="https://instagram.com/ensiocreative" target="blank">
              <div>Instagram</div>
            </a>
            <a href="https://linkedin.com/in/ensiocreative" target="blank">
              <div>Linkedin</div>
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup  lang="ts">
import { reactive } from 'vue'
// import links from '../static';
const links = [
  {
    title: 'Learn',
    link: '/'
  },
  {
    title: 'Pricing',
    link: '/'
  },
  {
    title: 'Blog',
    link: '/'
  },
  {
    title: '  For Business ',
    link: '/'
  },
  
]

  const state = reactive({
    open: false,
    show: false
  })

  const openNav = () => {
    state.open = true
  }

  const closeNav = () => {
    state.open = false
    console.log('Fired')
  }
</script>

<style scoped>

.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
/* The navigation menu links */
/* .sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
} */
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}
/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  font-size: 50px;
  color: #000;
}
/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}
.line {
  height: 1px;
}
@media (max-width: 500px) {
  .sidenav {
    padding-top: 30px;
  }
}
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  /* .sidenav a {
    font-size: 18px;
  } */
}
.burger {
  cursor: pointer;
}
@media (max-width: 600px) {
  .line {
    display: none;
  }
}

/* For open */
.sidenavOpen {
  height: 100%; /* 100% Full-height */
  width: 100%; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
/* The navigation menu links */
/* .sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
} */
/* When you mouse over the navigation links, change their color */
.sidenavOpen a:hover {
  color: #f1f1f1;
}
/* Position and style the close button (top right corner) */
.sidenavOpen .closebtn {
  font-size: 50px;
  color: #000;
}
/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}
.line {
  height: 1px;
}
@media (max-width: 500px) {
  .sidenavOpen {
    padding-top: 30px;
  }
}
/* On smaller screens, where height is less than 450px, change the style of the sidenavOpen (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenavOpen {
    padding-top: 15px;
  }
  /* .sidenav a {
    font-size: 18px;
  } */
}
</style>