<template>
  <ui-rangepicker disabled v-model="date" :labels="['Start Date', 'End Date']"
    ><template #separator>-</template></ui-rangepicker
  >
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

// match the initialized range (following month) defined in loadEvents
const date = ref([
  dayjs().format('YYYY-MM-DD'),
  dayjs().add(2, 'month').format('YYYY-MM-DD'),
]);
</script>
