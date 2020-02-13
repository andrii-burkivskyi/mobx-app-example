import { observable, computed, set } from "mobx";
import DefaultHeaderStore, { DefaultHeaderInitProps, isDefaultHeaderInitProps } from "../Header/DefaultHeader/DefaultHeader.store";
import { DefaultCellInitProps } from "../Cell/DefaultCell/DefaultCell";
import { CheckboxCellInitProps } from "../Cell/CheckboxCell/CheckboxCell";
import { TableTheme } from "../table.style.config";
import { ColumnCellProps } from "fixed-data-table-2";
import { ActionCellInitProps } from "../Cell/ActionCell/ActionCell";
import ActionHeaderStore, { ActionHeaderInitProps, isActionHeaderInitProps } from "../Header/ActionHeader/ActionHeader.store";

export enum HeaderType {
    DEFAULT_HEADER = "DEFAULT_HEADER",
    ACTION_HEADER = "ACTION_HEADER",
}

export enum CellType {
    DEFAULT_CELL = "DEFAULT_CELL",
    ACTION_CELL = "ACTION_CELL",
    CHECKBOX_CELL = "CHECKBOX_CELL",
}

type OneOfHeadersInitProps = DefaultHeaderInitProps | ActionHeaderInitProps;
type OneOfHeadersStore = DefaultHeaderStore | ActionHeaderStore | null;

type OneOfCellInitProps = DefaultCellInitProps | CheckboxCellInitProps | ActionCellInitProps;

export interface ICommonColumnProps<R = any> extends Partial<ColumnCellProps>{
    theme: TableTheme;
    allData: R[]
}

interface InitProps {
    columnKey: ColumnStore["columnKey"];
    fixed?: ColumnStore["fixed"];
    width?: ColumnStore["width"];
    flexGrow?: ColumnStore["flexGrow"];
    headerInitProps: OneOfHeadersInitProps;
    cellInitProps: OneOfCellInitProps;
}

export default class ColumnStore {
    static headerType = HeaderType;
    static cellType = CellType;

    constructor(props: InitProps) {
        const {headerInitProps, cellInitProps, ...otherProps} = props;
        set(this, otherProps);

        this.headerType = headerInitProps.type;
        this.headerModel = isDefaultHeaderInitProps(headerInitProps) && new DefaultHeaderStore(headerInitProps) ||
            isActionHeaderInitProps(headerInitProps) && new ActionHeaderStore(headerInitProps) ||
            null;
        this.cellType =  cellInitProps.type;
        this.cellModel = cellInitProps;
    }

    @observable columnKey!: string;
    @observable fixed = false;
    @observable width: number = 320;
    @observable flexGrow?: number;
    @observable headerType: HeaderType = ColumnStore.headerType.DEFAULT_HEADER;
    @observable cellType: CellType = ColumnStore.cellType.DEFAULT_CELL;
    @observable headerModel: OneOfHeadersStore;
    @observable cellModel: OneOfCellInitProps;

    @computed get isResizable(): boolean {
        return false;
    }

}