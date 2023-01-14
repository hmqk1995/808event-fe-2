<template>
  <div>
    <ui-top-app-bar
      type="fixed"
      title="808 Event - Hawaii - From Your Ohana"
      content-selector="#content-main"
      class="top-app-bar"
      @nav="openDrawer = true"
    />
    <ui-drawer v-model="openDrawer" type="modal" class="fixed">
      <ui-drawer-content>
        <ui-list>
          <NuxtLink to="/">
            <!-- Uncaught (in promise) TypeError: Cannot read properties of null (reading 'parentNode') -->
            <ui-item active>
              <ui-item-first-content>
                <ui-icon ui-icon class="mr-2">festival</ui-icon>
              </ui-item-first-content>
              <ui-item-text-content>What Is Happening</ui-item-text-content>
            </ui-item>
          </NuxtLink>
          <NuxtLink to="/about">
            <ui-item>
              <ui-item-first-content>
                <ui-icon ui-icon class="mr-2">tag_faces</ui-icon>
              </ui-item-first-content>
              <ui-item-text-content>About</ui-item-text-content>
            </ui-item>
          </NuxtLink>
        </ui-list>
      </ui-drawer-content>
    </ui-drawer>

    <div id="content-main" class="layout">
      <div class="w-full app-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const openDrawer = ref(false);
</script>

<style lang="scss" scoped>
.top-app-bar {
  background-image: url('/polybg.png');
  background-size: auto 100%;
  background-blend-mode: multiply;
}
</style>
