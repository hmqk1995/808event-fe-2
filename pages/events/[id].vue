<template>
  <NuxtLayout>
    <section class="event-detail-container">
      <ui-grid>
        <ui-grid-cell columns="12">
          <ui-button icon="navigate_before" unelevated @click="navigateTo('/')"
            >back</ui-button
          >
        </ui-grid-cell>
        <ui-grid-cell columns="8">
          <ui-card outlined class="p-6">
            <h3 :class="[$tt('headline3'), 'mb-4']">
              {{ eventName }}
            </h3>
            <ui-list-divider></ui-list-divider>
            <div class="text-slate-400 mt-2 mb-2">
              <template v-if="isRepeatedEvent">Every {{ day }}</template>
              <template v-else-if="endDateTime"
                >{{ startDateTimeFormatted }} -
                {{ endDateTimeFormatted }}</template
              >
              <template v-else>{{ startDateTimeFormatted }}</template>
            </div>
            <ui-list-divider></ui-list-divider>
            <!-- <div>add to calendar</div> -->
            <img
              v-if="coverPictureUrl"
              :alt="`event picture ${eventName}`"
              :src="`${strapiEndpoint}${coverPictureUrl}`"
              class="object-contain w-full h-48"
            />
            <div
              :class="[$tt('body1'), 'mt-4', 'singleevent-content']"
              v-html="description"
            />
            <div class="text-center text-slate-400 mt-4 mb-4">
              ------ 🤙 ------
            </div>
          </ui-card>
          <ui-card outlined class="mt-4 p-6">
            <client-only><Disqus /></client-only>
          </ui-card>
        </ui-grid-cell>
        <ui-grid-cell columns="4">
          <ui-card outlined v-if="lat && lng" class="mb-4">
            <LocationMap
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              :center="[lat, lng]"
              :marker-lat-lng="[lat, lng]"
              style="height: 300px"
            />
          </ui-card>
          <ui-card outlined class="mb-4 p-2">
            <div class="text-sm">
              <div class="flex items-center m-1" v-if="address">
                <ui-icon size="18" class="mr-2">location_on</ui-icon>
                <a
                  :href="`https://maps.apple.com/maps?q=${address}`"
                  target="_blank"
                  >{{ address }}</a
                >
              </div>
              <div class="flex items-center m-1" v-if="phone">
                <ui-icon size="18" class="mr-2">phone</ui-icon>
                {{ phone }}
              </div>
              <div class="flex items-center m-1" v-if="pointOfContact">
                <ui-icon size="18" class="mr-2">account_circle</ui-icon>
                {{ pointOfContact }}
              </div>
            </div>
          </ui-card>
        </ui-grid-cell>
      </ui-grid>
      <!-- <div class="flex items-center m-1">more detail</div>
      <div class="flex items-center m-1">similar events</div> -->
      <!-- <div>{{ attributes }}</div> -->
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { strapiEndpoint } from '@/const/const';
import { storeToRefs } from 'pinia';
import { useSingleEventStore } from '@/stores/events/singleEvent';
import LocationMap from '@/components/common/LocationMap.vue';

const config = useRuntimeConfig();
const router = useRouter();
const route = useRoute();

const singleEventStore = useSingleEventStore(route.params.id)();
await singleEventStore.loadEvent();
const {
  eventName,
  description,
  isRepeatedEvent,
  day,
  startDateTime,
  endDateTime,
  address,
  phone,
  pointOfContact,
  lat,
  lng,
  coverPictureUrl,
} = storeToRefs(singleEventStore);

useHead({
  title: `${eventName.value} - ${config.public.siteName}`,
});

const startDateTimeFormatted = computed(() =>
  dayjs(startDateTime.value).format('MMMM D, YYYY h:mm A')
);
const endDateTimeFormatted = computed(() =>
  dayjs(endDateTime.value).format('MMMM D, YYYY h:mm A')
);
</script>

<style lang="scss" scoped>
.event-detail-container::before {
  @include flower-background;
}
</style>
<style lang="scss">
.singleevent-content {
  p {
    margin-bottom: 1.25rem;
  }
}
</style>
