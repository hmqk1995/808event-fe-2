import { defineStore } from 'pinia';

export const useEventListStore = defineStore(`event-list`, () => {
  const graphql = useStrapiGraphQL();

  const loading = ref(false);

  let data = ref({});

  async function loadEvents() {
    loading.value = true;
    try {
      data.value = await graphql(`
        query getEvents {
          events {
            data {
              id
              attributes {
                EventName
                RepeatedEvent
                Day
                StartDateTime
                EndDateTime
                Address
                Phone
                PointOfContact
                CoverPicture {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `);
    } catch (error) {
      console.log(error);
    }
    loading.value = false;
  };

  const events = computed(() => data.value?.data?.events?.data ?? []);

  return {
    /** mutations */
    loading,
    /** actions */
    loadEvents,
    /** getters */
    events,
  }
});