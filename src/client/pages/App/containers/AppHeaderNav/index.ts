import { Module } from "../../../../core/decorators/module/module.decorator";
import { ModuleBase } from "../../../../core/decorators/module/Module.base";

import { AppHeaderNav } from "./AppHeaderNav.imports";
import { AppHeaderNavGuard } from "./AppHeaderNav.guard";

@Module({
    guard: AppHeaderNavGuard,
    view: AppHeaderNav.View,
    model: AppHeaderNav.Store,
})
export class AppHeaderNavModule extends ModuleBase {};
