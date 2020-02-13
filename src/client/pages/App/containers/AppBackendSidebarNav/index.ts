import { Module } from "../../../../core/decorators/module/module.decorator";
import { ModuleBase } from "../../../../core/decorators/module/Module.base";

import { AppBackendSidebarNav } from "./AppBackendSidebarNav.imports";
import { AppBackendSidebarNavGuard } from "./AppBackendSidebarNav.guard";

@Module({
    guard: AppBackendSidebarNavGuard,
    view: AppBackendSidebarNav.View,
    model: AppBackendSidebarNav.Store,
})
export class AppBackendSidebarNavModule extends ModuleBase {};
