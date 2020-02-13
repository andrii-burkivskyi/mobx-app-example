import { Module } from "../../../../core/decorators/module/module.decorator";
import { ModuleBase } from "../../../../core/decorators/module/Module.base";

import { AppFrontendSidebarNav } from "./AppFrontendSidebarNav.imports";
import { AppFrontendSidebarNavGuard } from "./AppFrontendSidebarNav.guard";

@Module({
    guard: AppFrontendSidebarNavGuard,
    view: AppFrontendSidebarNav.View,
    model: AppFrontendSidebarNav.Store,
})
export class AppFrontendSidebarNavModule extends ModuleBase {};
