<template>
  <ui-top-app-bar
    type="fixed"
    :title="siteName"
    content-selector="#content-main"
    class="top-app-bar"
    @nav="openDrawer = true"
    ><template #toolbar="{ toolbarItemClass }"></template
  ></ui-top-app-bar>
  <ui-drawer v-model="openDrawer" type="modal" class="fixed drawer">
    <ui-drawer-header>
      <ui-drawer-title>808 Event</ui-drawer-title>
    </ui-drawer-header>
    <ui-drawer-content>
      <ui-list>
        <!-- Uncaught (in promise) TypeError: Cannot read properties of null (reading 'parentNode') for ui-item tag -->
        <!-- <ui-item active>
          <ui-item-first-content>
            <ui-icon ui-icon class="mr-2">festival</ui-icon>
          </ui-item-first-content>
          <ui-item-text-content>What Is Happening</ui-item-text-content>
        </ui-item> -->
        <li
          @click="async () => await navigateTo('/')"
          class="mdc-deprecated-list-item mdc-ripple-upgraded"
        >
          <span class="mdc-deprecated-list-item__ripple"></span>
          <ui-item-first-content>
            <ui-icon ui-icon class="mr-2">festival</ui-icon>
          </ui-item-first-content>
          <ui-item-text-content>What Is Happening</ui-item-text-content>
        </li>
        <li
          @click="async () => await navigateTo('/about')"
          class="mdc-deprecated-list-item mdc-ripple-upgraded"
        >
          <span class="mdc-deprecated-list-item__ripple"></span>
          <ui-item-first-content>
            <ui-icon ui-icon class="mr-2">tag_faces</ui-icon>
          </ui-item-first-content>
          <ui-item-text-content>About</ui-item-text-content>
        </li>
        <ui-list-divider></ui-list-divider>
      </ui-list>
    </ui-drawer-content>
  </ui-drawer>
</template>

<script lang="ts" setup>
import { siteName } from '@/const/const';
const openDrawer = ref(false);
</script>

<style lang="scss" scoped>
.top-app-bar {
  background-image: url('/polybg.png');
  background-size: auto 100%;
  background-blend-mode: multiply;
}
.drawer {
  z-index: 1002;
}
</style>
