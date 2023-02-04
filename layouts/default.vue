<template>
  <div>
    <TopAppBar />

    <div id="content-main" class="layout">
      <div class="w-full app-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopAppBar from '@/components/layouts/TopAppBar.vue';
</script>

<style lang="scss">
.mdc-drawer-scrim {
  z-index: 1001;
}
</style>
