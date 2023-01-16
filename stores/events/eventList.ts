import { defineStore } from 'pinia';

export const useEventListStore = defineStore(`event-list`, () => {
  const graphql = useStrapiGraphQL();

  let data = ref({});

  async function loadEvents() {
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
  };

  const events = computed(() => data.value?.data?.events?.data ?? []);

  return {
    /** actions */
    loadEvents,
    /** getters */
    events,
  }
});