<template>
  <div>
    <div class="line">
      <div class="bar" :style="product.style"></div>
    </div>
    <div class="flex justify-center md:justify-start" :style="product.pt">
      <h2 class="font-bold text-center md:text-left text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl z-10">
        <div v-show="!product.big" class="text-white text-3xl md:text-8xl font-extrabold">{{product.title}} <span class="text-sky">.</span></div>
        <div v-show="product.big" class="text-white text-3xl md:text-6xl font-extrabold text-big">
          Rad Reindeer NFT Collection <div class="h-5"/>
        </div>
      </h2>
    </div>
    <h2 class="text-white opacity-60 text-center md:text-left max-500">
      {{product.description}}
    </h2>
  </div>
</template>
<style scoped>
  .line {
    width: 1px;
    height: 215px;
    background: #999;
    position: absolute;
    margin-left: -53px;
  }
  .bar {
    width: 3px;
    height: 60px;
    background: #00FFD4;
    margin-left: -1px;
    margin-top: 145px;
  }
  .max-500 {
    max-width: 530px
  }
  .text-big {
    line-height: 70px; 
    max-width: 470px
  }
  @media (max-width: 769px) {
    .max-500 {
      max-width: 1000px;
    }
    .text-big {
      line-height: 45px; 
    }
  }
</style>
<script>
export default {
  name: 'Atom',
  props: {
    product: Object
  },
}

</script>