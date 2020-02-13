import { computed } from "mobx";

import { Service } from "../../../../core/decorators/service/service.decorator";
import { LocationService } from "../../../../core/services/Location.service";
import { RequestListBase } from "../../../../core/decorators/request/list/RequestList.base";

import { Entity } from "../../../../data/Entities/Entity.service";

import TableStore from "../../../../components/Table/Table.store";
import ColumnStore from "../../../../components/Table/Column/Column.store";

import deleteIcon from "../../../../icons/delete.svg";
import editIcon from "../../../../icons/edit.svg";
import addDataIcon from "../../../../icons/add_data.svg";

import { BackendEntityI18n } from "./BackendEntity.i18n";
import { BackendEntityRequest } from "./BackendEntity.requests";
import { BackendEntityModals } from "./BackendEntity.modals";
import { BackendEntityGuard } from "./BackendEntity.guard";

@Service("BackendEntityTable")
export class BackendEntityTable {
    constructor(
        public request: BackendEntityRequest,
        private modals: BackendEntityModals,
        private location: LocationService,
        private guard: BackendEntityGuard
    ){}

    @computed get projectId(): number {
        const params = this.location.routePrams(this.guard.route.route);
        return Number(params.projectId);
    }

    backendEntity = new TableStore({
        list: this.request.entities as RequestListBase,
        columns: [
            new ColumnStore({ columnKey: nameof<Entity>(e => e.name),
                flexGrow: 1,
                headerInitProps: {
                    type: ColumnStore.headerType.DEFAULT_HEADER,
                    title: this.i18n.entityName
                },
                cellInitProps: {
                    type: ColumnStore.cellType.DEFAULT_CELL,
                    getCellData: (entity: Entity) => ({
                        text: entity.name
                    })
                }
            }),

            new ColumnStore({ columnKey: "actions",
                width: 28 + 28 + 10,
                headerInitProps: {
                    type: ColumnStore.headerType.ACTION_HEADER,
                    icon: addDataIcon,
                    action: () => this.modals.entity.open({
                        entity: this.request.entities.addEmpty(),
                        projectId: this.projectId
                    })

                },
                cellInitProps: {
                    type: ColumnStore.cellType.ACTION_CELL,
                    getCellData: (entity: Entity) => [
                        {
                            key: "edit",
                            icon: editIcon,
                            action: (entity) => this.modals.entity.open({ entity, projectId: this.projectId })
                        },
                        {
                            key: "delete",
                            icon: deleteIcon,
                            action: entity.delete
                        }
                    ]
                }
            }),
        ]
    });

    @computed get i18n() {
        return BackendEntityI18n.i18n;
    }

}