import { Module } from "../../core/decorators/module/module.decorator";
import { ModuleBase } from "../../core/decorators/module/Module.base";

import { App } from "./App.imports";

export const SidebarNavModulesList = ModuleBase.list(
    App.FrontendSidebarNavModule,
    App.BackendSidebarNavModule
);

export const PagesModulesList = ModuleBase.list(
    App.ProjectsModule,
    App.BackendEntityModule
);

@Module({
    view: App.View,
    model: App.Store,
    modules: [
        App.HeaderNavModule,
        SidebarNavModulesList,
        PagesModulesList
    ]
})
export class AppModule extends ModuleBase {};
