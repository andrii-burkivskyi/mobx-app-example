
import React, { Component } from "react";
import { observer } from "mobx-react";

import { CellType, ICommonColumnProps } from "../../Column/Column.store";

import { ObservableString } from "../../../../utils/types";
import { DEFAULT_OBJECT } from "../../../../utils/constants";
import { isNill } from "../../../../utils/typeGuards";
import Icon from "../../../../components/Icon/Icon";
import bem from "../../../../utils/bem";

import styles from "./table-action-cell.scss";

export interface ActionCellInitProps<R = any> {
    type: CellType.ACTION_CELL;
    getCellData: (rowData: R) => {
        key: string, 
        icon: string,
        text?: ObservableString;
        action: (rowData?: R) => void;
    }[];
}

@observer
class ActionCell extends Component<ViewOf<ActionCellInitProps> & ICommonColumnProps> {
    getClassName = (coreClassName: string, addedClassName: string = "") => bem(coreClassName,
        { theme: this.props.theme },
        addedClassName
    );

    render() {
        const { model, allData, rowIndex } = this.props;
        const rowData = !isNill(rowIndex) ? allData[rowIndex] : DEFAULT_OBJECT; 
        const cellData = model.getCellData(rowData);
        return (
            <div className={this.getClassName(styles.container)}>
                {
                    cellData.map((action) => (
                        <button
                            className={this.getClassName(styles.button)}
                            key={action.key}
                            onClick={() => action.action(rowData)}
                        >
                            <Icon className={this.getClassName(styles.icon)} svg={action.icon} />
                        </button>
                    ))
                }
            </div>
        );
    }
}

export default ActionCell;