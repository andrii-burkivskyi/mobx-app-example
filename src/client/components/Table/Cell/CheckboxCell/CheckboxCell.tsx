import * as React from "react";
import { observer } from "mobx-react";

import { CellType, ICommonColumnProps } from "../../Column/Column.store";

import { DEFAULT_OBJECT } from "../../../../utils/constants";
import { isNill } from "../../../../utils/typeGuards";
import bem from "../../../../utils/bem";

import styles from "./table-checkbox-cell.scss";

export interface CheckboxCellInitProps<R = any> {
    type: CellType.CHECKBOX_CELL;
    getCellData: (rowData: R) => null;
}

@observer
class CheckboxCell extends React.Component<ViewOf<CheckboxCellInitProps> & ICommonColumnProps> {
    getClassName = (coreClassName: string, addedClassName: string = "") => bem(coreClassName,
        { theme: this.props.theme },
        addedClassName
    );

    render() {
        const { model, allData, rowIndex } = this.props;
        const rowData = !isNill(rowIndex) ? allData[rowIndex] : DEFAULT_OBJECT; 
        const cellData = model.getCellData(rowData);
        return (
            <div className={styles.container}>
            </div>
        );
    }
}

export default CheckboxCell;