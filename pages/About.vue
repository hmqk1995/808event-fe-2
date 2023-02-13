<template>
  <NuxtLayout>
    <div class="about-container">
      <div class="p-4">
        <ui-card outlined>
          <div class="p-4 content" v-html="content"></div>
          <hr />
          <div class="p-4">
            <p>
              For business inquiries and other questions, please contact us
              through our email:
            </p>
            <p class="flex items-center">
              <ui-icon size="18" class="mr-2">email</ui-icon>
              <a href="mailto:support@808event.com">support@808event.com</a>
            </p>
          </div>
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

<style lang="scss">
.about-container::before {
  @include flower-background;
}

.content {
  h1 {
    font-size: 1.563rem;
    margin: 1.2rem 0;
    font-weight: 800;
  }

  h2 {
    font-size: 1.25rem;
    margin: 1rem 0;
  }

  p {
    margin: 0.5rem 0;
  }
}
</style>
