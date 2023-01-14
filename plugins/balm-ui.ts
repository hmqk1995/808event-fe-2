import { defineNuxtPlugin } from '#app';
import BalmUI from 'balm-ui';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BalmUI, {
    UiTopAppBar: {
      // some props
    }
  });
});