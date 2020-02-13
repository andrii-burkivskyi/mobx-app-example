export const EntityModal = {
    View: () => import(/* webpackChunkName: "entity_modal" */ "./EntityModal.view").then((module) => module.EntityModalView),
    Store: () => import( /* webpackChunkName: "entity_modal" */ "./EntityModal.store").then((module) => module.EntityModalStore)
}