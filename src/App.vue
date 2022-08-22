<script lang="ts" setup>
import { ref } from "vue";

import { RouterLink, RouterView } from "vue-router";
// @ts-ignore 
import Desktop from "./components/nav/Desktop.vue";
// @ts-ignore 
import MobileNav from "./components/nav/MobileNav.vue";

const modal = ref(false);
const toggle = () => {
  modal.value = !modal.value;
};
</script>

<template>
  <div class="app">
    <Desktop :toggle="toggle" class="hidden lg:block" />
    <MobileNav :toggle="toggle" class="block lg:hidden" />
    <RouterView :toggle="toggle" :modal="modal" />
  </div>
</template>

<style scoped>
.app {
  font-family: "Inter", sans-serif;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
.heading {
  font-family: "Oswald", sans-serif;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
