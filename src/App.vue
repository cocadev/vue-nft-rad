<template>
  <div id="app">
    <Header />
    <div>
      <section-1 />
      <section-2 />
      <charities />
      <section-5 />
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from "./pages/header.vue";
import Section1 from './pages/sections/section1.vue';
import Footer from "./pages/footer.vue";
import Section2 from './pages/sections/section2.vue';

import Section5 from './pages/sections/section5.vue';
import Charities from './pages/sections/charities.vue';

export default {
  name: "App",
  components: {
    Header,
    Section1,
    Footer,
    Section2,
    Section5,
    Charities
  },
};
</script>