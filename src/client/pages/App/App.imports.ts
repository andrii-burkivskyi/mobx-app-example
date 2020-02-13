export const App = {
    Store: () => import(/* webpackChunkName: "app_page" */ "./App.store").then((module) => module.AppStore),
    View: () => import(/* webpackChunkName: "app_page" */ "./App.view").then((module) => module.AppView),
    HeaderNavModule: () => import(/* webpackChunkName: "app_header_nav_module" */ "../App/containers/AppHeaderNav").then((module) => module.AppHeaderNavModule),
    FrontendSidebarNavModule: () => import(/* webpackChunkName: "app_sidebar_nav_module" */ "../App/containers/AppFrontendSidebarNav").then((module) => module.AppFrontendSidebarNavModule),
    BackendSidebarNavModule: () => import(/* webpackChunkName: "app_sidebar_nav_module" */ "../App/containers/AppBackendSidebarNav").then((module) => module.AppBackendSidebarNavModule),
    ProjectsModule: () => import(/* webpackChunkName: "projects_module" */ "../App/pages/Projects").then((module) => module.ProjectsModule),
    BackendEntityModule: () => import(/* webpackChunkName: "backend_entity_module" */ "../App/pages/BackendEntity").then((module) => module.BackendEntityModule),
}
