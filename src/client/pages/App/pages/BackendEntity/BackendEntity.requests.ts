import set from "lodash.set";
import { computed } from "mobx";

import { EntitiesList } from "../../../../data/Entities/Entity.service";
import { EntityQuery } from "../../../../data/Entities/Entity.query";
import { Service } from "../../../../core/decorators/service/service.decorator";
import { ensureNumber } from "../../../../utils/converters";
import { LocationService } from "../../../../core/services/Location.service";
import { BackendEntityGuard } from "./BackendEntity.guard";

@Service("BackendEntityRequest")
export class BackendEntityRequest {
    constructor(
        private location: LocationService,
        private guard: BackendEntityGuard
    ) {}

    @computed get params(): CommonMap {
        return this.location.routePrams(this.guard.route.route);
    }

    entities = new EntitiesList({
        query: new EntityQuery({
            beforeGetPagination: (pagination) => 
                set(pagination, ["filter", "project", "id", "equal"], ensureNumber(this.params.projectId))
        })
    })
}