<template>
  <NuxtLayout>
    <div class="index-container">
      <EventFilter class="m-4 mb-0" />
      <div class="grid md:grid-cols-2 lg:grid-cols-3">
        <template v-if="loading">
          <ui-card v-for="item in 6" v-shadow="9" class="m-4 card-skeleton">
            <ui-skeleton class="p-4" :paragraph="{ rows: 6 }" active />
          </ui-card>
        </template>
        <EventListCard
          v-else
          v-for="(event, index) in events"
          :event="event"
          :key="`${event?.attributes?.EventName ?? ''}${index}`"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import EventFilter from '@/components/events/EventFilter.vue';
import EventListCard from '@/components/events/EventListCard.vue';
import { useEventListStore } from '@/stores/events/eventList';
import { storeToRefs } from 'pinia';
import dayjs from 'dayjs';

const eventListStore = useEventListStore();
eventListStore.loadEvents([dayjs(), dayjs().add(2, 'month')]);
const { events, loading } = storeToRefs(eventListStore);
</script>

<style lang="scss" scoped>
.index-container::before {
  @include flower-background;
}
.card-skeleton {
  height: 321px;
  background-color: transparent;
  backdrop-filter: blur(5px) invert(80%) opacity(1);
}
</style>
