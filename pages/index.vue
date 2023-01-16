<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 index-container">
    <EventListCard
      v-for="(event, index) in events"
      :event="event"
      :key="index"
    />
  </div>
</template>

<script lang="ts" setup>
import EventListCard from '@/components/events/EventListCard.vue';
import { useEventListStore } from '@/stores/events/eventList';
import { storeToRefs } from 'pinia';

const eventListStore = useEventListStore();
eventListStore.loadEvents();
const { events } = storeToRefs(eventListStore);
</script>

<style lang="scss" scoped>
.index-container::before {
  @include flower-background;
}
</style>
