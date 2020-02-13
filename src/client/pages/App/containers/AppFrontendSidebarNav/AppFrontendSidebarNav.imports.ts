export const AppFrontendSidebarNav = {
    Store: () => import(/* webpackChunkName: "app_sidebar_nav" */ "./AppFrontendSidebarNav.store").then((module) => module.AppFrontendSidebarNavStore),
    View: () => import(/* webpackChunkName: "app_sidebar_nav" */ "./AppFrontendSidebarNav.view").then((module) => module.AppFrontendSidebarNavView),
}
