import React, { Component } from "react";
import { observer } from "mobx-react";

import Icon from "../../../../components/Icon/Icon";
import bem from "../../../../utils/bem";

import { ICommonColumnProps } from "../../Column/Column.store";
import ActionHeaderStore from "./ActionHeader.store";

import styles from "./table-action-header.scss";

@observer
class ActionHeader extends Component<ViewOf<ActionHeaderStore> & ICommonColumnProps> {
    getClassName = (coreClassName: string, addedClassName: string = "") => bem(coreClassName,
        { theme: this.props.theme },
        addedClassName
    );

    render() {
        const { model } = this.props;
        return (
            <div className={this.getClassName(styles.container)}>
                <button className={this.getClassName(styles.button)} onClick={model.action} >
                    {
                        model.icon &&
                        <Icon className={this.getClassName(styles.icon)} svg={model.icon} />
                    }
                </button>
            </div>
        );
    }
}

export default ActionHeader;