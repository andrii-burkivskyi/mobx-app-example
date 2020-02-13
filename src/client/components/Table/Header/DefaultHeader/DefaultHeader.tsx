import React, { Component } from "react";
import { observer } from "mobx-react";

import bem from "../../../../utils/bem";
import { t } from "../../../../utils/i18n/translations";

import { ICommonColumnProps } from "../../Column/Column.store";
import DefaultHeaderStore from "./DefaultHeader.store";

import styles from "./table-default-header.scss";

@observer
class DefaultHeader extends Component<ViewOf<DefaultHeaderStore> & ICommonColumnProps> {
    getClassName = (coreClassName: string, addedClassName: string = "") => bem(coreClassName,
        { theme: this.props.theme },
        addedClassName
    );

    render() {
        const { model } = this.props;
        return (
            <div className={this.getClassName(styles.container)}>
                {t(model.title)}
            </div>
        );
    }
}

export default DefaultHeader;