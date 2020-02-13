export const AppHeaderNav = {
    Store: () => import(/* webpackChunkName: "app_header_nav" */ "./AppHeaderNav.store").then((module) => module.AppHeaderNavStore),
    View: () => import(/* webpackChunkName: "app_header_nav" */ "./AppHeaderNav.view").then((module) => module.AppHeaderNavView),
}
