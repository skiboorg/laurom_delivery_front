
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
        case(slug){
            return appFetch(`/api/catalog/case/${slug}`);
        },
        faqs(){
            return appFetch('/api/catalog/faqs');
        },
        news(){
            return appFetch('/api/news/all');
        },
        news_item(slug){
            return appFetch(`/api/news/all/${slug}`);
        },
        form(body){
            return appFetch(`/api/catalog/form`,{
                method:'POST',
                body
            });
        },
    }

}
