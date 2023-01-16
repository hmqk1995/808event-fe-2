<template>
  <NuxtLayout>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 index-container">
      <EventListCard v-for="(item, index) in 25" :key="index" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import EventListCard from '@/components/events/EventListCard.vue';
// query getEvents {
//   events {
//     data {
//       id
//       attributes {
//         EventName
//       }
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.index-container::before {
  @include flower-background;
}
</style>
