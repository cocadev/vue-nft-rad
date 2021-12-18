import Vue from 'vue'
import App from './App.vue'
import VPopover from 'vue-js-popover'
import VueVideoPlayer from 'vue-video-player'
import VueSimpleAccordion from 'vue-simple-accordion'
import LetItSnow from 'vue-let-it-snow';

import 'vue-simple-accordion/dist/vue-simple-accordion.css'
import 'video.js/dist/video-js.css'
import './assets/css/styles.css'
import './assets/css/video.css'

Vue.use(LetItSnow);
Vue.config.productionTip = false
Vue.use(VPopover, { tooltip: true })
Vue.use(VueVideoPlayer);
Vue.use(VueSimpleAccordion);

new Vue({
  render: h => h(App),
}).$mount('#app')
