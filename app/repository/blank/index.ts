
export function createCatalogRepository(appFetch: typeof $fetch){

    return {
        categories(){
            return appFetch('/api/catalog/categories');
        },
        category(slug: string){
            return appFetch(`/api/catalog/categories/${slug}`);
        },
        service(slug: string){
            return appFetch(`/api/catalog/service/${slug}`);
        },
        cases(){
            return appFetch('/api/catalog/cases');
        },
        faqs(){
            return appFetch('/api/catalog/faqs');
        },
    }

}
