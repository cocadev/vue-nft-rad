<template>
  <section id='overview' class="bg-black py-20 pl-4 pr-6">
    <div class="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto relative z-20">
      <div class="flex flex-col md:flex-row text-white mt-0 md:mt-12">

        <Atom
          :product="product"
        />
        <div class="ml-0 lg:ml-20 xl:ml-32 2xl:ml-60 flex justify-center">
          <div class="mt-12 md:mt-0" style="width: 272px;">
            <video-player 
              class="vjs-custom-skin"
              :options="playerOptions"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center md:justify-start mt-8 md:mt-16 w-full">
        <a href="https://northpole.radreindeer.com" target="_blank">
          <div class="btn">MINT NOW <img class="ml-2" src="../../assets/images/Vector.png" alt='btn'/></div>
        </a>
      </div>

      <div class="w-full flex flex-wrap justify-center md:justify-center xl:justify-between mt-12 md:mt-24">
        <div v-for="(i, index) in deers" :key="index" class="m-3 lg:mr-5">
          <img :src="getImgUrl(i)" alt='deer'> 
        </div>
      </div>

      <div class="flex flex-col md:flex-row mt-16">
        <h1 class="text-white text-center">
          <b class="text-2xl md:text-4xl font-extrabold">8,000</b> <b class="text-sm md:text-lg ml-2 font-normal">Rad Reindeer </b>
        </h1>
        <h1 class="text-white text-center ml-0 md:ml-32">
          <b class="text-2xl md:text-4xl font-extrabold">.035</b> <b class="text-sm md:text-lg ml-2 font-normal">ETH </b>
        </h1>
        <h1 class="text-white text-center ml-0 md:ml-32">
          <b class="text-2xl md:text-4xl font-extrabold">50%</b> <b class="text-sm md:text-lg ml-2 font-normal">Back to Community & Charity </b>
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 42px;
  background: #00FFD4;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
@media (max-width: 800px) {
.btn {
  width: 123px;
  height: 35px;
  font-size: 14px;
  border-radius: 8px;
}
}
</style>

<script>
import Atom from "../atom.vue";

export default {
  name: "Section1",
  components: {Atom},
  data(){
    return{
      product: {
        big: true,
        // pt: 'padding-top: 5px',
        style: 'margin-top: 1px',
        title: 'Rad Reindeer NFT Collection',
        description: 'We’re on a mission to make NFTs easier and more accessible for everyone. To date, the barrier to entry for new participants is far too challenging, intimidating, and unnecessary. We’d love for you to join us for season one of Rad Reindeer.'
      },
      deers: ["r00.png", "r01.png", "r02.png", "r03.png", "r04.png", "r05.png"],
      getImgUrl(pic) {
        return require('../../assets/images/'+ pic)
      },
      playerOptions: {
        height: 264,
        muted: false,
        language: 'en',
        sources: [{
          type: "video/mp4",
          src: "radreindeer.mp4"
        }],
        poster: "rr00.png",
      }
    }
  },
};
</script>