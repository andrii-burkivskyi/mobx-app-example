import { computed, action, observable, set } from "mobx";
import ColumnStore from "./Column/Column.store";
import { AutoSizerStore } from "../AutoSizer/AutoSizer.store";
import { styleConfig, TableTheme } from "./table.style.config";
import { RequestListBase } from "../../core/decorators/request/list/RequestList.base";


interface InitProps<L extends RequestListBase> {
    theme?: TableStore<L>["theme"];
    list: TableStore<L>["list"];
    columns: TableStore<L>["columns"];
}

export default class TableStore<L extends RequestListBase> {
    static theme = TableTheme;

    constructor(props: InitProps<L>) {
        set(this, props);
    }

    @observable list!: L;

    @observable autoSizer = new AutoSizerStore();

    @observable theme: TableTheme = TableStore.theme.DEFAULT;
    @observable columns!: ColumnStore[];

    @computed get headerHeight(): number {
        return styleConfig[this.theme].headerHeight;
    }

    @computed get rowHeight(): number {
        return styleConfig[this.theme].rowHeight;
    }

    @computed get rowCount(): number {
        return this.list.data.length;
    }

    @computed get tableWidth(): number {
        return this.autoSizer.width;
    }

    @computed get tableHeight(): number {
        return this.autoSizer.height;
    }

    @action onRowClick = () => {
        console.log("click")
    }
    
    @action onColumnResizeEndCallback = (newColumnWidth: number, columnKey: string) => {
        console.log("resize", newColumnWidth, columnKey);
    }
}