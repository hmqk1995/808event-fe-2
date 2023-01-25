import { defineNuxtPlugin } from '#app';
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BalmUI, {
    UiTopAppBar: {
      // some props
    }
  });
  nuxtApp.vueApp.use(BalmUIPlus);
});