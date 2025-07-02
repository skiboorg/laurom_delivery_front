import type { createCatalogRepository } from '~/repository/blank'


export type CatalogRepository = ReturnType<typeof createCatalogRepository>


export interface IApi {
    catalog: CatalogRepository
}