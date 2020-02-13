import { Service } from "../../../../core/decorators/service/service.decorator";
import ModalStore from "../../../../components/Modal/Modal.store";
import { Entity } from "../../../../data/Entities/Entity.service";

import { EntityModal } from "./containers/EntityModal/EntityModal.import"

@Service("BackendEntityModals")
export class BackendEntityModals {
    entity = new ModalStore<{ entity: Entity, projectId: number }>({
        component: EntityModal.View,
        model: EntityModal.Store
    });
}