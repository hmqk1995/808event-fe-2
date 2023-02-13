import { defineStore } from 'pinia';
import dayjs from 'dayjs';

export const useEventListStore = defineStore(`event-list`, () => {
  const graphql = useStrapiGraphQL();

  const loading = ref(false);

  let data = ref({});

  async function loadEvents([dateStart, dateEnd] = [
    dayjs(),
    dayjs().add(1, 'month'),
  ]) {
    loading.value = true;
    try {
      data.value = await graphql(`
      query getEvents {
        events (
          filters: {
            StartDateTime: {
              gt: "${dayjs(dateStart).format('YYYY-MM-DDTHH:mm:ssZ')}",
              lt: "${dayjs(dateEnd).format('YYYY-MM-DDTHH:mm:ssZ')}",
            }
          },
          pagination: {
            limit: 100,
          },
          sort: "StartDateTime:asc",
        ) {
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