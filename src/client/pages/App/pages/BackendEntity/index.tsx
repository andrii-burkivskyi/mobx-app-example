import { Module } from "../../../../core/decorators/module/module.decorator";
import { ModuleBase } from "../../../../core/decorators/module/Module.base";

import { BackendEntity } from "./BackendEntity.imports";
import { BackendEntityGuard } from "./BackendEntity.guard";

@Module({
    view: BackendEntity.View,
    model: BackendEntity.Store,
    guard: BackendEntityGuard,
    services: [
        BackendEntity.Request,
        BackendEntity.Table,
        BackendEntity.Modals,

    ]
})
export class BackendEntityModule extends ModuleBase {};
