import { createCatalogRepository } from "~/repository/blank";

export default defineNuxtPlugin({
  name: 'fetch',
  parallel: true,
  async setup(nuxtApp){
    const config = useRuntimeConfig();
    const languageCookie = useCookie('i18n_redirected')
    const appFetch = $fetch.create({
      baseURL: config.public.apiUrl as string,
      retry: false,
      onRequest({ options }) {
        options.headers.append('Accept', 'application/json');

        const manager_auth_token = useCookie('manager_auth_token')
        options.headers.append('Accept-Language', languageCookie.value)

      },
      async onResponseError({ response }) {

        if(response.status == 401){
          nuxtApp.runWithContext(() => navigateTo('/'));
          // mb with real page reload
        }
      }
    });

    const api = {
      catalog: createCatalogRepository(appFetch),
    };
    
    return {
      provide: {
        appFetch,
        api
      }
    }
  }
});