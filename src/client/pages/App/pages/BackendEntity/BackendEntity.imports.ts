
export const BackendEntity = {
    Store: () => import(/* webpackChunkName: "backend_entity_page" */ "./BackendEntity.store").then((module) => module.BackendEntityStore),
    View: () => import(/* webpackChunkName: "backend_entity_page" */ "./BackendEntity.view").then((module) => module.BackendEntityView),
    Request: () => import(/* webpackChunkName: "backend_entity_page" */ "./BackendEntity.requests").then((module) => module.BackendEntityRequest),
    Table: () => import(/* webpackChunkName: "backend_entity_page" */ "./BackendEntity.table").then((module) => module.BackendEntityTable),
    Modals: () => import(/* webpackChunkName: "backend_entity_page" */ "./BackendEntity.modals").then((module) => module.BackendEntityModals),
}