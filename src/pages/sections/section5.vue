<template>
  <section id='team' class="bg-black px-4 lg:px-12 pb-10 -mt-20 md:mt-32">
    <div class="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto relative z-20">
      <Atom
        :product="product"
      />

      <div class="flex flex-col md:flex-row mb-4 md:mb-32 mt-3 md:mt-20">
        <a :href="getLink(i.link)" target="_blank" class="flex flex-col items-center mt-5 mr-6" v-for="i in deers" :key="i.id" >
          <img
            alt="deer"
            :src="getImgUrl(i.img)"
            class="deer-img"
          />
          <h1 class="text-md md:text-md text-white font-extrabold text-center" :style="{'margin-top': i.id === 3 ? '40px' : '40px'}">
            {{i.name}}
          </h1>
          <h1 class="text-white text-md lg:text-md font-light -mt-1">{{i.job}}</h1>
        </a> 
      </div>
    </div>
  </section>
</template>
<style scoped>
  .deer-img {
    border-radius: 25px;
    width: 157px;
  }
</style>

<script>
import Atom from "../atom.vue";

export default {
  name: "Section5",
  components: {Atom},
  data() {
    return {
      product: {
        pt: 'padding-top: 145px',
        style: 'margin-top: 155px',
        title: 'The Team',
        description: 'The team behind Rad Reindeer.'
      },
      deers: [
        { id: 1, name: 'Joss', img: "image_5.png", color: '#ECB2D6', job: 'The Artist', link: 'twitter.com/Jossart_'},
        { id: 2, name: 'Rudy', img: "image_6.png", color: '#BD5B21', job: 'The Technologist', link: 'www.linkedin.com/in/smalley/'},
        { id: 3, name: 'Donzy', img: "image_4.png", color: '#b2c5e8', job: 'The Organizer', link: 'www.linkedin.com/in/slayhuff/'},
        { id: 4, name: 'Nixen', img: "image_3.png", color: '#65c5af', job: 'The Marketer', link: 'www.linkedin.com/in/nixonc/'},
      ],
      getImgUrl(pic) {
        return require('../../assets/images/'+ pic)
      },
      getLink(link) {
        return 'https://'+ link
      }
    };
  },
};
</script>