<template>
  <ui-card v-shadow="9" class="m-4 event-card">
    <NuxtLink :to="`/events/${id}`">
      <ui-card-media class="bg-black">
        <img
          alt="event card picture"
          src="/event-demo-pic.png"
          class="object-contain w-full h-48"
        />
        <ui-card-media-content>
          <div
            class="headline absolute bottom-0 left-0 w-full bg-gradient-to-r from-cyan-500/95 to-blue-500/95 p-2"
          >
            <h1 :class="[$tt('headline5'), 'text-white']">
              {{ eventName }}
            </h1>
          </div>
          <CalendarIcon class="absolute -top-8 right-2 scale-75" />
        </ui-card-media-content>
      </ui-card-media>
      <div class="p-2 text-white text-xs" :class="$tt('body2')">
        <div>
          <template v-if="isRepeatedEvent">Every {{ day }}</template>
          <template v-else>{{ startDateTime }} - {{ endDateTime }}</template>
        </div>
        <ui-list-divider class="mt-2 mb-2"></ui-list-divider>
        <div class="flex items-center m-1">
          <ui-icon size="18" class="mr-2">location_on</ui-icon> Blaisdell
          Concert Hall, 777 Ward Ave Honolulu, HI 96814
        </div>
        <div class="flex items-center m-1">
          <ui-icon size="18" class="mr-2">phone</ui-icon> 808-768-5252
        </div>
        <div class="flex items-center m-1">
          <ui-icon size="18" class="mr-2">account_circle</ui-icon> Blaisdell Box
          Office
        </div>
        <div class="flex items-center m-1">
          <ui-icon size="18" class="mr-2">account_balance</ui-icon> Blaisdell
          Center
        </div>
      </div>
    </NuxtLink>
  </ui-card>
</template>

<script lang="ts" setup>
import CalendarIcon from '@/components/common/CalendarIcon.vue';
const { event } = defineProps<{ event: any }>();

const id = computed(() => event?.id ?? '');
const eventName = computed<string>(() => event?.attributes?.EventName ?? '');
const isRepeatedEvent = computed<boolean>(
  () => event?.attributes?.RepeatedEvent ?? false
);
const day = computed(() => event?.attributes?.Day ?? '');
const startDateTime = computed(() => event?.attributes?.StartDateTime ?? '');
const endDateTime = computed(() => event?.attributes?.EndDateTime ?? '');
</script>

<style lang="scss" scoped>
.event-card {
  background-color: transparent;
  backdrop-filter: blur(5px) invert(80%) opacity(1);
}
</style>
