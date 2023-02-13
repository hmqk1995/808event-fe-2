<template>
  <div>
    <TopAppBar />

    <div id="content-main" class="layout">
      <div class="w-full app-content">
        <slot></slot>
      </div>
    </div>

    <TermsDrawer />

    <GoogleAnalytics />
    <GoogleAdSense />
  </div>
</template>

<script lang="ts" setup>
import TopAppBar from '@/components/layouts/TopAppBar.vue';
import TermsDrawer from '@/components/common/TermsDrawer.vue';
import GoogleAnalytics from '@/components/common/GoogleAnalytics.vue';
import GoogleAdSense from '@/components/common/GoogleAdSense.vue';
</script>

<style lang="scss">
.mdc-drawer-scrim {
  z-index: 1001;
}
</style>
