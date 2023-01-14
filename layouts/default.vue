<template>
  <div>
    <TopAppBar />

    <div id="content-main" class="layout">
      <div class="w-full app-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopAppBar from '@/components/layouts/TopAppBar.vue';
</script>
