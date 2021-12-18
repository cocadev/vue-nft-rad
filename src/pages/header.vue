<template>
  <div class="bg-black flex flex-row max-w-screen-2xl w-full md:justify-start items-center justify-center mx-auto md:py-4 px-4 md:px-12 h-16 md:h-28">

    <!-- <img
      alt="deer"
      src="../assets/images/logo.png"
      decoding="async"
      data-nimg="intrinsic"
      class='logo-img'
    /> -->
    <!-- <audio loop controls id='player' class="hidden">
      <source src="../assets/music.wav" type="audio/wav" />
    </audio> -->
    <ul class="w-full flex z-50">
      <div class="flex md:justify-around w-full max-w-screen-md mr-0 xl:mr-20">
        <li v-for="(i, index) in links" :key="index" >
          <a :href="i.link" rel="noreferrer" :class="i.class" :target='index === 0 ? "_blank" : "_self"'>
            <span class="block mr-7 text-base lg:text-2lg">
              {{ i.title }}
            </span>
          </a>
        </li>
      </div>
    </ul>

    <!-- <i class="material-icons text-white text-4xl mr-1 md:mr-1 lg:mr-4 cursor-pointer" v-on:click="onPlayMusic">{{music ? 'volume_up' : 'volume_off'}}</i> -->

    <a href="https://mobile.twitter.com/theradreindeer" target="_blank">
      <img
        alt="twitter"
        src="../assets/images/twitter.png"
        decoding="async"
        data-nimg="intrinsic"
        class="mr-10 md:mr-7 cursor-pointer"
      />
    </a>

    <a href="https://discord.gg/2tcTzUUZGw" target="_blank">
      <img
        alt="discord"
        src="../assets/images/discord.png"
        decoding="async"
        data-nimg="intrinsic"
        class="mr-10 md:mr-7 cursor-pointer"
      />
    </a>
    <a href="https://opensea.io/collection/radreindeer" target="_blank">
      <img
        alt="boat"
        src="../assets/images/boat.png"
        decoding="async"
        data-nimg="intrinsic"
        class="mr-10 md:mr-7 cursor-pointer"
      />
    </a>

    <button class="btn-discord text-white ml-5 md:ml-10 pt-2 block md:hidden" v-popover:foo.left>
      <img
        alt="boat"
        src="../assets/images/menu.png"
        decoding="async"
        data-nimg="intrinsic"
        class="mr-5 md:mr-2 cursor-pointer"
      />
    </button>

    <popover name="foo" event='click' class="popover">
      <div 
        v-for="(i, index) in links" 
        :key="index"
        class="m-1"
      >
        <a 
          class="text-lg mt-2"
          rel="noreferrer" 
          :href="i.link" 
          :target='index === 0 ? "_blank" : "_self"'
        >
          {{i.title}}
        </a>
      </div>
    </popover>
  </div>
</template>

<style scoped>
.popover {
  padding: 12px;
  margin-top: 120px;
  background: rgb(0, 0, 0);
  color: #fff;
  margin-left: 28px;
  z-index: 1000!important;
}
.cursor-not-allowed {
  color: rgb(140, 140, 140);
}

.logo-img {
  width: 109px;
  height: 50px;
}

@media screen and (max-width:650px) {
.logo-img {
  width: 80px;
  height: 38px
}
}
</style>

<script>
export default {
  name: "Header",
  data() {
    return {
      music: false,
      links: [
        { link: "https://northpole.radreindeer.com", title: "Mint", class: "text-white hidden md:block cursor-pointer" },
        { link: "#community", title: "Community", class: "text-white hidden md:block cursor-pointer" },
        // { link: "#roadmap", title: "Roadmap", class: "text-white hidden md:block cursor-pointer" },
        { link: "#tips", title: "Tips", class: "text-white hidden md:block cursor-pointer" },
        { link: "#team", title: "Team", class: "text-white hidden md:block cursor-pointer" },
      ],
    };
  },
  methods: {
    onPlayMusic: function () {
      this.music = !this.music;
      if(this.music){
        document.getElementById('player').play()
      }else{
        document.getElementById('player').pause()
      }
    }
  }
};
</script>