export const strapiEndpoint = process.env.NUXT_STRAPI_ENDPOINT || 'https://api.808event.com';
export const siteName = '808 Event - Your One-Stop Destination for Fun and Excitement on Oahu Island, Hawaii!';

// local storage keys
const localStorageKey = (name : string) => `${localStoragePrefix}:${name}`;

const localStoragePrefix = '808event';
export const termsAccept = localStorageKey('accept_terms');