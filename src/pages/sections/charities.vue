<template>
  <section id='tips' class="bg-black py-4 pl-4 pr-6 mt-0 md:mt-32">
    <div class="max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto relative z-20">

      <Atom
        :product="product"
      />

      <div class="w-full flex flex-col md:flex-row justify-around mt-2 md:mt-20 pt-10 rounded-3xl" style="alignItems: center">
        <a href="https://www.youtube.com/watch?v=R7JTEHeqxfQ" target="_blank" class="m-2"><img src="../../assets/images/image 9.png" alt='logo'></a>
        <a href="https://www.youtube.com/watch?v=TTNadOCVy28" target="_blank" class="m-2"><img src="../../assets/images/metamask.png" alt='logo'></a>
        <a href="https://www.youtube.com/watch?v=btFXqUFtbiw" target="_blank" class="m-2"><img src="../../assets/images/dao.png" alt='logo'></a>
      </div>
    </div>
  </section>
</template>


<script>
import Atom from "../atom.vue";

export default {
  name: "Charities",
  components: {Atom},
  data() {
    return {
      product: {
        pt: 'padding-top: 95px',
        style: 'margin-top: 106px',
        title: 'NFT Tips & Tricks',
        description: 'New to NFTs? Interested in learning how to get started? Hear from the Rad Reindeer team on how best to get ready.'
      },
    }
  }
};
</script>