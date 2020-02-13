import { Service } from "../../../../core/decorators/service/service.decorator";

import { BackendEntityTable } from "./BackendEntity.table";
import { BackendEntityModals } from "./BackendEntity.modals";


@Service("BackendEntityStore")
export class BackendEntityStore {
    constructor(
        public table: BackendEntityTable,
        public modals: BackendEntityModals
    ){};
}