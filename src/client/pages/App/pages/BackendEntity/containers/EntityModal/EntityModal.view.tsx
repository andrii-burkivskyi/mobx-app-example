import React, { Component } from "react";
import { observer } from "mobx-react";
import Input from "../../../../../../components/Form/Input/Input";


import { t } from "../../../../../../utils/i18n/translations";
import Button from "../../../../../../components/Button/Button";

import { EntityModalStore } from "./EntityModal.store";
import styles from "./entity-modal.scss";

@observer
export class EntityModalView extends Component<ViewOf<EntityModalStore>> {
    render() {
        const { model } = this.props;
        return (
            <div ref={model.modal.containerRef} className={styles.container}>
                <h3 className={styles.title}>
                    {
                        model.modal.initData.entity.id
                        ? t(model.i18n.updateEntity)
                        : t(model.i18n.createEntity)
                    }
                </h3>
                <Input model={model.form.fields.name} />

                <Button model={model.submitFormButton} />
            </div>
        );
    }
}
