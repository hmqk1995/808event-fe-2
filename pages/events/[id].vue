<template>
  <NuxtLayout>
    <div class="event-detail-container">
      <ui-grid>
        <ui-grid-cell columns="12">
          <ui-button icon="navigate_before" unelevated @click="router.back()"
            >back</ui-button
          >
        </ui-grid-cell>
        <ui-grid-cell columns="8">
          <ui-card outlined class="p-6">
            <h3 :class="[$tt('headline3'), 'mb-4']">
              The Hilton Hawaiian Village Fireworks Show!
            </h3>
            <ui-list-divider></ui-list-divider>
            <div class="text-slate-400 mt-2 mb-2">
              December 23, 2022 - January 29, 2023
            </div>
            <ui-list-divider></ui-list-divider>
            <!-- <div>add to calendar</div> -->
            <p :class="[$tt('body1'), 'mt-4']">
              Aloha Friday means fireworks! Enjoy a free fireworks show every
              Friday in Waikīkī at 7:45pm behind Hilton Hawaiian Village. The
              show lasts approximately 3-5 minutes. Fireworks can be enjoyed
              directly from the beach, anywhere from the Waikiki Shore building
              adjacent to Fort DeRussy Beach Park, to the Duke Kahanamoku Lagoon
              behind the Ilikai and Ilikai Marina condos. Or, enjoy the show
              from the comfort of one of our many fabulous vacation rentals in
              the area.
            </p>
            <div class="text-center text-slate-400 mt-4 mb-4">
              ------ 🤙 ------
            </div>
          </ui-card>
          <ui-card outlined class="mt-4 p-6">
            <client-only><Disqus /></client-only>
          </ui-card>
        </ui-grid-cell>
        <ui-grid-cell columns="4">
          <ui-card outlined>
            <LocationMap
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              :center="[21.30158242167935, -157.84973376013]"
              :marker-lat-lng="[21.30158242167935, -157.84973376013]"
              style="height: 300px"
            />
          </ui-card>
          <ui-card outlined class="mt-4 p-2">
            <div class="text-sm">
              <div class="flex items-center m-1">
                <ui-icon size="18" class="mr-2">location_on</ui-icon> Blaisdell
                Concert Hall, 777 Ward Ave Honolulu, HI 96814
              </div>
              <div class="flex items-center m-1">
                <ui-icon size="18" class="mr-2">phone</ui-icon> 808-768-5252
              </div>
              <div class="flex items-center m-1">
                <ui-icon size="18" class="mr-2">account_circle</ui-icon>
                Blaisdell Box Office
              </div>
              <div class="flex items-center m-1">
                <ui-icon size="18" class="mr-2">account_balance</ui-icon>
                Blaisdell Center
              </div>
            </div>
          </ui-card>
        </ui-grid-cell>
      </ui-grid>
      <!-- <div class="flex items-center m-1">more detail</div>
    <div class="flex items-center m-1">similar events</div> -->
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import LocationMap from '@/components/common/LocationMap.vue';

const config = useRuntimeConfig();
const router = useRouter();
const subTitle = 'The Hilton Hawaiian Village Fireworks Show!';

useHead({
  title: `${subTitle} - ${config.public.siteName}`,
});
</script>

<style lang="scss" scoped>
.event-detail-container::before {
  @include flower-background;
}
</style>
