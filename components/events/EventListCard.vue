<template>
  <ui-card v-shadow="9" class="m-4 event-card">
    <ui-card-content>
      <NuxtLink :to="`/events/${id}`">
        <ui-card-media class="card-media-bg bg-black/75">
          <img
            v-if="coverPictureUrl"
            alt="event card picture"
            :src="`${coverPictureUrl}`"
            class="object-contain w-full h-48"
          />
          <div v-else class="w-full h-48"></div>
          <ui-card-media-content>
            <div
              class="headline absolute bottom-0 left-0 w-full bg-gradient-to-r from-cyan-500/95 to-blue-500/95 p-2"
            >
              <h1 :class="[$tt('headline5'), 'text-white']">
                {{ eventName }}
              </h1>
            </div>
          </ui-card-media-content>
        </ui-card-media>

        <div class="p-2 text-white text-xs" :class="$tt('body2')">
          <div>
            <template v-if="isRepeatedEvent">Every {{ day }}</template>
            <template v-else-if="hasEndDateTime"
              >{{ startDateTime }} - {{ endDateTime }}</template
            >
            <template v-else>{{ startDateTime }}</template>
          </div>
          <ui-list-divider class="mt-2 mb-2"></ui-list-divider>
          <div class="flex items-center m-1" v-if="address">
            <ui-icon size="18" class="mr-2">location_on</ui-icon>
            {{ address }}
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
      </NuxtLink>
    </ui-card-content>
    <CalendarIcon
      class="absolute -top-8 right-2 scale-75 calendar"
      v-if="!isRepeatedEvent"
      :date="new Date(event?.attributes?.StartDateTime)"
    />
  </ui-card>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import CalendarIcon from '@/components/common/CalendarIcon.vue';

const { event } = defineProps<{ event: any }>();

const id = computed(() => event?.id ?? '');
const eventName = computed<string>(() => event?.attributes?.EventName ?? '');
const isRepeatedEvent = computed<boolean>(
  () => event?.attributes?.RepeatedEvent ?? false
);
const day = computed(() => event?.attributes?.Day ?? '');
const startDateTime = computed(() =>
  dayjs(event?.attributes?.StartDateTime ?? '').format('MMMM D, YYYY h:mm A')
);
const hasEndDateTime = computed(() => event?.attributes?.EndDateTime ?? '');
const endDateTime = computed(() =>
  dayjs(event?.attributes?.EndDateTime ?? '').format('MMMM D, YYYY h:mm A')
);
const address = computed(() => event?.attributes?.Address);
const phone = computed(() => event?.attributes?.Phone);
const pointOfContact = computed(() => event?.attributes?.PointOfContact);
const coverPictureUrl = computed(
  () => event?.attributes?.CoverPicture?.data?.attributes?.url
);
</script>

<style lang="scss" scoped>
.event-card {
  background-color: transparent;
  backdrop-filter: blur(5px) invert(80%) opacity(1);
}
.card-media-bg {
  background-image: url(/_nuxt/polybg.png);
  background-size: 100%;
  background-blend-mode: multiply;
  background-repeat: repeat-y;
}

.calendar {
  right: 0;
  top: -25px;
}
</style>
