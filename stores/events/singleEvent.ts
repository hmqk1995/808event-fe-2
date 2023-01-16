import { defineStore } from 'pinia';

export const useSingleEventStore = (eventId : string) => defineStore(`event-${eventId}`, () => {
  const graphql = useStrapiGraphQL();

  let data = ref();

  async function loadEvent() {
    data = await graphql(`
      query getEvent {
        event(id: ${eventId}) {
          data {
            attributes {
              EventName
              Island
              Description
              RepeatedEvent
              Day
              StartDateTime
              EndDateTime
            }
          }
        }
      }
    `);
  };
  const attributes = computed(() => data.data.event.data.attributes);
  const eventName = computed(() => attributes.value.EventName);
  const description = computed(() => attributes.value.Description);
  const isRepeatedEvent = computed(() => attributes.value.RepeatedEvent);
  const day = computed(() => attributes.value.Day);
  const startDateTime = computed(() => attributes.value.StartDateTime);
  const endDateTime = computed(() => attributes.value.EndDateTime);

  return {
    /** actions */
    loadEvent,
    /** getters */
    eventName,
    description,
    isRepeatedEvent,
    day,
    startDateTime,
    endDateTime,
  }
});