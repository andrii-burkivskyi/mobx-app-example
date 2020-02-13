import { computed } from "mobx";

import { LocationService } from "../../../../core/services/Location.service";
import { Routes } from "../../../../core/routes";
import { Service } from "../../../../core/decorators/service/service.decorator";

import { AppHeaderNavI18n } from "./AppHeaderNav.i18n";

@Service("AppHeaderNavStore")
export class AppHeaderNavStore {
    constructor(
        public location: LocationService
    ) {}

    @computed get params(): CommonMap {
        return this.location.routePrams(Routes.PROJECT);
    }

    @computed get i18n() {
        return AppHeaderNavI18n.i18n;
    }
}