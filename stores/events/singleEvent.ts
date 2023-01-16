import { defineStore } from 'pinia';

export const useSingleEventStore = (eventId : string) => defineStore(`event-${eventId}`, () => {
  const graphql = useStrapiGraphQL();

  let data = ref({});

  async function loadEvent() {
    data.value = await graphql(`
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
              Address
              Phone
              PointOfContact
              Lat
              Lng
            }
          }
        }
      }
    `);
  };
  const attributes = computed(() => data.value?.data?.event?.data?.attributes ?? {});
  const eventName = computed(() => attributes.value.EventName);
  const description = computed(() => attributes.value.Description);
  const isRepeatedEvent = computed(() => attributes.value.RepeatedEvent);
  const day = computed(() => attributes.value.Day);
  const startDateTime = computed(() => attributes.value.StartDateTime);
  const endDateTime = computed(() => attributes.value.EndDateTime);
  const address = computed(() => attributes.value.Address);
  const phone = computed(() => attributes.value.Phone);
  const pointOfContact = computed(() => attributes.value.PointOfContact);
  const lat = computed(() => attributes.value.Lat);
  const lng = computed(() => attributes.value.Lng);

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
    address,
    phone,
    pointOfContact,
    lat,
    lng,
  }
});