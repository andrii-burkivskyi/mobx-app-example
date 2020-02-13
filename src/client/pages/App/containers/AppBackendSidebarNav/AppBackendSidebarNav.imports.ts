export const AppBackendSidebarNav = {
    Store: () => import(/* webpackChunkName: "app_sidebar_nav" */ "./AppBackendSidebarNav.store").then((module) => module.AppBackendSidebarNavStore),
    View: () => import(/* webpackChunkName: "app_sidebar_nav" */ "./AppBackendSidebarNav.view").then((module) => module.AppBackendSidebarNavView),
}
