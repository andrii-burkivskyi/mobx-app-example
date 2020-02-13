
import React, { Component } from "react";
import { observer } from "mobx-react";

import { CellType, ICommonColumnProps } from "../../Column/Column.store";

import { ObservableString } from "../../../../utils/types";
import { DEFAULT_OBJECT } from "../../../../utils/constants";
import { isNill } from "../../../../utils/typeGuards";
import bem from "../../../../utils/bem";
import { t } from "../../../../utils/i18n/translations";

import styles from "./table-default-cell.scss";

export interface DefaultCellInitProps<R = any> {
    type: CellType.DEFAULT_CELL;
    getCellData: (rowData: R) => {
        text?: ObservableString;
    };
}

@observer
class DefaultCell extends Component<ViewOf<DefaultCellInitProps> & ICommonColumnProps> {
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
                {t(cellData.text)}
            </div>
        );
    }
}

export default DefaultCell;