import React, { Component } from "react";
import { observer } from "mobx-react";
import { Table as FDTable, Column as FDColumn } from "fixed-data-table-2";

import bem from "../../utils/bem";
import AutoSizer from "../../components/AutoSizer/AutoSizer";
import { RequestListBase } from "../../core/decorators/request/list/RequestList.base";

import TableStore from "./Table.store";
import styles from "./table.scss";
import ColumnStore, { HeaderType } from "./Column/Column.store";

import DefaultHeader from "./Header/DefaultHeader/DefaultHeader";
import ActionHeader from "./Header/ActionHeader/ActionHeader";

import DefaultCell from "./Cell/DefaultCell/DefaultCell";
import CheckboxCell from "./Cell/CheckboxCell/CheckboxCell";
import ActionCell from "./Cell/ActionCell/ActionCell";

import "fixed-data-table-2/dist/fixed-data-table.css";

const Headers = {
    [HeaderType.DEFAULT_HEADER]: DefaultHeader,
    [HeaderType.ACTION_HEADER]: ActionHeader,
}

const Cells = {
    [ColumnStore.cellType.DEFAULT_CELL]: DefaultCell,
    [ColumnStore.cellType.CHECKBOX_CELL]: CheckboxCell,
    [ColumnStore.cellType.ACTION_CELL]: ActionCell
}

@observer
class Table<L extends RequestListBase> extends Component<ViewOf<TableStore<L>>> {
    getClassName = (coreClassName: string, addedClassName: string = "") => bem(coreClassName,
        { theme: this.props.model.theme },
        addedClassName
    );
    render() {
        const { model } = this.props;
        return (
            <div className={this.getClassName(styles.container, model.theme)}>
                <AutoSizer model={model.autoSizer} />
                <FDTable
                    scrollToRow={undefined}
                    isColumnResizing={false}
                    touchScrollEnabled
                    headerHeight={model.headerHeight}
                    rowHeight={model.rowHeight}
                    rowsCount={model.rowCount}
                    width={model.tableWidth}
                    height={model.tableHeight}
                    onRowClick={model.onRowClick}
                    onColumnResizeEndCallback={model.onColumnResizeEndCallback}
                >
                    {
                        model.columns.map((col) => (
                            <FDColumn
                                key={col.columnKey}
                                columnKey={col.columnKey}
                                fixed={col.fixed}
                                width={col.width}
                                flexGrow={col.flexGrow}
                                isResizable={col.isResizable}
                                header={
                                    React.createElement(
                                        Headers[col.headerType] as any,
                                        { model: col.headerModel, theme: model.theme, allData: model.list.data }
                                    )
                                }
                                cell={
                                    React.createElement(
                                        Cells[col.cellType] as any,
                                        { model: col.cellModel, theme: model.theme, allData: model.list.data }
                                    )
                                }
                            />
                        ))
                    }

                </FDTable>
            </div>
        );
    }
}

export default Table;