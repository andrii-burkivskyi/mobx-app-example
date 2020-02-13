import { computed, observe, action } from "mobx";

import ModalStore from "../../../../../../components/Modal/Modal.store";
import FormStore from "../../../../../../components/Form/Form.store";
import InputStore from "../../../../../../components/Form/Input/Input.store";
import ButtonStore from "../../../../../../components/Button/Button.store";
import HiddenFieldStore from "../../../../../../components/Form/HiddenField/HiddenField.store";
import { Entity } from "../../../../../../data/Entities/Entity.service";

import { EntityModalI18n } from "./EntityModal.i18n";

export class EntityModalStore {
    constructor(modal: ModalStore<{ entity: Entity, projectId: number }>) {
        this.modal = modal;
        this.initForm();
        observe(this.modal, "isOpen", this.initForm);
    }

    modal: ModalStore<{ entity: Entity, projectId: number }>;

    form = new FormStore({
        fields: {
            name: new InputStore({
                type: InputStore.type.TEXT,
                label: this.i18n.name,
            }),
            project: new HiddenFieldStore({
                value: {}
            })
        },
        onSubmit: async () => {
            this.modal.initData.entity.id
                ? this.modal.initData.entity.update(this.form.data)
                : this.modal.initData.entity.create(this.form.data);
            this.modal.close();
        }
    })

    submitFormButton = new ButtonStore({
        text: this.i18n.submit,
        onClick: this.form.submit
    })

    @action initForm = () => {
        if (this.modal.isOpen) {
            this.form.initValues({
                name: this.modal.initData.entity.name,
                project: { id: this.modal.initData.projectId }
            })
        }
    }

    @computed get i18n() {
        return EntityModalI18n.i18n;
    }
}