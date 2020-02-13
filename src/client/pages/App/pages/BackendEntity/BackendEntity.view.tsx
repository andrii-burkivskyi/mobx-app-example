
import React, { Component } from "react";
import { observer } from "mobx-react";

import { BackendEntityStore } from "./BackendEntity.store";
import styles from "./backend-entity.scss";
import Table from "../../../../components/Table/Table";
import Modal from "../../../../components/Modal/Modal";

@observer
export class BackendEntityView extends Component<ViewOf<BackendEntityStore>> {
    render() {
        const { model } = this.props;
        return (
            <div className={styles.container}>
                <Table model={model.table.backendEntity} />
                <Modal model={model.modals.entity} />
            </div>
        );
    }
}
