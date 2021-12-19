<template>
    <section id='community' class="bg-black px-4 lg:px-12 pb-10 mt-10 md:mt-32">

    <div class="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto relative z-20">
      <Atom
        :product="product"
      />
      <div class="flex flex-row mt-20">
        <div class="mt-4">
          <img src="../../assets/images/Love.png" alt='icon'/>
          <div class="text-white opacity-70 leading-5 mt-5 text-sm sm:text-base" style="max-width: 175px">15% of the Primary Mint Goes to Charity</div>
        </div>
        <div class="ml-2 sm:ml-32 mt-4">
          <img src="../../assets/images/Community.png" alt='icon'/>
          <div class="text-white opacity-70 leading-5 mt-5 text-sm sm:text-base" style="max-width: 175px">35% of the Primary Mint goes to the DAO</div>
        </div>
        <div class="ml-2 sm:ml-32 mt-4">
          <img src="../../assets/images/Padlock.png" alt='icon'/>
          <div class="text-white opacity-70 leading-5 mt-5 text-sm sm:text-base" style="max-width: 175px">We’re committed to Complete Transparency</div>
        </div>
      </div>

      <div class="flex flex-row mt-12">
        <div class="mt-4">
          <img src="../../assets/images/Investment.png" alt='icon'/>
          <div class="text-white opacity-70 leading-5 mt-5 text-sm sm:text-base" style="max-width: 175px">Goal of Ongoing and Increasing Value</div>
        </div>
        <div class="ml-2 sm:ml-32 mt-4">
          <img src="../../assets/images/Learn.png" alt='icon'/>
          <div class="text-white opacity-70 leading-5 mt-5 text-sm sm:text-base" style="max-width: 175px">Focused NFT Training & Learning Courses</div>
        </div>
        <div class="ml-2 sm:ml-32 mt-4">
          <img src="../../assets/images/Ongoing.png" alt='icon'/>
          <div class="text-white opacity-70 leading-5 mt-5 text-sm sm:text-base" style="max-width: 175px">Exclusive Access to Future Collections</div>
        </div>
      </div>

      <div class="flex flex-row mt-12">
        <div class="mt-4" style="width: 170px">
          <img src="../../assets/images/Rectangle 7.png" alt='icon' class="logo-img">/>
        </div>
        <div class="ml-2 sm:ml-32 mt-4" style="width: 180px">
          <img src="../../assets/images/alaska 1.png" alt='icon'/>
        </div>
        <div class="ml-2 sm:ml-32 mt-7" style="width: 170px">
          <img src="../../assets/images/gasol-foundation 1.png" alt='icon'/>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.logo-img{
  width: 90px; 
  margin-top: -10px
}
@media (max-width: 600px) {
.logo-img{
  width: 50px; 
  margin-top: 0px
}
}
</style>
<script>
import Atom from "../atom.vue";

export default {
  name: "Section2",
  components: {Atom},
  data() {
    return {
      product: {
        pt: 'padding-top: 25px',
        style: 'margin-top: 36px',
        title: 'Community First',
        description: 'We believe that a strong and lasting community creates more value as a whole than as individuals. So we’re aggresively giving back to charity and the community.'
      },
    }
  }
};
</script>