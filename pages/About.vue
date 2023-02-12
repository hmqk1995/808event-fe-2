<template>
  <NuxtLayout>
    <div class="about-container">
      <div class="p-4">
        <ui-card outlined>
          <div class="p-4" v-html="content"></div>
        </ui-card>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const graphql = useStrapiGraphQL();
const data = ref({});

data.value = await graphql(`
  query getMeta {
    about {
      data {
        attributes {
          Content
        }
      }
    }
  }
`);

const content = computed(
  () => data.value?.data?.about?.data?.attributes?.Content ?? ''
);
</script>

<style lang="scss" scoped>
.about-container::before {
  @include flower-background;
}
</style>
